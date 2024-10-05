import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Bar from "../components/Bar";
import SmallBtn from "../components/SmallBtn";
import styled from "styled-components";
import { Axios } from "../api/Axios";

const TimeSet = () => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [locations, setLocations] = useState([""]);
  const navigate = useNavigate();
  const location = useLocation();
  const { title, startDate, endDate } = location.state || {};

  const times = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];

  const handlePrevious = () => {
    navigate(-1);
  };

  const handleNext = () => {
    if (startTime && endTime && locations.every((loc) => loc)) {
      const meetingData = {
        meetingTitle: title,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        startTime,
        endTime,
        places: locations,
      };

      Axios.post("/api/meeting/createMeeting", meetingData)
        .then((response) => {
          const meetingId = response.data.data.meetingId;
          console.log("Meeting Created:", response.data);
          navigate("/result", { state: { meetingId } });
        })
        .catch((error) => {
          console.error("Error creating meeting:", error);
        });
    }
  };

  const handleLocationChange = (index, value) => {
    const newLocations = [...locations];
    newLocations[index] = value;
    setLocations(newLocations);
  };

  const addLocation = () => {
    setLocations([...locations, ""]);
  };

  const removeLocation = (index) => {
    const newLocations = locations.filter((_, locIndex) => locIndex !== index);
    setLocations(newLocations);
  };

  return (
    <Container>
      <TopBox>
        <Title>모임 시간</Title>
        <Text>투표가 필요한 시간을 선택해주세요.</Text>
        <TimeSelectContainer>
          <TimeSelect
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          >
            <option value="">00</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </TimeSelect>
          <Separator>부터</Separator>
          <TimeSelect
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          >
            <option value="">00</option>
            {times.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </TimeSelect>
          <Separator>까지</Separator>
        </TimeSelectContainer>

        <Title>모임 장소</Title>
        <Text>모임 장소 투표 후보를 입력해주세요.</Text>

        {locations.map((location, index) => (
          <LocationInputBox key={index}>
            <LocationInput
              type="text"
              value={location}
              onChange={(e) => handleLocationChange(index, e.target.value)}
              placeholder={`장소 ${index + 1}`}
            />
            {locations.length > 1 && (
              <RemoveBtn onClick={() => removeLocation(index)}>X</RemoveBtn>
            )}
          </LocationInputBox>
        ))}
        <AddBtnBox>
          <AddLocationBtn onClick={addLocation}>+ 장소 추가</AddLocationBtn>
        </AddBtnBox>
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
            isActive={!!startTime && !!endTime && locations.every((loc) => loc)}
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

const TimeSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 60px;
`;

const TimeSelect = styled.select`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-bottom: solid 2px ${(props) => props.theme.colors.red};
  background-color: transparent;
  color: #555;
  outline: none;
  cursor: pointer;
`;

const Separator = styled.div`
  margin: 0 10px;
  font-size: 18px;
  color: #666;
`;

const LocationInputBox = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const LocationInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: solid 2px ${(props) => props.theme.colors.red};
  outline: none;
`;

const RemoveBtn = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.red};
  font-size: 18px;
  cursor: pointer;
  margin-left: 10px;
`;

const AddLocationBtn = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.colors.red};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const AddBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
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

export default TimeSet;
