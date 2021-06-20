import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import SkipSection from './components/SkipSection';
import TimeLine from './components/TimeLine';
import Particles from './Particles';

const Container = styled.div<{ ready: boolean }>`
  ${({ theme: { colors }, ready }) => `
	z-index: ${ready ? '1' : '1000'};
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${colors.neutral00};
    perspective: 2000px;
    overflow: hidden;
	transition: margin 2s, padding 2s;
	margin: ${ready ? '40px 0px' : '0px 0px'};
	padding: ${ready ? '0px 40px 0px 130px' : '0px 0px 0px 0px'};
  `}
`;

const Inner = styled.div<{ ready: boolean }>`
  ${({ theme: { colors } }) => `
	position: relative;
	width: 100%;
	height: 100%;
	transition: transform 2s;
	transform-style: preserve-3d;	
	color: ${colors.neutral04};
	`};
`;

const Front = styled.div<{ ready: boolean }>`
  ${({ theme: { colors }, ready }) => `
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	transition: transform 2s;

	background-color: #bbb;
	background: linear-gradient(155deg, #2c3e50, #000, #000);
	color: ${colors.neutral12};

	transform: ${ready ? 'rotateX(180deg)' : 'rotateX(0deg)'};
	`};
`;

const Back = styled.div<{ ready: boolean }>`
  ${({ theme: { colors }, ready }) => `
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	backface-visibility: hidden;
	color: ${colors.neutral06};

	transition: transform 2s;
	transform: ${ready ? 'rotateX(360deg)' : 'rotateX(180deg)'};

	div:first-of-type {
		height: 100%;
		width: 100%;
		background-color: #ff5851;
	}

	div:last-of-type {
		height: 100%;
		width: 100%;
		background-color: #f8f8f8;
	}
	`};
`;

interface Props {
  skipIntro: () => void;
}

const Intro: React.FC<Props> = ({ skipIntro }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 180000); //15000
  }, []);

  useEffect(() => {
    if (ready) {
      setTimeout(() => {
        skipIntro();
      }, 1650);
    }
  }, [ready]);

  return (
    <Container ready={ready}>
      <Inner ready={ready}>
        <Front ready={ready}>
          <Particles />
          <TimeLine />
          <SkipSection skipIntro={skipIntro} />
        </Front>
        <Back ready={ready}>
          <div></div>
          <div></div>
        </Back>
      </Inner>
    </Container>
  );
};

export default Intro;
