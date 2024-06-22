import React, { useState } from "react";
import Card from "../../components/card/Card";
import PageMenu from "../../components/pageMenu/PageMenu";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import "./ChangePassword.scss";

const initialState = {
  oldPassword: "",
  password: "",
  confirmPassword: "",
};

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password, confirmPassword } = formData;
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section className="--flex-center">
        <div className="container">
          <PageMenu />
          <h2>Change Password</h2>
          <div className="--flex-start profile">
            <Card cardClass={"card"}>
              <form>
                <label>Current Password</label>
                <PasswordInput
                  placeholder="Old Password"
                  name="oldPassword"
                  value={oldPassword}
                  onChange={handleInputChange}
                  className="password-input-container"
                />
                <label>New Password</label>
                <PasswordInput
                  placeholder="New Password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                  className="password-input-container"
                />
                <label>Confirm New Password</label>
                <PasswordInput
                  placeholder="Confirm New Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                  className="password-input-container"
                />
                <button
                  type="submit"
                  className="--btn --btn-primary --btn-block"
                >
                  Change password
                </button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChangePassword;
