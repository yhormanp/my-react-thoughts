import {useEffect, useState } from "react";

const useMarkedDays = (initialState = []) => {
  const [markedDays, setMarkedDays] = useState(initialState);

  useEffect(() => {
    //getting info from the localStorage
    const existentData = localStorage.getItem("moodCalendar");
    if (existentData) {
      setMarkedDays(JSON.parse(existentData));
    }
  }, []);

  const updatingComponentAndLocalStorageState = (arrayToSave) => {
    setMarkedDays(arrayToSave);

    //saving to session local storage
    localStorage.setItem("moodCalendar", JSON.stringify(arrayToSave));
  };

  const addDateAndMood = (newDate, currentMood) => {
    const existentIndex = markedDays.findIndex((data) => data.date === newDate);
    // only if it's exist and it's different, replace it
    if (
      existentIndex !== -1 &&
      markedDays[existentIndex].mood !== currentMood
    ) {
      const copyMarkedDays = [...markedDays];
      //replace with the new data
      copyMarkedDays[existentIndex] = {
        date: newDate,
        mood: currentMood,
      };
      updatingComponentAndLocalStorageState(copyMarkedDays);
    } else if (existentIndex === -1) {
        // if it does not exist, create a new one record
      const copyMarkedDays = [...markedDays];
      copyMarkedDays.push({ date: newDate, mood: currentMood });
      updatingComponentAndLocalStorageState(copyMarkedDays);
    }
  };

  return [markedDays, addDateAndMood];
};

export default useMarkedDays;
