import React from "react";
import loginImg from "../../assets/login.svg";
import "./Home.scss";

function Home() {
  return (
    <div>
      <section className="continer hero">
        <div className="hero-text">
          <h2>Ultimate MERN Stack Authentication System</h2>
          <p>
            Learn and Master Authentication and Authorization Using MERN Stack.
          </p>
          <p>
            Implement User Registration, Password Reset, Social Login, Logout,
            User Permissions, Email Notifications, and much more.
          </p>
          <div className="hero-buttons --flex-start">
            <button className="--btn --btn-danger">Register</button>
            <button className="--btn --btn-primary">Login</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={loginImg} alt="login" />
        </div>
      </section>
    </div>
  );
}

export default Home;
