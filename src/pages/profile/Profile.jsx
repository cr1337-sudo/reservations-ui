import {useContext} from "react";
import "./profile.scss";
import {AuthContext} from "../../context/authContext/AuthContext"

const Profile = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="profile-container">
      <div class="top-title">
        <h2>PROFILE</h2>
      </div>
      <div className="center-main">
    <div className="left-side">
    <h4>Profile pic</h4>
    <img src="https://www.kindpng.com/picc/m/111-1114911_person-icon-png-download-icono-usuario-png-transparent.png" alt="Person"/>
    <h4>Name:</h4>
    <p>{user.name}</p>
    <h4>Email</h4>
    <p>{user.email}</p>

    </div>
    </div>
    </div>
  );
};

export default Profile;
