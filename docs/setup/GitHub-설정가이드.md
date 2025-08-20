# GitHub 설정 가이드

## 🚀 GitHub 저장소 생성

### 1단계: GitHub 계정 생성
1. https://github.com 접속
2. "Sign up" 클릭
3. 사용자명, 이메일, 비밀번호 입력
4. 이메일 인증 완료

### 2단계: 새 저장소 생성
1. GitHub 로그인 후 "+" 버튼 → "New repository"
2. 저장소 설정:
   - Repository name: `thumbnail-downloader`
   - Description: `레트로 스타일 썸네일 다운로드 사이트`
   - Public 선택 (무료 GitHub Pages 사용)
   - "Add a README file" 체크
   - "Add .gitignore" → Node 선택

### 3단계: GitHub Pages 활성화
1. 저장소 → Settings → Pages
2. Source: "Deploy from a branch"
3. Branch: "main" 선택
4. 폴더: "/ (root)" 선택
5. Save 클릭

## 🔐 보안 설정

### 환경변수 설정 (GitHub Secrets)
1. 저장소 → Settings → Secrets and variables → Actions
2. "New repository secret" 클릭
3. 필요한 API 키들 추가:
   - `IMGUR_CLIENT_ID`
   - `JSONBIN_MASTER_KEY`

### 2단계 인증 설정
1. Settings → Password and authentication
2. "Enable two-factor authentication"
3. 인증 앱 또는 SMS 설정

## 📤 파일 업로드 주의사항

### ✅ 업로드해도 되는 파일
- src/ 폴더의 모든 코드
- docs/ 문서 파일
- package.json, README.md
- public/ 정적 파일

### ❌ 절대 업로드 금지
- private-info/ 폴더
- .env 파일
- API 키가 포함된 모든 파일
- 개인 비밀번호나 계정 정보

## 🌐 GitHub Pages URL 확인
- 기본 URL: `https://[사용자명].github.io/thumbnail-downloader`
- 설정 완료 후 10-15분 대기
- 404 에러 시 index.html 파일 확인

## 💡 Git 명령어 (나중에 사용)
```bash
# 저장소 복제
git clone https://github.com/[사용자명]/thumbnail-downloader.git

# 변경사항 추가
git add .

# 커밋
git commit -m "사이트 기본 구조 추가"

# 업로드
git push origin main
```