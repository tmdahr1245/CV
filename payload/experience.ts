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
            'Steering Kernel patching and updates for various distributions',
            'Automating deployment and integration processes for Linux servers',
            'Spearheading initiatives to enhance Linux kernel security',
            'Collaborating with global developers to coordinate code contributions',
          ],
          skillKeywords: ['C', 'Linux', 'Kernel', 'Security', 'Automation'],
        },
      ],
    },
    {
      title: 'Incross',
      positions: [
        {
          title: 'Backend Software Engineer',
          startedAt: '2020-01',
          endedAt: '2020-06',
          descriptions: [
            'Steering Kernel patching and updates for various distributions',
            'Automating deployment and integration processes for Linux servers',
            'Spearheading initiatives to enhance Linux kernel security',
            'Collaborating with global developers to coordinate code contributions',
          ],
          skillKeywords: ['C', 'Linux', 'Kernel', 'Security', 'Automation'],
        },
      ],
    },
  ],
};

export default experience;
