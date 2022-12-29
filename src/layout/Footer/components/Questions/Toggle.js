import { useState } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../../../../lib/framer-motion/animation';
//reveal when in viewport
import { useScroll } from '../../../../hooks/useScroll';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Toggle = ({ children, title }) => {
	const [toggle, setToggle] = useState(false);
	const [element, controls] = useScroll();
	return (
		<motion.div
			variants={fade}
			animate={controls}
			initial='hidden'
			ref={element}
			layout
			className='question'
			onClick={() => setToggle(!toggle)}
		>
			<StyledToggle layout className={toggle ? 'active' : ''}>
				{toggle ? <FaMinus /> : <FaPlus />}

				<h4>{title}</h4>
			</StyledToggle>
			{toggle ? children : ''}
			<div className='faq-line'></div>
		</motion.div>
	);
};

export default Toggle;

const StyledToggle = styled(motion.div)`
	display: flex;
	align-items: center;
	gap: 16px;

	margin: auto;
	max-width: var(--max-width);
	padding: 0rem var(--layout-secondary-padding);

	svg {
		height: clamp(15px, 2vw, 17px);
		width: clamp(15px, 2vw, 17px);
	}
	&.active {
		color: var(--primary-accent);

		h4 {
			color: var(--primary-accent);
		}
	}
	&:hover {
		color: var(--primary-accent);
		h4 {
			color: var(--primary-accent);
		}
	}
	&:active {
		color: var(--primary-accent-shade);
		h4 {
			color: var(--primary-accent-shade);
		}
	}
	@media (max-width: 500px) {
		gap: 0px;
		padding: 0rem var(--layout-padding);
	}
`;
