import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import { MdPassword } from "react-icons/md";
import PasswordInput from "../../components/passwordInput/PasswordInput";

//initial state for form data
const initialState = {
  password: "",
  confirmPassword: "",
};
const Reset = () => {
  //states for form data input
  const [formData, setFormData] = useState(initialState);
  //destructuring form data
  const { password, confirmPassword } = formData;
  //function to handle form input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <MdPassword size={35} color="#999" />
          </div>
          <h2>Reset Password</h2>
          <form onSubmit={ForgotPassword}>
            <PasswordInput
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <PasswordInput
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
            <button type="submit" className="--btn --btn-primary --btn-block">
              Reset Password
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

export default Reset;
