import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '로보틱스 자율주행 도메인에서 다양한 경험이 있는 소프트웨어 개발자입니다. 저는 자율주행 설계, 소프트웨어 최적화 및 검증, 컴포넌트 모듈 연동 등 로보틱스 분야에서 2년 이상의 실무경험을 쌓고있습니다. 석사 학위 동안, ROS 기반의 자율주행 시스템 소프트웨어에서 비결정성 문제 해결과 결함을 탐지하는 연구를 수행함으로써 학문적 실무적 역량을 개발했습니다. C++, Python, ROS2, 경로계획, 충돌회피 등 핵심 로보틱스 소프트웨어 기술에 유창하며, 로보틱스 문제 해결과 성능 최적화에 강점이 있습니다.',
    '프로그래밍을 통해 문제를 해결하고 아이디어 구현하는것을 즐깁니다. 로우레벨에서 개발하는것을 즐기며, 현재 코드를 개선하는 방법을 항상 고민합니다. 리눅스 환경에 유창하며, 필요한 지식을 얻기 위해 구글링, 도서, 공식 문서, 오픈소스 분석등 다양한 방법을 활용합니다. 다양한 환경에서의 토이프로젝트를 기획하고 개발해본 경험이 있습니다. 지식을 공유하고, 학습하고, 함께 성장하는 개발 문화를 추구합니다.',
  ],
  sign: '승목',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
