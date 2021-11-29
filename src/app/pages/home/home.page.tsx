import React from 'react';
import Main from '../../components/Main';
import About from '../../components/about/About';
import Locations from '../../components/locations/Locations';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import Footer from '../../components/footer/Footer';
import Divider from '../../components/divider/Divider';
import Header from '../../components/header/Header';

interface Props {}

const HomePage: React.FC<Props> = () => {
  return (
    <>
      <Main>
        <Header />
        <About />
        <Divider background="dark" />
        <Projects />
        <Divider fill="dark" />
        <Locations />
        <Divider background="dark" />
        <Contact />
      </Main>
      <Footer />
    </>
  );
};

export default HomePage;
