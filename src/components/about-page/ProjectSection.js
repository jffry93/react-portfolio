import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade } from '../../animation';
import PersonalProjects from '../project/PersonalProjects';
import { useScroll } from '../useScroll';

const ProjectSection = () => {
  const [element, controls] = useScroll();
  return (
    <StyledContributions
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <h2 className='title'>Contributions</h2>
      <PersonalProjects />
    </StyledContributions>
  );
};

export default ProjectSection;

const StyledContributions = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 116px auto 119px;
  max-width: 1600px;
  .title {
    text-align: center;
    padding: 0 0 40px;
  }
`;