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
          descriptions: [
            'Windows anti-cheat development',
            'Developing game integrity verification and security monitoring features',
            'Developing and integrating game engine plugins',
            'Testing and validating security modules',
            'Applying security solutions through collaboration with game development companies',
          ],
          skillKeywords: [
            'C++',
            'C',
            'Windows',
            'MSVC',
            'Win32 API',
            'CMake',
            'Git',
            'GitLab CI/CD',
            'SW Test',
            'O-MVLL',
          ],
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
