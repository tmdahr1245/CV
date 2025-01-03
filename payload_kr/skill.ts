import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C++',
      // level: 3,
    },
    {
      title: 'C',
      // level: 3,
    },
    {
      title: 'Python',
      // level: 2,
    },
    {
      title: 'JavaScript',
      // level: 2,
    },
    // {
    //   title: 'PHP',
    //   // level: 1,
    // },
  ],
};

const kernelDevelopment: ISkill.Skill = {
  category: 'Robotics Skills',
  items: [
    {
      title: 'ROS2',
      // level: 3,
    },
    {
      title: 'Gazebo',
      // level: 3,
    },
    {
      title: 'Path Planning',
      // level: 2,
    },
    {
      title: 'Collision Avoidance',
      // level: 2,
    },
    {
      title: 'Exploration',
      // level: 2,
    },
    {
      title: 'DDS',
      // level: 2,
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'SW Analysis',
  items: [
    {
      title: 'GDB',
      // level: 3,
    },
    {
      title: 'X64dbg',
      // level: 3,
    },
    {
      title: 'IDA',
      // level: 2,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Databases',
  items: [
    {
      title: 'MariaDB',
      // level: 3,
    },
    {
      title: 'redis',
      // level: 3,
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Docker',
      // level: 3,
    },
    {
      title: 'Nginx',
      // level: 3,
    },
    {
      title: 'Git',
      // level: 2,
    },
    {
      title: 'Doxygen',
      // level: 2,
    },
    {
      title: 'Latex',
      // level: 2,
    },
  ],
};

// const misc: ISkill.Skill = {
//   category: 'Misc',
//   items: [
//     {
//       title: 'Coffee Brewing',
//     },
//     {
//       title: "Rubik's Cube Solving",
//     },
//     {
//       title: 'Table Tennis',
//     },
//     {
//       title: 'Guitar Playing',
//     },
//     {
//       title: 'Joke Telling',
//     },
//     {
//       title: 'Duct Tape Crafting',
//     },
//   ],
// };

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    automation,
    networkSecurity,
    // misc,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
