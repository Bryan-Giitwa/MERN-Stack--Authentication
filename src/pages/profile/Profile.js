import React, { useState } from "react";
import "./Profile.scss";
import Card from "../../components/card/Card";
import profileImg from "../../assets/avatarr.png";
import PageMenu from "../../components/pageMenu/PageMenu";

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
  const [profile, setProfile] = useState(profileImg);
  const [formData, setFormData] = useState(initialState);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile(reader.result);
        setFormData((prevState) => ({
          ...prevState,
          photo: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <section>
        <div className="container">
          <PageMenu />
          <h2>Profile</h2>
          <div className="--flex-start profile">
            <Card cardClass={"card"}>
              <>
                <div>
                  <div className="profile-photo">
                    <div>
                      <img src={profile} alt="profileimg" />
                      <h3>Role: Subscriber</h3>
                    </div>
                  </div>
                  <form>
                    <label>Change Photo</label>
                    <input
                      type="file"
                      accept="image/*"
                      name="image"
                      onChange={handleImageChange}
                    />
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    <label>Phone</label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    <label>Bio</label>
                    <textarea
                      name="bio"
                      cols={30}
                      rows={10}
                      value={formData.bio}
                      onChange={handleInputChange}
                    ></textarea>
                    <button
                      type="submit"
                      className="--btn --btn-primary --btn-block"
                    >
                      update Profile
                    </button>
                  </form>
                </div>
              </>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
