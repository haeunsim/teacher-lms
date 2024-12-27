import React from "react";
import styled from "styled-components";

const StudentStatus = () => {
  return (
    <Container>
      <Title>
        <h2 className="title2">3학년 1반</h2>
      </Title>
      <ClassRoom>
        <Row>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
        </Row>
        <Row>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
        </Row>
        <Row>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
        </Row>
        <Row>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
        </Row>

        <Row>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
          <Seat>
            <Name>1. 이학생</Name>
          </Seat>
        </Row>
      </ClassRoom>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Title = styled.div`

  font-weight: 500;
  text-align: center;
  padding: 24px 0;
  border-bottom: 2px dashed #ddd;
`;

const ClassRoom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8faff;
  gap: 0;
  border-radius: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px dashed #ddd;

  & > div {
    border-right: 2px dashed #ddd;
    flex: 1;

    &:last-child {
      border-right: none;
    }
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Seat = styled.div`
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Name = styled.div`
  width: 150px;
  height: 64px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 24px;
  color: #525252;
  font-weight: 600;
`;

export default StudentStatus;
