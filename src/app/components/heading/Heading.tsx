import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  height: auto;
  padding: 0px 50px 100px;

  @media only screen and (max-width: 800px) {
    padding: 0px 20px 75px;
  }
`;

const Title = styled.p`
  padding-left: 15px;
  font-size: 42px;
  font-family: ${({ theme: { fonts } }) => fonts.header};
  font-weight: 400;
  line-height: 42px;
  color: ${({ theme: { colors } }) => colors.text01};
  border-left: 2px solid ${({ theme: { colors } }) => colors.primary};

  span {
    font-weight: 700;
  }

  @media only screen and (max-width: 800px) {
    font-size: 36px;
  }
`;

const SubTitle = styled.p`
  padding-top: 15px;
  padding-left: 20px;
  font-size: 20px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 300;
  line-height: 35px;
  color: ${({ theme: { colors } }) => colors.text01};

  span {
    font-weight: 300;
    font-size: 14px;
    color: ${({ theme: { colors } }) => colors.text03};
  }
`;

interface Props {
  title: JSX.Element;
  subtitle: JSX.Element;
}

const Heading: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default Heading;
