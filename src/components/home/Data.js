import HeroImg from './media/hero.png'

import TechLogo1 from './media/techLogos/1.png'
import TechLogo2 from './media/techLogos/2.png'
import TechLogo3 from './media/techLogos/3.png'
import TechLogo4 from './media/techLogos/4.png'
import TechLogo5 from './media/techLogos/5.png'
import TechLogo6 from './media/techLogos/6.png'
import TechLogo7 from './media/techLogos/7.png'
import TechLogo8 from './media/techLogos/8.png'
import TechLogo9 from './media/techLogos/9.png'
import TechLogo10 from './media/techLogos/10.png'
import TechLogo11 from './media/techLogos/11.png'
import TechLogo12 from './media/techLogos/12.png'

import LinkedinLogo from './media/contactLogos/linkedin.png'
import GithubLogo from './media/contactLogos/github.png'
import StackoverflowLogo from './media/contactLogos/stackoverflow.png'

export const Intro = {
  heroImg: HeroImg,
  process: ['Design', 'Create', 'Deploy'],
  header1: 'Janath Perera',
  header2: 'Full Stack',
  header3: 'Developer',
  paragraph1: 'A back-end developer with a knack for front-end design \n and creation.',
  paragraph2: 'Building websites, web applications, databases, and back end systems from the ground up!',
  paragraph3: 'A coding enthusiast turned web developer who now handles both the front end design and creation along with back end logic to power web applications.',
  imageCaption: 'Shibuya Crossing\nTokyo, Japan'
}

export const Process = {
  bodyText: [
    'I create all my websites', ' from scratch. ', 'No generic templates\nor themes.'
  ]
}

export const About = {
  section1: {
    header: 'ABOUT.',
    subHeader: 'Programmer / Explorer',
    body: 'I love discovering new tech, new countries, and new cultures. I travel any chance I get and my computers never more than an arms reach away.'
  },
  section2: {
    header: '',
    subHeader: 'Developing Developer',
    body: 'The learning never stops!\nStaying up to date with the latest trends in web and app development.\nConstantly updating my skills with new frameworks, new libraries, and new languages.'
  },
  learning: {
    header: 'Currently looking into...',
    footer: 'React Native'
  },
  highlightCaption : 'A full stack developer\nwith a passion for all things tech.'
}

export const MobileFirst = {
  header: 'Mobile First',
  body: 'As of 2019, more than 50% of the worlds web traffic has come from mobile devices.\nEnsure your visitors get the best experience across all devices.'
}

export const ServicesAndTech = {
  services: {
    textComponent: {
      header: 'SERVICES.',
      subHeader: 'Full Stack Web Developer',
      body: 'Complete website and web application development and management.\nFrom initial layout and design to deployment and hosting.',
    },
    servicesOffered: [
      {
        header: 'UI / UX Design',
        body: [
          'Design and Prototyping',
          'Branding'
        ]
      },
      {
        header: 'Front End Development',
        body: [
          'Formating and styling mark up',
          'Animation scripting'
        ]
      },
      {
        header: 'Back End Development',
        body: [
          'Back end logic for web applications',
          'Database design and creation'
        ]
      },
      {
        header: 'Deployment',
        body: [
          'Hosting and Routing',
          'Server set-up'
        ]
      }
    ]
  },
  tech: {
    textComponent: {
      header: 'TECH.',
      subHeader: 'Programmer - Designer',
      body: 'Initially a python programmer, the urge to create application as they were envisioner paved the way to finding the most programmatic methods of design.',
    },
    techLogos: [TechLogo1,TechLogo2,TechLogo3,TechLogo4,TechLogo5,TechLogo6,TechLogo7,TechLogo8,TechLogo9,TechLogo10,TechLogo11,TechLogo12,]
  }
}

export const FirstImpressions = {
  header: 'First Impressions',
  body: 'After a webpage loads, the average user takes only 0.5 seconds to a form an opinion of you\nor your product. Make it count.'
}

export const Contact = {
  email: 'inquiries@janathperera.com',
  other: [
    {
      logo: LinkedinLogo,
      link: 'https://www.linkedin.com/in/janath-perera-6121a7175/'
    },
     {
      logo: GithubLogo,
      link: 'https://github.com/jdlk07'
    },
    {
      logo: StackoverflowLogo,
      link: 'https://stackoverflow.com/users/9885094/jdlk07'
    }
  ]
}

export const Footer = {
  copyright: '2019 Design & build by Janath Dinesh Perera',
  poweredBy: 'Powered with ',
  logo: TechLogo3
}
