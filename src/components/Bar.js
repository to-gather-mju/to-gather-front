import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Bar = () => {
  const location = useLocation();

  const getActiveSteps = (pathname) => {
    if (pathname === "/title") return 1;
    if (pathname === "/calendar") return 2;
    if (pathname === "/timeset") return 3;
    if (pathname === "/result") return 4;
    return 0;
  };

  const activeSteps = getActiveSteps(location.pathname);

  return (
    <Container>
      <Line />
      {[1, 2, 3, 4].map((step) => (
        <Circle key={step} isActive={step <= activeSteps} />
      ))}
    </Container>
  );
};

export default Bar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0 20px;
`;

const Line = styled.div`
  position: absolute;
  top: 45%;
  left: 23px;
  right: 23px;
  height: 4px;
  background-color: ${(props) => props.theme.colors.gray2};
  z-index: 0;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isActive ? props.theme.colors.red : props.theme.colors.gray2};
  z-index: 1;
`;
