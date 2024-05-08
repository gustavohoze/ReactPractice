"use client";
import router, { useRouter } from "next/router";
import React, { useState } from "react";

const Login = async () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setError("Username or Password musn't be empty!");
    try {
      const data = { username, password };
      const database = await fetch("http://localhost:3000/users");
      const databasedata = await database.json();
      // let flag = 0;

      for (let data of databasedata) {
        if (username == data.username && password == data.password) {
          router.push("/");
        }
        // flag++;
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
        <p>{error}</p>
      </form>
    </>
  );
};

export default Login;
