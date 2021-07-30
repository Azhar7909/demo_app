import React, { useState, useEffect } from "react";
import Utils from "./common/utils";

const utils = new Utils();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usersInfo, setUserInfo] = useState([]);

  function handleSubmit(ev) {
    ev.preventDefault();
    for (let i = 0; i < usersInfo.length; i++) {
      const element = usersInfo[i];
      if (element.email == email && element.psw == password) {
        utils.createCookie("email", element.email);
        utils.createCookie("isLogin", true);
        window.location.href = "/";
      }
    }
  }
  useEffect(function () {
    var users = JSON.parse(localStorage.getItem("users"));
    setUserInfo(users);
  }, []);

  return (
    <div>
      <form onSubmit={(ev) => handleSubmit(ev)}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark px-5 mt-4">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
