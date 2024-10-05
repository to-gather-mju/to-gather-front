import React, { useState } from "react";
import styled from "styled-components";
import BigBtn from "../components/BigBtn";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (name.trim() === "") {
      setError(true);
    } else {
      setError(false);
      navigate("/title", { state: { name: name } });
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setError(false);
    }
  };

  return (
    <Container>
      <Logo>투게더</Logo>
      <Description error={error}>이름을 입력해주세요.</Description>
      <Name value={name} onChange={handleChange}></Name>
      <BottomBox>
        <BigBtn
          color="#D9D9D9"
          activeColor="#EA6868"
          isActive={name.trim() !== ""}
          onClick={handleNextPage}
        >
          다음
        </BigBtn>
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

const Description = styled.div`
  color: ${(props) => (props.error ? "#EA6868" : "#000")};
  font-family: Inter;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Name = styled.input`
  border: 2px solid ${(props) => props.theme.colors.red};
  border-radius: 15px;
  width: 70%;
  height: 40px;
  margin-top: 1.62rem;
  margin-bottom: 15rem;
  outline: none;
  font-size: large;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 30px;
  width: 100%;
`;

export default Home;
