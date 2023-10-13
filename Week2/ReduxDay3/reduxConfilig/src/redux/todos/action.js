import {
  DELETE_DATA,
  ERR,
  GET_DATA,
  LOAD,
  POST_DATA,
  TOGGLE_DATA
} from "./actionType";

export const loadAction = () => {
  return { type: LOAD };
};
export const errAction = () => {
  return { type: ERR };
};
export const getDataAction = (payload) => {
  return { type: GET_DATA, payload };
};
export const postDataAction = (payload) => {
  console.log("calling", payload);
  return { type: POST_DATA, payload };
};
export const ToggleDataAction = (payload) => {
  return { type: TOGGLE_DATA, payload };
};
export const DeleteDataAction = (payload) => {
  return { type: DELETE_DATA, payload };
};
