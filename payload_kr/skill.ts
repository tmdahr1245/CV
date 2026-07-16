import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C++',
    },
    {
      title: 'C',
    },
    {
      title: 'Python',
    },
  ],
};

const platforms: ISkill.Skill = {
  category: 'Platforms',
  items: [
    {
      title: 'Windows',
    },
    {
      title: 'Android',
    },
    {
      title: 'Linux',
    },
  ],
};

// const kernelDevelopment: ISkill.Skill = {
//   category: 'Robotics Skills',
//   items: [
//     {
//       title: 'ROS2',
//       // level: 3,
//     },
//     {
//       title: 'Gazebo',
//       // level: 3,
//     },
//     {
//       title: 'Path Planning',
//       // level: 2,
//     },
//     {
//       title: 'Collision Avoidance',
//       // level: 2,
//     },
//     {
//       title: 'Exploration',
//       // level: 2,
//     },
//     {
//       title: 'DDS',
//       // level: 2,
//     },
//   ],
// };

const analysis: ISkill.Skill = {
  category: 'SW Analysis',
  items: [
    {
      title: 'IDA',
    },
    {
      title: 'X64dbg',
    },
    {
      title: 'GDB',
    },
  ],
};

const securityEngineering: ISkill.Skill = {
  category: 'Security Engineering',
  items: [
    {
      title: 'Binary Protection',
    },
    {
      title: 'Reverse Engineering',
    },
    {
      title: 'Integrity Verification',
    },
  ],
};

const devops: ISkill.Skill = {
  category: 'Build & DevOps',
  items: [
    {
      title: 'GitLab CI/CD',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Kubernetes',
    },
    {
      title: 'CMake',
    },
    {
      title: 'Git',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, platforms, analysis, securityEngineering, devops],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
