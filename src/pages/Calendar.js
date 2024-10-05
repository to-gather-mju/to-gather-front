import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bar from "../components/Bar";
import SmallBtn from "../components/SmallBtn";
import styled from "styled-components";

const Calendar = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleNext = () => {
    if (startDate && endDate) {
      navigate("/settime");
    }
  };

  const handleDateSelect = (date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else {
      if (date > startDate) {
        setEndDate(date);
      } else {
        setStartDate(date);
      }
    }
  };

  const handleMonthChange = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
    setStartDate(null);
    setEndDate(null);
  };

  const CalendarView = () => {
    const daysInMonth = () => {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
      );
      return date.getDate();
    };

    const getFirstDayOfMonth = () => {
      return new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      ).getDay();
    };

    const isDateInRange = (day) => {
      if (!startDate || !endDate) return false;
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      return date >= startDate && date <= endDate;
    };

    const handleDayClick = (day) => {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      handleDateSelect(date);
    };

    const renderDays = () => {
      const totalDays = daysInMonth();
      const firstDayOfMonth = getFirstDayOfMonth();
      const days = [];

      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<EmptyDay key={`empty-${i}`} />);
      }

      for (let day = 1; day <= totalDays; day++) {
        const isSelected =
          (startDate && startDate.getDate() === day) ||
          (endDate && endDate.getDate() === day);
        const isInRange = isDateInRange(day);
        days.push(
          <Day
            key={day}
            onClick={() => handleDayClick(day)}
            isSelected={isSelected}
            isInRange={isInRange}
          >
            {day}
          </Day>
        );
      }
      return days;
    };

    const renderWeekdays = () => {
      const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
      return weekdays.map((day, index) => <Weekday key={index}>{day}</Weekday>);
    };

    return (
      <CalendarContainer>
        <MonthNavigation>
          <ArrowButton onClick={() => handleMonthChange(-1)}>{"<"}</ArrowButton>
          <Month>
            {currentDate.getFullYear()}
            {"년 "}
            {currentDate.toLocaleString("default", { month: "long" })}
          </Month>
          <ArrowButton onClick={() => handleMonthChange(1)}>{">"}</ArrowButton>
        </MonthNavigation>
        <WeekdaysContainer>{renderWeekdays()}</WeekdaysContainer>
        <DaysContainer>{renderDays()}</DaysContainer>
      </CalendarContainer>
    );
  };

  return (
    <Container>
      <TopBox>
        <Title>투표기간</Title>
        <Text>약속 잡을 날짜의 범위를 선택해주세요.</Text>
        <CalendarView />
      </TopBox>
      <BottomBox>
        <Bar />
        <BtnBox>
          <SmallBtn
            color="#ccc"
            activeColor={(props) => props.theme.colors.red}
            isActive={false}
            onClick={handlePrevious}
          >
            이전
          </SmallBtn>
          <SmallBtn
            color="#ccc"
            activeColor={(props) => props.theme.colors.red}
            isActive={!!startDate && !!endDate}
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

const Title = styled.div`
  margin-top: 30px;
  ${(props) => props.theme.fonts.title};
`;
const TopBox = styled.div``;

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

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const MonthNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Month = styled.h2`
  font-size: 20px;
  margin: 20px 0;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

const WeekdaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(40px, 1fr));
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const Weekday = styled.div`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.red};
`;

const DaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(40px, 1fr));
  gap: 10px;
  width: 100%;
`;

const Day = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  border: ${(props) =>
    props.isSelected || props.isInRange
      ? `2px solid ${props.theme.colors.red}`
      : "1px solid #ccc"};
  background-color: ${(props) =>
    props.isSelected || props.isInRange
      ? props.theme.colors.red
      : "transparent"};
  color: ${(props) => (props.isSelected || props.isInRange ? "#fff" : "#000")};
  &:hover {
    background-color: #f0f0f0;
  }
`;

const EmptyDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;

export default Calendar;
