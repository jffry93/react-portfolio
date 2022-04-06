//VOUS BEAUTY CLINIC
import vbcdesktop from './img/projects/Vous/vbc-desktop.png';
import vbcmobile from './img/projects/Vous/vbc405x780.png';
import vbcBrowser from './img/projects/Vous/vbc-shop-light.png';
import vbcIpad from './img/projects/Vous/vbc-ipad-930.png';
import vbcMain from './img/projects/Vous/vbcThumb.png';
//NATURES CANOPY HOUSE
import nchMain from './img/projects/NCH/nchThumb.webp';
import nchMobile from './img/projects/NCH/nch405x780.png';
import nchDesktop from './img/projects/NCH/nch1280x800.png';
import nchIpad from './img/projects/NCH/nch1194x815.png';
import nchBrowser from './img/projects/NCH/2nch-browser-light.png';
//BAYRICH CONSTRUCTION
import bayrichMain from './img/projects/Bayrich/weird.jpg';
import bayrichMobile from './img/projects/Bayrich/bay405x780.png';
import bayrichDesktop from './img/projects/Bayrich/bay1280x800.png';
import bayrichIpad from './img/projects/Bayrich/bay1194x805.png';
import bayrichBrowser from './img/projects/Bayrich/bay-browser-light.png';
//MATTHEW DEL BEL BELLUZ
import mdbbMain from './img/projects/MDBB/mdbbThumb.jpg';
import mdbbMobile from './img/projects/MDBB/mdbb405x780.png';
import mdbbDesktop from './img/projects/MDBB/mdbb1280x800.png';
import mdbbIpad from './img/projects/MDBB/2mdbb1194x815.png';
import mdbbBrowser from './img/projects/MDBB/mdbb-browser-light.png';
//SVG ICONS
import squarespaceIcon from './img/icons/squarespace-brands.svg';
import paintBrush from './img/icons/paint-brush.svg';
import crop from './img/icons/crop.svg';

