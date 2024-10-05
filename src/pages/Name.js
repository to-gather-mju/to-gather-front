import React, { useState } from "react";
import styled from "styled-components";
import BigBtn from "../components/BigBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { Axios } from "../api/Axios";

const Name = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { meetingId } = location.state || {};

  const handleNextPage = () => {
    if (name.trim() === "") {
      setError(true);
    } else {
      setError(false);

      Axios.post(`/api/user/create/${meetingId}`, {
        userName: name,
      })
        .then((response) => {
          console.log("User created successfully:", response.data);
          navigate("/timetable", { state: { meetingId } });
        })
        .catch((error) => {
          console.error("Error creating user:", error);
        });
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
      <Input value={name} onChange={handleChange}></Input>
      <BottomBox>
        <BigBtn
          color="#D9D9D9"
          activeColor="#EA6868"
          isActive={name.trim() !== ""}
          onClick={handleNextPage}
        >
          완료
        </BigBtn>
      </BottomBox>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  width: 90%;
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

const Input = styled.input`
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

export default Name;
