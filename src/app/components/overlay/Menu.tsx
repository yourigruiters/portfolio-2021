import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

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
    height: 3px;
    background-color: #fff;
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }

  &:before {
    top: 0;
  }

  &:after {
    top: 12px;
    width: 80%;
    left: 10%;
  }
`;

const MenuText = styled.div`
  position: absolute;
  top: 24px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #fff;

  &:before {
    content: 'MENU';
    position: absolute;
    top: 7px;
    right: 0;
    left: 0;
    margin-top: -5px;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
  }
`;

const List = styled.ul<{ isActive: boolean }>`
  ${({ isActive }) => `
    display: flex;
    align-items: center;
    flex-direction: column;
    height: ${isActive ? '200' : '0'}px;
    width: 100%;
    padding-top: 20px;
    overflow: hidden;
    color: white;
    transition: height 0.5s linear;
  `}
`;

interface Props {}

const Menu: React.FC<Props> = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsActive(false);
  };

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Cover onClick={() => setIsActive(true)}>
        <Button>
          <Input
            type="checkbox"
            id="menu_checkbox"
            checked={isHovered || isActive}
          />
          <Label htmlFor="menu_checkbox" className="menu_label">
            <MenuText className="menu_text_bar" />
          </Label>
        </Button>
      </Cover>
      <List isActive={isActive}>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </List>
    </Container>
  );
};

export default Menu;
