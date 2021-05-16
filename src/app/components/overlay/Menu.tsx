import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div``;

const Cover = styled.div`
  width: 40px;
`;

const Button = styled.div`
  width: 40px;
  overflow: hidden;
`;

const Input = styled.input`
  display: none;

  &:checked + .menu_label:before {
    left: -40px;
  }

  &:checked + .menu_label:after {
    left: 40px;
  }

  &:checked + .menu_label .menu_text_bar:before {
    animation: moveUpThenDown 0.8s ease 0.2s forwards,
      shakeWhileMovingUp 0.8s ease 0.2s forwards,
      shakeWhileMovingDown 0.2s ease 0.8s forwards;
  }

  @keyframes moveUpThenDown {
    0% {
      top: 0;
    }
    50% {
      top: -20px;
    }
    100% {
      top: -15px;
    }
  }

  @keyframes shakeWhileMovingUp {
    0% {
      transform: rotateZ(0);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    50% {
      transform: rotateZ(0deg);
    }
    75% {
      transform: rotateZ(10deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }

  @keyframes shakeWhileMovingDown {
    0% {
      transform: rotateZ(0);
    }
    80% {
      transform: rotateZ(3deg);
    }
    90% {
      transform: rotateZ(-3deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }
`;

const Label = styled.label`
  position: relative;
  display: block;
  height: 29px;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #fff;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }

  &:before {
    top: 0;
  }

  &:after {
    top: 12px;
  }
`;

const MenuText = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #fff;

  &:before {
    content: 'MENU';
    position: absolute;
    top: 5px;
    right: 0;
    left: 0;
    margin-top: -5px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
`;

interface Props {}

const Menu: React.FC<Props> = () => {
  return (
    <Container>
      <Cover>
        <Button>
          <Input type="checkbox" id="menu_checkbox" />
          <Label htmlFor="menu_checkbox" className="menu_label">
            <MenuText className="menu_text_bar"></MenuText>
          </Label>
        </Button>
      </Cover>
    </Container>
  );
};

export default Menu;
