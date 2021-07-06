import styled from '@emotion/styled';
import React from 'react';
import Location from './components/Location';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  min-height: 600px;
  background-color: ${({ theme: { colors } }) =>
    colors.backgroundDarkest};
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 2000px;
  min-height: 600px;
`;

interface Props {}

const Locations: React.FC<Props> = () => {
  return (
    <Container>
      <Wrapper>
        <Location />
        <Location />
        <Location />
        <Location />
      </Wrapper>
    </Container>
  );
};

export default Locations;
