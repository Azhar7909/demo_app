import { useState } from "react";
import Login from "../../components/login";
import Signup from "../../components/signup";

function Auth() {
  const [componentRender, setComponentRender] = useState(true);
  const [userInfo, setUserInfo] = useState("User not exist");

  return (
    <div
      className="pt-5"
      style={{ width: "450px", margin: "auto", height: "100vh" }}
    >
      <div className="d-flex">
        <h4
          onClick={() => setComponentRender(true)}
          style={{width:'50%',cursor:'pointer'}}
          className={` p-2 rounded-start text-center ${
            componentRender ? "bg-dark text-white" : ""
          }`}
        >
          Login
        </h4>
        <h4
          onClick={() => setComponentRender(false)}
          style={{width:'50%',cursor:'pointer'}}
          className={` p-2 rounded-end text-center ${
            componentRender ? "" : "bg-dark text-white"
          }`}
        >
          Signup
        </h4>
      </div>
      {componentRender ? <Login /> : <Signup />}
    </div>
  );
}

export default Auth;
