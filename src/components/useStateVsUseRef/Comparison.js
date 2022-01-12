import React from "react";
import MyUseRef from "./MyUseRef";
import MyUseState from "./MyUseState";

/* 
UseRef : it returns an object that has a property current inside which we can access using object dot notation. That property current takes the value of the argument that we pass to the function useRef().
is powerful because it’s persisted between renders. Unlike useState, useRef doesn’t cause a component to re-render when the value or state changes

UseState: useState allows us to have state in functional components. It accepts one argument(initial state) and returns two things, The current state(the value of our state) and A function that allows us to update that current state
everytime the state is  updated, it forces the ui to be re-renderd

*/
function Comparison() {
  return (
    <>
     
      
      <div>
        <MyUseRef></MyUseRef>
      </div>
      <div>
        <MyUseState></MyUseState>
      </div>
    </>
  );
}

export default Comparison;
