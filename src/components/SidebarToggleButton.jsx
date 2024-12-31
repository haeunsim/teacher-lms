import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/actions/sidebarActions";
import styled from "styled-components";

const HideButton = styled.button`
  position: fixed;
  top: 20px;
  left: ${({ isOpen }) => (isOpen ? "232px" : "10px")};
  /* isOpen 10px 이 될 때 안에 요소 숨기기*/
  transition: left 0.3s ease-in-out;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1000;
`;

const ButtonIcon = styled.svg`
  transform: ${({ isOpen }) => (isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  transition: transform 0.3s ease-in-out;
`;

const SidebarToggleButton = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <HideButton onClick={handleToggle} isOpen={isOpen}>
      <ButtonIcon
        isOpen={isOpen}
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M12 6H6.66667C5.95942 6 5.28115 6.23413 4.78105 6.65087C4.28095 7.06762 4 7.63285 4 8.22222V12.6667V23.7778C4 24.3671 4.28095 24.9324 4.78105 25.3491C5.28115 25.7659 5.95942 26 6.66667 26H12M12 6H25.3333C26.0406 6 26.7189 6.23413 27.219 6.65087C27.719 7.06762 28 7.63285 28 8.22222V12.6667V23.7778C28 24.3671 27.719 24.9324 27.219 25.3491C26.7189 25.7659 26.0406 26 25.3333 26H12M12 6V16V26"
          stroke="#525252"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </ButtonIcon>
    </HideButton>
  );
};

export default SidebarToggleButton;
