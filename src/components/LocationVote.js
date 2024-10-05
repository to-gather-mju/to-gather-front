import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LocationVote = ({ locations = [] }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    console.log("Received locations in LocationVote:", locations);
  }, [locations]);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  if (!locations || locations.length === 0) {
    return <div>장소가 없습니다. 장소를 추가해주세요.</div>;
  }

  return (
    <Container>
      <Title>장소 투표</Title>
      <Text>참여할 장소를 선택하세요:</Text>
      <LocationList>
        {locations.map((location, index) => (
          <LocationItem
            key={index}
            isSelected={selectedLocation === location}
            onClick={() => handleLocationSelect(location)}
          >
            {location}
          </LocationItem>
        ))}
      </LocationList>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  margin-top: 20px;
`;

const Title = styled.div`
  ${(props) => props.theme.fonts.title};
`;

const Text = styled.div`
  margin-top: 10px;
`;

const LocationList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 15px;
`;

const LocationItem = styled.div`
  background-color: ${(props) =>
    props.isSelected ? props.theme.colors.red : "#f0f0f0"};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  &:hover {
    background-color: ${(props) =>
      props.isSelected ? props.theme.colors.darkRed : "#e0e0e0"};
  }
`;

export default LocationVote;
