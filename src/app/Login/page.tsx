"use client";
import Login from "@/components/Login";
import LoginValidationButton from "@/components/LoginValidationButton";
import React, { useState } from "react";

const page = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  return (
    <>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{error}</p>
      </form>
      <LoginValidationButton username={username} password={password} />
    </>
  );
};

export default page;
