import { reducer } from "./reducer"
import {legacy_createStore} from "redux"
let initialState={
    count:0
}
export const store=legacy_createStore(reducer,initialState)