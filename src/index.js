import React from 'react';
import ReactDOM from 'react-dom';
import CustomHooksExContainer from './components/CustomHooksExample/CustomHooksExContainer';
import MoodCalendarContainer from './components/MoodCalendar/MoodCalendarContainer';
import IncrementDecrementApp from './components/ReduxIncrementDecrement/IncrementDecrementApp';
import UseReducerExample from './components/useReducerExample/UseReducerExample';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <MoodCalendarContainer></MoodCalendarContainer> */}
    {/* <UseReducerExample></UseReducerExample> */}
    <CustomHooksExContainer></CustomHooksExContainer>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
