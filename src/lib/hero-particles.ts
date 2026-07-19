import * as THREE from 'three';
import { gsap, prefersReducedMotion } from './motion';

const VERT = /* glsl */ `
uniform float uTime;
uniform float uAssemble;
uniform float uScatter;
uniform vec2 uMouse;
uniform float uPixelRatio;
uniform float uPointScale;

attribute vec3 aStart;
attribute vec3 aTarget;
attribute vec3 aScatter;
attribute vec3 aSeed;
attribute float aSize;
attribute float aTint;

varying float vTint;
varying float vFade;

void main() {
  vTint = aTint;

  float t = uTime * 0.55;
  vec3 drift = vec3(
    sin(t * (0.6 + aSeed.x) + aSeed.y * 6.2831),
    cos(t * (0.5 + aSeed.y) + aSeed.z * 6.2831),
    sin(t * (0.4 + aSeed.z) + aSeed.x * 6.2831)
  ) * 0.022;

  vec3 pos = aTarget + drift * (0.4 + 0.6 * aSeed.y);

  vec2 toMouse = pos.xy - uMouse;
  float md = length(toMouse);
  float repulse = smoothstep(1.1, 0.0, md);
  pos.xy += normalize(toMouse + vec2(1.0e-4)) * repulse * repulse * 0.7;

  vec3 scattered = aTarget + aScatter * (0.55 + aSeed.y * 0.9);
  pos = mix(pos, scattered, uScatter);
  vFade = 1.0 - uScatter * (0.25 + 0.75 * aSeed.z);

  pos = mix(aStart, pos, uAssemble);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPointScale * uPixelRatio * (9.5 / -mv.z);
}
`;

const FRAG = /* glsl */ `
uniform vec3 uColorA;
uniform vec3 uColorB;

varying float vTint;
varying float vFade;

void main() {
  float d = length(gl_PointCoord - 0.5);
  float alpha = smoothstep(0.5, 0.04, d);
  vec3 color = mix(uColorA, uColorB, vTint);
  gl_FragColor = vec4(color, alpha * vFade);
}
`;

const CLOUD_VERT = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const CLOUD_FRAG = /* glsl */ `
uniform float uTime;
varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.55;
  for (int i = 0; i < 5; i++) {
    v += a * vnoise(p);
    p = p * 2.03 + vec2(17.3, 9.1);
    a *= 0.55;
  }
  return v;
}

void main() {
  vec2 uv = vUv * vec2(3.2, 1.7);
  float t = uTime * 0.014;
  float c1 = fbm(uv + vec2(t * 1.5, t * 0.2));
  float c2 = fbm(uv * 1.9 + vec2(t * 2.4, 0.4) + 3.7);
  float cloud = smoothstep(0.4, 0.85, c1 * 0.62 + c2 * 0.48);
  float lift = smoothstep(0.05, 0.6, vUv.y);
  vec3 deep = vec3(0.012, 0.045, 0.105);
  vec3 lit = vec3(0.24, 0.46, 0.78);
  vec3 col = mix(deep, lit, cloud);
  float alpha = cloud * 0.18 * (0.45 + 0.55 * lift);
  gl_FragColor = vec4(col, alpha);
}
`;

interface SampledMark {
  positions: Float32Array;
  aspect: number;
}

