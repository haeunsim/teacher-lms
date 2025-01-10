import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  setSearchParams,
  setShowSubjectList,
} from "../redux/reducers/testSlice";
import SearchFilter from "./SearchFilter";

const SidebarContainer = styled.div`
  width: 100%;
  background: rgba(196, 224, 255, 0.25);
  padding: 40px 24px;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
`;
const SubjectList = styled.div`
  border: 1px solid #88c0ff;
  border-radius: 8px;
  background: rgba(196, 224, 255, 0.25);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    padding: 10px;
    border-bottom: 1px solid #88c0ff;
    font-size: 16px;
    color: #525252;
  }

  tr {
    td {
      padding: 12px 6px;
      text-align: left;
      border-bottom: 1px solid #88c0ff;
      color: #292929;
      font-size: 15px;

      &:nth-child(1) {
        color: #525252;
        padding-left: 18px;
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
  margin: 0 auto;
  padding: 9px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--LMS-Color-Main_Light, #88c0ff);
  color: #fff;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const RightSidebar = () => {
  const dispatch = useDispatch();
  const { showSubjectList, searchParams } = useSelector((state) => state.test);

  const [formData, setFormData] = useState({
    publisher: "",
    grade: "",
    semester: "",
    subject: "",
  });

  const isFormValid = Object.values(formData).every((value) => value !== "");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    dispatch(setSearchParams(formData));
    dispatch(setShowSubjectList(true));
  };

  return (
    <SidebarContainer>
      <section>
        <h4>
          과목별 단원 구성 <span>(‘교사용 지도서’ 기준)</span>
        </h4>

        <SearchFilter onInputChange={handleInputChange} />

        <TextButton onClick={isFormValid ? handleSearch : undefined}>
          검색
        </TextButton>

        {showSubjectList && (
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
        )}
      </section>
    </SidebarContainer>
  );
};

export default RightSidebar;
