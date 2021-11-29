import styled from '@emotion/styled';
import React from 'react';
import ContactForm from '../contactForm/ContactForm';
import Heading from '../heading/Heading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 75px 50px 100px;
  background-color: ${({ theme: { colors } }) =>
    colors.backgroundDark};
  overflow: hidden;
`;

interface Props {}

const Contact: React.FC<Props> = () => {
  return (
    <Container>
      <Heading
        title={
          <>
            <span>C</span>ontact.<span>IO</span>
          </>
        }
        subtitle={
          <>
            "But here's my number, <b>so call me, maybe?</b>"
            <span> - Carly Rae Jepsen</span>
          </>
        }
      />
      <ContactForm />
    </Container>
  );
};

export default Contact;
