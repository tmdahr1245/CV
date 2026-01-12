import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '보안 및 안티치트 개발 분야에 다양ㅇ한 경험이 있는 소프트웨어 개발자입니다. 현재 Windows 안티치트 개발에 참여하며 게임 무결성 검증, 보안 모니터링 기능, 코드 보호 기술, 게임 엔진 플러그인 개발 등을 담당하고 있습니다. 보안 모듈 개발, 비정상 실행 환경 탐지, 우회 시도 방지 로직 구현 등 게임 보안 솔루션 개발에 집중하고 있습니다. 석사 학위 동안, 자율주행 시스템 소프트웨어에서 결함을 탐지하는 연구를 수행하며 보안 및 검증 분야의 학문적 역량을 개발했습니다. C++, C, Windows, Win32 API, 보안 모듈 개발, 리버싱 방지 기술 등 다양한 기술 스택에 유창하며, 보안 문제 해결과 성능 최적화에 강점이 있습니다.',
    '프로그래밍을 통해 문제를 해결하고 아이디어 구현하는것을 즐깁니다. 로우레벨에서 개발하는것을 즐기며, 현재 코드를 개선하는 방법을 항상 고민합니다. Windows / Linux 환경에 유창하며, 리버싱, 바이너리 분석, 보안 기술 등에 대한 지식을 얻기 위해 AI, 구글링, 도서, 공식 문서, 오픈소스 분석등 다양한 방법을 활용합니다. 다양한 환경에서의 토이프로젝트를 기획하고 개발해본 경험이 있습니다. 지식을 공유하고, 학습하고, 함께 성장하는 개발 문화를 추구합니다.',
  ],
  sign: 'Seungmok',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
