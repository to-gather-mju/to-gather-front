import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>투게더</Logo>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray2};
  padding: 0 30px;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.red};
`;

const Logo = styled.div`
  margin-right: 50px;
  font-size: 30px;
  ${(props) => props.theme.fonts.logo};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Header;
