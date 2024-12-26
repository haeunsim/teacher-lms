import React, { useState } from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 506px;
  height: 100%;
  background: var(--main-light-30025, rgba(196, 224, 255, 0.25));
  padding: 24px;
`;

const RadioList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const RadioCell = styled.div`
  border: 1px solid #adadad;
  border-radius: 8px;
  width: 100%;
  padding: 8px 32px;
  display: flex;
  gap: 24px;
  font-size: 18px;

  & input[type="radio"] {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #9a9a9a;
    border-radius: 50%;
    margin: 0;
    cursor: pointer;
  }

  & input[type="radio"]:checked {
    border: 2px solid #2e90ff;
    background: white;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      background: #2e90ff;
      border-radius: 50%;
    }
  }

  & label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }
`;

const SubjectList = styled.div`
  margin-top: 24px;
  border: 1px solid #88c0ff;
  border-radius: 8px;
  background: var(--main-light-30025, rgba(196, 224, 255, 0.25));
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th {
    padding: 12px;
    border-bottom: 1px solid #88c0ff;
    font-size: 18px;
    color: #525252;
  }

  tr {
    td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #88c0ff;
      color: #292929;
      font-size: 18px;

      &:nth-child(1) {
        color: #525252;
        font-size: 16px;
        padding-left: 20px;
      }
      &:nth-child(3) {
        text-align: center;
      }
    }

    &:last-child td {
      border: none;
    }
  }
`;

const TextButton = styled.div`
  display: flex;
  width: 248px;
  margin: 12px auto;
  padding: 9px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--LMS-Color-Main_Light, #88c0ff);
  color: #fff;
`;

const RightSidebar = () => {
  return (
    <SidebarContainer>
      <h4>과목별 단원 구성</h4>

      <RadioList>
        <RadioCell>
          <p>출판사</p>
          <label>
            <input type="radio" name="publisher" value="천재" /> 천재
          </label>
          <label>
            <input type="radio" name="publisher" value="비상" /> 비상
          </label>
          <label>
            <input type="radio" name="publisher" value="미래엔" /> 미래엔
          </label>
        </RadioCell>

        <RadioCell>
          <p>학년</p>
          <label>
            <input type="radio" name="grade" value="3" /> 3학년
          </label>
          <label>
            <input type="radio" name="grade" value="4" /> 4학년
          </label>
        </RadioCell>

        <RadioCell>
          <p>학기</p>
          <label>
            <input type="radio" name="semester" value="1" /> 1학기
          </label>
          <label>
            <input type="radio" name="semester" value="2" /> 2학기
          </label>
        </RadioCell>

        <RadioCell>
          <p>과목</p>
          <label>
            <input type="radio" name="subject" value="국어" /> 국어
          </label>
          <label>
            <input type="radio" name="subject" value="사회" /> 사회
          </label>
          <label>
            <input type="radio" name="subject" value="과학" /> 과학
          </label>
        </RadioCell>
      </RadioList>

      <TextButton>검색</TextButton>

      <SubjectList>
        <Table>
          <thead>
            <tr>
              <th style={{ width: "32%" }}>대단원</th>
              <th style={{ width: "53%" }}>중단원</th>
              <th style={{ width: "15%" }}>차시</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. 힘과 우리 생활</td>
              <td>물체를 움직여 볼까요?</td>
              <td>1/10</td>
            </tr>
            <tr>
              <td>1. 힘과 우리 생활</td>
              <td>무게가 다른 물체를 밀고 당겨 볼까요?</td>
              <td>2/10</td>
            </tr>
            <tr>
              <td>1. 힘과 우리 생활</td>
              <td>수평을 잡아요</td>
              <td>3/10</td>
            </tr>
            <tr>
              <td>1. 힘과 우리 생활</td>
              <td>수평 잡기로 물체의 무게를 비교해 볼까요?</td>
              <td>4/10</td>
            </tr>
            <tr>
              <td>1. 힘과 우리 생활</td>
              <td>무게를 정확히 비교해볼까요?</td>
              <td>5/10</td>
            </tr>
            <tr>
              <td>1. 힘과 우리 생활</td>
              <td>용수철 저울로 무게를 비교해요</td>
              <td>6/10</td>
            </tr>
            <tr>
              <td>1. 힘과 우리 생활</td>
              <td>지레를 이용해요</td>
              <td>7/10</td>
            </tr>
          </tbody>
        </Table>
      </SubjectList>
    </SidebarContainer>
  );
};

export default RightSidebar;
