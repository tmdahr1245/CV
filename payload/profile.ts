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
    title: 'Seungmok kim',
    small: '(Software Engineer)',
  },
  contact: [
    {
      title: 'tmdahr1245@naver.com',
      link: 'mailto:tmdahr1245@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email.',
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
      title: '한국어 버젼을 원한다면 여기를 클릭하세요.',
      link: 'https://tmdahr1245.github.io/CV/KR',
      icon: faCalendar,
    },
  ],
  notice: {
    title: '.',
    icon: faBell,
  },
};

export default profile;
