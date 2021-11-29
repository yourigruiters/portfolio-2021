import styled from '@emotion/styled';
import React from 'react';
import Heading from '../heading/Heading';

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
    </Container>
  );
};

export default Projects;
