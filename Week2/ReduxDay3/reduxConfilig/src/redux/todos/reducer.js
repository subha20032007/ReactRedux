import { ERR, GET_DATA, LOAD, POST_DATA } from "./actionType";
const initialState = {
  todos: [],
  isLoad: false,
  isErr: false
};
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, isLoad: true };
    case ERR:
      return { ...state, isErr: true };
    case GET_DATA:
      return { ...state, isLoad: false, todos: [...payload] };
    case POST_DATA:
      return { ...state, isLoad: false, todos: [...state.todos, payload] };
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
