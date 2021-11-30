import styled from '@emotion/styled';
import React from 'react';
import Heading from '../heading/Heading';
import Location from './components/Location';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 125px 50px 150px;
  background-color: ${({ theme: { colors } }) => colors.background};
  overflow: hidden;
`;

const LocationsWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  max-width: 1600px;
  min-height: 500px;
  background-color: ${({ theme: { colors } }) => colors.background};

  @media only screen and (max-width: 1250px) {
    flex-wrap: wrap;
  }
`;

interface Props {}

const Locations: React.FC<Props> = () => {
  return (
    <Container>
      <Heading
        title={
          <>
            <span>L</span>ocations.<span>IO</span>
          </>
        }
        subtitle={
          <>
            "Around the world, <b>around the woooorrrldd</b>."
            <span> - Daft Punk</span>
          </>
        }
      />
      <LocationsWrapper>
        <Location
          city="Uden"
          country="The Netherlands"
          description="Every story has to start at a certain point.."
        />
        <Location
          city="Johannesburg"
          country="South Africa"
          description="..It'll always contain a successful chapter, one with happiness and great personal development.."
        />
        <Location
          city="Stockholm"
          country="Sweden"
          description="..But there have also been struggles, some in which the most knowledge was gained.."
        />
        <Location
          city="Nijmegen"
          country="The Netherlands"
          description="..And even though happiness is at the core of this story, we stay on the lookout for new chapters."
        />
      </LocationsWrapper>
    </Container>
  );
};

export default Locations;
