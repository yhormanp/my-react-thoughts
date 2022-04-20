import React, { createContext } from "react";
import Parent from "./ParentComp";

export const infoContext = createContext({});

function ContextContainer() {
  const listOfColors = [
    { color: "blue", ref: "#0d98ba" },
    { color: "green", ref: "#008000" },
    { color: "yellow", ref: "#FFFF00" },
    { color: "white", ref: "#fff" },
  ];

  return (
    <div>
      <infoContext.Provider value={listOfColors}>
        <h1>Welcome to the context example</h1>
        <h3>
          Example using context api to pass data from the container to the grandChild
          component directly avoiding props drilling{" "}
        </h3>
        <Parent></Parent>
      </infoContext.Provider>
    </div>
  );
}
export default ContextContainer;
