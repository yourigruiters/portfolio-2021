import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 350px;
`;

const TimeLineContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6000px;
  height: 100%;
  background-color: #00800033;
`;

const TimeLineCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border: 3px solid white;
  border-radius: 100%;
`;

interface Props {}

const TimeLine: React.FC<Props> = () => {
  return (
    <Container>
      <TimeLineContainer>
        <TimeLineCircle />
      </TimeLineContainer>
    </Container>
  );
};

export default TimeLine;
