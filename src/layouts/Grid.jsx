import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 2fr 1fr;
  width: 100%;
  height: 100vh;
  margin: 0;
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

const Grid = () => {
  return (
    <>
      <div>
        <h4>채팅 수업 참여 현황</h4>
        <div>
          <p>*현재 학급참여 인원 : 총 00명</p>
          <button>새로고침</button>
        </div>
      </div>
      <GridContainer>
        <GridItem className="program-info">로그인 완료 (7명)</GridItem>
        <GridItem className="learning-time">수업 시작 (12명)</GridItem>
        <GridItem className="study-info">수업 완료 (4명)</GridItem>
        <GridItem className="not-complete">미 로그인 (2명)</GridItem>
      </GridContainer>
    </>
  );
};

export default Grid;
