//page transition
export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: 300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			when: 'beforeChildren',
			staggerChildren: 0.25,
		},
	},
	exit: {
		opacity: 0,
		// y: 300,
		transition: {
			duration: 0.5,
		},
	},
};
//transition: {{staggerChildren: 0.25}}
export const staggerContainer = {
	hidden: {
		opacity: 0,
		y: 300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			when: 'beforeChildren',
			staggerChildren: 0.25,
		},
	},
	exit: {
		opacity: 0,
		y: 300,
		transition: {
			duration: 0.5,
		},
	},
};

export const slideUp = {
	hidden: { y: 250, opacity: 0 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.75, ease: 'easeOut' },
	},
};
export const slideDown = {
	hidden: { y: 50, opacity: 0 },
	show: {
		opacity: 1,
		y: 0,
		transition: { ease: 'easeOut', duration: 0.75 },
	},
};
export const slideLeft = {
	hidden: { x: -200, opacity: 0 },
	show: {
		opacity: 1,
		x: 0,
		transition: { ease: 'easeOut', duration: 0.75 },
	},
};
export const slideRight = {
	hidden: { x: 200, opacity: 0 },
	show: {
		opacity: 1,
		x: 0,
		transition: { ease: 'easeOut', duration: 0.75 },
	},
};

export const fade = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { ease: 'easeOut', duration: 0.75 } },
};

export const photoAnimation = {
	hidden: { scale: 1.5, opacity: 0 },
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			ease: 'easeOut',
			duration: 0.75,
		},
	},
};

export const lineAnimation = {
	hidden: { width: '0%' },
	show: {
		width: '100%',
		transition: { duration: 1 },
	},
};

export const sliderAnimation = {
	hidden: { x: '-130%', skew: '45deg' },
	show: {
		x: '100%',
		skew: '0deg',
		transition: { ease: 'easeOut', duration: 1 },
	},
};

export const sliderContainer = {
	hidden: { opacity: 1 },
	show: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut' } },
};

export const scrollReveal = {
	hidden: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
		},
	},
};
