import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Bar from "../components/Bar";
import BigBtn from "../components/BigBtn";

const TimeTable = () => {
  const [selectedBlocks, setSelectedBlocks] = useState([]);
  const [blockSize, setBlockSize] = useState(50);
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [dragAction, setDragAction] = useState(null);
  const location = useLocation();
  const { name, title } = location.state || {};

  const timeSlots = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
  ];

  const daysOfWeek = ["10/10", "10/11", "10/12", "10/13"];

  useEffect(() => {
    const handleResize = () => {
      const newBlockSize = Math.max(30, window.innerWidth / 20);
      setBlockSize(newBlockSize);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (selectedBlocks.length > 0) {
      navigate("/final", { state: { name, title } });
    }
  };

  const handleBlockSelect = (day, time) => {
    const block = `${day}-${time}`;
    const isSelected = selectedBlocks.includes(block);

    if (dragAction === null) {
      setDragAction(!isSelected);
    }

    setSelectedBlocks((prevSelected) =>
      dragAction
        ? [...prevSelected, block]
        : prevSelected.filter((b) => b !== block)
    );
  };

  const handleMouseDown = (day, time) => {
    setIsDragging(true);
    handleBlockSelect(day, time);
  };

  const handleMouseEnter = (day, time) => {
    if (isDragging) {
      handleBlockSelect(day, time);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragAction(null);
  };

  const renderTimeBlocks = () => {
    return (
      <>
        {daysOfWeek.map((day) => (
          <Column key={day}>
            <DayLabel>{day}</DayLabel>
            {timeSlots.map((time) => {
              const isSelected = selectedBlocks.includes(`${day}-${time}`);
              return (
                <TimeBlock
                  key={`${day}-${time}`}
                  isSelected={isSelected}
                  blockSize={blockSize}
                  onMouseDown={() => handleMouseDown(day, time)}
                  onMouseEnter={() => handleMouseEnter(day, time)}
                  onMouseUp={handleMouseUp}
                >
                  {isSelected ? "" : ""}
                </TimeBlock>
              );
            })}
          </Column>
        ))}
      </>
    );
  };

  return (
    <Container>
      <TopBox>
        <Title>시간표</Title>
        <Text>원하는 시간을 드래그해서 선택하세요.</Text>
        <Grid onMouseUp={handleMouseUp}>
          <Column>
            {timeSlots.map((time) => (
              <TimeLabel key={time} blockSize={blockSize}>
                {time}
              </TimeLabel>
            ))}
          </Column>
          {renderTimeBlocks()}
        </Grid>
      </TopBox>
      <BottomBox>
        <Bar />
        <BtnBox>
          <BigBtn
            color="#ccc"
            activeColor={(props) => props.theme.colors.red}
            isActive={selectedBlocks.length > 0}
            onClick={handleNext}
          >
            결과보기
          </BigBtn>
        </BtnBox>
      </BottomBox>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const TopBox = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.div`
  margin-top: 30px;
  ${(props) => props.theme.fonts.title};
`;

const Text = styled.div`
  margin-top: 10px;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(4, 1fr);
  gap: 10px;
  margin-top: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DayLabel = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const TimeLabel = styled.div`
  height: ${(props) => props.blockSize}px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const TimeBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.blockSize}px;
  height: ${(props) => props.blockSize}px;
  margin: 5px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.red : "#f0f0f0"};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  border: 1px solid #ccc;
  border-radius: 5px;
  &:hover {
    background-color: ${(props) =>
      props.isSelected ? props.theme.colors.darkRed : "#e0e0e0"};
  }
`;

export default TimeTable;
