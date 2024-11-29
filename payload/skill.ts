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
      title: 'javascript',
      // level: 2,
    },
    {
      title: 'PHP',
      // level: 1,
    },
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
      title: 'Path Planning & Collision Avoidance',
      // level: 2,
    },
    {
      title: 'Exploration',
      // level: 2,
    },,
    {
      title: 'DDS',
      // level: 2,
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: 'Docker',
      level: 3,
    },
    {
      title: 'KVM',
      level: 3,
    },
    {
      title: 'Xen',
      level: 2,
    },
    {
      title: 'VirtualBox',
      level: 2,
    },
    {
      title: 'VMware ESXi',
      level: 1,
    },
  ],
};

const automation: ISkill.Skill = {
  category: 'Automation',
  items: [
    {
      title: 'Ansible',
      level: 3,
    },
    {
      title: 'Puppet',
      level: 3,
    },
    {
      title: 'Chef',
      level: 2,
    },
    {
      title: 'Jenkins',
      level: 2,
    },
    {
      title: 'CI/CD Pipelines',
      level: 1,
    },
    {
      title: 'Infrastructure as Code',
      level: 1,
    },
  ],
};

const networkSecurity: ISkill.Skill = {
  category: 'Network Security',
  items: [
    {
      title: 'iptables',
      level: 3,
    },
    {
      title: 'OpenSSH',
      level: 3,
    },
    {
      title: 'OpenSSL',
      level: 2,
    },
    {
      title: 'NACLs',
      level: 2,
    },
    {
      title: 'VPN Technologies',
      level: 2,
    },
    {
      title: 'Intrusion Detection',
      level: 1,
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Coffee Brewing',
    },
    {
      title: "Rubik's Cube Solving",
    },
    {
      title: 'Table Tennis',
    },
    {
      title: 'Guitar Playing',
    },
    {
      title: 'Joke Telling',
    },
    {
      title: 'Duct Tape Crafting',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    kernelDevelopment,
    virtualization,
    automation,
    networkSecurity,
    misc,
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
