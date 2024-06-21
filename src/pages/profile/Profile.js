import React, { useState } from "react";
import "./Profile.scss";
import Card from "../../components/card/Card";
import profileImg from "../../assets/avatarr.png";

const initialState = {
  name: "John Doe",
  email: "test@test.com",
  phone: "",
  bio: "",
  photo: "",
  role: "",
  isVerified: false,
};

const Profile = () => {
  const [profile, setProfile] = useState(initialState);

  const handleImageChange = () => {};
  const handleInputChange = () => {};
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
                  <h3>Role: Subscriber</h3>
                </div>
                <form>
                  <label>Change Photo</label>
                  <input
                    type="file"
                    accept="image/*"
                    name="iamge"
                    onChange={handleImageChange}
                  />
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                  />
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                  />
                </form>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
