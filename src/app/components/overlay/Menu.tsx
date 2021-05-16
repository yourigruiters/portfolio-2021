import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
  #webapp_cover {
    width: 40px;
  }

  #menu_button {
    width: 40px;
    overflow: hidden;
  }

  #menu_checkbox {
    display: none;
  }

  #menu_label {
    position: relative;
    display: block;
    height: 29px;
    cursor: pointer;
  }

  #menu_label:before,
  #menu_label:after,
  #menu_text_bar {
    position: absolute;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #fff;
  }

  #menu_label:before,
  #menu_label:after {
    content: '';
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }

  #menu_label:before {
    top: 0;
  }

  #menu_label:after {
    top: 12px;
  }

  #menu_text_bar {
    top: 24px;
  }

  #menu_text_bar:before {
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

  #menu_checkbox:checked + #menu_label:before {
    left: -40px;
  }

  #menu_checkbox:checked + #menu_label:after {
    left: 40px;
  }

  #menu_checkbox:checked + #menu_label #menu_text_bar:before {
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

interface Props {}

const Menu: React.FC<Props> = () => {
  return (
    <Container>
      <div id="webapp_cover">
        <div id="menu_button">
          <input type="checkbox" id="menu_checkbox" />
          <label htmlFor="menu_checkbox" id="menu_label">
            <div id="menu_text_bar"></div>
          </label>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
