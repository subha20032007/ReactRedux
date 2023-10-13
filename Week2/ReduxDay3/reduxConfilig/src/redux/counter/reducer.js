import { loadData, saveData } from "../../utils/accsessLocalstorage";
import { ADD, REDUCE } from "./actionType";

const initialState = {
  count: loadData("counter") || 0
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD:
      saveData("counter", state.count + 1);
      return { ...state, count: state.count + 1 };
    case REDUCE:
      saveData("counter", state.count - 1);
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// todos: [],
// isLoad: false,
// isErr: false
// GET_DATA="GET_DATA"
// export const POST_DATA="POST_DATA"
// export const TOGGLE_DATA="TOGGLE_DATA"
// export const DELETE_DATA="DELETE_DATA"
