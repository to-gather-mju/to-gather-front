import React from "react";
import styled from "styled-components";
import BigBtn from "../components/BigBtn";
import { useNavigate, useLocation } from "react-router-dom";

const Result = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { name, title } = location.state || {};

    const handleNextPage = () => {
        navigate('/time');
    };
    const handleCopyClipBoard = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            alert("클립보드에 링크가 복사되었어요.");
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
    <Container>
        <Logo>투게더</Logo>
        <div>
            <AlarmBold>{name}</AlarmBold>
            <Alarm>님</Alarm>
        </div>
        <AlarmBold>{title}</AlarmBold>
        <Alarm>투표를 만들었어요.</Alarm>
        <Description>모임원들에게 링크를 꼭 공유해주세요!</Description>
        <LinkCopy
            onClick={() => handleCopyClipBoard(`${window.location.origin}${location.pathname}`)}
        >
            {`${window.location.origin}${location.pathname}`}
        </LinkCopy>
        <BottomBox>
            <BigBtn
            color = '#EA6868'
            onClick={handleNextPage}
            >
            투표하기
            </BigBtn>
        </BottomBox>
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

const AlarmBold = styled.span`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const Alarm = styled.span`
    color: #000;
    font-family: Inter;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const Description = styled.div`
    color: #6B6B6B;
    text-align: center;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 7rem;
    margin-bottom: 1.06rem;
`;

const LinkCopy = styled.div`
    color: #F18383;
    text-align: center;
    font-family: Inter;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;

const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  margin-bottom: 30px;
  width: 100%;
  position: fixed;
  bottom: 1rem;
`;

export default Result;
