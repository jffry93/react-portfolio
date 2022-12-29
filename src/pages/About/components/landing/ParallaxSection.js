//IMAGES
import styled from 'styled-components';
import stars from '../../../../assets/img/parallax2/space.png';
import layer1 from '../../../../assets/img/parallax2/layer1.png';
import layer2 from '../../../../assets/img/parallax2/layer2.png';
import unicef from '../../../../assets/img/UNICEF_Logo.png';
// import { Parallax, ParallaxLayer } from '@react-spring/parallax';
//FRAMER MOTION
import {
	useViewportScroll,
	motion,
	useTransform,
	// useMotionValue,
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
//REACT ROUTER
import { NavHashLink } from 'react-router-hash-link';

const ParallaxSection = () => {
	const { scrollY, scrollYProgress } = useViewportScroll();
	// console.log(scrollY);
	const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
	const y2 = useTransform(scrollY, [0, 1000], [0, 60]);
	const y3 = useTransform(scrollY, [0, 1000], [0, -40]);

	const [ref, inView, entry] = useInView({
		/* Optional options */
		threshold: 0.5,
		triggerOnce: false,
	});
	// console.log(scrollYProgress);

	// const grow = {
	//   start: { scale: 1 },
	//   end: {
	//     scale: 1.05,
	//   },
	// };

	return (
		<StyledParallaxContainer>
			<motion.div
				className='background-img'
				style={{ y: y1, x: -0 }}
			></motion.div>
			{/* <DonationBar /> */}
			<div className='container'>
				<motion.div className='content' style={{ y: y3, x: -0 }}>
					<h2>
						Hi, I'm <span className='name'>Jeff</span>
					</h2>
					<h1>
						Frontend <span className='title'>Developer</span>
					</h1>

					<h3>Your digital space is limitless.</h3>
					{/* <p>
            The only limitation is your imagination. If you can think it, it can
            be built.
          </p> */}
					<div className='button-container'>
						<NavHashLink href='#' to='/work'>
							<button>View Work</button>
						</NavHashLink>
						<a
							href='https://github.com/jffry93'
							target='_blank'
							className='resume'
							rel='noreferrer'
						>
							<button>Visit Github</button>
						</a>
					</div>
				</motion.div>
				<motion.img src={layer2} alt='' style={{ y: y2, x: -0 }} />
				<motion.img src={layer1} alt='' />
			</div>
		</StyledParallaxContainer>
	);
};

export default ParallaxSection;

const StyledParallaxContainer = styled.div`
	height: calc(var(--container-height));
	min-height: 500px;

	position: relative;

	overflow: hidden;

	h3 {
		margin-top: 16px;
		color: var(--primary-text-color);
	}
	p {
		margin-top: 8px;
		line-height: 1.54286;
		max-width: 420px;
		font-weight: bold;
	}
	.name {
		font-size: clamp(37px, 5vw, 53px);
	}
	.title {
		font-size: clamp(3.35rem, 5.5vw, 4.2rem);
	}

	.background-img {
		/* content: ''; // ::before and ::after both require content */
		position: absolute;
		top: 0;
		left: 0;

		background-image: url(${stars});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;

		width: 100%;
		height: 100%;

		background-color: rgba(0, 0, 0, 1);
		opacity: 0.7;
		z-index: 1;
	}
	.container {
		height: 100%;
		width: 100%;

		position: absolute;
		top: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.content {
		width: 100%;
		max-width: 1200px;
		margin: auto;
		padding: 0 var(--layout-secondary-padding);

		display: flex;
		flex-direction: column;
		gap: 8px;

		position: relative;
		z-index: 3;

		.button-container {
			display: flex;
			gap: 8px;
			margin-top: 24px;
		}
	}
	img {
		width: 100%;
		min-width: 800px;
		position: absolute;
		bottom: 0;
		z-index: 2;
	}

	@media (max-width: 550px) {
		.content {
			padding: 0 var(--layout-padding);
		}
		.text {
			padding: 0 var(--layout-padding);
		}

		/* padding: 8px var(--mobile-padding); */
	}
`;
