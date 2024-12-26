import React from "react";
import styled from "styled-components";
import BasicTables from "../components/common/Table/BasicTable";

const headers = [
  { label: '순번', width: '10%' },
  { label: '과목', width: '10%' },
  { label: '학년', width: '10%' },
  { label: '대단원', width: '25%' },
  { label: '중단원', width: '35%' },
  { label: '기록', width: '10%' },
];

const data = [
  {
    no: '8',
    과목: '과학',
    classInfo: '3-1',
    대단원: '1. 힘과 우리 생활',
    중단원: '3. 수평을 잡아요',
    기록: 'icon'
  },
  {
    no: '7',
    과목: '과학',
    classInfo: '3-1',
    대단원: '1. 힘과 우리 생활',
    중단원: '3. 수평을 잡아요',
    기록: 'icon'
  },
  {
    no: '6',
    과목: '과학',
    classInfo: '3-1',
    대단원: '1. 힘과 우리 생활',
    중단원: '3. 수평을 잡아요',
    기록: 'icon'
  },
  {
    no: '5',
    과목: '과학',
    classInfo: '3-1',
    대단원: '1. 힘과 우리 생활',
    중단원: '3. 수평을 잡아요',
    기록: 'icon'
  },
  {
    no: '4',
    과목: '과학',
    classInfo: '3-1',
    대단원: '1. 힘과 우리 생활',
    중단원: '3. 수평을 잡아요',
    기록: 'icon'
  },
  {
    no: '3',
    과목: '과학',
    classInfo: '3-1',
    대단원: '1. 힘과 우리 생활',
    중단원: '3. 수평을 잡아요',
    기록: 'icon'
  },
  {
    no: '2',
    과목: '과학',
    classInfo: '3-1',
    대단원: '1. 힘과 우리 생활',
    중단원: '3. 수평을 잡아요',
    기록: 'icon'
  },
  {
    no: '1',
    과목: '과학',
    classInfo: '3-1',
    대단원: '1. 힘과 우리 생활',
    중단원: '3. 수평을 잡아요',
    기록: 'icon'
  },
];

const ChatHistory = () => {
  return (
    <Container>
      <Title>학생 채팅 기록 열람</Title>
      <Flex>
        <ChatList>
          <h4><span className="blue-text">1. 이학생</span> 채팅 수업 리스트 <span className="small-text">(최신순)</span></h4>
          <div>
            <BasicTables headers={headers} data={data} />
          </div>
        </ChatList>
        <ChatContent>
          <ChapterTitle>중단원 이름을 이곳에서 출력합니다.</ChapterTitle>
          <ChatMessages>
            <p>좌측의 ‘기록 아이콘’을 클릭하면<br/>
            해당 채팅 내역이 이 영역에 표시됩니다.</p>
          </ChatMessages>
        </ChatContent>
      </Flex>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
`;

const Title = styled.div`
  color: #292929;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  padding: 24px 0;
  border-bottom: 2px dashed #ddd;
`;

const Flex = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-top: 20px;
`;
const ChatList = styled.div`
  width: 50%;

  h4 {
    color: #525252;
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;

    .blue-text {
      color: #2E90FF;
    }

    .small-text {
      font-size: 15px;
      font-weight: 500;
    }
  }
`;
const ChatContent = styled.div`
  width: 50%;
`;
const ChapterTitle = styled.div`
  background: #88c0ff;
  padding: 20px 24px;
  font-size: 18px;
  color: #343434;
  font-weight: 600;
  border-radius: 5px 5px 0 0;
`;
const ChatMessages = styled.div`
  background: #F1F8FF;
  width: 100%;
  height: 700px;
  text-align: center;
  border-radius: 0 0 5px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1.4;
`;


export default ChatHistory;
