import React from "react";
import styled from "styled-components";

const BigBtn = ({ children, color, activeColor, isActive, onClick }) => {
  return (
    <Container>
      <Btn
        color={color}
        activeColor={activeColor}
        isActive={isActive}
        onClick={onClick}
      >
        {children}
      </Btn>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 2rem;
`;

const Btn = styled.button`
  width: 60%;
  height: 3rem;
  border-radius: 15px;
  font-size: 20px;
  background-color: ${(props) =>
    props.isActive ? props.activeColor : props.color};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default BigBtn;
