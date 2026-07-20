const SKY_VERT = /* glsl */ `
attribute vec2 aPos;
varying vec2 vUv;

void main() {
  vUv = aPos * 0.5 + 0.5;
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const SKY_FRAG = /* glsl */ `
precision mediump float;

uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPointer;
varying vec2 vUv;

const vec3 BRAND = vec3(0.0, 0.255, 0.576);
const vec3 AZURE = vec3(0.243, 0.557, 0.871);
const vec3 SKY_GLOW = vec3(0.62, 0.788, 1.0);

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

float meteor(vec2 suv, float timeSec) {
  float period = 9.0;
  float cycle = floor(timeSec / period);
  float local = fract(timeSec / period);
  float rnd = hash(vec2(cycle, 7.31));
  float active = step(0.45, rnd);
  vec2 start = vec2(1.15 + 0.25 * fract(rnd * 13.7), 0.55 + 0.45 * fract(rnd * 5.3));
  vec2 dir = normalize(vec2(-0.55, -0.4));
  vec2 p = start + dir * local * 1.7;
  float m = smoothstep(0.014, 0.0, length(suv - p));
  for (int i = 1; i <= 8; i++) {
    vec2 tp = p - dir * float(i) * 0.035;
    m += smoothstep(0.009, 0.0, length(suv - tp)) * (1.0 - float(i) / 9.0) * 0.55;
  }
  float fade = smoothstep(0.0, 0.12, local) * smoothstep(1.0, 0.7, local);
  return m * fade * active;
}

vec2 starLayer(vec2 uv, vec2 ptr, vec2 scale, float factor, float threshold,
               float size, float speed, float bright) {
  vec2 ouv = uv - ptr * factor;
  vec2 grid = ouv * scale;
  vec2 cell = floor(grid);
  vec2 f = fract(grid) - 0.5;
  float s = hash(cell + 91.7);
  float star = step(threshold, s);
  float tw = 0.35 + 0.65 * abs(sin(uTime * (speed + s * 1.8) + s * 41.0));
  float shape = smoothstep(size, 0.02, length(f));
  float glow = star * shape * tw * bright;
  return vec2(glow, max(glow * 0.85, 0.0));
}

