import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import styled from "styled-components";
import Bar from "../components/Bar";
import SmallBtn from "../components/SmallBtn";

const Title = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleNext = () => {
    if (inputValue.length > 0) {
      navigate("/Calendar");
    }
  };

  return (
    <Container>
      <TopBox>
        <Text>제목</Text>
        <Input
          placeholder="모임 제목을 입력해주세요."
          value={inputValue}
          onChange={handleInputChange}
        />
      </TopBox>
      <BottomBox>
        <Bar />
        <BtnBox>
          <SmallBtn
            color="#ccc"
            activeColor="#FF4444"
            isActive={false}
            onClick={handlePrevious}
          >
            이전
          </SmallBtn>
          <SmallBtn
            color="#ccc"
            activeColor={(props) => props.theme.colors.red}
            isActive={inputValue.length > 0}
            onClick={handleNext}
          >
            다음
          </SmallBtn>
        </BtnBox>
      </BottomBox>
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div``;

const Text = styled.div`
  margin-top: 30px;
  ${(props) => props.theme.fonts.title};
`;

const Input = styled.input`
  margin-top: 20px;
  width: 100%;
  font-size: 20px;
  padding: 10px;
  border-bottom: solid 2px ${(props) => props.theme.colors.red};
  outline: none;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 30px;
`;

const BtnBox = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export default Title;
