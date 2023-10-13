import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const inititalState = {
  isAuth: false,
  token: "",
  isLoad: false,
  isErr: false
};

export const reducer = (state = inititalState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoad: true };
    case LOGIN_SUCCESS:
      return { ...state, isLoad: false, token: payload, isAuth: true };
    case LOGIN_FAIL:
      return { ...state, isLoad: false, isErr: true };
    default:
      return state;
  }
};
