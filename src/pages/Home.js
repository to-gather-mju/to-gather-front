import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import SmallBtn from "../components/SmallBtn";

const Home = () => {
  const navigate = useNavigate();

  const handleNextPage = () => {
    navigate("/title");
  };

  return (
    <Container>
      <Logo>투게더</Logo>
      <p>투게더를 시작해보세요.</p>
      <BottomBox>
        <SmallBtn color="#EA6868" onClick={handleNextPage}>
          시작하기
        </SmallBtn>
      </BottomBox>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.div`
  font-size: 50px;
  font-family: "HakgyoansimPuzzleTTF-Black", sans-serif;
  cursor: pointer;
  color: ${(props) => props.theme.colors.red};
  margin-top: 10rem;
  margin-bottom: 2rem;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  margin: auto;
`;

export default Home;
