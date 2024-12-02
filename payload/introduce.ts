import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'My name is Seungmok Kim, and I am passionate about autonomous driving and robotics technology development as a robot software engineer. I have been gaining practical experience for autonomous driving design, software optimization and verification, and module casting in robotics capabilities for more than two years. During my master`s degree, I developed my theoretical and practical capabilities by conducting research on ROS-based non-deterministic problem solving and fault detection in autonomous driving systems. I am proficient in core robotics software technologies such as C++, Python, ROS2, Path Planning, and Collision Avoidance and i have strengths in robotics problem solving and performance optimization. I would like to contribute to the development of robotics and autonomous driving technology through continuous learning and collaboration.',
    'I enjoy solving problems and implementing ideas through programming. I am interested in low-level development and always think about how to improve the current code. I am fluent in the Linux environment and use various methods such as searching, books, official documents, and open source analysis to obtain the necessary knowledge. I do my best to take responsibility for the work assigned to me until the end, and I have gained development experience in various environments through my experience in planning and producing toy projects. I have a deep passion for programming and pursue a development culture where we share knowledge, learn, and grow together.',
  ],
  sign: 'Seungmok',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
