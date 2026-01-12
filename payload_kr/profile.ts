import { faEnvelope, faPhone, faBlog } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faBell, faCalendar } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/F1QE51673852021.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김승목',
    small: '(소프트웨어 엔지니어)',
  },
  contact: [
    {
      title: 'tmdahr1245@naver.com',
      link: 'mailto:tmdahr1245@naver.com',
      icon: faEnvelope,
    },
    {
      title: '이메일을 통해 연락 부탁드립니다.',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://tmdahr1245.tistory.com',
      icon: faBlog,
    },
    {
      link: 'https://www.linkedin.com/in/seungmok-kim-242990179/',
      icon: faLinkedin,
    },
    {
      title: 'If you want the english version, click here.',
      link: 'https://tmdahr1245.github.io/CV/',
      icon: faCalendar,
    },
  ],
  notice: {
    title: '저는 현재 구직중입니다. 자유롭게 연락주세요 :)',
    icon: faBell,
  },
};

export default profile;
