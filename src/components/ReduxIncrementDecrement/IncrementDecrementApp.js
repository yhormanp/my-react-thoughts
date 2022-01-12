import { Provider } from "react-redux";
import CounterCtrl from "./CounterCtrl";
import store from "./store";

// import React, { useDispatch } from "react";
// import { decNumber, incNumber, resetNumber } from "./actions";

function IncrementDecrementApp() {
  // store.subscribe(() => console.log(store.getstate()));

  // const myState = useSelector((state) => state.store);
  // const dispatch = useDispatch();
  return (
    <div>
      <Provider store={store}>
        <CounterCtrl></CounterCtrl>
        {/* <div>
          <h2> Increment / Decrement counter</h2>
          <h4> using React and Redux</h4>

          <div className="quantity">
            <button
              className="quantity_minus"
              title="Decrement"
              onClick={() => dispatch(decNumber())}
            >
              <span> - </span>
            </button>
            <input type="text" value={myState} name="quantity" />
            <button
              className="quantity_plus"
              title="increment"
              onClick={() => dispatch(incNumber())}
            >
              <span> + </span>
            </button>
            <button
              className="quantity_plus"
              title="Reset Count"
              onClick={() => dispatch(resetNumber())}
            >
              {" "}
              Reset{" "}
            </button>
          </div>
        </div> */}
      </Provider> 
    </div>
  );
}

export default IncrementDecrementApp;
