import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import { TiUserAddOutline } from "react-icons/ti";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";

//initial state for form data
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  //states for form data input
  const [formData, setFormData] = useState(initialState);
  //destructuring form data
  const { name, email, password, confirmPassword } = formData;

  //states for password validation
  const [uCase, setUcase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes size={15} color="red" />;
  const checkIcon = <BsCheck2All size={15} color="green" />;

  //function to switch password validation icon
  const switchIcon = (condition) => {
    return condition ? checkIcon : timesIcon;
  };

  //function to handle password validation
  useEffect(() => {
    //check lower and uppercase in password
    if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setUcase(true);
    } else {
      setUcase(false);
    }
    //check number in password
    if (password.match(/[0-9]/)) {
      setNum(true);
    } else {
      setNum(false);
    }
    //check special character in password
    if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setSChar(true);
    } else {
      setSChar(false);
    }
    //check password length
    if (password.length >= 6) {
      setPassLength(true);
    } else {
      setPassLength(false);
    }
  }, [password]);

  //function to handle form input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
            <TiUserAddOutline size={35} color="#999" />
          </div>
          <h2>Register</h2>
          <form onSubmit={loginUser}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
            {/* Add PasswordInput component here */}
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
            {/* Password validation strength */}
            <card cardClass={styles.group}>
              <ul className="form-list">
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(uCase)}
                    &nbsp; Lowercase & Uppercase
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(num)}
                    &nbsp; Number (0-9)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(sChar)}
                    &nbsp; Special Character (!@#$%^&*)
                  </span>
                </li>
                <li>
                  <span className={styles.indicator}>
                    {switchIcon(passLength)}
                    &nbsp; Atleast 6 characters
                  </span>
                </li>
              </ul>
            </card>
            <button type="submit" className="--btn --btn-primary --btn-block">
              Register
            </button>
          </form>
          <span className={styles.register}>
            <Link to="/">Home</Link>
            <p> &nbsp; Already have an account &nbsp;</p>
            <Link to="/login">Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

export default Register;
