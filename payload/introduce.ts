import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'My name is Seungmok Kim, and i am a software developer with diverse experience in security and anti-cheat development. Currently, I am involved in Windows anti-cheat development, working on game integrity verification, security monitoring features, code protection technologies, and game engine plugin development. I focus on developing game security solutions including security module development, abnormal execution environment detection, and bypass attempt prevention logic implementation. During my master`s degree, I developed academic capabilities in security and verification by conducting research on fault detection in autonomous driving system software. I am proficient in various technology stacks such as C++, C, Windows, Win32 API, security module development, and reverse engineering prevention technologies, and I have strengths in solving security problems and performance optimization.',
    'I enjoy solving problems and implementing ideas through programming. I enjoy low-level development and always think about how to improve the current code. I am fluent in Windows / Linux environments and utilize various methods such as AI, searching, books, official documents, and open source analysis to gain knowledge about reverse engineering, binary analysis, and security technologies. I have experience in planning and developing toy projects in various environments. I pursue a development culture where we share knowledge, learn, and grow together.',
  ],
  sign: 'Seungmok',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
