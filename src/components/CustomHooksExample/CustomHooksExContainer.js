import React from "react";
import DarkToggle from "./DarkToggle";
import DarkToggle2 from "./DarkToogle2";
import useCtxDark, { DarkProvider } from "./useCtxDark";
import useCtxDark2 from "./useCtxDark2";

function CustomHooksExContainer() {
  return (
    <DarkProvider>
      <ListOfToogles></ListOfToogles>
    </DarkProvider>
  );
}

const ListOfToogles = () => {
  const [dark, setDark] = useCtxDark();
  return (
    <>
      <h3> There are 2 different ways to create a custom hook</h3>
      <div>
        <p style={{ fontWeight: "bold" }}>
          1. Creating a custom hook that will be keeping it's state and every
          instance of the custom hooks will have it's own state.
        </p>
        <span>
          For instace, 3 components of DarkToogle has been created but the state
          is maintained by each component
        </span>
        <div style={{diplay:"flex", flexDirection:"columns"}}>
          <DarkToggle2 counter="1"></DarkToggle2>
          <DarkToggle2 counter="2"></DarkToggle2>
          <DarkToggle2 counter="3"></DarkToggle2>
        </div>
      </div>
      <div>
        <p style={{ fontWeight: "bold" }}>
          2. Creating a custom hook that will use useContext and useMemo hooks
          to keep a general state of the whole application that can be updated
          by any component with access to the custom hook useCtxDark.
        </p>
        <span>
          For instace, 3 components of DarkToogle has been created but the state
          is maintained and updated by the context provider
        </span>
        <div>
          <p>I am the general value of the state "dark" : {dark.toString()}</p>
          <DarkToggle counter="3"> </DarkToggle>
          <DarkToggle counter="4"> </DarkToggle>
          <DarkToggle counter="5"> </DarkToggle>
        </div>
      </div>
    </>
  );
};

export default CustomHooksExContainer;
