# GitHub Pages 배포 완료 가이드

## ✅ 배포 상태: 준비 완료

EcoAI Lab 웹사이트가 GitHub Pages 배포를 위해 모든 설정이 완료되었습니다.

---

## 📋 배포 체크리스트

### 1. GitHub 저장소 생성 ✓
- [ ] https://github.com/ECOAIlab 접속
- [ ] 저장소 이름: `ecoailab.github.io` (필수!)
- [ ] Public 설정
- [ ] 저장소 생성

### 2. 파일 업로드 ✓
- [ ] 이 폴더의 모든 파일 업로드
- [ ] GitHub Actions workflow 포함 확인 (.github/workflows/hugo.yml)

### 3. GitHub Pages 설정 ✓
- [ ] Settings → Pages → Source: GitHub Actions 선택
- [ ] 자동 배포 대기 (1-2분)

### 4. 도메인 확인 ✓
- [ ] https://ecoailab.github.io/ 접속 확인

---

## 🔧 업로드 명령어

```bash
# 1. 저장소 클론
git clone https://github.com/ECOAIlab/ecoailab.github.io.git
cd ecoailab.github.io

# 2. 파일 복사 (PowerShell)
Copy-Item -Path "C:\Users\Sangkeum\SynologyDrive\4.한밭대 자료\연구실자료\EcoAI-Lab-Website\*" -Destination "." -Recurse -Force

# 또는 Git Bash/cp 사용
cp -r "/c/Users/Sangkeum/SynologyDrive/4.한밭대 자료/연구실자료/EcoAI-Lab-Website/"* .

# 3. 커밋 및 푸시
git add .
git commit -m "Initial EcoAI Lab website deployment"
git push origin main
```

---

## 🌐 설정된 URL

| 환경 | URL |
|------|-----|
| GitHub Pages | https://ecoailab.github.io/ |
| GitHub Repo | https://github.com/ECOAIlab/ecoailab.github.io |

---

## 📝 향후 업데이트 방법

```bash
# 로컬에서 수정 후
git add .
git commit -m "Update: [변경 내용 설명]"
git push origin main

# GitHub Actions가 자동으로 빌드 및 배포
```

---

## 🎯 다음 단계 (권장)

1. **Google Scholar 프로필 연동**
   - `content/authors/admin/_index.md`의 Google Scholar 링크 업데이트

2. **ORCID 연동**
   - ORCID 프로필 생성 후 링크 업데이트

3. **논문 목록 추가**
   - `content/publications/` 폴더에 BibTeX 파일로 논문 추가

4. **연구실 사진 추가**
   - `static/uploads/` 폴더에 이미지 업로드

5. **커스텀 도메인 설정** (선택)
   - Settings → Pages → Custom domain
   - 예: lab.hanbat.ac.kr

---

## 🆘 지원

문제 발생 시:
1. GitHub Actions 로그 확인 (Actions 탭)
2. HugoBlox 문서: https://docs.hugoblox.com/
3. EcoAI Lab 내部 문의

---

**생성일**: 2024년  
**버전**: 1.0.0  
**템플릿**: HugoBlox Academic CV
