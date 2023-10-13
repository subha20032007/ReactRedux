import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFailAction,
  loginRequestAction,
  loginSuccessAction
} from "../redux/Auth/action";

export const Login = () => {
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  console.log(isAuth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelLogin = () => {
    let userData = {
      email,
      password
    };
    dispatch(loginRequestAction());
    axios
      .post(`https://reqres.in/api/login`, userData)
      .then((res) => {
        dispatch(loginSuccessAction(res.data.token));
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailAction(err));
      });
    setEmail("");
    setPassword("");
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <h1>Login Page</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter Your Email"
      />
      <br />
      <br />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="email"
        placeholder="Enter Your Password"
      />
      <br />
      <br />
      <button onClick={handelLogin}>Login</button>
      <p>"email": eve.holt@reqres.in, "password": cityslicka</p>
    </>
  );
};
