import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '유무인 복합체계 공통 아키텍쳐 및 프레임워크 개발',
      startedAt: '2024-11',
      where: 'LIG넥스원',
      descriptions: [
        {
          content: '로봇 자율주행 액션 소프트웨어 설계 및 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: 'planning, exploring and mapping' }],
        },
      ],
    },
    {
      title: '초소형 군집 로봇 운용 통제 기술',
      startedAt: '2024-01',
      endedAt: '2024-08',
      where: 'LIG넥스원',
      descriptions: [
        {
          content: '군집 navigation 스택 과업 노드 개발 및 적용',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'planning, exploring and mapping' },
            { content: '라이다 기반에서 뎁스 카메라 기반으로 변경' },
            { content: 'exploration 시각화' },
            { content: '타 프로젝트 ROS 노드 포팅' },
          ],
        },
        {
          content: '가제보를 활용한 시뮬레이션 환경 구성',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '초소형 생체모방 로봇용 소프트웨어 프레임워크 기술 개발',
      startedAt: '2022-12',
      endedAt: '2024-11',
      where: 'LIG넥스원',
      descriptions: [
        {
          content: '자율주행 소프트웨어 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전역 경로 알고리즘 개발' },
            { content: '지역 경로, 충돌회피 알고리즘 개발' },
            { content: '포인트클라우드 생성 알고리즘 개발' },
          ],
        },
        {
          content: '군집 로봇 제어 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '군집 대형유지 알고리즘 개발' },
            { content: '군집 탐색영역 분할 알고리즘 개발' },
          ],
        },
        {
          content: 'SW Testing',
          weight: 'MEDIUM',
          descriptions: [{ content: 'SW 취약점 검증' }, { content: 'SW 코딩 룰 검증' }],
        },
        {
          content: '시뮬레이션 환경에서의 로봇 제어',
          weight: 'MEDIUM',
          descriptions: [{ content: '가제보 환경에서의 로봇 제어 플러그인' }],
        },
        {
          content: 'SW 설계 문서화',
          weight: 'MEDIUM',
          descriptions: [{ content: '프로젝트에 Doxygen 적용 및 환경 구성' }],
        },
      ],
    },
    {
      title: '바이너리 유사도 기반 무인이동체 펌웨어 심층 분석',
      startedAt: '2022-04',
      endedAt: '2022-08',
      where: '국가보안기술연구소',
      descriptions: [
        {
          content: '무인이동체 펌웨어 분석',
          weight: 'MEDIUM',
          descriptions: [
            { content: '세그먼트에 의한 분류' },
            { content: '바이너리 유사도 분석' },
            { content: 'open/closed source 펌웨어 수집' },
            { content: '컴파일러 타입 및 버젼에 따른 바이너리 특징점 추출' },
          ],
        },
      ],
    },
    {
      title: '자율주행 시스템을 위한 ROS 노드 기반 fuzzer 개발',
      startedAt: '2021-09',
      endedAt: '2022-02',
      where: '고려대학교',
      descriptions: [
        {
          content: '퍼징 프레임워크 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'probability 기반 알고리즘을 활용한 Input generator' },
            {
              content: '크래시를 탐지하고 타겟 노드의 상태를 모니터링하는 Status monitor',
            },
            { content: '런타임 에러 발생시 rosbag 파일로 input을 기록하는 Logger' },
          ],
        },
        {
          content: 'ROS 기반의 자율주행 소프트웨어 Autoware에서 21개의 런타임에러 발견',
        },
      ],
    },
    {
      title: '온라인 게임 차단 커널드라이버 개발',
      startedAt: '2021-09',
      endedAt: '2021-11',
      where: '토이 프로젝트',
      descriptions: [
        {
          content: '특정 프로세스를 차단하는 커널 드라이버 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '드라이버 자체 디스크립터를 통해 유저모드에서 차단 프로세스 리스트에 접근 불가',
            },
          ],
        },
        {
          content:
            '커널 드라이버에 차단 프로세스 리스트를 전송하는 유저모드 보안 어플리케이션 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: '인증없이 어플리케이션을 사용할 수 없도록 암호화' }],
        },
      ],
    },
    {
      title: '윈도우 메신저 해킹: 전송될 파일 변환',
      startedAt: '2021-07',
      endedAt: '2021-09',
      where: '토이 프로젝트',
      descriptions: [
        {
          content: '윈도우즈 메신저 앱 파일 전송 코드 분석',
          weight: 'MEDIUM',
          descriptions: [{ content: '리버스 엔지니어링을 통한 파일전송 API 분석' }],
        },
        {
          content: '코드 인젝터 개발 (에이전트)',
          weight: 'MEDIUM',
          descriptions: [{ content: '악성코드로써 역할을 하는 DLL을 메신저 앱으로 삽입' }],
        },
        {
          content: '악성 DLL 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '파일 전송 API Hooking' },
            { content: '리소스 영역에 대체될 실행파일 포함' },
          ],
        },
      ],
    },
    {
      title: 'ROS 노드 기반 자율주행 시스템 소프트웨어를 타겟으로 한 적대적 공격',
      startedAt: '2021-06',
      endedAt: '2021-08',
      where: '인코그니토',
      descriptions: [
        {
          content: 'darknet yolov3에 대한 FGSM 공격',
        },
        {
          content: 'daedalus 논문에서 채택한 NMS 기반 알고리즘',
        },
        {
          content: '자율주행 시스템의 카메라 인지 기능 무력화',
        },
      ],
    },
    {
      title: 'ROS 기반 오픈소스 자율주행 소프트웨어 Autoware 소스코드 분석',
      startedAt: '2021-06',
      endedAt: '2021-08',
      where: '고려대학교',
      descriptions: [
        {
          content:
            '소스코드 분석결과 카테고리화 및 문서화 (Localization / Detection / Decision / Planning)',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'gnss localizer, lidar localizer, dead reckoner' },
            { content: 'lidar and vision detecter,tracker, fusion detector, motion predictor' },
            {
              content:
                'a conservative, independent decision-making system for autonomous driving systems',
            },
            { content: 'global Planner, local Planner, driving stabilizer' },
          ],
        },
      ],
    },
    // {
    //   title: 'Methodology for finding logical bugs in autonomous driving software',
    //   startedAt: '2021-05',
    //   endedAt: '2021-08',
    //   where: 'Korea University',
    //   descriptions: [
    //     {
    //       content:
    //         'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
    //     },
    //     {
    //       content:
    //         'Successfully trained over 5,000 participants in system administration and security. ',
    //     },
    //   ],
    // },
    {
      title: '무인이동체 취약점 탐지 자동화 프레임워크 개발',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: '국가보안기술연구소',
      descriptions: [
        {
          content: '펌웨어 에뮬레이션 기술 소개 및 리뷰',
          weight: 'MEDIUM',
          descriptions: [
            { content: '에뮬레이션 시나리오 설계' },
            {
              content: '다양한 플랫폼에서의 펌웨어 분류 및 분석 (ROS/Linux/Nuttx/STM32)',
            },
          ],
        },
        {
          content: '펌웨어 에뮬레이션 기술 적용',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Firmadyne, QEMU 테스팅' },
            {
              content:
                '무인이동체 특성에 맞는 peripheral을 지원하는 에뮬레이션 기술 테스트(P2IM, Halucinator)',
            },
          ],
        },
      ],
    },
    {
      title: '로봇 운영체제를 위한 결정적 재생 과 디버깅에 관한 연구',
      startedAt: '2021-03',
      endedAt: '2022-07',
      where: '고려대학교 & 텍사스 대학교 UT Dallas',
      descriptions: [
        {
          content: '오픈소스 ROS를 수정함으로써 record and replay 시스템의 비결정성 제거',
          weight: 'MEDIUM',
          descriptions: [
            { content: '구독 큐를 모니터링 하여 드롭되는 메시지 문제 해결' },
            {
              content:
                '처리된 메시지와 드롭된 메시지를 식별하기 위해 uuid를 추가함으로써 메시지 구조 변경',
            },
            { content: '통신 지연 해결을 위해 replay time에 통신 모델 변경' },
          ],
        },
      ],
    },
    {
      title: '악성 CAN 패킷 탐지를 위한 침입탐지시스템 개발',
      startedAt: '2020-10',
      endedAt: '2020-12',
      where: '고려대학교',
      descriptions: [
        {
          content: 'CAN 통신 취약점 탐지',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'flooding, fuzzy 그리고 malfunction 공격과 같은 위협을 탐지하기위해 시간 및 빈도 분석 기반 침입탐지 시스템 개발',
            },
          ],
        },
        {
          content: '실제 하드웨어 환경에서 실험',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '라즈베리 파이 4에서 Vector 사의 VN1640, PICAN3 and CANoe을 활용한 CAN 패킷 삽입',
            },
            { content: 'C언어로 CAN 패킷을 필터링 하는 침입탐지시스템 구현' },
          ],
        },
      ],
    },
    {
      title: '광고 플랫폼 서버 개발 및 데이터베이스 최적화',
      startedAt: '2020-01',
      endedAt: '2020-06',
      where: '인크로스',
      descriptions: [
        {
          content: '레거시 데이터베이스 통합',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Google ads API' }],
        },
        {
          content: 'RESTful API 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Facebook ads API, Kakao ads API, DreamFactory, ZooKeeper' }],
        },
        {
          content: '기존의 광고 집행 케이스 데이터 수집 프로세스 개선',
          weight: 'MEDIUM',
          descriptions: [{ content: '10시간에서 2시간으로 프로세스 시행시간 감소' }],
        },
        {
          content: 'MariaDB UDF 개발',
          weight: 'MEDIUM',
          descriptions: [{ content: '캐싱의 용도로 redis 활용 (Bloom Filter, HyperLogLog)' }],
        },
        {
          content: 'GraphQL의 프레임워크 vendure.io 커스터마이징',
          weight: 'MEDIUM',
          descriptions: [{ content: 'TypeORM을 RESTfulAPI로 변환' }],
        },
        {
          content: 'T deal 구현',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Firebase를 활용해 안드로이드 푸시알람 전송' }],
        },
      ],
    },
    {
      title: '실행파일 행위 자동분석 플랫폼',
      startedAt: '2019-04',
      endedAt: '2019-11',
      where: '소프트웨어 마에스트로',
      descriptions: [
        {
          content: '프로젝트 개요',
          weight: 'MEDIUM',
          descriptions: [
            { content: '사용자에 대한 영향을 막는 샌드박스 내에서 파일 분석' },
            {
              content: '동적/정적 분석 결과 및 이벤트 기반 행위 분석 결과 제공',
            },
            { content: '설치없이 웹 페이지에서 사용가능한 쉬운 접근' },
          ],
        },
        {
          content: '윈도우즈 실행파일 행위분석',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'DLL Injection, Inline Hooking(WinAPI, NtAPI)' },
            { content: 'Json 포맷 로깅' },
            {
              content: '파일 시스템, 레지스트리, 프로세스, 통신, 서비스 등 동적 분석',
            },
            { content: '파일 해시, 위협 정보 등 파일 정보 정적 분석' },
          ],
        },
        {
          content: '백엔드 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Node.JS / express / Web Socket / MySQL' },
            { content: 'Google Cloud Platform / QEMU-KVM (sandbox)' },
            {
              content:
                'spice-HTML5 + node-websockify(브라우져에서 클릭과 키보드 이벤트가 발생하고 가상머신을 화면을 출력)',
            },
            { content: 'Json Stream을 활용해 대용량 로그 파싱' },
            { content: 'Virus Total API를 활용해 실행 파일의 위험도 결정' },
          ],
        },
        {
          content: 'VCS와 협엽 관리 툴 활용',
          weight: 'MEDIUM',
          descriptions: [{ content: 'GitLab / Trello' }],
        },
        {
          content: 'https://www.youtube.com/watch?v=6f6Mmr0R51A',
        },
      ],
    },
    {
      title: '후킹을 통한 게임 메크로 무력화',
      startedAt: '2019-02',
      endedAt: '2019-04',
      where: '토이 프로젝트',
      descriptions: [
        {
          content: 'DLL 인젝션에 의해 안드로이드 에뮬레이터에서 동작하는 이미지 기반 메크로 무력화',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'AutoHotKey 또는 OpenCV와 같은 매크로' },
            { content: '매크로를 무력화 하기 위해 매크로 프로그램 분석을 통한 WinAPI 후킹' },
            { content: '매크로 프로세스 모니터링 기능' },
            { content: '매크로 동작시 DLL 인젝션에 의해 무력화' },
          ],
        },
        {
          content: 'https://github.com/tmdahr1245/Image-search-macro-analysis',
        },
      ],
    },
    {
      title: '사이버 군사훈련을 위한 랜섬웨어 및 악성코드 개발(화면잠금, 정보 탈취)',
      startedAt: '2018-02',
      endedAt: '2018-06',
      where: '대한민국 육군 사이버 작전센터',
      descriptions: [
        {
          content: 'WinAPI를 활용한 악성코드 및 랜섬웨어 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '클립보드 데이터 탈취' },
            { content: '악성코드 화면잠금' },
            { content: '문서 암호화' },
          ],
        },
      ],
    },
  ],
};

export default project;
