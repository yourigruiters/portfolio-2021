import React, { useState } from 'react';
import Overlay from '../../components/overlay/Overlay';
import Container from '../../components/Container';
import Landing from '../../components/landing/Landing';
import Intro from '../../components/intro/Intro';

interface Props {}

const HomePage: React.FC<Props> = () => {
  const [showIntro, setShowIntro] = useState(true);

  const skipIntro = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <Intro skipIntro={skipIntro} />
      ) : (
        <>
          <Container>
            <Landing />
          </Container>
          <Overlay />
        </>
      )}
    </>
  );
};

export default HomePage;
