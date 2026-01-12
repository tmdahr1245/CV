#!/bin/bash
# Node.js 20.15.1 설치 및 설정 스크립트

echo "=== Node.js 20.15.1 설치 스크립트 ==="

# nvm 로드
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# nvm이 제대로 로드되었는지 확인
if ! command -v nvm &> /dev/null; then
    echo "오류: nvm을 찾을 수 없습니다."
    echo "터미널을 다시 시작하거나 다음 명령을 실행하세요:"
    echo "  source ~/.bashrc"
    exit 1
fi

echo "현재 Node.js 버전: $(node --version 2>/dev/null || echo '설치되지 않음')"
echo "현재 npm 버전: $(npm --version 2>/dev/null || echo '설치되지 않음')"

# Node.js 20.15.1 설치
echo ""
echo "Node.js 20.15.1 설치 중..."
nvm install 20.15.1

# 설치 확인
if [ $? -eq 0 ]; then
    echo ""
    echo "Node.js 20.15.1 설치 완료!"
    
    # 해당 버전 사용
    nvm use 20.15.1
    
    # 기본 버전으로 설정 (선택사항)
    nvm alias default 20.15.1
    
    echo ""
    echo "설치된 Node.js 버전: $(node --version)"
    echo "설치된 npm 버전: $(npm --version)"
    
    # 프로젝트 디렉토리로 이동
    cd "$(dirname "$0")"
    
    echo ""
    echo "프로젝트 디렉토리에서 .nvmrc 사용 중..."
    nvm use
    
    echo ""
    echo "=== 다음 단계 ==="
    echo "1. node_modules 삭제: rm -rf node_modules"
    echo "2. package-lock.json 삭제 (선택사항): rm package-lock.json"
    echo "3. 의존성 재설치: npm install"
    echo "4. 빌드 테스트: npm run export"
else
    echo ""
    echo "오류: Node.js 20.15.1 설치에 실패했습니다."
    exit 1
fi
