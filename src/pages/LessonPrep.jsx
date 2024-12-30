import React from "react";
import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import WorkListSection from "../components/WorkListSection";
import ChatSection from "../components/ChatSection";
import { useSelector } from "react-redux";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftWrap = styled.div`
  width: 70%;
  padding: 20px 32px 20px ${props => props.sidebarOpen ? '32px' : '60px'};
  transition: padding 0.3s ease-in-out;
`;

const LessonPrep = () => {
  const isOpen = useSelector(state => state.sidebar.isOpen);

  return (
    <>
      <Flex>
        <LeftWrap sidebarOpen={isOpen}>
          <WorkListSection />
          <ChatSection />
        </LeftWrap>
        <RightSidebar />
      </Flex>
    </>
  );
};

export default LessonPrep;
