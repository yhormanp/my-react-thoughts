import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import App from "./App";
import Container from "./components/CelsiusVsFarenheit/Container";
import ContextContainer from "./components/ContextApi/ContextContainer";
import ErrorBoundaryEx from "./components/ErrorBoundary/ErrorBoundaryEx";
import LazyContainer from "./components/LazySuspense/LazyContainer";
import MemoizationContainer from "./components/Memoization/MemoizationContainer";
import MoodCalendarContainer from "./components/MoodCalendar/MoodCalendarContainer";
import CallbackPage from "./components/nordstrom/CallbackPage";
import Initial from "./components/nordstrom/Initial";
import NordstromLogin from "./components/nordstrom/NordstromLogin";
import NordstromMain from "./components/nordstrom/NordstromMain";
import RedirectPage from "./components/nordstrom/RedirectPage";
import OauthContainer from "./components/OAuthGoogle/OauthContainer";
import PokedexContainer from "./components/Pokedex/PokedexContainer";
import PortalExampleContainer from "./components/Portals/PortalExampleContainer";
import Login from "./components/SecureRoutes/Login";
import Private1 from "./components/SecureRoutes/Private1";
import SecureRoute from "./components/SecureRoutes/SecureRoute";
import SecurityProvider from "./components/SecureRoutes/SecurityProvider";
import StateContainer from "./components/Stateful&Stateless/StateContainer";
import UseReducerExample from "./components/useReducerExample/UseReducerExample";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SecurityProvider>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/" element={<NordstromLogin />} />
          <Route path="moodCalendar" element={<MoodCalendarContainer />} />
          <Route path="reducerExample" element={<UseReducerExample />} />
          <Route path="pokedex" element={<PokedexContainer />} />
          <Route path="memoization" element={<MemoizationContainer />} />
          <Route path="cvsf" element={<Container />} />
          <Route path="portaldemo" element={<PortalExampleContainer />} />
          <Route path="errorboundary" element={<ErrorBoundaryEx />} />
          <Route path="statefullandstateless" element={<StateContainer />} />
          <Route path="contextapi" element={<ContextContainer />} />
          <Route path="lazysuspense" element={<LazyContainer />} />
          <Route path="login" element={<Login />} />

          <Route
            exact
            path="private1"
            element={<SecureRoute Component={Private1} />}
          />

          <Route path="oauthgoogle" element={<OauthContainer />} />
          <Route path="redirect" element={<RedirectPage />} />
          <Route path="callback" element={<CallbackPage />} />
          <Route path="main" element={<NordstromMain />} />
          <Route path="testinglogin" element={<Initial />} />


        </Routes>
      </SecurityProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
