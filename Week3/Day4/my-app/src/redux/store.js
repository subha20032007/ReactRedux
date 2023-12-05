import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./todoReducer/reducer";
import {reducer as todoReducer} from "./todoReducer/reducer"
import { reducer as counterReducer } from "./counterReducer/reducer";
const reducer=combineReducers({
    todoReducer,
    counterReducer
})

export const store=legacy_createStore(reducer,applyMiddleware(thunk))