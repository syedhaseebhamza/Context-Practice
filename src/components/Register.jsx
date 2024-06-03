import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = (e, type) => {
    e.preventDefault();
    console.log(e.target.email.value);
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "usersignup");
          navigate("/home");
        })
        .catch((err) => {
          alert(err);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "usersignup");
          navigate("/home");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };
  return (
    <div>
      <h1>{login ? "signin" : "signup"}</h1>
      <form onSubmit={(e) => handelSubmit(e, login ? "signin" : "signup")}>
        <input name="email" type="text" placeholder="email" /> <br />
        <input name="password" type="password" placeholder="password" /> <br />
        <button>{login ? "signin" : "signup"}</button>
      </form>
    </div>
  );
};

export default Register;
