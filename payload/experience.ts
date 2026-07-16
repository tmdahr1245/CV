import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: 'Smilegate',
      positions: [
        {
          title: 'Anti-Cheat Software Engineer',
          startedAt: '2025-06',
          descriptions: [
            'Windows and Android anti-cheat development',
            'Integrity verification and runtime tamper detection',
            'Security module health checks, binary protection/obfuscation, and performance tuning',
            'CI/CD integration for protection, verification, QA builds, and deployment automation',
            'Integration with Native/Unity/Unreal clients and collaboration with game studios',
          ],
          skillKeywords: [
            'C++',
            'C',
            'Windows',
            'Android',
            'NDK',
            'Win32 API',
            'CMake',
            'GitLab CI/CD',
            'Docker',
            'Kubernetes',
            'Binary Protection',
            'Reverse Engineering',
          ],
        },
      ],
    },
    {
      title: 'LIG Nex1',
      positions: [
        {
          title: 'Robotics Software Engineer',
          startedAt: '2022-10',
          endedAt: '2025-05',
          descriptions: [
            'Design and implementation of robotics autonomous-driving algorithms',
            'Interoperation across robotics software modules',
            'Software vulnerability review and remediation across the defense development lifecycle',
            'Coding-rule and MISRA C++ verification with code patches for violations',
            'SW testing that embeds security and quality checks into the development stages',
            'Collaboration with consortium partners (partner companies and graduate schools)',
          ],
          skillKeywords: [
            'C++',
            'Python',
            'ROS2',
            'Linux',
            'C',
            'MISRA C++',
            'SW Test',
            'Secure SDLC',
          ],
        },
      ],
    },
  ],
};

export default experience;
