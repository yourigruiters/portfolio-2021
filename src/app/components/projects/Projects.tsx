import styled from '@emotion/styled';
import React from 'react';
import Heading from '../heading/Heading';
import Project from './components/Project';
import chatImage from '../../media/images/project-chat.png';
import hangoutsImage from '../../media/images/project-hangouts.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 75px 50px 100px;
  background-color: ${({ theme: { colors } }) =>
    colors.backgroundDark};
  overflow: hidden;

  @media only screen and (max-width: 1000px) {
    padding: 75px 30px 100px;
  }
`;

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    row-gap: 100px;
  }
`;

interface Props {}

const Projects: React.FC<Props> = () => {
  return (
    <Container>
      <Heading
        title={
          <>
            <span>E</span>xampleProjects.<span>IO</span>
          </>
        }
        subtitle={
          <>
            "Work, Work, Work, <b> Work, Work!</b>"
            <span> - Rihanna</span>
          </>
        }
      />
      <ProjectsContainer>
        <Project
          title="Limbo Hangouts"
          description="Full stack video and chat sharing application build with React, Express and Socket.io"
          labels={['React', 'Express', 'Socket.IO']}
          link="https://hangouts-client.herokuapp.com/"
          githubLink="https://github.com/yourigruiters/Full-Stack-Hangouts"
          img={hangoutsImage}
        />
        <Project
          title="YG-Chat"
          description="Full stack chat application build with React, Redux and Socket.io. Tested with Cypress and Mocha."
          labels={['React', 'Redux', 'Express', 'Socket.IO']}
          link="https://chat-frontend-yg.herokuapp.com/"
          githubLink="https://github.com/yourigruiters/Full-Stack-Chat"
          img={chatImage}
        />
      </ProjectsContainer>
    </Container>
  );
};

export default Projects;
