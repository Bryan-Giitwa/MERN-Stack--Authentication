import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { AiOutlineMail } from "react-icons/ai";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const ForgotPassword = (e) => {
    e.preventDefault();
    //logic for handling form submission
  };
  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>ForgotPassword</h2>
          <p>Enter your email to reset your password</p>
          <form onSubmit={ForgotPassword}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            {/* Add PasswordInput component here */}
            <button type="submit" className="--btn --btn-primary --btn-block">
              Get Reset Email
            </button>

            <p className={styles.links}>
              <Link to="/">- Home</Link>
              <Link to="/login">- Login</Link>
            </p>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;
