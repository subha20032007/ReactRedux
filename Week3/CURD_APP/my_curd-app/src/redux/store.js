import {reducer as productReducer} from "./ProductReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer"
import {applyMiddleware, legacy_createStore,compose, combineReducers} from "redux"
import thunk from "redux-thunk"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=legacy_createStore(combineReducers({productReducer,AuthReducer}),composeEnhancers(applyMiddleware(thunk)))