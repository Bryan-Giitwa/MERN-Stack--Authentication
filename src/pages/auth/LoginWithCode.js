import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { GrInsecure } from "react-icons/gr";

const LoginWithCode = () => {
  const [loginCode, setLoginCode] = useState("");

  const handleInputChange = (e) => {
    setLoginCode(e.target.value);
  };

  const loginUser = (e) => {
    e.preventDefault();
    //logic for handling form submission
  };
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <GrInsecure size={35} color="#999" />
          </div>
          <h2>ForgotPassword</h2>
          <p>Enter your email to reset your password</p>
          <form onSubmit={loginUser}>
            <input
              type="text"
              placeholder="Access Code"
              name="loginCode"
              value={loginCode}
              onChange={handleInputChange}
            />
            {/* Add PasswordInput component here */}
            <button type="submit" className="--btn --btn-primary --btn-block">
              Proceed to Login
            </button>
            <span className="--flet-center">
              Check your email for access code
            </span>

            <p className={styles.links}>
              <Link to="/">- Home</Link>
              <p className="v-link --color-primary">
                <b>Resend Code</b>
              </p>
            </p>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LoginWithCode;
