//Import Images
import athlete from './img/athlete-small.png';
import goodtimes from './img/goodtimes-small.png';
import theracer from './img/theracer-small.png';
import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.jpg';
import theracer2 from './img/the-racer2.jpg';
import vbcdesktop from './img/projects/vbc-desktop.png';
import vbcmobile from './img/projects/iphonex783.png';
//SVG ICONS
import squarespaceIcon from './img/icons/squarespace-brands.svg';
import paintBrush from './img/icons/paint-brush.svg';
import crop from './img/icons/crop.svg';
//FONT AWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const projectState = () => {
  return [
    {
      title: 'Project 1',
      mainImg: athlete,
      secondaryImg: athlete2,
      url: '/work/the-athlete',
      description:
        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
      colors: [
        {
          hexCode: '#7FADAA',
        },
        {
          hexCode: '#173633',
        },
        {
          hexCode: '#070707',
        },
      ],
    },
    {
      title: 'Project 2',
      mainImg: goodtimes,
      url: '/work/good-times',
      secondaryImg: goodtimes2,
      description:
        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'Project 3',
      mainImg: theracer,
      url: '/work/the-racer',
      secondaryImg: theracer2,
      description:
        '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
      awards: [
        {
          title: 'Truly A masterpiece',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'Fresh look on a brutal sport.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
        {
          title: 'It’s okay lmao.',
          description:
            '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
        },
      ],
    },
    {
      title: 'VOUS Beauty Clinic',
      secondaryTitle: 'E-Commerce',
      url: 'https://vousbeautyclinic.com/skincare',
      mainImg: vbcdesktop,
      secondaryImg: vbcmobile,
      description:
        'VOUS Beauty Clinic specializes in cosmetic treatments & solutions. Customized for the modern and multifaceted lifestyle.',
      roles: [
        {
          iconFa: squarespaceIcon,
          description: '“Updated and maintained the Squarespace website”',
        },
        {
          iconFa: paintBrush,
          description: '“Added custom features and styling”',
        },
        {
          iconFa: crop,
          description: '“Oversaw the website alignment, typography, UI design”',
        },
      ],

      icons: [
        {
          title: 'HTML5',
          imgUrl: 'https://img.icons8.com/color/48/000000/html-5.png',
          linkUrl: 'https://www.w3.org/html/',
        },
        {
          title: 'CSS3',
          imgUrl: 'https://img.icons8.com/color/48/000000/css3.png',
          linkUrl: 'https://www.w3schools.com/css/',
        },
        {
          title: 'less',
          imgUrl: 'https://lesscss.org/public/img/less_logo.png',
          linkUrl: 'https://lesscss.org/',
        },
        {
          title: 'JavaScript',
          imgUrl: 'https://img.icons8.com/color/48/000000/javascript.png',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          title: 'Squarespace',
          imgUrl:
            'https://cdn.iconscout.com/icon/free/png-256/squarespace-3-739563.png',
          linkUrl:
            'https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds',
        },
        {
          title: 'Glide.js',
          imgUrl:
            'https://camo.githubusercontent.com/9269a9ed4f6937f05b84f3e09abf733e57b90e52af260a6861ba189f72ee2ada/68747470733a2f2f676c6964656a732e636f6d2f696d616765732f676c6964656a732d6c6f676f747970652d6461726b2e706e67',
          linkUrl: 'https://glidejs.com/',
        },
        {
          title: 'npm',
          imgUrl: 'https://img.icons8.com/color/344/npm.png',
          linkUrl: 'https://www.npmjs.com/',
        },
      ],
      highlights: {
        title: 'Designing the shop category pages and product detail page',
        description: [
          {
            title: 'My Role',
            description: 'Utilized the sticky positioning on desktop view',
          },
          {
            title: 'My Role',
            description:
              'Used Glider.js to create a carousel with related products',
          },
        ],
      },
      colours: [
        {
          hexCode: '#7FADAA',
        },
        {
          hexCode: '#173633',
        },
        {
          hexCode: '#070707',
        },
      ],
      fonts: [
        {
          fontFamily: 'Bodoni Moda',
          fontWeight: '600',
          letterSpacing: '0.05em',
        },
        {
          fontFamily: 'Quicksand',
          fontWeight: '300',
          letterSpacing: '0.02em',
        },
      ],
    },
  ];
};
export default projectState;
