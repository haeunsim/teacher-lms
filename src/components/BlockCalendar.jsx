import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";

const CalendarContainer = styled.div`
  background: #f1f8ff;
  text-align: center;
  padding: 20px 72px 23px;
  border-radius: 36px;

  h3 {
    padding-bottom: 16px;
  }
  .react-calendar {
    border: none;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    border-radius: 36px;
    padding: 30px;
  }

  .react-calendar__tile {
    position: relative;
    height: 50px;
    text-align: center;
  }
`;

const LessonTile = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  font-size: 12px;
  color: white;
  border-radius: 5px;
  padding: 2px 0;
  background-color: #ebedf0;

  ${({ lessonCount }) => {
    switch (lessonCount) {
      case 0:
        return `background-color: #EBEDF0;`; // 데이터 없음
      case 1:
        return `background-color: #b2f5ea;`; // 1회: 연한 초록
      case 2:
        return `background-color: #68d391;`; // 2회: 중간 초록
      case 3:
        return `background-color: #38a169;`; // 3회: 진한 초록
      case 4:
      default:
        return `background-color: #22543d;`; // 4회 이상: 매우 진한 초록
    }
  }}
`;

const BlockCalendar = () => {
  const lessonData = {
    "2024-12-01": 1,
    "2024-12-02": 0,
    "2024-12-03": 0,
    "2024-12-04": 1,
    "2024-12-05": 2,
    "2024-12-06": 0,
    "2024-12-07": 3,
    "2024-12-08": 4,
    "2024-12-09": 0,
    "2024-12-10": 4,
    "2024-12-11": 0,
    "2024-12-12": 1,
    "2024-12-13": 2,
    "2024-12-14": 3,
    "2024-12-15": 4,
    "2024-12-16": 1,
    "2024-12-17": 1,
    "2024-12-18": 2,
    "2024-12-19": 0,
    "2024-12-20": 0,
    "2024-12-21": 0,
    "2024-12-22": 0,
    "2024-12-23": 0,
    "2024-12-24": 0,
    "2024-12-25": 0,
    "2024-12-26": 0,
    "2024-12-27": 0,
    "2024-12-28": 0,
    "2024-12-29": 0,
    "2024-12-30": 0,
    "2024-12-31": 0,
  };

  // 타일에 스타일을 적용하는 함수
  const tileContent = ({ date }) => {
    const formattedDate = date.toISOString().split("T")[0];
    const lessons = lessonData[formattedDate];

    // null
    if (lessons !== undefined || lessons === 0) {
      return (
        <LessonTile lessonCount={lessons || 0}>
          {lessons >= 4 ? "4회 이상" : `${lessons || 0}회`}
        </LessonTile>
      );
    }
    
    return null;
  };

  return (
    <CalendarContainer>
      <div>
        <h3>12월 현재까지 총 12회 수업을 진행했어요</h3>
        <Calendar
          tileContent={tileContent}
          locale="ko-KR"
          view="month"
          minDetail="month"
          maxDetail="month"
          showNavigation={false}
          formatDay={() => ''}
          formatShortWeekday={(locale, date) => {
            const weekdays = [
              "Sun.",
              "Mon.",
              "Tue.",
              "Wed.",
              "Thu.",
              "Fri.",
              "Sat.",
            ];
            return weekdays[date.getDay()];
          }}

        />
      </div>
    </CalendarContainer>
  );
};

export default BlockCalendar;
