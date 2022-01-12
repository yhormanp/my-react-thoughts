import React, { useRef } from "react";
import './styles.css';
function MyUseRef() {
  // Using useRef.
  const ourRef = useRef(0);

  //JSX.
  return (
    <>
      <label>Using UseRef to update the counter</label>
      <p className="paragraph">
        UseRef : it returns an object that has a property current inside which
        we can access using object dot notation. That property current takes the
        value of the argument that we pass to the function useRef(). is powerful
        because it’s persisted between renders. Unlike useState, useRef doesn’t
        cause a component to re-render when the value or state changes
        The value will be shown when the page is reloaded
      </p>
      <h1>Counter: {ourRef.current}</h1>
      <button onClick={() => (ourRef.current = ourRef.current + 1)}>
        Increment + 1{" "}
      </button>
    </>
  );
}

export default MyUseRef;
