import { useState } from "react";
import React from "react";

const LoginPage = ({ onLogin }) => {
  const [userName, setUserName] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onLogin(userName);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Username"
          value={userName}
          onChange={(evt) => setUserName(evt.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
