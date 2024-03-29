const skillsState = () => {
	return [
		{
			title: 'Markdown',
			secondTitle: 'Markup Language',
			description:
				'A simple and easy-to-use markup language you can use to format virtually any document.',
			documentation: 'https://www.markdownguide.org',
			hexCode: '#32A0E3',
			textColor: '#242424',
			type: 'language',
		},

		{
			title: 'HTML',
			secondTitle: 'Markup Language',
			description:
				'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.',
			documentation: 'https://www.w3.org/html/',
			hexCode: '#E96328',
			hexCode2: '#DC4A25',
			textColor: '#242424',
			type: 'language',
		},
		{
			title: 'CSS',
			secondTitle: 'Style Sheet Language',
			description: 'CSS describes how HTML elements should be displayed. ',
			documentation: 'https://www.w3schools.com/css/',
			hexCode: '#2762E9',
			hexCode2: '#244BDD',
			type: 'language',
		},
		{
			title: 'SASS',
			secondTitle: 'Style Sheet Language',
			description:
				'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
			documentation: 'https://sass-lang.com/documentation',
			hexCode: '#C66394',
			textColor: '#242424',
			type: 'language',
		},
		{
			title: 'LESS',
			secondTitle: 'Style Sheet Language',
			description:
				'A dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and run on the client side or server side.',
			documentation: 'https://www.lesscss.org/',
			hexCode: '#264876',
			type: 'language',
		},
		{
			title: 'JavaScript',
			secondTitle: 'Browser Language',
			description:
				'Javascript is used by programmers across the world to create dynamic and interactive web content like applications and browsers',
			documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
			hexCode: '#EBD41C',
			textColor: '#242424',
			// hexCode2: '#000',
			type: 'language',
		},
		{
			title: 'TypeScript',
			secondTitle: 'Browser Language',
			description:
				'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
			documentation: 'https://www.typescriptlang.org',
			hexCode: '#3178c6',
			textColor: '#242424',
			type: 'language',
			// hexCode2: '#000',
		},
		{
			title: 'jQuery',
			secondTitle: 'JavaScript Library',
			description:
				'jQuery is a fast, small, and feature-rich JavaScript library. ',
			documentation: 'https://wwww.jquery.com',
			hexCode: '#1263A5',
			type: 'frontend',
		},
		{
			title: 'React',
			secondTitle: 'JavaScript Framework',
			description:
				'An open-source front-end JavaScript library for building user interfaces based on UI components.',
			documentation: 'https://www.reactjs.org/',
			hexCode: '#76D4F1',
			textColor: '#242424',
			type: 'frontend',
		},
		{
			title: 'Vite',
			secondTitle: 'JavaScript Framework',
			description:
				"A build tool that comes with a dev server, and it bundles your code for production. It's similar to Vue CLI but leaner and faster.",
			documentation: 'https://vitejs.dev',
			hexCode: '#58b3fe',
			hexCode2: '#bb36fe',
			textColor: '#242424',
			type: 'frontend',
		},
		{
			title: 'Redux',
			secondTitle: 'State Management',
			description:
				'An open-source JavaScript library for managing and centralizing application state. Redux toolkit is the modern way of using Redux.',
			documentation: 'https://redux.js.org',
			hexCode: '#7A3FB9',
			type: 'frontend',
		},
		{
			title: 'VictoryChart',
			secondTitle: 'Data Visualization',
			description:
				'VictoryChart is a data visualization charting library using d3. VictoryChart controls the layout of the chart, and coordinates animations and shared events.',
			documentation:
				'https://formidable.com/open-source/victory/docs/victory-chart/',
			hexCode: '#de5a45',
			type: 'frontend',
		},
		{
			title: 'Framer Motion',
			secondTitle: 'Animaiton Library',
			description:
				'A production-ready motion library using Spring.js, D3.js and more for React.',
			documentation: 'https://www.framer.com/motion/',
			hexCode: '#5A05F2',
			hexCode2: '#DA03C9',
			type: 'frontend',
		},
		{
			title: 'GSAP',
			secondTitle: 'Animaiton Library',
			description:
				'An industry standard JavaScript animation library from GreenSock that lets you craft high-performance animations that work in every major browser. Uses Spring.js, D3.js and more.',
			documentation: 'https://www.greensock.com/products/',
			hexCode: '#81C406',
			textColor: '#242424',
			type: 'frontend',
		},
		{
			title: 'Bootstrap',
			secondTitle: 'UI Library',
			description:
				'A CSS framework directed at responsive, mobile-first front-end web development.',
			documentation: 'https://www.getbootstrap.com',
			hexCode: '#6D11EE',
			type: 'frontend',
		},
		{
			title: 'Tailwind',
			secondTitle: 'UI Library',
			description: 'A utility-first CSS framework packed with classes. ',
			documentation: 'https://www.tailwindcss.com',
			hexCode: '#19B4C0',
			hexCode2: '#1A9DB6',
			textColor: '#242424',
			type: 'frontend',
		},
		{
			title: 'Material UI',
			secondTitle: 'UI Library',
			description:
				'A library that allows the user to import and use different components to create a user interface in our React applications.',
			documentation: 'https://mui.com',
			hexCode: '#01A6F1',
			hexCode2: '#027BC0',
			textColor: '#242424',
			type: 'frontend',
		},
		{
			title: 'Jest.js',
			secondTitle: 'Testing Library',
			description:
				'A JavaScript testing framework designed to ensure correctness of any JavaScript codebase.',
			documentation: 'https://www.jestjs.io',
			hexCode: '#913E56',
			type: 'backend',
		},
		{
			title: 'Cypress.io',
			secondTitle: 'Testing Library',
			description:
				'A JavaScript test automation solution used for web automation.',
			documentation: 'https://www.cypress.io/',
			hexCode: '#163959',
			hexCode2: '#323232',
			type: 'backend',
		},
		{
			title: 'Axios',
			secondTitle: 'HTTP Client',
			description: 'A promise-based HTTP Client for node.js and the browser.',
			documentation: 'https://www.axios-http.com',
			hexCode: '#7E3E8E',
			type: 'backend',
		},
		{
			title: 'Node.js',
			secondTitle: 'JavaScript',
			description:
				'Node.js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature',
			documentation: 'https://nodejs.org/en/',
			hexCode: '#73b955',
			hexCode2: '#3e863d',
			type: 'backend',
		},
		{
			title: 'Express',
			secondTitle: 'Framework',
			description:
				'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
			documentation: 'https://expressjs.com',
			hexCode: '#259dff',
			type: 'backend',
		},
		{
			title: 'MongoDB.',
			secondTitle: 'Database',
			description:
				'Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.',
			documentation: 'https://www.mongodb.com',
			hexCode: '#116149',
			type: 'backend',
		},
		{
			title: 'Firebase',
			secondTitle: 'Database',
			description:
				'Store & sync data between your users in realtime with the Firebase Realtime Database.',
			documentation: 'https://firebase.google.com',
			hexCode: '#ffcc30',
			hexCode2: '#f58411',
			type: 'backend',
		},

		{
			title: 'Figma',
			secondTitle: 'Design Software',
			description:
				'A vector graphics editor and prototyping tool which is primarily web-based.',
			documentation: 'https://www.figma.com/',
			hexCode: '#9955F1',
			hexCode2: '#08C47B',
			type: 'misc',
			// textColor: '#08C47B',
		},
		{
			title: 'Adobe',
			secondTitle: 'Design Software',
			description: 'An industry standard tool for the publishing industry,',
			documentation:
				'https://www.adobe.com/ca/creativecloud/business/teams.html?sdid=KKQWX&mv=search&ef_id=Cj0KCQiAraSPBhDuARIsAM3Js4oa_6quAWB6b0z7m5ITJG7fGPz87HVOhybrLcQcvteeGOQu3BhcI9AaAmkbEALw_wcB:G:s&s_kwcid=AL!3085!3!495846071701!e!!g!!adobe!12231505439!122943076691&gclid=Cj0KCQiAraSPBhDuARIsAM3Js4oa_6quAWB6b0z7m5ITJG7fGPz87HVOhybrLcQcvteeGOQu3BhcI9AaAmkbEALw_wcB',
			hexCode: '#ED1001',
			textColor: '#242424',
			type: 'misc',
		},
		{
			title: 'Glide',
			secondTitle: '3rd Party Library',
			description:
				' Lightweight, flexible and fast. Designed to slide. No less, no more.',
			documentation: 'https://www.glidejs.com/',
			hexCode: '#000',
			hexCode: 'grey',
			type: 'frontend',
		},
		{
			title: 'Swiper',
			secondTitle: '3rd Party Library',
			description:
				'Modern mobile touch slider with hardware accelerated transitions and amazing native behavior.',
			documentation: 'https://swiperjs.com',
			hexCode: '#5E2FEA',
			type: 'frontend',
		},
		{
			title: 'Mapbox',
			secondTitle: '3rd Party Library',
			description:
				'Photoshop, for maps. Giving designers control over everything.',
			documentation: 'https://www.mapbox.com',
			hexCode: '#3655EE',
			type: 'frontend',
		},
		{
			title: 'EmailJS',
			secondTitle: '3rd Party Library',
			description:
				'Send emails using client-side technologies only. No server is required. ',
			documentation: 'https://www.emailjs.com',
			hexCode: '#EF9A4F',
			textColor: '#242424',
			type: 'frontend',
		},
		{
			title: 'WeatherAPI',
			secondTitle: '3rd Party Library',
			description:
				'Designed for developers by developers, Weather API is the ultimate weather and geolocation API trusted by +100K users worldwide. ',
			documentation: 'https://www.weatherapi.com',
			hexCode: '#5cb377',
			textColor: '#242424',
			type: 'misc',
		},

		{
			title: 'Squarespace',
			secondTitle: 'Content Management System',
			description:
				'A website building company ideal for creating professional websites.',
			documentation:
				'https://www.squarespace.com/website-design/?channel=pbr&subchannel=go&campaign=pbr-dr-go-ca-en-squarespace-general-bmm&subcampaign=(brand-general_squarespaces_bmm)&&utm_source=google&utm_medium=pbr&utm_campaign=pbr-dr-go-ca-en-squarespace-general-bmm&utm_term=%2Bsquarespaces&gclid=Cj0KCQiA9OiPBhCOARIsAI0y71BWTQrHPzNlNAj3PLrK1YEnRFlPhD9T3zNybnHk4k4bu5YWFh_1UYMaAnxdEALw_wcB&gclsrc=aw.ds',
			hexCode: '#000',
			hexCode: '#f5deb3',
			type: 'misc',
		},
		{
			title: 'WiX',
			secondTitle: 'Content Management System',
			description:
				'A leading cloud-based development platform with millions of users worldwide.',
			documentation: 'https://www.wix.com/about/us',
			hexCode: '#000',
			hexCode2: '#EEB36C',
			type: 'misc',
		},
		{
			title: 'Editor X',
			secondTitle: 'Content Management System',
			description:
				'A web creation platform made exclusively for designers and agencies. ',
			documentation: 'https://www.editorx.com',
			hexCode: '#000',
			hexCode2: ' #0507B5',
			type: 'misc',
		},
		{
			title: 'Webflow',
			secondTitle: 'Content Management System',
			description:
				'Brings the power of website animations and interactions directly into a visual toolbox.',
			documentation: 'https://webflow.com/',
			hexCode: '#3F4EF2',
			type: 'misc',
		},
		{
			title: 'npm',
			secondTitle: 'Package Manager',
			description:
				'Sets modules in place so that node can find them, and manages dependency conflicts intelligently.',
			documentation: 'https://www.npmjs.com/',
			hexCode: '#C10302',
			type: 'misc',
			// textColor: '#242424',
		},

		{
			title: 'Git',
			secondTitle: 'Version Control System',
			description:
				'Software for tracking changes in any set of files, usually used for coordinating work among programmers.',
			documentation: 'https://www.git-scm.com/',
			hexCode: '#E44C31',
			textColor: '#242424',
			type: 'misc',
		},
	];
};
export default skillsState;
