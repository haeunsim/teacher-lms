import React from "react";
import styled from "styled-components";
import catImg from "../assets/images/cat2.png";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;
const Title = styled.h4`
  color: #292929;
  font-size: 32px;
  font-weight: 500;
  line-height: 1;
`;
const Text = styled.p`
  color: #2e90ff;
  font-size: 18px;
  text-align: center;
  font-weight: 600;
`;
const ImgWrap = styled.div`
  width: 252px;
  padding: 40px 0;

  > img {
    width: 100%;
  }
`
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 320px;
`;
const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  
  &::placeholder {
    color: #E8E8E8;
  }

  &:focus {
    border-color: #2e90ff;
  }
`;
const LoginButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #2e90ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2576d3;
  }
`;
const Login = () => {
  return (
    <section>
      <Center>
        <Title>AI 고양이 튜터</Title>
        <Text>교사용 LMS 페이지</Text>
        <ImgWrap>
          <img src={catImg} alt="고양이 일러스트" />
        </ImgWrap>

        <FormWrapper>
          <Input type="text" placeholder="아이디를 입력해주세요" />
          <Input type="password" placeholder="비밀번호를 입력해주세요" />
          <LoginButton>로그인</LoginButton>
        </FormWrapper>
      </Center>
    </section>
  );
};

export default Login;
