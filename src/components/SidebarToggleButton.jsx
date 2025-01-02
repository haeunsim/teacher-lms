import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/actions/sidebarActions";
import styled from "styled-components";
import Icon from "./Icon/Icon";

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
      <Icon name="tab-l" color="#525252"/>
    </HideButton>
  );
};

export default SidebarToggleButton;
