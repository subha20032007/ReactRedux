import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { errAction, loadAction, postDataAction } from "../redux/todos/action";

export const AddTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const PostData = () => {
    loadAction();
    let payload = {
      title,
      status: false
    };
    axios
      .post(`http://localhost:8080/todos`, payload)
      .then((res) => {
        dispatch(postDataAction(res.data));
      })
      .catch((err) => {
        errAction();
      });
  };
  const handelClick = () => {
    PostData();

    setTitle("");
  };
  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handelClick}>ADD</button>
    </>
  );
};
