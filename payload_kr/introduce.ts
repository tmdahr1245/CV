import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '클라이언트·바이너리 보안을 중심으로 방어 기술을 제품에 녹여내는 소프트웨어 엔지니어입니다. 현재 Windows·Android 기반 게임 안티치트 개발에 참여하며, 무결성 검증, 런타임 변조 탐지, 우회 시도 방지, 바이너리 보호·난독화, 보안 모듈 개발을 담당하고 있습니다. 실제 서비스 환경에서 공격 벡터를 분석하고 방어 로직을 설계·구현하며, CI/CD 파이프라인에 보호·검증·배포 자동화를 연동합니다. C/C++, Win32 API, 리버싱·바이너리 분석 등 로우레벨 기술 스택에 강점이 있으며, 성능과 보안성을 동시에 고려한 시스템 개발을 지향합니다.',
    '이전에는 자율주행 소프트웨어 개발자로서 약 3년의 실무 경험을 보유하고 있으며, 석사 과정에서는 ROS 기반 자율주행 시스템의 비결정성 문제 해결 및 결함 탐지 관련 연구를 수행하였습니다. 대규모 시스템의 안정성과 신뢰성을 다루는 경험을 바탕으로, 현재는 보안 플랫폼·자동화 관점으로 역량을 확장하고 있습니다.',
    '프로그래밍을 통해 문제를 해결하고 아이디어를 구현하는 과정을 즐기며, 항상 더 나은 코드를 위한 개선 방향을 고민합니다. Windows와 Linux 환경 모두에 유창하고, 공식 문서·오픈소스 분석·문헌·AI 등을 활용해 필요한 지식을 능동적으로 흡수합니다. 다양한 분야의 토이 프로젝트를 기획·개발해본 경험이 있으며, 지식을 공유하고 함께 성장하는 개발 문화를 중요하게 생각합니다.',
  ],
  sign: 'Seungmok',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
