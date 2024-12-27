import React, { useState } from "react";
import styled from "styled-components";

const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid #adadad;
  border-radius: 8px 8px 0 0 ;
  padding: 8px 16px;
  font-size: 20px;
`;

const DropdownHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  span {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      width: 100%;
      height: 100%;
    }
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #adadad;
  border-radius: 0 0 8px 8px;
  list-style: none;
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 1;
  box-sizing: border-box;
`;

const DropdownItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;
  text-align: center;
  border-bottom: 1px solid #ADADAD;

  &:hover {
    background: rgba(196, 224, 255, 0.25);
  }
  &:last-child {
    border-bottom: none;
  }
`;

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(">");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        <span></span>
        { label ? <p>{label}</p> : <>selected</>}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M12 26L22 16L12 6"
              stroke="#525252"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </DropdownHeader>

      <DropdownList isOpen={isOpen}>
        {options?.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleSelect(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
};

export default Dropdown;