import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

import todoApp from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(todoApp);

const App = () => {
  <>
    <Provider store={store}>
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
      ;
    </Provider>
  </>;
};

export default App;
