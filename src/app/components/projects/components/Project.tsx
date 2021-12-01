import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { GithubIcon } from '../../../media/icons/Icons';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  height: 450px;
  box-shadow: 0 0 35px 0 rgb(0 0 0 / 50%);
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 45px 0 rgb(0 0 0 / 75%);
    transform: scale(1.03) rotate(2deg);
  }
`;

const Image = styled.div`
  width: 100%;
  height: 500px;

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 30px 20px;

  background: linear-gradient(
    180deg,
    ${({ theme: { theme } }) =>
        theme === 'light' ? 'rgba(2, 0, 36, 1) 0%,' : '#180017 0%,'}
      rgba(0, 0, 0, 1) 100%
  );
`;

const Title = styled.h4`
  font-size: 24px;
  font-family: ${({ theme: { fonts } }) => fonts.header};
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 5px;
`;

const Description = styled.p`
  min-height: 48px;
  font-size: 16px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 300;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 15px;
`;

const Labels = styled.div`
  display: flex;
  column-gap: 15px;
  width: 100%;
  height: auto;
  min-height: 26px;
  margin-top: 10px;
`;

const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.primaryDark};
  color: #fff;
  padding: 4px 16px;
  text-align: center;
  border-radius: 100px;
  font-size: 10px;
`;

const GitHub = styled.div`
  position: absolute;
  bottom: 30px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 100px;

  path {
    fill: #fff;
  }

  &:hover path {
    fill: #c8c8c8;
  }
`;

const GithubLink = styled.p`
  width: auto;
  height: auto;
`;

interface Props {
  title: string;
  description: string;
  labels: string[];
  link: string;
  githubLink: string;
  img: string;
}

const Project: React.FC<Props> = ({
  title,
  description,
  labels,
  link,
  githubLink,
  img,
}) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    window.open(githubLink, '_blank');
  };

  return (
    <Link to={link}>
      <Container>
        <Image>
          <img src={img} alt="Project-image" />
        </Image>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Labels>
            {labels.map((label) => (
              <Label>{label}</Label>
            ))}
          </Labels>
          <GithubLink onClick={handleClick}>
            <GitHub>
              <GithubIcon />
            </GitHub>
          </GithubLink>
        </Content>
      </Container>
    </Link>
  );
};

export default Project;
