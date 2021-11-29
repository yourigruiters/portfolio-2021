import styled from '@emotion/styled';
import React, {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ArrowIcon } from '../../media/icons/Icons';
import emailjs from 'emailjs-com';
import apiKey from '../../../emailKey';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  height: 200px;
  padding: 50px 0px;
`;

const Send = styled.p`
  font-size: 18px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 300;
  color: ${({ theme: { colors } }) => colors.text02};
`;

const Label = styled.p`
  padding-left: 10px;
  padding-bottom: 5px;
  font-size: 14px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 300;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.text02};
`;

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: ${({ theme: { colors } }) => colors.primary};
`;

const ProgressBarFill = styled.div<{ step: number }>`
  position: absolute;
  top: -2px;
  width: ${({ step }) => step * 25}%;
  height: 5px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: ${({ theme: { colors } }) => colors.primary};
  transition: width 0.5s;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20px;
  padding-top: 12px;
`;

const ErrorMessage = styled.p`
  padding-left: 12px;
  font-size: 14px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 300;
  line-height: 16px;
  font-style: italic;
  color: ${({ theme: { colors } }) => colors.text02};
`;

const Progress = styled.p`
  padding-left: 15px;
  font-size: 14px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 400;
  line-height: 16px;
  color: ${({ theme: { colors } }) => colors.text02};

  span {
    cursor: pointer;
  }
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  padding-bottom: 5px;

  svg {
    position: absolute;
    top: 11px;
    right: 8px;
    width: 18px;
    height: 18px;
    fill: ${({ theme: { colors } }) => colors.text00};
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;

  padding-left: 12px;
  font-size: 18px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 400;
  line-height: 40px;
  color: ${({ theme: { colors } }) => colors.text01};
`;

const InputLong = styled.input`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  outline: none;

  padding-left: 12px;
  font-size: 14px;
  font-family: ${({ theme: { fonts } }) => fonts.text};
  font-weight: 400;
  line-height: 40px;
  color: ${({ theme: { colors } }) => colors.text01};
`;

const initialDetails = {
  name: '',
  email: '',
  subject: '',
  body: '',
};

interface Props {}

const ContactForm: React.FC<Props> = () => {
  const [step, setStep] = useState(1);
  const [error, setError] = useState('');
  const [send, setSend] = useState(false);
  const [details, setDetails] = useState(initialDetails);
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if (inputRef.current && step >= 2) {
      inputRef.current.focus();
    }
  }, [step]);

  const handleDetails = (key: string, value: string) => {
    setDetails({ ...details, [key]: value });
  };

  const handleStep = () => {
    switch (step) {
      case 1:
        if (!details['name'].length) {
          setError('Please enter a name..');
        } else {
          setError('');
          setStep(step + 1);
        }
        break;
      case 2:
        if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            details['email'],
          )
        ) {
          setError('Please enter a valid E-mail address..');
        } else {
          setError('');
          setStep(step + 1);
        }
        break;
      case 3:
        if (!details['subject'].length) {
          setError('Please enter a subject..');
        } else {
          setError('');
          setStep(step + 1);
        }
        break;
      case 4:
        if (!details['body'].length) {
          setError('Please provide a short question..');
        } else {
          setError('');
          handleSubmit();
        }
        break;
    }
  };

  const keyPressHandler = (
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      handleStep();
    }
  };

  const handleSubmit = () => {
    const formDetails = {
      reply_to: details['email'],
      from_name: details['name'],
      message: `Subject: ${details['subject']} - Body: ${details['body']}`,
    };

    emailjs
      .send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, formDetails)
      .then(
        () => {
          setSend(true);
        },
        () => {
          alert('An unexpected error occurred, please try again');
        },
      );
  };

  const handleReset = () => {
    setDetails(initialDetails);
    setStep(1);
  };

  const labels = [
    'Name and Last Name',
    'E-mail address',
    'Subject',
    'Question',
  ];

  const inputs = [
    <Input
      type="text"
      onChange={(e) => handleDetails('name', e.target.value)}
      value={details.name}
      onKeyDown={(e) => keyPressHandler(e)}
      ref={inputRef}
    />,
    <Input
      type="text"
      onChange={(e) => handleDetails('email', e.target.value)}
      value={details.email}
      onKeyDown={(e) => keyPressHandler(e)}
      ref={inputRef}
    />,
    <Input
      type="text"
      onChange={(e) => handleDetails('subject', e.target.value)}
      value={details.subject}
      onKeyDown={(e) => keyPressHandler(e)}
      ref={inputRef}
    />,
    <InputLong
      type="text"
      onChange={(e) => handleDetails('body', e.target.value)}
      value={details.body}
      onKeyDown={(e) => keyPressHandler(e)}
      ref={inputRef}
    />,
  ];

  return (
    <Container>
      {send ? (
        <Send>
          <b>Thank you!</b> Your message has been sent.
        </Send>
      ) : (
        <>
          <Label>{labels[step - 1]}</Label>
          <InputContainer>
            {inputs[step - 1]}
            <ArrowIcon onClick={() => handleStep()} />
          </InputContainer>
          <ProgressBar>
            <ProgressBarFill step={step} />
          </ProgressBar>
          <Footer>
            <ErrorMessage>{error}</ErrorMessage>
            <Progress>
              {step !== 1 && (
                <span onClick={handleReset}>Reset Form - </span>
              )}
              {step} / <b>4</b>
            </Progress>
          </Footer>
        </>
      )}
    </Container>
  );
};

export default ContactForm;
