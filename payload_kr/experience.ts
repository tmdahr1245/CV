import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '스마일게이트',
      positions: [
        {
          title: '안티치트 소프트웨어 엔지니어',
          startedAt: '2025-06',
          descriptions: [
            'Windows 안티치트 개발',
            '게임 무결성 검증 및 보안 모니터링 기능 개발',
            '게임 엔진 플러그인 개발 및 연동',
            '보안 모듈 테스팅 및 검증',
            '게임 개발사와의 협업을 통한 보안 솔루션 적용',
          ],
          skillKeywords: [
            'C++',
            'C',
            'Windows',
            'MSVC',
            'Win32 API',
            'CMake',
            'Git',
            'GitLab CI/CD',
            'SW Test',
            'O-MVLL',
          ],
        },
      ],
    },
    {
      title: 'LIG넥스원',
      positions: [
        {
          title: '로보틱스 소프트웨어 엔지니어',
          startedAt: '2022-10',
          endedAt: '2025-05',
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
