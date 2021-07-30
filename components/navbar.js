import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import Link from "next/link";
import Utils from "./common/utils";

const utils = new Utils();

export default function Navbar() {
  const [isLogedin, setIsLogedin] = useState(false);
  const [user, setUser] = useState("");

  function toggleFn() {
    var elem = document.getElementById("userList");
    if (elem.style.display === "block") {
      elem.style.display = "none";
    } else {
      elem.style.display = "block";
    }
  }

  useEffect(() => {
    const isLogin = utils.readCookie("isLogin");
    setUser(utils.readCookie("email"));
    if (isLogin) {
      setIsLogedin(true);
    }
  }, []);
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Demo app
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {isLogedin && (
                  <a className="nav-link" aria-current="page" href="/posts">
                    All posts
                  </a>
                )}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
            <span>
              {isLogedin ? (
                <span
                  className="nav-item text-light"
                  style={{
                    marginRight: "30px",
                    cursor: "pointer",
                    fontSize: "30px",
                  }}
                  title={user}
                  onClick={toggleFn}
                >
                  <FontAwesomeIcon icon={faUserCircle}></FontAwesomeIcon>
                </span>
              ) : (
                <span
                  title="Login/Signup"
                  className="nav-item text-light"
                  style={{ marginRight: "30px", cursor: "pointer" }}
                >
                  Login
                </span>
              )}
            </span>
          </div>
        </div>
      </nav>
      <div
        id="userList"
        className="float-end list-group text-center"
        style={{ display: "none" }}
        onMouseLeave={toggleFn}
      >
        <a
          style={{ cursor: "pointer" }}
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          {user}
        </a>
        <a
          onClick={() => {
            utils.eraseCookie();
            window.location.href = "/auth";
          }}
          style={{ cursor: "pointer" }}
          className="list-group-item list-group-item-action list-group-item-danger"
        >
          Log out
        </a>
      </div>
    </div>
  );
}
