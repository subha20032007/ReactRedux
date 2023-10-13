import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { TodoList } from "../Componets/TodoList";
import { Counter } from "../Componets/Counter";
import { PrivateRouter } from "./PrivateRouter";
export const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};
