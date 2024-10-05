import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Team>TEAM |</Team>
      <P>멋쟁이사자처럼 12기 명지톤 1조</P>
      <P>
        <span>BE </span>이름 이름 이름 이름 이름 이름
      </P>
      <P>
        <span>FE </span>김희수 윤윤아
      </P>
    </Container>
  );
};

const Container = styled.div`
  height: 200px;
  background-color: ${(props) => props.theme.colors.black2};
  padding: 50px;
  color: ${(props) => props.theme.colors.white};
`;
const Team = styled.div`
  ${(props) => props.theme.fonts.logo};
  font-size: 20px;
  margin-bottom: 20px;
`;

const P = styled.div`
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 10px;
  ${(props) => props.theme.fonts.default};
`;
export default Footer;
