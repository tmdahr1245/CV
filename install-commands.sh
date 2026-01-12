#!/bin/bash
# Node.js 20.15.1 환경 설정 명령어 모음
# 실제로 시스템에 변경을 가한 명령어만 포함

# 1. nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 2. nvm 로드 (새 터미널에서는 source ~/.bashrc로 자동 로드됨)
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# 3. Node.js 20.15.1 설치 및 기본 버전으로 설정
nvm install 20.15.1
nvm use 20.15.1
nvm alias default 20.15.1

# 4. 프로젝트 디렉토리로 이동 및 .nvmrc 사용
cd /home/user/cv
nvm use

# 5. 기존 node_modules 삭제 및 의존성 재설치
rm -rf node_modules
npm install

# 6. 빌드 테스트
npm run export
