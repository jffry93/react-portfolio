import { useState } from 'react';
import projectState from '../projectState';

//COMPONENTS
import Project from './Project';

import styled from 'styled-components';

const PersonalProjects = () => {
  const [projects, setProjects] = useState(projectState);

  console.log(projects);
  return (
    <StyledProjectSection>
      <h1>Personal Projects</h1>
      <h4>Click on card to preview Case Study</h4>
      <StyledProjectList>
        {projects.map((project) => (
          <Project
            title={project.title}
            img={project.mainImg}
            url={project.url}
            description={project.description}
            key={project.title}
          ></Project>
        ))}
      </StyledProjectList>
    </StyledProjectSection>
  );
};

export default PersonalProjects;

const StyledProjectSection = styled.div`
  min-height: 90vh;
  width: 100%;
  border: 3px solid blue;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* display: grid;
  place-items: center center; */

  h1,
  h4 {
    text-align: center;
  }

  h1 {
    font-weight: 700 !important;
    font-size: 3rem;
    letter-spacing: 1px;
    color: white;
  }
  h4 {
    color: white;
    letter-spacing: 1px;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 3rem 0 0 0;
  }
`;
const StyledProjectList = styled.div`
  border: 3px solid red;

  /* display: flex; */
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 5rem 0 0;
  /* grid-gap: 10rem; */
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;
