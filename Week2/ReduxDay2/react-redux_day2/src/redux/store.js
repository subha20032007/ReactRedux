
import {legacy_createStore} from "redux"
import { reducer } from "./reducer"

const initialState={
    count:0,
    todos:[],
    isLoad:false,
    isErr:false
}
export const store=legacy_createStore(reducer,initialState)