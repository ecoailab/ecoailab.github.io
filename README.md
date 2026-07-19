# EcoAI Lab Website

한밭대학교 컴퓨터공학과 **EcoAI Lab** 공식 홈페이지.

**Live**: https://ecoailab.github.io/

Astro 5 정적 사이트 + Three.js WebGL 파티클 히어로 + GSAP/Lenis 스크롤 모션. 디자인 계약은 [`DESIGN.md`](./DESIGN.md) 참고.

## Stack

- **Astro 5** (static output, View Transitions)
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **Three.js** — 로고 알파 마스크를 샘플링한 GPU 파티클 히어로 (`src/lib/hero-particles.ts`)
- **GSAP + ScrollTrigger, Lenis** — 스크럽 텍스트 리빌, 핀 섹션, 스무스 스크롤 (`src/lib/motion.ts`)
- TypeScript strict

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
npm run preview  # 빌드 결과 로컬 확인
```

> **Google Drive 동기화 폴터에서 작업하는 경우**: `npm install`이 EBADF로 실패할 수 있습니다.
> 로컬 NTFS 경로에 `npm install --prefix <로컬경로>`로 설치 후 소스만 동기화하거나,
> 로컬 경로에서 개발하세요. CI(GitHub Actions)에서는 문제없습니다.

## Content editing (코드 없이 데이터만 수정)

모든 콘텐츠는 `src/data/`의 타입스크립트 데이터 파일로 관리됩니다.

| 파일 | 내용 |
|---|---|
| `src/data/people.ts` | 교수 프로필, 석사/학부 연구원, 졸업생 |
| `src/data/projects.ts` | 연구 프로젝트 25건 (status: ongoing/completed) |
| `src/data/publications.ts` | 국제저널/학회, 국내저널/학회, 특허 163건 |
| `src/data/news.ts` | 수상/발표/인턴십/언론 99건 |
| `src/data/site.ts` | 연구 도메인, 핵심 기술, 연락처, 통계 |

논문/뉴스 추가 시 해당 파일에 같은 형식으로 항목을 추가하면 빌드 시 자동 반영됩니다.

## Images

`public/assets/` 하위에 위치:

- `brand/ecoai-logo.png` — 공식 로고 (시안3, 투명 배경)
- `people/` — 교수 사진 (연구원 사진 추가 시 `public/assets/people/`에 넣고 `people.ts`에 경로 추가)
- `gallery/` — 갤러리 사진 (추가 시 `src/pages/gallery.astro`의 배열에 등록)
- `hero/` — 히어로/배너 이미지

## Deploy

GitHub Pages (Actions). `main` 브랜치에 push하면 `.github/workflows/deploy.yml`이 자동 빌드/배포합니다.
저장소 Settings → Pages → Source: **GitHub Actions** 선택이 필요합니다.

## Structure

```
src/
  components/   # Nav, Footer, Hero, DomainBento, TechAccordion, ...
  data/         # 사이트 전체 콘텐츠 (타입 안전)
  layouts/      # Layout.astro (head, 폰트, Lenis, reveal)
  lib/          # motion.ts (Lenis+GSAP), hero-particles.ts (Three.js), reveal.ts
  pages/        # index, people, research, publications, news, gallery, 404
  styles/       # global.css (Tailwind 4 @theme 토큰)
public/assets/  # 이미지/파일
```

© EcoAI Lab, Hanbat National University
