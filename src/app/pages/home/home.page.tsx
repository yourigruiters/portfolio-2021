import React, { useState } from 'react';
import Main from '../../components/Main';
import Landing from '../../components/landing/Landing';
import Intro from '../../components/intro/Intro';
import Locations from '../../components/locations/Locations';

interface Props {}

const HomePage: React.FC<Props> = () => {
  const [showIntro, setShowIntro] = useState(false); // true

  const skipIntro = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro ? (
        <Intro skipIntro={skipIntro} />
      ) : (
        <>
          <Main>
            <Landing />
            <Locations />
          </Main>
        </>
      )}
    </>
  );
};

export default HomePage;
