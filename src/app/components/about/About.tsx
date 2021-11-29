import styled from '@emotion/styled';
import React from 'react';
import AboutImage from '../../media/images/about.jpg';
import StripedImage from '../../media/images/striped.png';
import Typed from 'react-typed';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: auto;
  padding: 125px 50px 150px;
  background-color: ${({ theme: { colors } }) => colors.background};
  overflow: hidden;
`;

const BackgroundOpacity = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme: { colors } }) => colors.landingOpacity};
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  height: auto;
  margin: auto;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const ImageGallery = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  height: auto;
  margin-bottom: 0px;
  padding: 50px;

  @media only screen and (max-width: 800px) {
    width: 80%;
    margin-bottom: 50px;
  }

  div {
    transform: rotate(
      ${({ theme: { theme } }) =>
        theme === 'light' ? '90deg' : '0deg'}
    );
  }
`;

const Image = styled.img`
  z-index: 10;
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  box-shadow: 0 0 35px 0 rgb(0 0 0 / 50%);
`;

const FullBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 70%;
  height: 70%;
  background-color: ${({ theme: { colors } }) => colors.primaryLight};
`;

const BorderBlock = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;
  height: 70%;
  border: 15px solid ${({ theme: { colors } }) => colors.primaryDark};
`;

const StripedBlock = styled.div`
  position: absolute;
  right: -30px;
  bottom: -30px;
  width: 50%;
  height: 50%;
`;

const StripesImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const AboutMe = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 100%;

  @media only screen and (max-width: 800px) {
    width: 80%;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 0px;
  font-size: 18px;
  font-family: ${({ theme: { fonts } }) => fonts.header};
  font-weight: 300;
  color: ${({ theme: { colors } }) => colors.text01};

  @media only screen and (max-width: 1250px) {
    font-size: 25px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;

const Title = styled.h3`
  margin-bottom: 25px;
  font-size: 60px;
  font-family: ${({ theme: { fonts } }) => fonts.header};
  font-weight: 700;
  color: ${({ theme: { colors } }) => colors.text01};

  @media only screen and (max-width: 1250px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 1000px) {
    font-size: 40px;
  }
`;

const Description = styled.h3`
  max-width: 600px;
  font-size: 20px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 300;
  color: ${({ theme: { colors } }) => colors.text03};

  @media only screen and (max-width: 1250px) {
    font-size: 18px;
  }

  @media only screen and (max-width: 1250px) {
    font-size: 16px;
  }
`;

interface Props {}

const About: React.FC<Props> = () => {
  return (
    <Container>
      <Content>
        <ImageGallery>
          <Image src={AboutImage} alt="About me" />
          <FullBlock />
          <BorderBlock />
          <StripedBlock>
            <StripesImage src={StripedImage} alt="Stripes" />
          </StripedBlock>
        </ImageGallery>
        <AboutMe>
          <Subtitle>Hey there, I am</Subtitle>
          <Title>
            <Typed
              strings={[
                'Youri Gruiters',
                'A Developer',
                'A Teacher',
                'A Generalist',
              ]}
              typeSpeed={125}
              backSpeed={50}
              loop
            />
          </Title>
          <Description>
            A passionate and self-motivated individual with a keen
            interest in personal development, webdevelopment,
            socialising and sharing knowledge. I have a BA degree in
            Media, a BA degree in Education and a vocational degree in
            IT Management.
            <br />
            <br />
            <b>
              On an adventure to find a new job as Front-end
              developer!
            </b>
          </Description>
        </AboutMe>
      </Content>
      <BackgroundOpacity />
    </Container>
  );
};

export default About;
