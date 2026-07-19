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
  vec2 uv = vUv * vec2(uRes.x / uRes.y, 1.0) * vec2(2.6, 2.6);
  float t = uTime * 0.011;
  float c1 = fbm(uv + vec2(t * 1.3, t * 0.15));
  float c2 = fbm(uv * 2.1 + vec2(t * 2.1, 0.35) + 3.7);
  float cloud = smoothstep(0.42, 0.9, c1 * 0.6 + c2 * 0.5);
  float horizon = smoothstep(0.0, 0.9, vUv.y);
  vec3 deep = vec3(0.012, 0.045, 0.105);
  vec3 lit = vec3(0.2, 0.4, 0.72);
  vec3 col = mix(deep, lit, cloud);
  float alpha = cloud * (0.14 + 0.10 * horizon);
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

  let raf = 0;
  const start = performance.now();
  const frame = () => {
    const t = (performance.now() - start) / 1000;
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uTime, t);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    raf = requestAnimationFrame(frame);
  };

  if (reduced) {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform1f(uTime, 50);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  } else {
    frame();
  }

  document.addEventListener('astro:before-swap', () => {
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
  }, { once: true });
}
