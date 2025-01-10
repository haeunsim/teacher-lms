import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSearchParams, setShowSubjectList } from "../redux/reducers/testSlice";

const SidebarContainer = styled.div`
  max-width: 480px;
  width: 100%;
  background: var(--main-light-30025, rgba(196, 224, 255, 0.25));
  padding: 40px 24px;
  text-align: center;
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
  padding: 8px 24px;
  display: flex;
  gap: 24px;
  font-size: 18px;

  p {
    text-align: center;
    width: 50px;
  }

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
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #88c0ff;
      color: #292929;
      font-size: 16px;

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
  margin: 0 auto;
  padding: 9px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--LMS-Color-Main_Light, #88c0ff);
  color: #fff;
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  & label {
    width: 80px;
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 8px;
    font-size: 16px;
  }
`;

const RadioOption = ({ name, value, label, onChange }) => (
  <label>
    <input 
      type="radio" 
      name={name} 
      value={value} 
      onChange={onChange}
    /> {label}
  </label>
);

const RightSidebar = () => {
  const dispatch = useDispatch();
  const { showSubjectList, searchParams } = useSelector((state) => state.test);
  
  const [formData, setFormData] = useState({
    publisher: '',
    grade: '',
    semester: '',
    subject: ''
  });

  const isFormValid = Object.values(formData).every(value => value !== '');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
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

        <RadioList>
          <RadioCell>
            <p>출판사</p>
            <Flex>
              <RadioOption name="publisher" value="천재" label="천재" onChange={handleInputChange} />
              <RadioOption name="publisher" value="비상" label="비상" onChange={handleInputChange} />
              <RadioOption name="publisher" value="미래엔" label="미래엔" onChange={handleInputChange} />
            </Flex>
          </RadioCell>

          <RadioCell>
            <p>학년</p>
            <Flex>
              <RadioOption name="grade" value="3" label="3학년" onChange={handleInputChange} />
              <RadioOption name="grade" value="4" label="4학년" onChange={handleInputChange} />
            </Flex>
          </RadioCell>

          <RadioCell>
            <p>학기</p>
            <Flex>
              <RadioOption name="semester" value="1" label="1학기" onChange={handleInputChange} />
              <RadioOption name="semester" value="2" label="2학기" onChange={handleInputChange} />
            </Flex>
          </RadioCell>

          <RadioCell>
            <p>과목</p>
            <Flex>
              <RadioOption name="subject" value="국어" label="국어" onChange={handleInputChange} />
              <RadioOption name="subject" value="사회" label="사회" onChange={handleInputChange} />
              <RadioOption name="subject" value="과학" label="과학" onChange={handleInputChange} />
            </Flex>
          </RadioCell>
        </RadioList>

        <TextButton 
          onClick={isFormValid ? handleSearch : undefined}
          disabled={!isFormValid}
        >검색</TextButton>

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
