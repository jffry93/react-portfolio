const skillsState = () => {
  return [
    {
      title: 'Markdown',
      description:
        'A simple and easy-to-use markup language you can use to format virtually any document.',
      documentation: 'https://www.markdownguide.org',
      hexCode: '#32A0E3',
      textColor: '#242424',
    },

    {
      title: 'HTML',
      description:
        'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.',
      documentation: 'https://www.w3.org/html/',
      hexCode: '#E96328',
      hexCode2: '#DC4A25',
      textColor: '#242424',
    },
    {
      title: 'CSS',
      description: 'CSS describes how HTML elements should be displayed. ',
      documentation: 'https://www.w3schools.com/css/',
      hexCode: '#2762E9',
      hexCode2: '#244BDD',
    },
    {
      title: 'SASS',
      description:
        'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
      documentation: 'https://sass-lang.com/documentation',
      hexCode: '#C66394',
      textColor: '#242424',
    },
    {
      title: 'LESS',
      description:
        'A dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side.',
      documentation: 'https://www.lesscss.org/',
      hexCode: '#264876',
    },
    {
      title: 'JavaScript',
      description:
        'Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers',
      documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      hexCode: '#EBD41C',
      textColor: '#242424',
      // hexCode2: '#000',
    },
    {
      title: 'jQuery',
      description:
        'jQuery is a fast, small, and feature-rich JavaScript library. ',
      documentation: 'https://wwww.jquery.com',
      hexCode: '#1263A5',
    },
    {
      title: 'React',
      description:
        'An open-source front-end JavaScript library for building user interfaces based on UI components.',
      documentation: 'https://www.reactjs.org/',
      hexCode: '#76D4F1',
      textColor: '#242424',
    },
    {
      title: 'Redux',
      description:
        'An open-source JavaScript library for managing and centralizing application state.',
      documentation: 'https://redux.js.org',
      hexCode: '#7A3FB9',
    },
    {
      title: 'Framer Motion',
      description: 'A production-ready motion library for React.',
      documentation: 'https://www.framer.com/motion/',
      hexCode: '#5A05F2',
      hexCode2: '#DA03C9',
    },
    {
      title: 'GSAP',
      description:
        'An industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser.',
      documentation: 'https://www.greensock.com/products/',
      hexCode: '#81C406',
      textColor: '#242424',
    },
    {
      title: 'Bootstrap',
      description:
        'A CSS framework directed at responsive, mobile-first front-end web development.',
      documentation: 'https://www.getbootstrap.com',
      hexCode: '#6D11EE',
    },
    {
      title: 'Tailwind',
      description: 'A utility-first CSS framework packed with classes. ',
      documentation: 'https://www.tailwindcss.com',
      hexCode: '#19B4C0',
      hexCode2: '#1A9DB6',
      textColor: '#242424',
    },
    {
      title: 'Jest',
      description:
        'A JavaScript testing framework designed to ensure correctness of any JavaScript codebase.',
      documentation: 'https://www.jestjs.io',
      hexCode: '#913E56',
    },
    {
      title: 'Cypress',
      description:
        'A JavaScript test automation solution used for web automation.',
      documentation: 'https://www.cypress.io/',
      hexCode: '#163959',
      hexCode2: '#323232',
    },
    {
      title: 'Axios',
      description: 'A promise-based HTTP Client for node.js and the browser.',
      documentation: 'https://www.axios-http.com',
      hexCode: '#7E3E8E',
    },
    {
      title: 'npm',
      description:
        'Sets modules in place so that node can find them, and manages dependency conflicts intelligently.',
      documentation: 'https://www.npmjs.com/',
      hexCode: '#C10302',
      // textColor: '#242424',
    },
    {
      title: 'Material',
      description:
        'A library that allows the user to import and use different components to create a user interface in our React applications.',
      documentation: 'https://mui.com',
      hexCode: '#01A6F1',
      hexCode2: '#027BC0',
      textColor: '#242424',
    },
    {
      title: 'Git',
      description:
        'Software for tracking changes in any set of files, usually used for coordinating work among programmers.',
      documentation: 'https://www.git-scm.com/',
      hexCode: '#E44C31',
      textColor: '#242424',
    },
    {
      title: 'Figma',
      description:
        'A vector graphics editor and prototyping tool which is primarily web-based.',
      documentation: 'https://www.figma.com/',
      hexCode: '#9955F1',
      hexCode2: '#08C47B',
      // textColor: '#08C47B',
    },
    {
      title: 'Adobe',
      description: '“An industry standard tool for the publishing industry,',
      documentation:
        'https://www.adobe.com/ca/creativecloud/business/teams.html?sdid=KKQWX&mv=search&ef_id=Cj0KCQiAraSPBhDuARIsAM3Js4oa_6quAWB6b0z7m5ITJG7fGPz87HVOhybrLcQcvteeGOQu3BhcI9AaAmkbEALw_wcB:G:s&s_kwcid=AL!3085!3!495846071701!e!!g!!adobe!12231505439!122943076691&gclid=Cj0KCQiAraSPBhDuARIsAM3Js4oa_6quAWB6b0z7m5ITJG7fGPz87HVOhybrLcQcvteeGOQu3BhcI9AaAmkbEALw_wcB',
      hexCode: '#ED1001',
    },
    {
      title: 'Glide',
      description:
        ' Lightweight, flexible and fast. Designed to slide. No less, no more.',
      documentation: 'https://www.glidejs.com/',
      hexCode: '#000',
    },
    {
      title: 'Swiper',
      description:
        'Modern mobile touch slider with hardware accelerated transitions and amazing native behavior.',
      documentation: 'https://swiperjs.com',
      hexCode: '#5E2FEA',
    },
    {
      title: 'Mapbox',
      description:
        'Photoshop, for maps. Giving designers control over everything.',
      documentation: 'https://www.mapbox.com',
      hexCode: '#3655EE',
    },
    {
      title: 'EmailJS',
      description:
        'Send emails using client-side technologies only. No server is required. ',
      documentation: 'https://www.emailjs.com',
      hexCode: '#EF9A4F',
    },

    {
      title: 'Squarespace',
      description:
        'A website building company ideal for creating professional websites.',
      documentation:
        'https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds',
      hexCode: '#000',
    },
    {
      title: 'WiX',
      description:
        'A leading cloud-based development platform with millions of users worldwide.',
      documentation: 'https://www.wix.com/about/us',
      hexCode: '#000',
      hexCode2: '#EEB36C',
    },
    {
      title: 'Editor X',
      description:
        'A web creation platform made exclusively for designers and agencies. ',
      documentation: 'https://www.editorx.com',
      hexCode: '#000',
      hexCode2: ' #0507B5',
    },
    {
      title: 'Webflow',
      description:
        'Brings the power of website animations and interactions directly into a visual toolbox.',
      documentation: 'https://webflow.com/',
      hexCode: '#3F4EF2',
    },
  ];
};
export default skillsState;
