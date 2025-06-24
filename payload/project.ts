import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'Development of PC security SDK',
      startedAt: '2025-06',
      where: '...',
      descriptions: [
        {
          content: '...',
          weight: 'MEDIUM',
          descriptions: [{ content: '...' }],
        },
      ],
    },
    {
      title:
        'Development of a common architecture and framework for MUM-T(Manned-Unmanned Teaming)',
      startedAt: '2024-11',
      endedAt: '2025-05',
      where: 'LIGNex1',
      descriptions: [
        {
          content: 'Design and development of robot autonomous driving action software',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Autonomous driving action: moving, smoke, shooting, aiming, surveillance, tracking, lighting',
            },
          ],
        },
        {
          content: 'Development task execution logic by combining robot actions',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Development of cluster formation maintenance function' },
            {
              content:
                'Development of algorithms for finding obstacles that can be hidden from the enemy and generating obstacle locations',
            },
            { content: 'Development of a path generation algorithm for exploration' },
          ],
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
          content: 'Developing and applying swarm navigation stack task node',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'planning, exploring and mapping' },
            { content: 'change lidar basing to depth camera basing' },
            { content: 'visualizing for exploration' },
            { content: "porting other project's ros node" },
          ],
        },
        {
          content: 'Configuring simulation environment using GAZEBO',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: 'Development of software framework technology for ultra-small biomimetic robots',
      startedAt: '2022-10',
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
          descriptions: [{ content: 'Robot control plugin in Gazebo' }],
        },
        {
          content: 'Documenting SW design',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Applying and configuring Doxygen to project' }],
        },
      ],
    },
    {
      title: 'In-depth analysis study on unmanned vehicle firmware based on binary similarity',
      startedAt: '2022-04',
      endedAt: '2022-08',
      where: 'National Security Research Institute',
      descriptions: [
        {
          content: 'Analyzing firmware for unmanned vehicle ',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Classification by segment' },
            { content: 'Analyze binary similarity' },
            { content: 'Collect open/closed source firmware' },
            { content: 'Extract binary features by compiler type and version' },
          ],
        },
      ],
    },
    {
      title: 'ROS Node-based Fuzzer for Autonomous Vehicle System',
      startedAt: '2021-09',
      endedAt: '2022-02',
      where: 'Korea University',
      descriptions: [
        {
          content: 'Implementing fuzzing framework',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Input generator using probability-based algorithm' },
            {
              content:
                'Status monitor that watchs the status of the target node and detects crashes',
            },
            { content: 'Logger that saves input to rosbag file when runtime error occurs' },
          ],
        },
        {
          content:
            'Runtime error found on 21 nodes in Autoware, a ros-based open source autonomous driving software',
        },
      ],
    },
    {
      title: 'Online game blocking kernel driver development',
      startedAt: '2021-09',
      endedAt: '2021-11',
      where: 'Toy Project',
      descriptions: [
        {
          content: 'Developing a kernel driver that blocks specific processes',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Driver owns descriptor so that process list cannot be accessed from user mode',
            },
          ],
        },
        {
          content:
            'Developing a secure user-mode application that can send a list of blocking processes to the kernel driver.',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Encryption to prevent application use without authentication' },
          ],
        },
      ],
    },
    {
      title: 'Windows Messenger hacking: Changing files to be transmitted',
      startedAt: '2021-07',
      endedAt: '2021-09',
      where: 'Toy Project',
      descriptions: [
        {
          content: 'Windows messenger app file transfer code analysis',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Analyzing file transfer APIs through reverse engineering' }],
        },
        {
          content: 'Developing a code injecter (agent)',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Injecting a DLL that acts as malware into the messenger app' },
          ],
        },
        {
          content: 'Developing Malware DLL',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Hooking File Transfer API' },
            { content: 'Including the executable to be replaced in the resource' },
          ],
        },
      ],
    },
    {
      title: 'Adversarial attacks targeting ROS-based autonomous driving software',
      startedAt: '2021-06',
      endedAt: '2021-08',
      where: 'Incognito',
      descriptions: [
        {
          content: 'FGSM attack on darknet yolov3',
        },
        {
          content: 'NMS-based algorithm adopted from daedalus paper',
        },
        {
          content: 'Paralysis of camera recognition function of autonomous driving system',
        },
      ],
    },
    {
      title: 'Autoware source code analysis, a ros-based open source autonomous driving software',
      startedAt: '2021-06',
      endedAt: '2021-08',
      where: 'Korea University',
      descriptions: [
        {
          content:
            'Documenting an analysis result by categorizing into Localization / Detection / Decision / Planning',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'gnss localizer, lidar localizer, dead reckoner' },
            { content: 'lidar and vision detecter,tracker, fusion detector, motion predictor' },
            {
              content:
                'a conservative, independent decision-making system for autonomous driving systems',
            },
            { content: 'global Planner, local Planner, driving stabilizer' },
          ],
        },
      ],
    },
    // {
    //   title: 'Methodology for finding logical bugs in autonomous driving software',
    //   startedAt: '2021-05',
    //   endedAt: '2021-08',
    //   where: 'Korea University',
    //   descriptions: [
    //     {
    //       content:
    //         'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
    //     },
    //     {
    //       content:
    //         'Successfully trained over 5,000 participants in system administration and security. ',
    //     },
    //   ],
    // },
    {
      title:
        'Study on developing an automated framework for detecting vulnerabilities in unmanned vehicles',
      startedAt: '2021-04',
      endedAt: '2021-11',
      where: 'National Security Research Institute',
      descriptions: [
        {
          content: 'Review of introduction of firmware emulation technology',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Planning an emulation scenario' },
            {
              content:
                'Classification and analysis of firmware for various platforms (ROS/Linux/Nuttx/STM32)',
            },
          ],
        },
        {
          content: 'Applying firmware emulation technology',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Testing Firmadyne and QEMU' },
            {
              content:
                'Testing of emulation technology(P2IM, Halucinator) that can support peripherals for unmanned vehicles',
            },
          ],
        },
      ],
    },
    {
      title: 'Research on Deterministic Replay and Debugging for Robot Operating System',
      startedAt: '2021-03',
      endedAt: '2022-07',
      where: 'Korea University & University of Texas at Dallas',
      descriptions: [
        {
          content:
            'Eliminating nondeterminism in the record and replay system by modifying open source ROS',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Solving droped messages problem by monitoring the subscription queue' },
            {
              content:
                'Changing message structure by adding uuid to identify droped and processed messages',
            },
            { content: 'Converting the communication model in replay time to solve delay' },
          ],
        },
      ],
    },
    {
      title: 'Development of an Intrusion Detection System for malicious CAN communication packets',
      startedAt: '2020-10',
      endedAt: '2020-12',
      where: 'Korea University',
      descriptions: [
        {
          content: 'Focusing on vulnerabilities in CAN communication',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Developing a time and frequency analysis-based Intrusion Detection System (IDS) to detect threats like flooding, fuzzy, and malfunction attacks',
            },
          ],
        },
        {
          content: 'Experiments in real hardware environments',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                "Injecting CAN packets via Vector's VN1640, PICAN3 and CANoe on Raspberry Pi 4. ",
            },
            { content: 'Implementing an IDS that filters CAN packets in C language.' },
          ],
        },
      ],
    },
    {
      title: 'Advertising platform backend development and DB optimization',
      startedAt: '2020-01',
      endedAt: '2020-06',
      where: 'Incross',
      descriptions: [
        {
          content: 'Legacy database intergration',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Google ads API' }],
        },
        {
          content: 'RESTful API development',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Facebook ads API, Kakao ads API, DreamFactory, ZooKeeper' }],
        },
        {
          content: 'Improvement existing advertising execution case data collection process',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Reduced execution time from 10 hours to 2 hours' }],
        },
        {
          content: 'MariaDB UDF Development',
          weight: 'MEDIUM',
          descriptions: [{ content: 'redis for caching (Bloom Filter, HyperLogLog)' }],
        },
        {
          content: 'Customizing vendure.io, a GraphQL-based framework ',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Converting TypeORM to RESTfulAPI' }],
        },
        {
          content: 'Implementing T deal',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Sending push notifications to Android using Firebase' }],
        },
      ],
    },
    {
      title: 'Automated analysis platform for executable file behavior',
      startedAt: '2019-04',
      endedAt: '2019-11',
      where: 'Software Maestro',
      descriptions: [
        {
          content: 'Project intention',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Analyze files within a sandbox to prevent impact on users' },
            {
              content:
                'Provides dynamic/static analysis results and event-based behavior analysis results',
            },
            { content: 'Easy to use on the web without installation' },
            { content: 'Analysis possible within the webpage' },
          ],
        },
        {
          content: 'Windows executable behavior analysis',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'DLL Injection, Inline Hooking(WinAPI, NtAPI)' },
            { content: 'Json format logging' },
            {
              content:
                'Dynamic analysis of File System, Registry, Process, Communication, and Service',
            },
            { content: 'Static analysis of file info(file hash, risk ...)' },
          ],
        },
        {
          content: 'Backend',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Node.JS / express / Web Socket / MySQL' },
            { content: 'Google Cloud Platform / QEMU-KVM (sandbox)' },
            {
              content:
                'spice-HTML5 + node-websockify(Output the vm screen and generate click and keyboard events in the browser)',
            },
            { content: 'Parsing large logs using Json Stream' },
            { content: 'Determining the risk of executable files using Virus Total API' },
          ],
        },
        {
          content: 'Using VCS and collaboration management tools',
          weight: 'MEDIUM',
          descriptions: [{ content: 'GitLab / Trello' }],
        },
        {
          content: 'https://www.youtube.com/watch?v=6f6Mmr0R51A',
        },
      ],
    },
    {
      title: 'Blocking game macro program using hooking',
      startedAt: '2019-02',
      endedAt: '2019-04',
      where: 'Toy Project',
      descriptions: [
        {
          content:
            'Defense against image-based macros in Android emulators by leveraging DLL injection',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Macro like AutoHotKey or OpenCV' },
            { content: 'Hooking WinAPI through macro program analysis to block macros' },
            { content: 'Macro process monitoring' },
            { content: 'When running macro, block it using DLL injection ' },
          ],
        },
        {
          content: 'https://github.com/tmdahr1245/Image-search-macro-analysis',
        },
      ],
    },
    {
      title:
        'Development of ransomware and malware for cyber military training(screen lock, information theft)',
      startedAt: '2018-02',
      endedAt: '2018-06',
      where: 'ROKA Army Headquarters Cyber ​​Operations Center',
      descriptions: [
        {
          content: 'Developing malware and ransomware using Win32 API',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Stealing clipboard data' },
            { content: 'Malware locking screen' },
            { content: 'Document Encryption' },
          ],
        },
      ],
    },
  ],
};

export default project;
