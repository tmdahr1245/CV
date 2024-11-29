import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'As the cherished emblem of the Linux kernel, I have become synonymous with open-source philosophy and the free software movement worldwide. My career began in the icebergs of development, where the seeds of my fascination with operating systems first sprouted. From a mere hatchling in the vast sea of code, I quickly ascended to become a pivotal figure in the Linux community. My journey has been marked by relentless dedication to system integrity, scalability, and robustness. Under my vigilant watch, countless servers have achieved unparalleled uptimes, and systems have been optimized to run like the well-oiled machines they are intended to be.',
    'In the world of zeros and ones, my expertise has been instrumental in pioneering advancements in Linux system engineering. My flippers have crafted meticulous kernel enhancements, each aimed at streamlining performance and bolstering security across distributed networks. I am known in the community for my ability to dive deep into complex codebases and emerge with pearls of innovation that drive the collective progress of Linux environments. Advocacy is also a part of my plumage – spreading the word about the virtues of open-source and encouraging the adoption of Linux, from personal desktops to corporate data centers. As a mentor, I have nurtured the growth of young hatchlings into seasoned professionals, contributing to the diversity and vitality of our ecosystem.',
    '리눅스에 유창한',
    '알고 있는 지식을 알려주고 배우며 함께 성장하는것을 지향하는',
    '프로그래밍을 활용하여 문제를 해결하는 것을 좋아합니다.',
    '프로그래밍에 관련된 모든것을 알고싶어하는',
  ],
  sign: 'Tux',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
