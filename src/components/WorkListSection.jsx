import React from "react";
import BasicTables from "./common/Table/BasicTable";
import Navigator from "./common/Navigator";
import IconBtn from "./Icon/IconBtn";

const headers = [
  { label: "순번", width: "7%" },
  { label: "과목", width: "7%" },
  { label: "학년", width: "7%" },
  { label: "대단원", width: "16%" },
  { label: "중단원", width: "42%" },
  {
    label: "테스트",
    width: "7%",
    cell: () => <IconBtn name="chat" color="#2E90FF" />,
  },
  { 
    label: "음소거",
    width: "7%",
    cell: () => <IconBtn name="check" /> 
  },
  {
    label: "링크",
    width: "7%",
    cell: () => <IconBtn name="send" color="#2E90FF" />,
  },
];

const data = [
  {
    순번: "999",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "3. 수평을 잡아요",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "9. 힘을 줄여주는 도구를 조사해요",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "과학",
    학년: "3-1",
    대단원: "1. 힘과 우리 생활",
    중단원: "9. 힘을 줄여주는 도구를 조사해요",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "사회",
    학년: "3-1",
    대단원: "1. 우리가 사는 곳",
    중단원: "5. 우리 주변 여러 장소에 대한 생각과 느낌을 나눠볼까요?",
    테스트: true,
    음소거: true,
    링크: true,
  },
  {
    순번: "999",
    과목: "국어",
    학년: "3-1",
    대단원: "1. 대화와 공감",
    중단원: "3. 상대가 잘한 일이나 상대의 장점을 찾아 칭찬하기",
    테스트: true,
    음소거: true,
    링크: true,
  },
];

const WorkListSection = () => {
  return (
    <section>
      <h2>작업물 열람</h2>
      <BasicTables headers={headers} data={data} />
      <Navigator />
    </section>
  );
};

export default WorkListSection;
