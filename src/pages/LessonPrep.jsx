import React from "react";
import styled from "styled-components";
import RightSidebar from "../components/RightSidebar";
import Container from "../components/common/Container";
import WorkListSection from "../components/WorkListSection";
import ChatSection from "../components/ChatSection";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftWrap = styled.div`
  width: 70%;
  padding: 20px 32px;
`;
const LessonPrep = () => {
  return (
    <>
      <Flex>
        <LeftWrap>
          <WorkListSection />
          <ChatSection />
        </LeftWrap>
        <RightSidebar />
      </Flex>
    </>
  );
};

export default LessonPrep;
