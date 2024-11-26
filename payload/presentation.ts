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
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net/',
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
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
        {
          content: 'Slideshare:',
          postHref: 'https://www.slideshare.net/',
        },
      ],
    },
  ],
};

export default presentation;
