const reduced = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function tweenNumber(el: HTMLElement, to: number, duration = 550): void {
  if (reduced()) {
    el.textContent = String(to);
    return;
  }
  const from = Number(el.textContent?.replace(/\D/g, '')) || 0;
  if (from === to) {
    el.textContent = String(to);
    return;
  }
  const start = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.round(from + (to - from) * eased));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function staggerIn(
  items: HTMLElement[],
  options: { max?: number; step?: number; y?: number } = {},
): void {
  if (reduced()) return;
  const { max = 18, step = 32, y = 14 } = options;
  items.slice(0, max).forEach((el, i) => {
    el.animate(
      [
        { opacity: 0, transform: `translateY(${y}px)` },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      {
        duration: 460,
        delay: i * step,
        easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
        fill: 'backwards',
      },
    );
  });
}

export function visibleItems(all: HTMLElement[]): HTMLElement[] {
  return all.filter((el) => !el.classList.contains('hidden') && el.offsetParent !== null);
}
