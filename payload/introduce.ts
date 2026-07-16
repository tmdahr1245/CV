import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'I am a software engineer who embeds defensive technologies into products, focusing on client- and binary-level security. I currently work on Windows and Android game anti-cheat, covering integrity verification, runtime tamper detection, bypass prevention, binary protection and obfuscation, and security module development. I analyze attack vectors in production environments, design and implement defenses, and integrate protection, verification, and deployment automation into CI/CD pipelines. I am strong in low-level stacks such as C/C++, Win32 API, reverse engineering, and binary analysis, and I aim to build systems that balance performance and security.',
    'Previously, I worked for about three years as an autonomous-driving software engineer. During my master’s program, I researched non-determinism and fault detection in ROS-based autonomous systems. Building on experience with large-scale system stability and reliability, I am expanding toward security platforms and automation.',
    'I enjoy solving problems and turning ideas into working software, and I continually look for ways to improve the code. I am fluent in both Windows and Linux, and I actively learn through official docs, open source, literature, and AI tools. I have planned and built toy projects across domains, and I value a culture of sharing knowledge and growing together.',
  ],
  sign: 'Seungmok',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
