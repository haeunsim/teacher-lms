import React, { useState } from "react";
import styled from "styled-components";
import BasicTables from "../components/common/Table/BasicTable";

const ClassChange = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    region: "",
    teacherName: "",
    grade: "",
    class: "",
    studentType: "전입생",
    studentName: "",
    transferCount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const headers = [
    { label: "순번", width: "10%" },
    { label: "신청사유", width: "15%" },
    { label: "학급정보", width: "15%" },
    { label: "학생번호", width: "15%" },
    { label: "학생명", width: "15%" },
    { label: "신청일", width: "20%" },
    { label: "신청", width: "10%" },
  ];

  const data = [
    {
      순번: "999",
      신청사유: "전출", // reason
      학급정보: "0-0", // classInfo
      학생번호: "000", // studentId
      학생명: "이학생", // studentName
      신청일: "0000.00.00", // date
      신청: "신청", // status
    },
  ];

  return (
    <Container>
      <Flex>
        <Item>
          <Title>전입/편출 학생 입력 양식</Title>

          <Form onSubmit={handleSubmit}>
            <FormGrid>
              <FormRow>
                <Label>(1) 학교명</Label>
                <div>
                  <Input
                    type="text"
                    name="schoolName"
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                  <Suffix>초등학교</Suffix>
                </div>
              </FormRow>

              <FormRow>
                <Label>(2) 지역(시/도)</Label>
                <div>
                  <Select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                  >
                    <option value="">지역 선택</option>
                  </Select>
                </div>
              </FormRow>

              <FormRow>
                <Label>(3) 교사명</Label>
                <div>
                  <Input
                    type="text"
                    name="teacherName"
                    value={formData.teacherName}
                    onChange={handleChange}
                  />
                </div>
              </FormRow>

              <FormRow>
                <Label>(4) 학급정보</Label>
                <div>
                  <ShortInput
                    type="text"
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                  />
                  <Suffix>학년</Suffix>
                  <ShortInput
                    type="text"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                  />
                  <Suffix>반</Suffix>
                </div>
              </FormRow>

              <FormRow>
                <Label>(5) 신청사유</Label>
                <div>
                  <RadioGroup>
                    <RadioLabel>
                      <input
                        type="radio"
                        name="studentType"
                        value="전입생"
                        checked={formData.studentType === "전입생"}
                        onChange={handleChange}
                      />
                      전입생
                    </RadioLabel>
                    <RadioLabel>
                      <input
                        type="radio"
                        name="studentType"
                        value="전출생"
                        checked={formData.studentType === "전출생"}
                        onChange={handleChange}
                      />
                      전출생
                    </RadioLabel>
                  </RadioGroup>
                </div>
              </FormRow>

              <FormRow>
                <Label>(6) 학생명</Label>
                <div>
                  <Input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                  />
                </div>
              </FormRow>

              <FormRow>
                <Label>(7) 학생번호</Label>
                <div>
                  <ShortInput
                    type="text"
                    name="transferCount"
                    value={formData.transferCount}
                    onChange={handleChange}
                  />
                  <Suffix>번</Suffix>
                </div>
              </FormRow>
            </FormGrid>

            <ButtonWrapper>
              <SubmitButton type="submit">제출하기</SubmitButton>
            </ButtonWrapper>
          </Form>
        </Item>
        <Item>
          <Title>
            처리 현황 <span>(진행 단계 : 신청 - 접수 - 완료)</span>
          </Title>
          <div>
            신청 내역이 없습니다.
            <BasicTables headers={headers} data={data} />
          </div>
        </Item>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  width: 100%;
  margin: 0 auto;
`;

const Flex = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
`;
const Item = styled.div`
  width: 50%;
`;
const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  font-weight: 600;

  span {
    font-size: 16px;
    color: #2e90ff;
    font-weight: 400;
  }
`;

const Form = styled.form`
  width: 100%;
`;

const FormGrid = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e8e8e8;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
  > div {
    padding: 10px;
    flex: 1;
  }
`;

const Label = styled.label`
  min-width: 150px;
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3f2fd;
  text-align: center;
  color: #525252;
  font-weight: 500;
  font-size: 16px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-width: 300px;
`;

const ShortInput = styled(Input)`
  width: 80px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
`;

const Suffix = styled.span`
  margin: 0 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  margin-top: 24px;
  text-align: center;
`;

const SubmitButton = styled.button`
  padding: 8px 24px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export default ClassChange;
