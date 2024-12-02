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
            'Study addressing ROS non-determinism in debugging by tackling message drops and network delays for deterministic replay.',
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
          content:
            'Study on detecting corner case bugs in autonomous driving systems, tracking them, and finding their root causes.',
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
