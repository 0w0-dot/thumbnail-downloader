# VS Code 설치 가이드

## 🚀 VS Code 다운로드 및 설치

### 1단계: 다운로드
1. https://code.visualstudio.com 접속
2. "Download for Windows" 파란 버튼 클릭
3. `VSCodeUserSetup-x64-1.xx.x.exe` 파일 다운로드

### 2단계: 설치
1. 다운로드된 파일 실행 (관리자 권한 허용)
2. 라이선스 동의 → "동의함" 선택 → 다음
3. **중요한 설정들** (반드시 체크!):
   - ☑️ "바탕화면에 아이콘 만들기"
   - ☑️ "PATH에 추가 (다시 시작한 후 사용 가능)"
   - ☑️ "지원되는 파일 형식에 대해 'Code로 열기' 작업을 Windows 탐색기 파일의 상황에 맞는 메뉴에 추가"
   - ☑️ "지원되는 파일 형식에 대해 'Code로 열기' 작업을 Windows 탐색기 디렉터리의 상황에 맞는 메뉴에 추가"
4. "설치" 클릭
5. 설치 완료 후 "VS Code 실행" 체크 → "마침"

## 🔧 필수 확장프로그램 설치

VS Code 실행 후 왼쪽 사이드바의 확장(Extensions) 아이콘 클릭 후 다음 확장프로그램들을 검색하여 설치:

### 1. Korean Language Pack for Visual Studio Code
- **검색**: "Korean Language Pack"
- **설치 후**: 재시작하면 한국어 인터페이스로 변경

### 2. Auto Rename Tag  
- **검색**: "Auto Rename Tag"
- **용도**: HTML/JSX 태그 자동 이름 변경

### 3. ES7+ React/Redux/React-Native snippets
- **검색**: "ES7+ React"
- **용도**: React 코드 자동완성

### 4. Tailwind CSS IntelliSense
- **검색**: "Tailwind CSS IntelliSense"
- **용도**: Tailwind 클래스 자동완성

### 5. Prettier - Code formatter
- **검색**: "Prettier"
- **용도**: 코드 자동 정렬

### 6. Bracket Pair Colorizer 2
- **검색**: "Bracket Pair Colorizer 2"
- **용도**: 괄호 색깔 구분

## ⚙️ VS Code 기본 설정

### settings.json 설정
1. `Ctrl + Shift + P` 눌러서 명령 팔레트 열기
2. "settings json" 입력 후 "기본 설정: 설정 열기(JSON)" 선택
3. 다음 설정 추가:

```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll": true
    },
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "files.autoSave": "afterDelay",
    "files.autoSaveDelay": 1000
}
```

## 🧪 설치 확인

### 터미널에서 확인
1. `Windows + R` → "cmd" 입력 → Enter
2. `code --version` 입력
3. 버전 정보가 나오면 설치 성공!

### VS Code에서 프로젝트 열기
1. VS Code 실행
2. "파일" → "폴더 열기"
3. `C:\Users\skdnc\Desktop\썸네일 다운로더` 폴더 선택
4. 좌측에 폴더 구조가 표시되면 성공!

## 🎯 다음 단계

VS Code 설치가 완료되면:
1. 프로젝트 폴더 열기
2. 터미널에서 `npm create vite@latest . -- --template react` 실행
3. React 개발 환경 구축 시작

## 🆘 문제 해결

### "code 명령을 찾을 수 없음" 에러
- 해결: VS Code 재설치 시 "PATH에 추가" 옵션 체크
- 또는: 컴퓨터 재시작 후 다시 시도

### 확장프로그램이 작동하지 않음
- 해결: VS Code 재시작
- 또는: 확장프로그램 비활성화 후 다시 활성화