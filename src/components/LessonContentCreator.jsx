import React, { useState } from "react";
import styled from "styled-components";
import Container from "../components/common/Container";
import Dropdown from "./common/Dropdown";

const RadioList = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
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

const ContentWrap = styled.div`
  width: 100%;
  height: 700px;
  border: 1px solid #adadad;
  background: rgba(196, 224, 255, 0.25);
  overflow-y: scroll;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }
`;

const LessonContentCreator = () => {
  return (
    <Container>
      <section>
        <h2 className="title">수업 콘텐츠 생성</h2>
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
              <input type="radio" name="grade" value="3" /> 3
            </label>
            <label>
              <input type="radio" name="grade" value="4" /> 4
            </label>
            <label>
              <input type="radio" name="grade" value="5" /> 5
            </label>
            <label>
              <input type="radio" name="grade" value="6" /> 6
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
        </RadioList>

        <RadioList>
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
            <label>
              <input type="radio" name="subject" value="수학" /> 수학
            </label>
            <label>
              <input type="radio" name="subject" value="영어" /> 영어
            </label>
          </RadioCell>
          <Dropdown />
        </RadioList>

        <ContentWrap>
          <Table>
            <thead>
              <tr>
                <th>중단원명</th>
                <th>선택</th>
                <th>유형</th>
                <th>출제방식</th>
                <th>질문</th>
                <th>정답</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(15)].map((_, index) => (
                <tr key={index}>
                  <td>1. 물체를 움직여볼까요?</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>핵심개념어</td>
                  <td>단답</td>
                  <td>
                    긴 널빤지의 가운데를 받쳐 놓고 양쪽에 사람이 타고
                    오르락내리락하는 놀이 기구
                  </td>
                  <td>시소</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ContentWrap>
      </section>
    </Container>
  );
};

export default LessonContentCreator;
