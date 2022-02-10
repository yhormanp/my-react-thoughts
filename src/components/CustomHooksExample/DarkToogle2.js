import React from "react";
import useCtxDark2 from "./useCtxDark2";

function DarkToggle2({ counter }) {
  const [dark, setDark] = useCtxDark2();
  return (
    <div>
      
      <input
        type="checkbox"
        onChange={() => setDark(!dark)}
        value={dark.toString()}
      ></input><p style={{display:'inline-block'}}>I am the darkToogle {counter} with value {dark.toString()}</p>
    </div>
  );
}

export default DarkToggle2;
