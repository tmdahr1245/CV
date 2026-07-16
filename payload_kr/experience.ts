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
            'Windows·Android 안티치트 개발',
            '무결성 검증·런타임 변조 탐지 기능 개발',
            '보안 모듈 헬스체크, 바이너리 보호·난독화 적용 및 성능 최적화',
            'CI/CD 파이프라인에 보호·검증·QA 빌드·배포 자동화 연동',
            'Native/Unity/Unreal 등 다양한 게임 클라이언트 연동 및 개발사 협업',
          ],
          skillKeywords: [
            'C++',
            'C',
            'Windows',
            'Android',
            'NDK',
            'Win32 API',
            'CMake',
            'GitLab CI/CD',
            'Docker',
            'Kubernetes',
            'Binary Protection',
            'Reverse Engineering',
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
            '방위산업 개발주기 전반에 걸친 소프트웨어 취약점 점검 및 개선',
            '코딩 룰·MISRA C++ 검증 및 위반 코드 패치 적용',
            '개발 단계에 보안·품질 검증을 반영한 SW 테스팅 수행',
            '협력 개발을 위한 컨소시엄(파트너사와 대학원)과의 협력',
          ],
          skillKeywords: [
            'C++',
            'Python',
            'ROS2',
            'Linux',
            'C',
            'MISRA C++',
            'SW Test',
            'Secure SDLC',
          ],
        },
      ],
    },
  ],
};

export default experience;
