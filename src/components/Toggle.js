import { useState } from 'react';
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
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className='faq-line'></div>
    </motion.div>
  );
};

export default Toggle;