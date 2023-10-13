import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

export const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const loginFailAction = () => {
  return { type: LOGIN_FAIL };
};
