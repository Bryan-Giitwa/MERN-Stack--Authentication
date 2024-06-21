import React from "react";
import "./Profile.scss";
import Card from "../../components/card/Card";
import profileImg from "../../assets/avatarr.png";

const Profile = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2>Profile</h2>
          <div className="--flex-start profile">
            <Card cardClass={"card"}>
              <div>
                <div className="profile-photo">
                  <img src={profileImg} alt="profileimg" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
