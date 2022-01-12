// import logo from './logo.svg';
import "./App.css";
import Container from "./components/CelsiusVsFarenheit/Container";
// import Comparison from './components/useStateVsUseRef/Comparison';
// import TodoHead from './components/MyTodoApp/TodoHead';
import TodoApp from "./components/MyTodoApp/TodoApp";
import MealContainer from "./components/RandomMealGenerator/MealContainer";
import IncrementDecrementApp from "./components/ReduxIncrementDecrement/IncrementDecrementApp";
import useFetch from "./hooks/useFetch";

function App() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users", []);
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts", []);

  return (
    <div className="App">
      <header className="App-header">
        <label> Creating a temperature converter celsius - farenheit </label>
        <Container />
        <br />
        {/* <label > Comparison between useRef and UseState </label>
        <Comparison/>
       */}
        <br />
        {/* <TodoApp></TodoApp> */}
        <br />
        {/* <IncrementDecrementApp /> */}
        qty users: {users.data.length}
        qty posts: {posts.data.length}
      </header>
      <br />
    </div>
  );
}

export default App;
