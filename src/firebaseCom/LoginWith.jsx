import React, { useState, useEffect } from "react";
import {
  auth,
  googleProvider,
  fbProvider,
  gitProvider,
} from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const LoginWith = () => {
  const [email, setEmail] = useState();

  const navigate = useNavigate();

  const handleAuthProviderClick = (provider) => {
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log("data", data);
        const userEmail = data.user.email;
        setEmail(userEmail);
        localStorage.setItem("email", userEmail);
        navigate("/home");
      })
      .catch((err) => console.warn("error", err));
  };

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      <button onClick={() => handleAuthProviderClick(googleProvider)}>
        continue with Google
      </button>{" "}
      <button onClick={() => handleAuthProviderClick(fbProvider)}>
        continue with FaceBook
      </button>{" "}
      <button onClick={() => handleAuthProviderClick(gitProvider)}>
        continue with Github
      </button>
    </div>
  );
};

export default LoginWith;
