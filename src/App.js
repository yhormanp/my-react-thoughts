// import logo from './logo.svg';
import "./App.css";
import { Link } from "react-router-dom";
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
      {/* <header className="App-header"> */}
        <div>
          <nav>
            <Link to="/moodCalendar">Mood Calendar</Link> |
            <Link to="/reducerExample">useReducer Example</Link> |
            <Link to="/pokedex">Pokedex App</Link> |
            <Link to="/memoization">Memoization example</Link> |
            <Link to="/cvsf">Celsius vs Farenheit</Link> |
            <Link to="/portaldemo">Portal demo</Link> |
          </nav>
        </div>
      {/* </header> */}
    </div>
  );
}

export default App;
