import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Korea University (Computer & Communication Security Laboratory (CCS Lab))',
      subTitle: 'M.S. in Computer Science and Engineering',
      // descriptions: [
      //   'Computer & Communication Security Laboratory (CCS Lab)',
      //   'Thesis: AutoDBG: Deterministic Replay and Debugging for Robot Operating System',
      // ],
      startedAt: '2020-09',
      endedAt: '2022-08',
    },
    {
      title: 'The Catholic University of Korea',
      subTitle: 'B.S. in Computer Science and Information Engineering',
      // descriptions: ['On leave for 2 years: mandatory military service at RoK ARMY'],
      startedAt: '2014-03',
      endedAt: '2020-08',
    },
  ],
};

export default education;
