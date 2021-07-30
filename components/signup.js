import React, { useState } from "react";
import Utils from "./common/utils";

const utils = new Utils();

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  console.log("utils", confirmPassword);

  function handleSubmit(ev) {
    setMessage("");
    ev.preventDefault();
    utils.createCookieArray("users", { email: email, psw: password });
    setMessage("Account created successfully");
    setError(false);
  }

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
            required
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
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(ev) => {
              setConfirmPassword(ev.target.value);
            }}
            required
          />
          <p>
            {confirmPassword != "" ? (
              <span>
                {password === confirmPassword ? (
                  <span className="text-success h3">✓</span>
                ) : (
                  <span className="text-danger h3">☓</span>
                )}
              </span>
            ) : (
              ""
            )}
          </p>
          <p className={`${error ? "text-danger" : "text-success"}`}>
            {message && message}
          </p>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-dark px-5 mt-4"
            disabled={password === confirmPassword ? false : true}
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
