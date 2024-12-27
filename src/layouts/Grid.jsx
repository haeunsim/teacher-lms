import React from "react";
import styled from "styled-components";

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
  width: 75%;
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
  return (
    <Flex>
      <Content>
        <Head>
          <h4 className="title3">채팅 수업 참여 현황</h4>
          <Info>
            <p>*현재 학급참여 인원 : 총 00명</p>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="22"
                viewBox="0 0 19 22"
                fill="none"
              >
                <path
                  d="M3.51243 6.35706C4.30711 5.55978 5.25155 4.92747 6.29146 4.49648C7.33136 4.06549 8.44621 3.84432 9.57189 3.84571C11.8452 3.846 14.0253 4.7492 15.6328 6.35668C17.2403 7.96415 18.1435 10.1443 18.1438 12.4176C18.1435 14.6919 17.2406 16.8732 15.6335 18.4824C14.0263 20.0916 11.8462 20.9972 9.57189 21.0003C7.29739 20.9972 5.11713 20.0914 3.50993 18.482C1.90273 16.8725 0.999998 14.691 1 12.4165"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                />
                <path
                  d="M4.29638 1L3.26935 5.17081C3.1782 5.54051 3.23741 5.93128 3.434 6.25737C3.63059 6.58347 3.94851 6.81828 4.318 6.91027L8.50071 7.93513"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              새로고침
            </Button>
          </Info>
          <ToggleButton>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M20 6L6.66667 6C5.95942 6 5.28115 6.23413 4.78105 6.65087C4.28095 7.06762 4 7.63285 4 8.22222V12.6667V23.7778C4 24.3671 4.28095 24.9324 4.78105 25.3491C5.28115 25.7659 5.95942 26 6.66667 26H20M20 6L25.3333 6C26.0406 6 26.7189 6.23413 27.219 6.65087C27.719 7.06762 28 7.63285 28 8.22222V12.6667V23.7778C28 24.3671 27.719 24.9324 27.219 25.3491C26.7189 25.7659 26.0406 26 25.3333 26H20M20 6V16V26"
                stroke="#525252"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ToggleButton>
        </Head>
        <GridContainer>
          <GridItem className="program-info">로그인 완료 (7명)</GridItem>
          <GridItem className="learning-time">수업 시작 (12명)</GridItem>
          <GridItem className="study-info">수업 완료 (4명)</GridItem>
          <GridItem className="not-complete">미 로그인 (2명)</GridItem>
        </GridContainer>
      </Content>

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
    </Flex>
  );
};

export default Grid;
