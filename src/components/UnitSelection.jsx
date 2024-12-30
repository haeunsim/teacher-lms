import React, { useState } from "react";
import styled from "styled-components";
import SearchInput from "../components/common/SearchInput";
import { unitData } from "./unitData";

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
  padding: 20px 20px;
  background: #fff;
  border-radius: 0 0 10px 10px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #9a9a9a;
  font-size: 20px;
  font-weight: 500;
`;

const Depth1 = styled.div`
  background: #fff;
  cursor: pointer;
  border-radius: 12px;
  padding: 16px;

  p {
    font-size: 20px;
    color: #333;
    font-weight: 500;
  }
`;

const Depth2 = styled.p`
  position: relative;
  padding: 15px 8px 15px 40px;
  border-radius: 10px 10px 0 0;

  p {
    font-size: 20px;
    color: #333;
    font-weight: 500;
  }

  ::before {
    content: "";
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    border-top: 1px solid #525252;
    border-right: 1px solid #525252;
  }
`;

const Table = styled.table`
  width: 100%;
  margin-top: 10px;
  border: 2px solid #c4e0ff;
  border-radius: 8px;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  text-align: center;
`;

const Tr = styled.tr`
  font-weight: 400;
  color: #525252;
  font-size: 16px;
`;

const Td = styled.td`
  padding: 12px 8px;
  border-top: 2px solid #c4e0ff;
  border-left: 2px solid #c4e0ff;

  &:first-child {
    border-left: 0;
  }
  &:nth-child(4) {
    text-align: left;
    width: 60%;
  }
`;

const Th = styled.th`
  padding: 12px 8px;
  border-left: 2px solid #c4e0ff;
  font-weight: 500;

  &:first-child {
    border-left: 0;
  }
`;

const LessonButton = styled.button`
  background-color: #2e90ff;
  color: white;
  padding: 10px;
  width: 200px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  font-family: "Pretendard";
`;

const UnitSelection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [menuItems] = useState([
    "3-1국어",
    "3-1사회",
    "3-1과학",
    "4-1국어",
    "4-1사회",
    "4-1과학",
  ]);
  const [expandedUnits, setExpandedUnits] = useState({});
  const [expandedSubUnits, setExpandedSubUnits] = useState({});

  const currentUnits = unitData[menuItems[activeTab]] || [];

  console.log("currentUnits:", currentUnits);
  console.log("expandedUnits:", expandedUnits);

  const toggleUnitTitle = (unitId) => {
    setExpandedUnits((prev) => ({
      ...prev,
      [unitId]: !prev[unitId],
    }));

    if (expandedUnits[unitId]) {
      const unit = currentUnits.find((u) => u.id === unitId);
      if (unit) {
        unit.subUnits.forEach((subUnit) => {
          setExpandedSubUnits((prev) => ({
            ...prev,
            [subUnit.id]: false,
          }));
        });
      }
    }
  };

  const toggleSubUnit = (subUnitId) => {
    setExpandedSubUnits((prev) => ({
      ...prev,
      [subUnitId]: !prev[subUnitId],
    }));
  };

  return (
    <section>
      <Header>
        <h2 className="title2">수업 콘텐츠 구성 미리보기</h2>
        <SearchInput />
      </Header>

      <TabContainer>
        <TabMenu>
          <TabList>
            {menuItems.map((tab, index) => (
              <TabItem
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setExpandedUnits({});
                  setExpandedSubUnits({});
                }}
                active={activeTab === index}
              >
                {tab}
              </TabItem>
            ))}
          </TabList>
        </TabMenu>

        <TabContent>
          {currentUnits.map((unit) => (
            <div key={unit.id}>
              <Depth1
                onClick={() => toggleUnitTitle(unit.id)}
                style={{
                  background: expandedUnits[unit.id]
                    ? "rgba(196, 224, 255, 0.25)"
                    : "#fff",
                }}
              >
                <p>{unit.mainTitle}</p>
              </Depth1>

              {expandedUnits[unit.id] &&
                unit.subUnits.map((subUnit) => (
                  <div key={subUnit.id} style={{ marginLeft: "30px" }}>
                    <Depth2
                      onClick={() => toggleSubUnit(subUnit.id)}
                      style={{
                        background: expandedSubUnits[subUnit.id]
                          ? "#C4E0FF"
                          : "transparent",
                      }}
                    >
                      <p>{subUnit.title}</p>
                    </Depth2>
                    {expandedSubUnits[subUnit.id] && (
                      <TabPanel>
                        <Flex>
                          <p>
                            *채팅 수업의 내용은 아래 '순번'에 따라 대화문 형태로
                            제시됩니다.
                          </p>
                          <LessonButton>수업 저장하기</LessonButton>
                        </Flex>
                        <Table>
                          <thead>
                            <Tr>
                              <Th>순번</Th>
                              <Th>유형</Th>
                              <Th>출제방식</Th>
                              <Th>질문</Th>
                              <Th>정답</Th>
                            </Tr>
                          </thead>
                          <tbody>
                            {subUnit.lessons.map((lesson, index) => (
                              <Tr key={index}>
                                <Td>{lesson.order}</Td>
                                <Td>{lesson.type}</Td>
                                <Td>{lesson.questionType}</Td>
                                <Td>{lesson.description}</Td>
                                <Td>{lesson.answer}</Td>
                              </Tr>
                            ))}
                          </tbody>
                        </Table>
                      </TabPanel>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </TabContent>
      </TabContainer>
    </section>
  );
};

export default UnitSelection;
