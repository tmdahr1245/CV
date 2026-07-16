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
  tooltip: '1: Beginner\n2: Hobby / side-project level\n3: Production-ready level',
};

export default skill;
