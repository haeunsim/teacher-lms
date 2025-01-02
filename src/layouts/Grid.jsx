import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../components/Icon/Icon";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 1fr;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 24px;
`;

const GridItem = styled.div`
  padding: 16px;
  font-size: 18px;
  color: #fff;

  &.program-info {
    background-color: #48be9d;
    grid-row: 1;
    grid-column: 1;
  }

  &.learning-time {
    background-color: #4b89dc;
    grid-row: 1/3;
    grid-column: 2;
  }

  &.study-info {
    background-color: #eee345;
    grid-row: 2;
    grid-column: 1;
    width: 60%;
  }

  &.not-complete {
    background-color: #fc6e51;
    grid-row: 2;
    grid-column: 1;
    margin-left: 60%;
    width: 40%;
  }
`;

const Head = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 24px 0;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  p {
    color: #9a9a9a;
    font-size: 20px;
    font-weight: 500;
  }
`;

const Button = styled.button`
  display: flex;
  width: 158px;
  padding: 8px 0px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #88c0ff;
  color: #fff;
  border-radius: 8px;
  font-size: 20px;
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 24px;
  top: 16px;
  background: none;
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: ${props => props.isListVisible ? '75%' : '100%'};
  transition: width 0.3s ease;
`;

const List = styled.div`
  width: 100%;
  max-width: 428px;
  background: rgba(196, 224, 255, 0.25);
  padding: 36px 42px;

  h4 {
    text-align: center;
    padding: 40px 0 20px;
    color: #525252;
    font-size: 22px;
    font-weight: 500;
  }
`;

const ListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

const StudentCard = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  color: #9a9a9a;
  font-size: 20px;
  font-weight: 500;
`;

const Grid = () => {
  const [isListVisible, setIsListVisible] = useState(true);

  return (
    <Flex>
      <Content isListVisible={isListVisible}>
        <Head>
          <h4 className="title3">채팅 수업 참여 현황</h4>
          <Info>
            <p>*현재 학급참여 인원 : 총 00명</p>
            <Button>
              <Icon name="refresh" color="#fff" />
              새로고침
            </Button>
          </Info>
          <ToggleButton onClick={() => setIsListVisible(!isListVisible)}>
            <Icon name="tab-r" color="#525252" />
          </ToggleButton>
        </Head>
        <GridContainer>
          <GridItem className="program-info">로그인 완료 (7명)</GridItem>
          <GridItem className="learning-time">수업 시작 (12명)</GridItem>
          <GridItem className="study-info">수업 완료 (4명)</GridItem>
          <GridItem className="not-complete">미 로그인 (2명)</GridItem>
        </GridContainer>
      </Content>
      
      {isListVisible && (
        <List>
          <h4>'수업 시작' 학생 명단</h4>
          <ListGrid>
            <StudentCard>1. 이학생</StudentCard>
            <StudentCard>1. 이학생</StudentCard>
            <StudentCard>1. 이학생</StudentCard>
            <StudentCard>1. 이학생</StudentCard>
            <StudentCard>1. 이학생</StudentCard>
            <StudentCard>1. 이학생</StudentCard>
            <StudentCard>1. 이학생</StudentCard>
            <StudentCard>1. 이학생</StudentCard>
            <StudentCard>1. 이학생</StudentCard>
            <StudentCard>1. 이학생</StudentCard>
          </ListGrid>
        </List>
      )}
    </Flex>
  );
};

export default Grid;
