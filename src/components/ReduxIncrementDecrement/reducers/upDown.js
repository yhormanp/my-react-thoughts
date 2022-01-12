const initialState = 10;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      console.log('increment in payload', action.payload);
      const incrementValue =  action.payload || 1;
      return state + incrementValue;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

export default changeTheNumber;
