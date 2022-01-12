import React, { useState } from "react";
import moment from "moment";

function Calendar({ year, month, selectedMood, onMarkedDay, marks }) {
  const [dateObject] = useState(moment(`${year}-${month}`));

  let weekdaysShortName = moment.weekdaysShort().map((day) => {
    return (
      <th key={`${year}-${day}`} className="week-day">
        {day}
      </th>
    );
  });

  const totalDaysInAMonth = () => {
    return moment(dateObject).daysInMonth();
  };

  let firstDayOfMonth = () => {
    let firstDay = moment(dateObject).startOf("month").format("d");
    return firstDay;
  };

  let renderDays = () => {
    let blanks = [];
    for (let i = 0; i < firstDayOfMonth(); i++) {
      blanks.push(
        <td key={`${month}-blank-${i}`}>
          <span className="calendar-day empty"></span>
        </td>
      );
    }

    let daysInMonth = [];
    for (let d = 1; d <= totalDaysInAMonth(); d++) {
      const currentId = `${year}-${month}-${d}`;

      //   validating if the current day is marked with any Mood
      const dayMarkedData = marks.find((data) => data.date === currentId);

      daysInMonth.push(
        <td key={d} id={currentId}>
          {/* className="calendar-day" */}
          <DayItem
            currentId={currentId}
            day={d}
            onMarkedDay={onMarkedDay}
            existentMood={dayMarkedData}
          />
          {/* <span className="calendar-day" onClick={() => onMarkedDay(currentId)}>
            {d}
          </span> */}
        </td>
      );
    }

    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
      if (i % 7 !== 0) {
        cells.push(row); // if index not equal 7 that means not go to next week
      } else {
        rows.push(cells); // when reach next week we contain all td in last week to rows
        cells = []; // empty container
        cells.push(row); // in current loop we still push current row to new container
      }

      if (i === totalSlots.length - 1) {
        rows.push(cells);
      }
    });

    let daysinmmonth = rows.map((d, i) => {
      return <tr key={`week-${i}`}>{d}</tr>;
    });

    return daysinmmonth;
  };

  return (
    <div className="calendar">
      <h3 className="calendar-title">
        {" "}
        {year} - {dateObject.format("MMMM")}
      </h3>
      <table className="calendar-table">
        <thead>
          <tr>{weekdaysShortName}</tr>
        </thead>
        <tbody>{renderDays()}</tbody>
      </table>
    </div>
  );
}

const DayItem = ({ currentId, day, onMarkedDay, existentMood }) => {
  const onDayClicked = () => {
    onMarkedDay(currentId);
  };

  return (
    <span
      className={`calendar-day ${existentMood ? existentMood.mood.value : ""}`}
      onClick={() => onDayClicked()}
    >
      {day}
    </span>
  );
};

export default Calendar;
