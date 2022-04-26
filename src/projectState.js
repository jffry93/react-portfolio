//VOUS BEAUTY CLINIC
import vbcdesktop from './img/projects/Vous/vbc-desktop.png';
import vbcmobile from './img/projects/Vous/vbc405x780.png';
import vbcBrowser from './img/projects/Vous/vbc-shop-light.png';
import vbcIpad from './img/projects/Vous/vbc-ipad-930.png';
import vbcMain from './img/projects/Vous/vbcThumb.webp';
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
import customize from './img/icons/key-solid.svg';
import progress from './img/icons/list-check-solid.svg';
import update from './img/icons/arrows-rotate-solid.svg';
import celebrate from './img/icons/champagne-glasses-solid.svg';
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
          iconFa: customize,
          title: 'Customized',
          description: 'Setup custom animations throughout whole site.',
        },
        {
          iconFa: paintBrush,
          title: 'Designed',
          description:
            'Oversaw the website alignment, typography, UI design and page animations.',
        },
        {
          iconFa: progress,
          title: 'Managed',
          description:
            'Created the whole website from scratch and completed the task within the discussed time frame.',
        },
        {
          iconFa: update,
          title: 'Updated',
          description:
            'Updated original Wix website before deciding EditorX is a better alternative.',
        },
      ],
      icons: [
        {
          title: 'WiX',
          description:
            'A leading cloud-based development platform with millions of users worldwide.',
          linkUrl: 'https://www.wix.com/about/us',
        },
        {
          title: 'Editor X',
          description:
            'A web creation platform made exclusively for designers and agencies.',
          linkUrl: 'https://www.editorx.com',
        },
        {
          title: 'Adobe Photoshop',
          description:
            'A software used for editing photographs, compositing digital art, animating, and graphic design. ',
          linkUrl: 'https://helpx.adobe.com/photoshop/user-guide.html',
        },
        {
          title: 'JavaScript',
          description:
            'No website is complete without a bit of custom Vanilla Javascript.',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
      ],
      colours: [
        {
          hexCode: '#AB2426',
        },
        {
          hexCode: '#721819',
        },
        {
          hexCode: '#1E1E1E',
        },
      ],
      fonts: [
        {
          title: 'Primary',
          fontFamily: "'Poppins', sans-serif",
          fontWeight: '600',
          letterSpacing: 'normal',
        },
        {
          title: 'Secondary',
          fontFamily: "'Raleway', sans-serif",
          fontWeight: '100',
          letterSpacing: '0.5px',
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
        'VOUS Beauty Clinic specializes in cosmetic treatments & solutions. This website was created for the business to sell products, provide information and schedule appointments.',
      url: [
        {
          title: 'Website',
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
      title: 'Matthew Del Bel Belluz',
      secondaryTitle: 'Actor Portfolio',
      thumbImg: mdbbMain,
      mainImg: mdbbDesktop,
      secondaryImg: mdbbMobile,
      browserImg: mdbbBrowser,
      ipadImg: mdbbIpad,
      description: 'Breif Summary of Project',
      secondDescription:
        'A professional actor that was looking to showcase his talents in the digital space. This portfolio provides his headshots, a quick reel, contact information and his resume.',
      url: [
        {
          title: 'Website',
          website: 'https://jffry93.github.io/actor-portfolio/',
        },
        {
          title: 'Github',
          website: 'https://github.com/jffry93/actor-portfolio',
        },
      ],
      roles: [
        {
          iconFa: progress,
          title: 'Managed',
          description:
            'Created the website from scratch, updated and maintained the website.',
        },
        {
          iconFa: crop,
          title: 'Customized',
          description:
            'Integrated scroll high-jacking and the GreenSock animation library',
        },
        {
          iconFa: paintBrush,
          title: 'Designed',
          description:
            'Oversaw the website alignment, typography, UI & UX design.',
        },
      ],
      icons: [
        {
          title: 'JavaScript',
          description:
            'No website is complete without some custom of Vanilla Javascript',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          title: 'GSAP',
          description:
            'An industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser.',
          linkUrl: 'https://www.greensock.com/products/',
        },
        {
          title: 'SASS',
          description:
            'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
          linkUrl: 'https://sass-lang.com/documentation',
        },

        {
          title: 'npm',
          description: 'Used npm to gain access to GSAP and other libraries',
          linkUrl: 'https://glidejs.com/',
        },
      ],
      colours: [
        {
          hexCode: '#BD0C23',
        },
        {
          hexCode: '#000000',
        },
        // {
        //   hexCode: '#EEEEEE',
        // },
      ],
      fonts: [
        {
          title: 'Primary',
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: '600',
          letterSpacing: '-1px',
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
        'A business focused on building a relationship between cannabis and people, and the communities we work in. Browse a wide selection of cannabis products and find a location near you. ',
      url: [
        {
          title: 'Website',
          website: 'https://www.naturescanopyhouse.com/',
        },
      ],
      roles: [
        {
          iconFa: celebrate,
          title: 'Initial Commit',
          description: 'Bought the domain and set up the initial page.',
        },
        {
          iconFa: update,
          title: 'Updated',
          description: 'Changed and added content whenever requested to.',
        },
        {
          iconFa: paintBrush,
          title: 'Designed',
          description: 'Contributed to the overall theme and design of site.',
        },
      ],
      icons: [
        {
          title: 'Google API',
          description:
            'Application programming interfaces developed by Google which allow communication with Google Services. ',
          linkUrl: 'https://support.google.com/tagmanager/answer/6102821?hl=en',
        },
        {
          title: 'Webflow',
          description:
            'Brings the power of website animations and interactions directly into a visual toolbox.',
          linkUrl: 'https://webflow.com/',
        },
        {
          title: 'Dutchie',
          description:
            'An online marketplace that connects consumers with their favorite local dispensaries and allows them to place an order for pickup or delivery.',
          linkUrl: 'https://business.dutchie.com/pos',
        },
        {
          title: 'JavaScript',
          description:
            'No website is complete without a bit of custom Vanilla Javascript',
          linkUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
      ],
      colours: [
        {
          hexCode: '#2D2926',
        },
        {
          hexCode: '#504C49',
        },
        {
          hexCode: '#EE2737',
        },
      ],
      fonts: [
        {
          title: 'Primary',
          fontFamily: "'Kanit', sans-serif",
          fontWeight: '500',
          letterSpacing: '0.05em',
        },
        {
          title: 'Secondary',
          fontFamily: 'sans-serif',
          fontWeight: '200',
          letterSpacing: '0.0em',
        },
      ],
    },
  ];
};
export default projectState;
