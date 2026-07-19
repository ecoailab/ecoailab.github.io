const reduced = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const isMouse = (e: PointerEvent): boolean => e.pointerType === '' || e.pointerType === 'mouse';

const cleanups: Array<() => void> = [];

function onCleanup(fn: () => void): void {
  cleanups.push(fn);
}

export function initScrollProgress(): void {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;
  let ticking = false;
  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    bar.style.transform = `scaleX(${p})`;
    ticking = false;
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onCleanup(() => {
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  });
}

export function initCursorGlow(): void {
  if (reduced()) return;
  const glow = document.getElementById('cursor-glow');
  if (!glow) return;
  let tx = window.innerWidth / 2;
  let ty = window.innerHeight / 2;
  let x = tx;
  let y = ty;
  let raf = 0;
  let active = false;
  const move = (e: PointerEvent) => {
    if (!isMouse(e)) return;
    tx = e.clientX;
    ty = e.clientY;
    glow.style.opacity = '1';
    if (!active) {
      active = true;
      raf = requestAnimationFrame(loop);
    }
  };
  const loop = () => {
    x += (tx - x) * 0.12;
    y += (ty - y) * 0.12;
    glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    raf = requestAnimationFrame(loop);
  };
  window.addEventListener('pointermove', move, { passive: true });
  onCleanup(() => {
    cancelAnimationFrame(raf);
    window.removeEventListener('pointermove', move);
  });
}

export function initMagnetic(selector: string): void {
  if (reduced()) return;
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    const strength = 0.32;
    const move = (e: PointerEvent) => {
      if (!isMouse(e)) return;
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
    };
    const reset = () => {
      el.style.transform = '';
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', reset);
    onCleanup(() => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', reset);
    });
  });
}

export function initSpotlight(selector: string): void {
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    const move = (e: PointerEvent) => {
      if (!isMouse(e)) return;
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    };
    el.addEventListener('pointermove', move);
    onCleanup(() => el.removeEventListener('pointermove', move));
  });
}

export function initTilt(selector: string): void {
  if (reduced()) return;
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    const maxDeg = 5;
    const move = (e: PointerEvent) => {
      if (!isMouse(e)) return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${px * maxDeg}deg) rotateX(${-py * maxDeg}deg) translateY(-3px)`;
    };
    const reset = () => {
      el.style.transform = '';
    };
    el.addEventListener('pointermove', move);
    el.addEventListener('pointerleave', reset);
    onCleanup(() => {
      el.removeEventListener('pointermove', move);
      el.removeEventListener('pointerleave', reset);
    });
  });
}

export function initInteractions(): void {
  initScrollProgress();
  initCursorGlow();
  initMagnetic('.btn-primary, .btn-ghost');
  initSpotlight('[data-spotlight]');
  initTilt('[data-tilt]');
}

export function teardownInteractions(): void {
  while (cleanups.length) {
    const fn = cleanups.pop();
    fn?.();
  }
}
