import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title:
        'Development of a common architecture and framework for MUM-T(Manned-Unmanned Teaming)',
      startedAt: '2024-11',
      where: 'LIGNex1',
      descriptions: [
        {
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      title: 'Development of software framework technology for ultra-small biomimetic robots',
      startedAt: '2022-12',
      endedAt: '2024-11',
      where: 'LIGNex1',
      descriptions: [
        {
          content: 'Autonomous Drinving Software Development',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Global Planning Algorithm Development' },
            { content: 'Local Planning and Collision Avoidance Algorithm Development' },
            { content: 'Point cloud generation development' },
          ],
        },
        {
          content: 'Swarm robot function development',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Swarm formation control development' },
            { content: 'Swarm search area segmentation algorithm development' },
            { content: '...' },
          ],
        },
        {
          content: 'SW Testing',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'SW vulnerability verification' },
            { content: 'SW coding rules verification' },
          ],
        },
        {
          content: 'Robot control in a simulation environment',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Robot control plugin in Gazebo' }, { content: '...' }],
        },
      ],
    },
    {
      title: 'Ultra-small ground robot swarm operation control technology',
      startedAt: '2024-01',
      endedAt: '2024-08',
      where: 'LIGNex1',
      descriptions: [
        {
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      title: 'Research on Deterministic Replay and Debugging for Robot Operating System',
      startedAt: '2021-03',
      endedAt: '2022-07',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title: 'In-depth analysis study on unmanned vehicle firmware based on binary similarity',
      startedAt: '2022-04',
      endedAt: '2022-08',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title: 'ROS Node-based Fuzzer for Autonomous Vehicle System',
      startedAt: '2021-09',
      endedAt: '2022-02',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title: 'Methodology for finding logical bugs in autonomous driving software',
      startedAt: '2021-05',
      endedAt: '2021-08',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Study on developing an automated framework for detecting vulnerabilities in unmanned vehicles',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Countermeasures against adversarial attacks targeting ROS-based autonomous driving software',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Autoware source code analysis, a ros-based open source autonomous driving software',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Development of an intrusion detection system for malicious CAN communication packets',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Advertising platform backend development and DB optimization',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Online game blocking kernel driver development',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Messenger hacking: Changing files to be transmitted',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Development of an automated analysis platform for executable file behavior',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Development of a multi-person access random anonymous chat program',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Development of game macro neutralization program using hooking',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Development of ransomware and malware for practice(screen lock, information theft)',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title:
        'Development of on-campus course review application',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'Open Source Community',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
  ],
};

export default project;
