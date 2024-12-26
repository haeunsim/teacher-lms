import React, { useState } from 'react'
import styled from "styled-components";
import SearchInput from "../components/common/SearchInput";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 42px 20px;
`;
const TabContainer = styled.div``;

const TabMenu = styled.div``;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 42px;
  gap: 12px;
`;

const TabItem = styled.li`
  width: 100%;
  padding: 20px;
  border-radius: 12px 12px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => (props.active ? "#fff" : "#9A9A9A")};
  background: ${(props) =>
    props.active ? "#1E90FF" : "rgba(163, 181, 208, 0.50)"};
`;

const TabContent = styled.div`
  background: var(--main-light-30025, rgba(196, 224, 255, 0.25));
  padding: 30px 42px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 700px;
`;

const TabPanel = styled.div`
  padding: 20px;
`;

const Depth1 = styled.div`
  background: #fff;
  cursor: pointer;
  border-radius: 12px;
  padding: 16px 8px;

  /* active / on 시
    background: "var(--main-light-30025, rgba(196, 224, 255, 0.25))", */
`;

const Depth2 = styled.p`
  font-size: 18px;
  color: #333;
  padding: 10px 0;
  margin-left: 30px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  border: 2px solid #c4e0ff;
  border-radius: 8px;
`;

const Tr = styled.tr`
  border-bottom: 2px solid #c4e0ff;
`;

const Td = styled.td`
  padding: 12px 8px;
  text-align: left;
`;

const Th = styled.th`
  padding: 12px 8px;
  text-align: left;
`;

const LessonButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const UnitSelection = () => {
    const [activeTab, setActiveTab] = useState(0);

    const [units, setUnits] = useState([
      {
        id: 1,
        title: "1. 중단원명을 작성해주세요",
        showUnitTitle: true,
        showTabPanel: true,
        lessons: [
          {
            order: 1,
            type: "핵심개념이해",
            description:
              "각 놀이학습 기준에서 발견할 수 있는 핵심개념을 찾아보자",
            class: "시소",
          },
        ],
      },
      {
        id: 2,
        title: "1. 중단원명을 작성해주세요",
        showUnitTitle: true,
        showTabPanel: true,
        lessons: [
          {
            order: 1,
            type: "응용학습",
            description: "학습한 개념을 실생활에 적용해보자",
            class: "나무",
          },
        ],
      },
    ]);
  
    const [menuItems] = useState([
      "3-1국어",
      "3-1사회",
      "3-1과학",
      "4-1국어",
      "4-1사회",
      "4-1과학",
    ]);
  
    // 단원 제목 토글 함수
    const toggleUnitTitle = (unitId) => {
      setUnits(
        units.map((unit) =>
          unit.id === unitId
            ? { ...unit, showUnitTitle: !unit.showUnitTitle }
            : unit,
        ),
      );
    };
  
    // 탭 패널 토글 함수
    const toggleTabPanel = (unitId) => {
      setUnits(
        units.map((unit) =>
          unit.id === unitId
            ? { ...unit, showTabPanel: !unit.showTabPanel }
            : unit,
        ),
      );
    };

  return (
    <section>
    <Header>
      <h2 className="title">수업 콘텐츠 구성 미리보기</h2>
      <SearchInput />
    </Header>

    <TabContainer>
      <TabMenu>
        <TabList>
          {menuItems.map((tab, index) => (
            <TabItem
              key={index}
              onClick={() => setActiveTab(index)}
              active={activeTab === index}
            >
              {tab}
            </TabItem>
          ))}
        </TabList>
      </TabMenu>

      <TabContent>
        {activeTab === 0 && (
          <>
            {units.map((unit) => (
              <div key={unit.id}>
                <Depth1 onClick={() => toggleUnitTitle(unit.id)}>
                  1. 대단원명을 작성해주세요.
                </Depth1>

                {unit.showUnitTitle && (
                  <Depth2 onClick={() => toggleTabPanel(unit.id)}>
                    {unit.title}
                  </Depth2>
                )}

                {unit.showTabPanel && (
                  <TabPanel>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ color: "##9A9A9A" }}>
                        *채팅 수업의 내용은 아래 '순번'에 따라 대화문 형태로
                        제시됩니다.
                      </p>
                      <LessonButton>수업 저장하기</LessonButton>
                    </div>
                    <Table>
                      <thead>
                        <Tr>
                          <Th>순서</Th>
                          <Th>학습유형</Th>
                          <Th>상세설명</Th>
                          <Th>차시</Th>
                        </Tr>
                      </thead>
                      <tbody>
                        {unit.lessons.map((lesson, index) => (
                          <Tr key={index}>
                            <Td>{lesson.order}</Td>
                            <Td>{lesson.type}</Td>
                            <Td>{lesson.description}</Td>
                            <Td>{lesson.class}</Td>
                          </Tr>
                        ))}
                      </tbody>
                    </Table>
                  </TabPanel>
                )}
              </div>
            ))}
          </>
        )}
      </TabContent>
    </TabContainer>
  </section>
  )
}

export default UnitSelection