async function sampleLogoMark(url: string, maxPoints: number): Promise<SampledMark> {
  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const el = new Image();
    el.crossOrigin = 'anonymous';
    el.onload = () => resolve(el);
    el.onerror = () => reject(new Error('logo load failed'));
    el.src = url;
  });

  const w = img.naturalWidth;
  const h = img.naturalHeight;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('2d context unavailable');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, w, h).data;
  const alphaAt = (x: number, y: number): number => data[(y * w + x) * 4 + 3] ?? 0;

  let minX = w;
  let maxX = 0;
  let minY = h;
  let maxY = 0;
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      if (alphaAt(x, y) > 110) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX <= minX || maxY <= minY) throw new Error('logo has no opaque pixels');

  const colHasContent = (x: number): boolean => {
    for (let y = minY; y <= maxY; y += 1) {
      if (alphaAt(x, y) > 110) return true;
    }
    return false;
  };

  let gapStart = -1;
  let emptyRun = 0;
  let seenContent = false;
  for (let x = minX; x <= maxX; x += 1) {
    if (colHasContent(x)) {
      seenContent = true;
      emptyRun = 0;
    } else if (seenContent) {
      emptyRun += 1;
      if (emptyRun >= 5) {
        gapStart = x - emptyRun + 1;
        break;
      }
    }
  }

  const ix0 = minX;
  const ix1 = gapStart > 0 ? gapStart : maxX;
  let iy0 = h;
  let iy1 = 0;
  for (let y = 0; y < h; y += 1) {
    for (let x = ix0; x <= ix1; x += 1) {
      if (alphaAt(x, y) > 110) {
        if (y < iy0) iy0 = y;
        if (y > iy1) iy1 = y;
      }
    }
  }

  const iw = Math.max(1, ix1 - ix0 + 1);
  const ih = Math.max(1, iy1 - iy0 + 1);
  const cx = ix0 + iw / 2;
  const cy = iy0 + ih / 2;

  const pts: number[] = [];
  for (let y = iy0; y <= iy1; y += 1) {
    for (let x = ix0; x <= ix1; x += 1) {
      if (alphaAt(x, y) > 110) {
        for (let k = 0; k < 3; k += 1) {
          const jx = x + (Math.random() - 0.5);
          const jy = y + (Math.random() - 0.5);
          pts.push(((jx - cx) / ih) * 2, (-(jy - cy) / ih) * 2, 0);
        }
      }
    }
  }

  const total = pts.length / 3;
  const stride = Math.max(1, Math.floor(total / maxPoints));
  const picked: number[] = [];
  for (let i = 0; i < total && picked.length / 3 < maxPoints; i += stride) {
    picked.push(pts[i * 3] ?? 0, pts[i * 3 + 1] ?? 0, pts[i * 3 + 2] ?? 0);
  }
  return { positions: new Float32Array(picked), aspect: iw / ih };
}