const projectState = () => {
  return [
    {
      title: 'Bayrich Construction',
      secondaryTitle: 'Construction Website',
      thumbImg: bayrichMain,
      mainImg: bayrichDesktop,
      secondaryImg: bayrichMobile,
      browserImg: bayrichBrowser,
      ipadImg: bayrichIpad,
      description: 'Breif Summary of Project',
      secondDescription:
        'At Bayrich Construction, they believe that putting in a lot of hard work ensures the best and fastest service. This website is to showcase services available.',
      url: [
        {
          title: 'Website',
          website: 'https://www.bayrichconstruction.ca/',
        },
      ],
      roles: [
        {
          iconFa: squarespaceIcon,
          title: 'Managed',
          description: 'Updated and maintained the Squarespace website.',
        },
        {
          iconFa: paintBrush,
          title: 'Integrated',
          description: 'Added custom features and styling.',
        },
        {
          iconFa: crop,
          title: 'Designed',
          description: 'Oversaw the website alignment, typography, UI design.',
        },
      ],
      icons: [
        {
          title: 'Less',
          description:
            'LESS is dynamic preprocessor style sheet language the Squarespace uses',
          linkUrl: 'https://lesscss.org/',
        },
        {
          title: 'JavaScript',
          description:
            'No website is complete without a bit of Vanilla Javascript',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          title: 'Squarespace',
          description:
            'Created a custom website using the Squarespace platform',
          linkUrl:
            'https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds',
        },

        {
          title: 'npm',
          description:
            'Used npm to gain access to Glide.js and other libraries',
          linkUrl: 'https://glidejs.com/',
        },
      ],
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
          title: 'Primary',
          fontFamily: 'Bodoni Moda',
          fontWeight: '600',
          letterSpacing: '0.05em',
        },
        {
          title: 'Secondary',
          fontFamily: 'Quicksand',
          fontWeight: '300',
          letterSpacing: '0.02em',
        },
      ],
    },
    {
      title: 'Matthew Del Bel Belluz',
      secondaryTitle: 'Actor Portfolio',
      thumbImg: mdbbMain,
      mainImg: mdbbDesktop,
      secondaryImg: mdbbMobile,
      browserImg: mdbbBrowser,
      ipadImg: mdbbIpad,
      description: 'Breif Summary of Project',
      secondDescription:
        'VOUS Beauty Clinic specializes in cosmetic treatments & solutions.Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      url: [
        {
          title: 'Website',
          website: 'https://vousbeautyclinic.com/skincare',
        },
        {
          title: 'Github',
          website: 'https://vousbeautyclinic.com/skincare',
        },
      ],
      roles: [
        {
          iconFa: squarespaceIcon,
          title: 'Managed',
          description: 'Updated and maintained the Squarespace website.',
        },
        {
          iconFa: paintBrush,
          title: 'Integrated',
          description: 'Added custom features and styling.',
        },
        {
          iconFa: crop,
          title: 'Designed',
          description: 'Oversaw the website alignment, typography, UI design.',
        },
      ],
      icons: [
        {
          title: 'Less',
          description:
            'LESS is dynamic preprocessor style sheet language the Squarespace uses',
          linkUrl: 'https://lesscss.org/',
        },
        {
          title: 'JavaScript',
          description:
            'No website is complete without a bit of Vanilla Javascript',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          title: 'Squarespace',
          description:
            'Created a custom website using the Squarespace platform',
          linkUrl:
            'https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds',
        },

        {
          title: 'npm',
          description:
            'Used npm to gain access to Glide.js and other libraries',
          linkUrl: 'https://glidejs.com/',
        },
      ],
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
          title: 'Primary',
          fontFamily: 'Bodoni Moda',
          fontWeight: '600',
          letterSpacing: '0.05em',
        },
        {
          title: 'Secondary',
          fontFamily: 'Quicksand',
          fontWeight: '300',
          letterSpacing: '0.02em',
        },
      ],
    },
    {
      title: 'Natures Canopy House',
      secondaryTitle: 'Cannabis Website',
      thumbImg: nchMain,
      mainImg: nchDesktop,
      secondaryImg: nchMobile,
      browserImg: nchBrowser,
      ipadImg: nchIpad,
      description: 'Breif Summary of Project',
      secondDescription:
        'VOUS Beauty Clinic specializes in cosmetic treatments & solutions.Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      url: [
        {
          title: 'Website',
          website: 'https://vousbeautyclinic.com/skincare',
        },
        {
          title: 'Github',
          website: 'https://vousbeautyclinic.com/skincare',
        },
      ],
      roles: [
        {
          iconFa: squarespaceIcon,
          title: 'Managed',
          description: 'Updated and maintained the Squarespace website.',
        },
        {
          iconFa: paintBrush,
          title: 'Integrated',
          description: 'Added custom features and styling.',
        },
        {
          iconFa: crop,
          title: 'Designed',
          description: 'Oversaw the website alignment, typography, UI design.',
        },
      ],
      icons: [
        {
          title: 'Less',
          description:
            'LESS is dynamic preprocessor style sheet language the Squarespace uses',
          linkUrl: 'https://lesscss.org/',
        },
        {
          title: 'JavaScript',
          description:
            'No website is complete without a bit of Vanilla Javascript',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          title: 'Squarespace',
          description:
            'Created a custom website using the Squarespace platform',
          linkUrl:
            'https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds',
        },

        {
          title: 'npm',
          description:
            'Used npm to gain access to Glide.js and other libraries',
          linkUrl: 'https://glidejs.com/',
        },
      ],
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
          title: 'Primary',
          fontFamily: 'Bodoni Moda',
          fontWeight: '600',
          letterSpacing: '0.05em',
        },
        {
          title: 'Secondary',
          fontFamily: 'Quicksand',
          fontWeight: '300',
          letterSpacing: '0.02em',
        },
      ],
    },
    {
      title: 'VOUS Beauty Clinic',
      secondaryTitle: 'Cosmetics & Spa Website',
      thumbImg: vbcMain,
      mainImg: vbcdesktop,
      secondaryImg: vbcmobile,
      browserImg: vbcBrowser,
      ipadImg: vbcIpad,
      description: 'Breif Summary of Project',
      secondDescription:
        'VOUS Beauty Clinic specializes in cosmetic treatments & solutions.Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
      url: [
        {
          title: 'Website',
          website: 'https://vousbeautyclinic.com/skincare',
        },
        {
          title: 'Github',
          website: 'https://vousbeautyclinic.com/skincare',
        },
      ],
      roles: [
        {
          iconFa: squarespaceIcon,
          title: 'Managed',
          description: 'Updated and maintained the Squarespace website.',
        },
        {
          iconFa: paintBrush,
          title: 'Integrated',
          description: 'Added custom features and styling.',
        },
        {
          iconFa: crop,
          title: 'Designed',
          description: 'Oversaw the website alignment, typography, UI design.',
        },
      ],
      icons: [
        {
          title: 'Less',
          description:
            'LESS is dynamic preprocessor style sheet language the Squarespace uses',
          linkUrl: 'https://lesscss.org/',
        },
        {
          title: 'JavaScript',
          description:
            'No website is complete without a bit of Vanilla Javascript',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          title: 'Squarespace',
          description:
            'Created a custom website using the Squarespace platform',
          linkUrl:
            'https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds',
        },

        {
          title: 'npm',
          description:
            'Used npm to gain access to Glide.js and other libraries',
          linkUrl: 'https://glidejs.com/',
        },
      ],
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
          title: 'Primary',
          fontFamily: 'Bodoni Moda',
          fontWeight: '600',
          letterSpacing: '0.05em',
        },
        {
          title: 'Secondary',
          fontFamily: 'Quicksand',
          fontWeight: '300',
          letterSpacing: '0.02em',
        },
      ],
    },
  ];
};
export default projectState;
