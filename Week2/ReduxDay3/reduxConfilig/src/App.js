import { Counter } from "./Componets/Counter";
import { TodoList } from "./Componets/TodoList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <TodoList />
    </div>
  );
}