void main() {
  vec2 suv = vUv * vec2(uRes.x / uRes.y, 1.0);
  vec2 uv = suv * vec2(2.6, 2.6);
  vec2 ptr = -uPointer;
  float t = uTime * 0.011;

  vec2 cloudParallax = uPointer * 0.004;
  float c1 = fbm(uv + vec2(t * 1.3, t * 0.15) + cloudParallax);
  float c2 = fbm(uv * 2.1 + vec2(t * 2.1, 0.35) + 3.7 + cloudParallax);
  float cloud = smoothstep(0.4, 0.9, c1 * 0.6 + c2 * 0.5);
  float horizon = smoothstep(0.0, 0.9, vUv.y);
  vec3 deep = mix(vec3(0.016, 0.06, 0.135), vec3(0.012, 0.04, 0.1), vUv.y);
  vec3 lit = vec3(0.27, 0.5, 0.85);
  vec3 col = mix(deep, lit, cloud);
  float alpha = cloud * (0.2 + 0.12 * horizon);

  float band = smoothstep(0.15, 0.5, vUv.y) * smoothstep(1.0, 0.55, vUv.y);
  float wave = 0.5 + 0.5 * sin((suv.x + ptr.x * 0.002) * 3.2 + uTime * 0.12 + fbm(uv * 1.4 + ptr * 0.002) * 2.4);
  float aurora = band * wave;
  col += vec3(0.18, 0.42, 0.85) * aurora * 0.1;
  alpha = max(alpha, aurora * 0.07);

  vec2 dustUv = (suv + ptr * 0.004 - 0.5) * vec2(1.0, 1.3) + 0.5;
  float dustBand = smoothstep(0.1, 0.5, vUv.y) * smoothstep(0.95, 0.5, vUv.y);
  float dustNoise = fbm(dustUv * 2.2 + vec2(t * 0.5, t * 0.25));
  float dust = dustBand * smoothstep(0.35, 0.65, dustNoise);
  vec3 dustCol = mix(BRAND, AZURE, dustNoise);
  dustCol = mix(dustCol, SKY_GLOW, dustNoise * dustNoise);
  float dustAlpha = dust * 0.06;
  col += dustCol * dustAlpha;
  alpha = max(alpha, dustAlpha);

  vec2 far = starLayer(vUv, ptr, uRes / 2.5, 0.006, 0.9965, 0.32, 0.6, 0.45);
  vec2 mid = starLayer(vUv, ptr, uRes / 4.0, 0.014, 0.993, 0.26, 1.0, 0.7);
  vec2 near = starLayer(vUv, ptr, uRes / 7.0, 0.028, 0.988, 0.18, 1.8, 1.0);
  vec3 starCol = vec3(0.62, 0.788, 1.0) * far.x
               + vec3(0.72, 0.86, 1.0) * mid.x
               + vec3(0.85, 0.93, 1.0) * near.x;
  col += starCol;
  alpha = max(alpha, max(far.y, max(mid.y, near.y)));

  float shoot = meteor(suv, uTime);
  col += vec3(0.8, 0.9, 1.0) * shoot * 0.9;
  alpha = max(alpha, shoot * 0.8);

  gl_FragColor = vec4(col, alpha);
}
`;

function compileShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function initSky(canvas: HTMLCanvasElement): void {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(pointer: fine) and (hover: hover)').matches;
  const gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'low-power',
  });
  if (!gl) return;

  const vs = compileShader(gl, gl.VERTEX_SHADER, SKY_VERT);
  const fs = compileShader(gl, gl.FRAGMENT_SHADER, SKY_FRAG);
  if (!vs || !fs) return;

  const program = gl.createProgram();
  if (!program) return;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;
  gl.useProgram(program);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

  const loc = gl.getAttribLocation(program, 'aPos');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(program, 'uTime');
  const uRes = gl.getUniformLocation(program, 'uRes');
  const uPointer = gl.getUniformLocation(program, 'uPointer');

  gl.clearColor(0, 0, 0, 0);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio, 1.5);
    const w = Math.floor(canvas.clientWidth * dpr);
    const h = Math.floor(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      gl.viewport(0, 0, w, h);
    }
    gl.uniform2f(uRes, w, h);
  };
  resize();
  window.addEventListener('resize', resize);

  const target: [number, number] = [0, 0];
  const current: [number, number] = [0, 0];

  const onPointer = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse') return;
    target[0] = (e.clientX / window.innerWidth) * 2 - 1;
    target[1] = (e.clientY / window.innerHeight) * 2 - 1;
  };
  if (finePointer && !reduced) {
    window.addEventListener('pointermove', onPointer, { passive: true });
  }

  let driftTime = 0;
  const autonomousDrift = (dt: number) => {
    driftTime += dt;
    current[0] = Math.sin(driftTime * 0.13) * 0.35;
    current[1] = Math.cos(driftTime * 0.09) * 0.2;
  };

  const drawFrame = (time: number) => {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uTime, time);
    gl.uniform2f(uPointer, current[0], current[1]);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };

  let raf = 0;
  const start = performance.now();
  let prev = start;
  const frame = () => {
    const now = performance.now();
    const dt = (now - prev) / 1000;
    prev = now;
    if (finePointer) {
      current[0] += (target[0] - current[0]) * 0.08;
      current[1] += (target[1] - current[1]) * 0.08;
    } else {
      autonomousDrift(dt);
    }
    drawFrame((now - start) / 1000);
    raf = requestAnimationFrame(frame);
  };

  if (reduced) {
    gl.uniform2f(uPointer, 0, 0);
    drawFrame(50);
  } else {
    frame();
  }

  document.addEventListener('astro:before-swap', () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    window.removeEventListener('pointermove', onPointer);
  }, { once: true });
}
