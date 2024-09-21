import React, { useState } from "react";

import Logo from "../../assets/logo.svg";
import LoginImg from "../../assets/login-image.svg";
import { useNavigate } from "react-router";

import "../../styles/login.scss";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={"login-container"}>
      <div className={"leftSide"}>
        <img src={Logo} alt="Logo" className={"logo"} />
        <img src={LoginImg} alt="Illustration" className={"illustration"} />
      </div>

      <div className={"rightSide"}>
        <h1>Welcome!</h1>
        <p className="text-lg">Enter details to login.</p>

        <form action="" onSubmit={() => navigate("/users")}>
          <div className={"inputGroup"}>
            <input type="email" placeholder="Email" required />
          </div>

          <div className={"inputGroup"}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className={"showPasswordButton text-xs text-600"}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </button>
          </div>

          <a
            href="/forgot-password"
            className={"forgotPassword text-xs text-600"}
          >
            FORGOT PASSWORD?
          </a>

          <button className={"loginButton text-600"} type="submit">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
