import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledOverlay = styled.div`
  /* border: green 3px solid; */
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  height: var(--container-height);
  width: 100%;
  /* @media (max-width: 750px) {
    padding: 5rem 3rem;
  } */
`;

export const StyledHide = styled(motion.div)`
  overflow: hidden;
`;
