# EcoAI Lab Website

**EcoAI Lab** 공식 웹사이트 - 한밭대학교 컴퓨터공학과

🔗 **Live Site**: https://ecoailab.github.io/  
🔗 **GitHub**: https://github.com/ECOAIlab/ecoailab.github.io

---

## 🚀 빠른 시작 (배포 방법)

### 1단계: GitHub 저장소 생성

1. https://github.com/ECOAIlab 접속
2. **New Repository** 클릭
3. Repository name: **`ecoailab.github.io`** (반드시 이 이름!)
4. Public 설정 → **Create repository**

### 2단계: 파일 업로드

이 폴터의 모든 파일을 GitHub에 업로드:

```powershell
# 저장소 클론
git clone https://github.com/ECOAIlab/ecoailab.github.io.git
cd ecoailab.github.io

# 파일 복사 (PowerShell)
Copy-Item -Path "..\EcoAI-Lab-Website\*" -Destination "." -Recurse -Force

# 커밋 및 푸시
git add .
git commit -m "Initial EcoAI Lab website"
git push origin main
```

### 3단계: GitHub Pages 활성화

1. 저장소 **Settings** → **Pages**
2. Source: **GitHub Actions** 선택
3. 자동 배포 완료 대기 (1-2분)

### 4단계: 확인

🎉 https://ecoailab.github.io/ 에서 확인!

---

## 📁 폴터 구조

```
EcoAI-Lab-Website/
├── 📂 config/_default/          # 설정 파일
│   ├── hugo.yaml               # Hugo 기본 설정
│   └── params.yaml             # 사이트 설정 (이름, 색상 등)
│
├── 📂 content/                  # 웹사이트 내용
│   ├── _index.md               # 홈페이지
│   ├── authors/admin/          # 교수님 프로필
│   ├── publications/           # 논문 목록
│   ├── projects/               # 연구 프로젝트
│   └── blog/                   # 뉴스/소식
│
├── 📂 static/uploads/           # 정적 파일 (이미지, PDF 등)
│
├── 📂 .github/workflows/        # 자동 배포 설정
│   └── hugo.yml                # GitHub Actions
│
├── 📄 README.md                # 이 파일
└── 📄 DEPLOY_GUIDE.md          # 상세 배포 가이드
```

---

## ✏️ 내용 수정 방법

### 홈페이지 수정
`content/_index.md` 파일을 텍스트 에디터로 열어 수정

### 교수님 정보 수정
`content/authors/admin/_index.md` 파일 편집

### 논문 추가
1. `content/publications/` 폴터에 새 폴터 생성
2. `index.md` + `cite.bib` 파일 작성
3. 커밋 → 자동 배포

### 프로젝트 추가
1. `content/projects/` 폴터에 새 폴터 생성
2. `index.md` 작성
3. 이미지: `featured.jpg` 또는 `featured.png`

---

## 🎨 디자인 변경

`config/_default/params.yaml` 파일에서 수정:

```yaml
# 사이트 이름
dentity:
  name: "EcoAI Lab"
  tagline: "환경에너지와 인공지능으로 지속가능한 미래를 연구합니다"

# 테마 색상
theme:
  colors:
    primary: "teal"      # 주 색상
    secondary: "emerald" # 보조 색상
```

---

## 📚 참고 자료

- **HugoBlox 문서**: https://docs.hugoblox.com/
- **템플릿 소스**: https://github.com/HugoBlox/hugo-theme-academic-cv
- **GitHub Pages**: https://docs.github.com/en/pages

---

## 🆘 문제 해결

### 빌드 실패 시
1. Actions 탭에서 빨간색 ❌ 클릭 → 로그 확인
2. YAML 문법 오류 체크
3. 이미지 경로 대소문자 확인

### 로컬 미리보기 (선택)
Hugo 설치 후:
```bash
hugo server -D
# http://localhost:1313
```

---

## 품질 검사와 CMS

### 자동 품질 검사

`.github/workflows/site-quality.yml`는 사이트를 빌드한 뒤 Lighthouse CI와 링크 검사를 실행합니다.

- Lighthouse CI 설정: `lighthouserc.json`
- 링크 검사 설정: `lychee.toml`
- 검사 대상: Hugo가 생성한 `public/` 폴더

로컬에서 확인하려면 다음 순서로 실행합니다.

```bash
pnpm install --frozen-lockfile
hugo --gc --minify --baseURL "https://ecoailab.github.io/"
pnpm run pagefind
pnpm run quality:lighthouse
```

링크 검사는 GitHub Actions에서 `lycheeverse/lychee-action`으로 실행합니다. 로컬에서 같은 검사를 하려면 lychee를 설치한 뒤 아래 명령을 실행합니다.

```bash
lychee --config lychee.toml --cache --no-progress --root-dir . --base-url https://ecoailab.github.io/ "public/**/*.html"
```

### Decap CMS 관리 화면

관리 화면은 `/admin/` 경로에 생성됩니다.

- CMS 화면: `static/admin/index.html`
- CMS 설정: `static/admin/config.yml`
- 관리 대상: 홈페이지 일부, Join Us, 협업 안내, 연구실 소식, 연구 프로젝트

GitHub Pages는 정적 호스팅만 제공하므로 CMS 화면은 표시할 수 있지만 GitHub 로그인 인증은 별도 OAuth/proxy 설정이 필요합니다. 실제 편집 기능을 쓰려면 GitHub OAuth 앱, 외부 인증 프록시, 또는 Decap CMS가 지원하는 별도 인증 구성을 연결해야 합니다.

---

## 📧 연락처

**EcoAI Lab**  
한밭대학교 컴퓨터공학과  
📍 N4-416  
📧 sangkeum@hanbat.ac.kr  
📞 +82 42 821 1205

---

## 📝 라이선스

- 템플릿: [HugoBlox Academic CV](https://github.com/HugoBlox/hugo-theme-academic-cv) (MIT License)
- 내용: © 2024 EcoAI Lab, Hanbat National University

---

**최종 업데이트**: 2024년  
**버전**: 1.0
