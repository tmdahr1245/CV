import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: 'Poster: Deterministic Replay and Debugging for Robotic Systems',
      subTitle: '39th Annual Computer Security Applications Conference (ACSAC) 2023',
      at: '2023-12',
      descriptions: [
        {
          content:
            '결정적 버그재현을 위해 메시지 드랍과 네트워크 지연을 해결하여 ROS 디버깅 시 비결정성을 제거하는 연구',
        },
        {
          content: 'PDF:',
          postHref: 'https://github.com/tmdahr1245/CV/blob/master/docs/robodbg-poster-acsac23.pdf',
        },
      ],
    },
    {
      title:
        'Poster: AutoInsight: A Comprehensive Testing and Analysis Platform for Autonomous Driving Systems',
      subTitle: 'Fed Supernova 2021',
      at: '2021-09',
      descriptions: [
        {
          content: '자율주행 시스템에서 버그를 탐지하고 추적하며 근본 원인을 다루는 연구',
        },
        {
          content: 'PDF:',
          postHref:
            'https://github.com/tmdahr1245/CV/blob/master/docs/autoinsight-poster-fed21.pdf',
        },
      ],
    },
  ],
};

export default presentation;
