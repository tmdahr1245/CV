import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'LIGNex1',
      positions: [
        {
          title: 'Robotics Software Engineer',
          startedAt: '2022-10',
          descriptions: [
            'Designing and implementing robotics autonomous driving algorithm',
            'Interconnecting between each robotics foftware module',
            'Optimizing source code and analyzing performance in a limited environment',
            'Testing and Validating robotics software',
            'Collaborating with consortium(partner company and graduate school) to achieve collaborative development',
          ],
          skillKeywords: ['C++', 'ROS2', 'Linux', 'C', 'SW Test', 'Multi Thread'],
        },
      ],
    },
  ],
};

export default experience;
