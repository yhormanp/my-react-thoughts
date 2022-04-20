import React, { useContext } from "react";
import { infoContext } from "./ContextContainer";

function GrandChildComp() {
  const contextData = useContext(infoContext);

  return (
    <div>
      {contextData.map((info) => {
        return (
          <p>
            Color: {info.color} , ref: {info.ref}
          </p>
        );
      })}
    </div>
  );
}

export default GrandChildComp;
