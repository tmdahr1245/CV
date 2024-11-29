import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Development of a common architecture and framework for manned and unmanned complex systems',
      startedAt: '2024-11',
      where: 'LIGNex1',
      descriptions: [
        {
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      title: 'Development of software framework technology for ultra-small biomimetic robots',
      startedAt: '2022-12',
      endedAt: '2024-11',
      where: 'LIGNex1',
      descriptions: [
        {
          content:
            '자율주행 SW 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '전역경로 알고리즘 개발' },
            { content: '지역경로 및 충돌회피 알고리즘 개발' },
            { content: '포인트 클라우드 생성 기능 개발' },
          ],
        },
        {
          content:
            '군집 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '군집 이동 대형 유지 기능 개발' },
            { content: '군집 탐색 영역 분할 알고리즘 개발' },
            { content: '...' },
          ],
        },
        {
          content:
            'SW 신뢰성 시험',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'SW 보안성 검증' },
            { content: 'SW 코딩 규칙 검증' },
          ],
        },
        {
          content:
            '시뮬레이션 환경에서의 로봇 제어',
          weight: 'MEDIUM',
          descriptions: [
            { content: '가제보 내부에서 로봇 제어 플러그인 개발' },
            { content: '...' },
          ],
        },
      ],
    },
    {
      title: 'Ultra-small ground robot swarm operation control technology',
      startedAt: '2024-06',
      endedAt: '2024-08',
      where: 'LIGNex1',
      descriptions: [
        {
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      title: 'Research on Deterministic Replay and Debugging for Robot Operating System',
      startedAt: '2021-03',
      endedAt: '2022-07',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title: 'In-depth analysis study on unmanned vehicle firmware based on binary similarity',
      startedAt: '2022-04',
      endedAt: '2022-08',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title: 'ROS Node-based Fuzzer for Autonomous Vehicle System',
      startedAt: '2021-09',
      endedAt: '2022-02',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title: 'Methodology for finding logical bugs in autonomous driving software',
      startedAt: '2021-05',
      endedAt: '2021-08',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Study on developing an automated framework for detecting vulnerabilities in unmanned vehicles',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
  ],
};

export default project;
