import React, { useState } from "react";
import './styles.css';

function MyUseState() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <label>Using UseState to update the counter </label>
      <p className="paragraph">
        UseState: useState allows us to have state in functional components. It
        accepts one argument(initial state) and returns two things, The current
        state(the value of our state) and A function that allows us to update
        that current state everytime the state is updated, it forces the ui to
        be re-renderd
      </p>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}> Increment + 1</button>
    </div>
  );
}

export default MyUseState;
