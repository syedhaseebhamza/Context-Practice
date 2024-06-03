import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserContextProvioder from "./context/UserContextProvioder";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import LoginWith from "./firebaseCom/LoginWith";

function App() {
  return (
    <>
      <div>
        <a target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Welcome to the context API </h1>
      <UserContextProvioder>
        <Login />
        <Profile />
      </UserContextProvioder>

      <h1>Welcome to the FireBase </h1>

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </BrowserRouter>

      <h1>FireBase Login with Google,facebook,twitter,github etc</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<LoginWith />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
