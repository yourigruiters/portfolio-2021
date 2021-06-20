import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import Coding from './components/Coding';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: ${({ theme: { colors } }) => colors.background};
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ff5851;
`;

interface Props {}

const Landing: React.FC<Props> = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 2000);
  }, []);

  useEffect(() => {
    if (ready) {
      setTimeout(() => {
        console.log('wimpie');
      }, 1650);
    }
  }, [ready]);
  return (
    <Container>
      <Content></Content>
      <Coding ready={ready} />
    </Container>
  );
};

export default Landing;
