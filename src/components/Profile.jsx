import React, { useContext } from "react";
import UserContext from "../context/UserContext";
const Profile = () => {
  const { userData } = useContext(UserContext);

  return (
    <div>{userData ? `Welcome 👨‍❤️‍👨 ${userData.email}` : "First You Login"}</div>
  );
};

export default Profile;
