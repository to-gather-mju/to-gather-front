import React, { useState } from "react";
import styled from "styled-components";
import BigBtn from "../components/BigBtn";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNextPage = () => {
    if (name.trim() === '') {
      setError(true);
    } else {
      setError(false);
      navigate('/title');
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== '') {
      setError(false);
    }
  };

  return (
      <Container>
        <Logo>투게더</Logo>
        <Description error={error}>이름을 입력해주세요.</Description>
        <Name
          value={name}
          onChange={handleChange}
        ></Name>
        <BigBtn
          color = '#D9D9D9'
          activeColor = '#EA6868'
          isActive={name.trim() !== ''}
          onClick={handleNextPage}
        >
          <BtnText>다음</BtnText>
        </BigBtn>
      </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80%;
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
  color: ${(props) => (props.error ? '#EA6868' : '#000')};
  font-family: Inter;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Name = styled.input`
  border: 4px solid ${(props) => props.theme.colors.red};
  border-radius: 15px;
  width: 50%;
  height: 3.5rem;
  margin-top: 1.62rem;
  margin-bottom: 15rem;
  outline: none;
  font-size: large;
`;

const BtnText = styled.span`
  color: #000;
  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.5;
`;

export default Home;