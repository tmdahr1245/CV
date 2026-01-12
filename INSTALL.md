# Node.js 환경 설정 가이드

## 실제로 시스템에 변경을 가한 명령어

### 1. nvm 설치
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

### 2. nvm 로드 (터미널마다 필요)
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```
또는 새 터미널에서는:
```bash
source ~/.bashrc
```

### 3. Node.js 20.15.1 설치 및 설정
```bash
nvm install 20.15.1
nvm use 20.15.1
nvm alias default 20.15.1
```

### 4. 프로젝트에서 .nvmrc 사용
```bash
cd /home/user/cv
nvm use  # .nvmrc 파일의 버전(20.15.1) 자동 사용
```

### 5. 의존성 재설치
```bash
rm -rf node_modules
npm install
```

### 6. 빌드 테스트
```bash
npm run export
```

## 한 번에 실행하기

전체 스크립트 실행:
```bash
bash /home/user/cv/install-commands.sh
```

또는 수동으로:
```bash
# nvm이 이미 설치되어 있다면
source ~/.bashrc
cd /home/user/cv
nvm use
npm install
npm run export
```
