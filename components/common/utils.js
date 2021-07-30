import React, { Component } from "react";

export default class Utils extends Component {
  createCookie(name, value) {
    localStorage[name] = value;
  }

  createCookieArray(name, value) {
    var oldUsers = JSON.parse(localStorage.getItem("users"));
    var newUsers;
    if (oldUsers) {
      newUsers = [...oldUsers, value];
    } else {
      var newUsers = [value];
    }

    window.localStorage.setItem(name, JSON.stringify(newUsers));
  }

  readCookie = (name) => {
    return localStorage[name];
  };

  eraseCookie() {
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("psw");
    window.localStorage.removeItem("isLogin");
  }

  render() {
    return <div></div>;
  }
}
