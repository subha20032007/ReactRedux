import { useEffect } from "react";
import { AddTodo } from "./AddTodo";
import axios from "axios";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { errAction, getDataAction, loadAction } from "../redux/todos/action";

export const TodoList = () => {
  const { todos, isLoad } = useSelector((state) => {
    return {
      todos: state.todoReducer.todos,
      isLoad: state.todoReducer.isLoad
    };
  }, shallowEqual);

  console.log(todos, isLoad);
  const dispatch = useDispatch();
  const getRequest = () => {
    dispatch(loadAction());
    axios
      .get(`http://localhost:8080/todos`)
      .then((res) => {
        dispatch(getDataAction(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(errAction());
      });
  };
  const handelToggle = (id) => {};
  const handelDelete = () => {};
  useEffect(() => {
    getRequest();
  }, []);
  return (
    <>
      <h1>ADD TODO</h1>
      <AddTodo />
      <div>
        {isLoad ? (
          <h1>Loading...</h1>
        ) : (
          todos.map((el) => (
            <div key={el.id}>
              {el.title}-{el.status ? "True" : "False"}{" "}
            </div>
          ))
        )}
      </div>
    </>
  );
};
