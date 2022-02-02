import React, { useReducer } from "react";

function UseReducerExample() {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, counterReducer());
  const onIncrementar = () => dispatch({type: "incrementar"});
  const onReducir = () => dispatch({type: "reducir"});
  const onReiniciar = () => dispatch({type: "reiniciar"})

  return (
    <div>
      <h1>contador: {state.contador}</h1>
      <button onClick={onIncrementar}>Incrementar </button>
      <button onClick={onReducir}>Reducir </button>
      <button onClick={onReiniciar}>Reiniciar</button>
    </div>
  );
}

const initialState = () => {
  return {
    contador: 1,
  };
};

const counterReducer = (state = initialState(), action) => {
  switch (action?.type) {
    case "incrementar":
      return { contador: state.contador + 1 };
      break;
    case "reducir":
      return { contador: state.contador - 1 };
      break;
    case "reiniciar":
      return { contador: 0 };
      break;

    default:
      return state;
      break;
  }
};

export default UseReducerExample;
