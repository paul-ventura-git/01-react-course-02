import { useState } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";
import './my-style.scss'

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo first", "todo second"]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  return (
    <div className="App">
      <h1>React</h1>
        <Todos todos={todos} />
        <hr />
        <div>
          Count: {count}
          <hr />
          <button onClick={increment}>Increment</button>
        </div>
    </div>
  );
}

export default App;
