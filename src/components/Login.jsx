import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const { setUserData } = useContext(UserContext);

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handelInputValueChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <div>
      <input
        value={inputValue.email}
        onChange={handelInputValueChange}
        type="text"
        name="email"
        placeholder="email"
      />{" "}
      <br />
      <input
        type="password"
        name="password"
        onChange={handelInputValueChange}
        placeholder="password"
        value={inputValue.password}
      />{" "}
      <br />{" "}
      <button
        onClick={() => {
          setUserData(inputValue);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
