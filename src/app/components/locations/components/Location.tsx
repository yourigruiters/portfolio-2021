import styled from '@emotion/styled';
import React from 'react';
import Stockholm from '../../../media/images/stockholm.jpeg';
import Nijmegen from '../../../media/images/nijmegen.jpeg';
import Johannesburg from '../../../media/images/johannesburg.jpeg';
import Uden from '../../../media/images/uden.jpg';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 25%;
  min-height: 500px;
  background-color: ${({ theme: { colors } }) => colors.background};
  transform: translate3d(0, 0, 0);
  transition: width 0.5s ease;
  overflow: hidden;

  &:before,
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    content: '';
    transform: translate3d(0, 0, 0);
  }

  &:after {
    opacity: 1;
    background: ${({ theme: { colors } }) => colors.locationOpacity};
    transition: opacity 0.5s ease;
  }

  &:before {
    z-index: 1;
    opacity: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 75%
    );
    transform: translate3d(0, 0, 0) translateY(50%);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  &:hover {
    width: 30%;

    &:after {
      opacity: 0;
    }

    &:before {
      opacity: 1;
      transform: translate3d(0, 0, 0) translateY(0);
      transition: opacity 1s ease, transform 1s ease 0.25s;
    }

    .content {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.75s ease 0.5s;
    }

    .background {
      filter: grayscale(0);
    }
  }

  @media only screen and (max-width: 1250px) {
    width: 50%;
    transition: unset;

    &:hover {
      width: 50%;
    }
  }

  @media only screen and (max-width: 800px) {
    width: 100%;

    &:hover {
      width: 100%;
    }
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  transition: filter 0.5s ease;
  filter: grayscale(100%);
  transform: translate3d(0, 0, 0);
`;

const Year = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  padding: 0px 10px;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  text-shadow: -1px -1px 1px rgb(0 0 0 / 80%),
    1px 1px 1px rgb(114 104 104);
`;

const Content = styled.div`
  z-index: 1;
  position: relative;
  top: 75%;
  width: 100%;
  margin: 0 20px;
  transform: translate3d(0, 0, 0) translateY(25px);
  text-align: center;
  opacity: 0;
`;

const City = styled.p`
  font-size: 16px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 300;
  line-height: 20px;
  color: #fff;
`;

const Country = styled.p`
  font-size: 20px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 700;
  line-height: 32px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 16px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 300;
  line-height: 20px;
  color: #fff;
`;

interface Props {
  city: string;
  country: string;
  description: string;
}

const Location: React.FC<Props> = ({
  city,
  country,
  description,
}) => {
  const getImage = () => {
    switch (city) {
      case 'Uden':
        return `url(${Uden})`;
      case 'Nijmegen':
        return `url(${Nijmegen})`;
      case 'Johannesburg':
        return `url(${Johannesburg})`;
      case 'Stockholm':
        return `url(${Stockholm})`;
      default:
        return `url(https://placeimg.com/801/801/nature)`;
    }
  };

  return (
    <Container>
      <Background
        className="background"
        style={{
          backgroundImage: getImage(),
        }}
      ></Background>

      <Year>
        <City>{city}</City>
        <Country>{country}</Country>
      </Year>

      <Content className="content">
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

export default Location;
