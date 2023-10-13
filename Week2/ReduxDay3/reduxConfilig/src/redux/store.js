import { reducer as counterReducer } from "../redux/counter/reducer";
import { reducer as todoReducer } from "../redux/todos/reducer";
import { reducer as authReducer } from "../redux/Auth/reducer";
import { legacy_createStore, combineReducers } from "redux";
const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
  authReducer
});
export const store = legacy_createStore(rootReducer);
