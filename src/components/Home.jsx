import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Hello Login Uers</h1>
      <button
        onClick={() => {
          signOut(auth).then((val) => {
            console.log(val, "val");
            navigate("/register");
          });
        }}
      >
        SignOut
      </button>
    </div>
  );
};

export default Home;
