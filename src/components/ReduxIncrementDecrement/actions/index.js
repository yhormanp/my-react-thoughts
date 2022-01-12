export const incNumber = (incrementValue) => {
  return {
    type: "INCREMENT",
    payload: incrementValue 
  };
};

export const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

export const resetNumber = () => {
  return {
    type: "RESET",
  };
};
