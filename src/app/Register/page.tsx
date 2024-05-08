"use client";
import React, { useState } from "react";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setError(""); // Clear any previous errors

    try {
      const data = { username, password };
      const database = await fetch("http://localhost:3000/users");
      const databasedata = await database.json();
      let tempArray: string[] = [];

      for (let data of databasedata) {
        tempArray.push(data.username);
      }

      if (tempArray.includes(username)) {
        setError("Username has already taken");
        return;
      }

      if (!database.ok) {
        setError("Failed to fetch Data");
        return;
      }

      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess("User registered successfully!");
        setUsername("");
        setPassword("");
      } else {
        const errorData = await response.json();
        setError(errorData.message);
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
        <button type="submit">Register</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </>
  );
};

export default page;
