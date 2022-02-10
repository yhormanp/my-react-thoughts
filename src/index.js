import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Container from "./components/CelsiusVsFarenheit/Container";
import MemoizationContainer from "./components/Memoization/MemoizationContainer";
import MoodCalendarContainer from "./components/MoodCalendar/MoodCalendarContainer";
import PokedexContainer from "./components/Pokedex/PokedexContainer";
import PortalExampleContainer from "./components/Portals/PortalExampleContainer";
import UseReducerExample from "./components/useReducerExample/UseReducerExample";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="moodCalendar" element={<MoodCalendarContainer />} />
        <Route path="reducerExample" element={<UseReducerExample />} />
        <Route path="pokedex" element={<PokedexContainer />} />
        <Route path="memoization" element={<MemoizationContainer />} />
        <Route path="cvsf" element={<Container />} />
        <Route path="portaldemo" element={<PortalExampleContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
