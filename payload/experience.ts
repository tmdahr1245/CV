import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Smilegate',
      positions: [
        {
          title: 'Anti Cheat Software Engineer',
          startedAt: '2025-06',
          descriptions: [],
          skillKeywords: ['C++', 'C', 'Windows', 'SW Test'],
        },
      ],
    },
    {
      title: 'LIGNex1',
      positions: [
        {
          title: 'Robotics Software Engineer',
          startedAt: '2022-10',
          endedAt: '2025-05',
          descriptions: [
            'Designing and implementing robotics autonomous driving algorithm',
            'Interconnecting between each robotics software module',
            'Optimizing source code and analyzing performance in a limited environment',
            'Testing and Validating robotics software',
            'Collaborating with consortium(partner company and graduate school) to achieve collaborative development',
          ],
          skillKeywords: ['C++', 'Python', 'ROS2', 'Linux', 'C', 'SW Test'],
        },
      ],
    },
  ],
};

export default experience;
