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
`;

const Btn = styled.button`
  width: 90%;
  height: 40px;
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
