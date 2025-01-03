import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '고려대학교 (Computer & Communication Security Laboratory (CCS Lab))',
      subTitle: '컴퓨터학과 석사 졸업',
      // descriptions: [
      //   'Computer & Communication Security Laboratory (CCS Lab)',
      //   'Thesis: AutoDBG: Deterministic Replay and Debugging for Robot Operating System',
      // ],
      startedAt: '2020-09',
      endedAt: '2022-08',
    },
    {
      title: '가톨릭대학교',
      subTitle: '컴퓨터정보공학부 학사 졸업',
      // descriptions: ['On leave for 2 years: mandatory military service at RoK ARMY'],
      startedAt: '2014-03',
      endedAt: '2020-08',
    },
  ],
};

export default education;
