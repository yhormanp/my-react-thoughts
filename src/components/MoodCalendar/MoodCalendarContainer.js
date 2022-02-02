import React, { useState } from "react";
import Calendar from "./Calendar";
import moment from "moment";
import "./MoodCalendarStyles.css";
import MoodSelector from "./MoodSelector";
import useMarkedDays from "./customHooks/useMarkedDays";
import Testingcomp from "./Testingcomp";

function MoodCalendarContainer() {
  const [currentMood, setCurrentMood] = useState(null);
  const [isTest, setIsTest] = useState(false);
  const [markedDays, addDateAndMood] = useMarkedDays();

  // useEffect(() => {
  //   //getting info from the localStorage
  //   const existentData = localStorage.getItem("moodCalendar");
  //   if (existentData) {
  //     setMarkedDays(JSON.parse(existentData));
  //   }
  // }, []);

  const addMarkedDay = (newMarkedDay) => {
    if (currentMood) {
      addDateAndMood(newMarkedDay, currentMood);
    }
  };

  let filteredDays = (year, month) => {
    return markedDays.filter((data) => {
      return data.date.includes(`${year}-${month}`);
    });
  };

  const MONTH_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const MOODS = [
    { name: "excited", value: "EX", dec: "128513" },
    { name: "happy", value: "HA", dec: "128512" },
    { name: "neutral", value: "NE", dec: "128528" },
    { name: "sad", value: "SA", dec: "128546" },
    { name: "angry", value: "AN", dec: "128545" },
  ];

  const currentYear = moment().year();

  return (
    <div className="main-container">
      <div className="mood-selector">
        <MoodSelector
          year={currentYear}
          setCurrentMood={setCurrentMood}
          moodsList={MOODS}
          selectedMood={currentMood}
        ></MoodSelector>
      </div>
      <div className="calendars-section">
        {MONTH_NUMBERS.map((month) => {
          return (
            <Calendar
              key={`${currentYear}-${month}`}
              year={currentYear}
              month={month}
              selectedMood={currentMood}
              marks={filteredDays(currentYear, month)}
              onMarkedDay={addMarkedDay}
            ></Calendar>
          );
        })}
      </div>


      {isTest && <Testingcomp></Testingcomp>}

      {/* <Calendar year="2021" month="09"></Calendar> */}
    </div>
  );
}

export default MoodCalendarContainer;