export async function initHeroParticles(canvas: HTMLCanvasElement, logoUrl: string): Promise<void> {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 60);
  camera.position.z = 7.2;

  const { positions, aspect } = await sampleLogoMark(logoUrl, 18000);
  const count = positions.length / 3;

  const geometry = new THREE.BufferGeometry();
  const targets = new Float32Array(count * 3);
  const starts = new Float32Array(count * 3);
  const scatters = new Float32Array(count * 3);
  const seeds = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const tints = new Float32Array(count);

  for (let i = 0; i < count; i += 1) {
    targets[i * 3] = positions[i * 3] ?? 0;
    targets[i * 3 + 1] = positions[i * 3 + 1] ?? 0;
    targets[i * 3 + 2] = 0;

    const r = 6 + Math.random() * 6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    starts[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    starts[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    starts[i * 3 + 2] = r * Math.cos(phi) - 3;

    const sr = 4 + Math.random() * 8;
    const sa = Math.random() * Math.PI * 2;
    scatters[i * 3] = Math.cos(sa) * sr;
    scatters[i * 3 + 1] = Math.sin(sa) * sr + 2.5;
    scatters[i * 3 + 2] = (Math.random() - 0.5) * 6;

    seeds[i * 3] = Math.random();
    seeds[i * 3 + 1] = Math.random();
    seeds[i * 3 + 2] = Math.random();

    sizes[i] = 1.7 + Math.random() * 2.2;
    const vertical = (positions[i * 3 + 1] ?? 0) * 0.5 + 0.5;
    tints[i] = Math.min(1, Math.max(0, vertical * 0.55 + Math.random() * 0.5));
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(targets.slice(), 3));
  geometry.setAttribute('aTarget', new THREE.BufferAttribute(targets, 3));
  geometry.setAttribute('aStart', new THREE.BufferAttribute(starts, 3));
  geometry.setAttribute('aScatter', new THREE.BufferAttribute(scatters, 3));
  geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aTint', new THREE.BufferAttribute(tints, 1));

  const material = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uAssemble: { value: 0 },
      uScatter: { value: 0 },
      uMouse: { value: new THREE.Vector2(99, 99) },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uPointScale: { value: 1 },
      uColorA: { value: new THREE.Color('#1e5fbe') },
      uColorB: { value: new THREE.Color('#9ec9ff') },
    },
  });

  const points = new THREE.Points(geometry, material);
  points.position.y = 1.62;
  scene.add(points);

  const cloudMaterial = new THREE.ShaderMaterial({
    vertexShader: CLOUD_VERT,
    fragmentShader: CLOUD_FRAG,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
    },
  });
  const clouds = new THREE.Mesh(new THREE.PlaneGeometry(30, 17), cloudMaterial);
  clouds.position.z = -4;
  scene.add(clouds);

  const reduced = prefersReducedMotion();
  const uniforms = material.uniforms as Record<string, { value: unknown }>;
  const uTime = uniforms.uTime as { value: number };
  const uAssemble = uniforms.uAssemble as { value: number };
  const uScatter = uniforms.uScatter as { value: number };
  const uMouse = uniforms.uMouse as { value: THREE.Vector2 };
  const uPixelRatio = uniforms.uPixelRatio as { value: number };
  const uPointScale = uniforms.uPointScale as { value: number };

  const resize = () => {
    const { clientWidth: w, clientHeight: h } = canvas;
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(dpr);
    uPixelRatio.value = dpr;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();

    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    const visibleW = halfH * 2 * camera.aspect;
    const markWorldW = 2 * aspect;
    const widthScale = (visibleW * 0.44) / markWorldW;
    const heightCap = halfH * 0.42;
    const scale = Math.min(widthScale, heightCap);
    points.position.y = halfH * 0.72 - scale;
    points.scale.set(scale, scale, 1);
    uPointScale.value = Math.min(1.15, Math.max(0.55, scale * 0.55));
  };
  resize();
  window.addEventListener('resize', resize);

  const onPointer = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    const ndcX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ndcY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    const halfW = halfH * camera.aspect;
    uMouse.value.set(ndcX * halfW, ndcY * halfH - points.position.y);
  };
  const clearPointer = () => uMouse.value.set(99, 99);
  window.addEventListener('pointermove', onPointer, { passive: true });
  window.addEventListener('pointerleave', clearPointer);

  let scrollRange = 1;
  const measure = () => {
    scrollRange = Math.max(1, window.innerHeight * 0.9);
  };
  measure();
  window.addEventListener('resize', measure);
  const onScroll = () => {
    const target = Math.min(1, Math.max(0, window.scrollY / scrollRange));
    uScatter.value += (target - uScatter.value) * 0.18;
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  let raf = 0;
  const clock = new THREE.Clock();
  const cloudUniforms = cloudMaterial.uniforms as Record<string, { value: unknown }>;
  const uCloudTime = cloudUniforms.uTime as { value: number };
  const render = () => {
    const elapsed = clock.getElapsedTime();
    uTime.value = elapsed;
    uCloudTime.value = elapsed;
    onScroll();
    renderer.render(scene, camera);
    raf = requestAnimationFrame(render);
  };

  if (reduced) {
    uAssemble.value = 1;
    uCloudTime.value = 40;
    renderer.render(scene, camera);
  } else {
    gsap.to(uAssemble, { value: 1, duration: 2.4, ease: 'power3.out', delay: 0.25 });
    render();
  }

  document.addEventListener('astro:before-swap', () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    window.removeEventListener('resize', measure);
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('pointermove', onPointer);
    window.removeEventListener('pointerleave', clearPointer);
    geometry.dispose();
    material.dispose();
    cloudMaterial.dispose();
    clouds.geometry.dispose();
    renderer.dispose();
  }, { once: true });
}
