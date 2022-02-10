import React from "react";
import useCtxDark from "./useCtxDark";

function DarkToggle({counter}) {
  const [dark, setDark] = useCtxDark();
  return (
    <div>
      <input
        type="checkbox"
        onChange={() => setDark(!dark)}
        value={dark.toString()}
      ></input>
      <p style={{ display: "inline-block" }}>
        I am the darkToogle {counter} with value {dark.toString()}
      </p>
    </div>
  );
}

export default DarkToggle;
