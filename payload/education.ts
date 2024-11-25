import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Korea University',
      subTitle: 'M.S. in Computer Science and Engineering',
      startedAt: '2020-09',
      endedAt: '2022-08',
    },
    {
      title: 'The Catholic University of Korea',
      subTitle: 'Graduated',
      startedAt: '2014-03',
      endedAt: '2020-08',
    },
  ],
};

export default education;
