import React from "react";
import styled from "styled-components";

const InputWrap = styled.div`
  width: 560px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  background: #f5f5f5;
  padding: 8px 12px;
  border-radius: 8px;
  div {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  svg {
    width: 30px;
  }
  input {
    width: 320px;
    height: 100%;
    border-radius: 8px;
    border: none;
    font-size: 18px;
    background: transparent;

    &::placeholder {
      color: #adadad;
    }
  }

  button {
    padding: 6px 12px;
    border-radius: 4px;
    background: #d2d2d2;
    color: #9a9a9a;
    font-size: 20px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
      background: #b6b6b6;
      color: #fff;
    }
  }
`;

const SearchInput = () => {
  return (
    <InputWrap>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M5 27L12.5 19.5M28 13C28 14.1819 27.7672 15.3522 27.3149 16.4442C26.8626 17.5361 26.1997 18.5282 25.364 19.364C24.5282 20.1997 23.5361 20.8626 22.4442 21.3149C21.3522 21.7672 20.1819 22 19 22C17.8181 22 16.6478 21.7672 15.5558 21.3149C14.4639 20.8626 13.4718 20.1997 12.636 19.364C11.8003 18.5282 11.1374 17.5361 10.6851 16.4442C10.2328 15.3522 10 14.1819 10 13C10 10.6131 10.9482 8.32387 12.636 6.63604C14.3239 4.94821 16.6131 4 19 4C21.3869 4 23.6761 4.94821 25.364 6.63604C27.0518 8.32387 28 10.6131 28 13Z"
            stroke="#525252"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input placeholder="찾으실 '정답 키워드'를 입력해주세요." />
      </div>
      <button>검색</button>
    </InputWrap>
  );
};

export default SearchInput;
