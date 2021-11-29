import styled from '@emotion/styled';
import React from 'react';
import {
  ArrowIcon,
  GithubIcon,
  LinkedInIcon,
  InstagramIcon,
} from '../../media/icons/Icons';

const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 50px 50px 25px;
  background-color: ${({ theme: { colors } }) =>
    colors.backgroundDarkest};
`;

const BackToTopButton = styled.button`
  position: absolute;
  top: -25px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: auto;
  border-radius: 100%;
  background: ${({ theme: { colors } }) =>
    `linear-gradient(135deg, ${colors.primaryLight} 0%, ${colors.primaryDark} 74%)`};
  cursor: pointer;
  transition: background 0.4s;

  &:hover {
    background: ${({ theme: { colors } }) =>
      `linear-gradient(135deg, ${colors.primaryDark} 0%, ${colors.primary} 74%)`};
  }

  svg {
    width: 18px;
    height: 18px;
    transform: rotate(270deg);
    fill: #fff;
  }
`;

const CopyrightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 400px;
  height: auto;
  padding: 0px 50px;
`;

const Copyright = styled.p`
  margin-top: 10px;
  font-size: 14px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.text01};

  span {
    font-weight: 700;
  }
`;

const SocialWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 150px;
  height: 30px;

  svg {
    width: 18px;
    height: 18px;
    cursor: pointer;

    path {
      filter: grayscale(100%);
    }

    &:hover path {
      filter: grayscale(0%);
    }
  }
`;

const Link = styled.a`
  width: auto;
  height: auto;
`;

interface Props {}

const Footer: React.FC<Props> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <BackToTopButton onClick={scrollToTop}>
        <ArrowIcon />
      </BackToTopButton>
      <SocialWrapper>
        <Link
          href="https://www.instagram.com/yourigruiters/"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
        <Link href="https://github.com/yourigruiters" target="_blank">
          <GithubIcon />
        </Link>
        <Link
          href="https://www.linkedin.com/in/yourigruiters/"
          target="_blank"
        >
          <LinkedInIcon />
        </Link>
      </SocialWrapper>
      <CopyrightWrapper>
        <Copyright>
          <b>©</b> 2021 | Coded by <b>Youri Gruiters</b>
        </Copyright>
      </CopyrightWrapper>
    </Container>
  );
};

export default Footer;
