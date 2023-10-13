import { useSelector, useDispatch } from "react-redux";
import { addAction, reduceAction } from "../redux/counter/action";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  console.log(count);
  const handelAdd = () => {
    dispatch(addAction(1));
  };
  const handelReduce = () => {
    dispatch(reduceAction(1));
  };
  return (
    <>
      <h1>Counter:{count}</h1>
      <button onClick={handelAdd}>ADD</button>
      <button onClick={handelReduce}>REDUCER</button>
    </>
  );
};
