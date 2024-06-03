import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvioder = ({ children }) => {
  const [userData, setUserData] = useState(null);
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvioder;





