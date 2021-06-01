import styled from '@emotion/styled';
import { random } from 'lodash';
import React from 'react';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ParticleContainer = styled.div<{
  particleDetails: ParticleProps;
}>`
  ${({ particleDetails }) => `
    position: absolute;
    width: ${particleDetails.circleSize}px;
    height: ${particleDetails.circleSize}px;
    transform: translateY(-10vh);

    animation-name: particle-${particleDetails.id};
    animation-duration: ${particleDetails.duration}ms;
    animation-delay: ${particleDetails.delay}ms;
    animation-timing-function: linear;

    @keyframes particle-${particleDetails.id} {
        0% {
            transform: translate3d(
                ${particleDetails.random1001}vw,
                ${particleDetails.startPosition}vh,
                0
            );
        }

        100% {
            transform: translate3d(
                ${particleDetails.random1001}vw,
                -${particleDetails.random30}vh,
                0
            );
        }
    }
      
  `}
`;

const Particle = styled.div<{ particleDetails: ParticleProps }>`
  ${({ particleDetails }) => `
  width: 100%;
  height: 100%;
  border-radius: 50%;
  mix-blend-mode: screen;
  background-image: radial-gradient(#99ffff, #99ffff 10%, rgba(153, 255, 255, 0) 56%);

  animation: fadein-frames 200ms infinite, scale-frames 2s infinite;
  animation-delay: ${particleDetails.circleDelay}ms;

  @keyframes fade-frames {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes scale-frames {
    0% {
      transform: scale3d(0.4, 0.4, 1);
    }
    50% {
      transform: scale3d(2.2, 2.2, 1);
    }
    100% {
      transform: scale3d(0.4, 0.4, 1);
    }
  }
  `}
`;

interface ParticleProps {
  id: number;
  circleSize: number;
  startPosition: number;
  name: string;
  duration: number;
  delay: number;
  circleDelay: number;
  random1001: number;
  random30: number;
}

interface Props {}

const Particles: React.FC<Props> = () => {
  const renderParticles = () => {
    const particles = [];

    for (let i = 1; i < 300; i++) {
      const particleDetails = {
        id: i,
        circleSize: random(1, 8),
        startPosition: 100,
        name: `particle-${i}`,
        duration: 20000 + random(1, 25000),
        delay: random(1, 90000),
        circleDelay: random(1, 4000),
        random1001: random(1, 109),
        random30: random(1, 30),
      };

      particles.push(
        <ParticleContainer key={i} particleDetails={particleDetails}>
          <Particle particleDetails={particleDetails} />
        </ParticleContainer>,
      );
    }

    return <>{particles}</>;
  };

  return <Container>{renderParticles()}</Container>;
};

export default Particles;
