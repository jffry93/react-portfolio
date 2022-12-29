import styled from 'styled-components';
import { fade } from '../../../../lib/framer-motion/animation';
//Framer Motion
//detects when layout changes
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from '../../../../hooks/useScroll';
import MoreInfo from './MoreInfo';
const FaqSection = () => {
	const [element, controls] = useScroll();
	return (
		<Faq
			variants={fade}
			animate={controls}
			initial='hidden'
			ref={element}
			className='faq'
		>
			<h2>
				Any Questions? <span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<MoreInfo />
			</AnimateSharedLayout>
		</Faq>
	);
};

const Faq = styled.div`
	width: 100%;
	padding: 116px 0 0px;
	background-color: var(--primary-color);
	/* background: rgba(12, 12, 12, 0.5); */
	display: block;
	color: white;
	span {
		display: block;
		color: var(--primary-accent);
	}
	h2 {
		margin: auto;
		max-width: var(--max-width);
		padding: 0 var(--layout-secondary-padding) 60px;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 32px 0rem;
		width: 100%;
	}

	.question {
		padding: 32px 0;
		cursor: pointer;
	}
	.answer {
		padding: 32px 0rem;
		/* max-width: 600px; */
		p {
			margin: auto;
			max-width: var(--max-width);
			padding: 12px var(--layout-secondary-padding);
			color: var(--primary-text-color);
		}
		span {
			margin: auto;
			max-width: var(--max-width);
			padding: 12px var(--layout-secondary-padding);
			font-weight: bold;
			color: var(--secondary-text-color);
		}
	}
	a {
		color: var(--primary-accent);
		text-decoration: none;
	}
	a:hover {
		color: var(--primary-accent-shade);
	}
	a:active {
		color: var(--primary-accent);
	}
	@media (max-width: 500px) {
		h2,
		h4 {
			padding: 0rem var(--layout-padding);
		}
		.answer {
			p,
			span {
				padding: 12px var(--layout-padding);
			}
		}
	}
`;

export default FaqSection;
