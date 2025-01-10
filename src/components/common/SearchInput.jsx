import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../Icon/Icon";

const SearchWrapper = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f5f5f5;
  padding: 8px 12px;
  border-radius: 8px;
  gap: 12px;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  input {
    width: 100%;
    border-radius: 8px;
    border: none;
  }

  button {
    width: 70px;
    padding: 8px 14px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    cursor: ${(props) => (props.$hasText ? "pointer" : "default")};
    background: ${(props) => (props.$hasText ? "#2E90FF" : "#d2d2d2")};
    color: ${(props) => (props.$hasText ? "#fff" : "#9a9a9a")};
  }
`;

const SearchInput = () => {
  const [text, setText] = useState("");

  return (
    <SearchWrapper $hasText={!!text}>
      <div>
        <Icon name="search" color="#525252" />
        <input
          placeholder="찾으실 '정답 키워드'를 입력해주세요."
          maxLength={255}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button>검색</button>
    </SearchWrapper>
  );
};

export default SearchInput;
