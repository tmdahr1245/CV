import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'LIG넥스원',
      positions: [
        {
          title: '로보틱스 소프트웨어 엔지니어',
          startedAt: '2022-10',
          descriptions: [
            '로보틱스 자율주행 알고리즘 설계 및 구현',
            '로보틱스 소프트웨어 모듈간 상호 연동',
            '제한된 환경에서 소스코드 최적화 및 성능 분석',
            '로보틱스 소프트웨어 테스팅 및 검증',
            '협력 개발을 위한 컨소시엄(파트너사와 대학원)과의 협력',
          ],
          skillKeywords: ['C++', 'Python', 'ROS2', 'Linux', 'C', 'SW Test'],
        },
      ],
    },
  ],
};

export default experience;
