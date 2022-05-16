import { useState } from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../animation';
//reveal when in viewport
import { useScroll } from './useScroll';

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
        {title}
      </StyledToggle>
      {toggle ? children : ''}
      <div className='faq-line'></div>
    </motion.div>
  );
};

export default Toggle;

const StyledToggle = styled(motion.h4)`
  &.active {
    color: var(--primary-accent);
  }
  &:hover {
    color: var(--primary-accent);
  }
  &:active {
    color: var(--primary-accent-shade);
  }
`;
