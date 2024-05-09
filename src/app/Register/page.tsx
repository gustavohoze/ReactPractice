"use client";
import React, { useState } from "react";
import Image from "next/image";
import HomeBackground from "@/assets/HomeBackground.jpg";

const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setError(""); // Clear any previous errors
    setSuccess("");

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
    <div className="grid min-w-screen min-h-[90vh] bg-transparent items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="grid min-h-[40vh] min-w-[30vw] col-span-3 border border-white bg-black text-white p-3 gap-3 rounded-xl "
      >
        <h1 className=" flex min-w-full items-center justify-center p-6 uppercase">
          Register
        </h1>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-transparent border-b border-white m-6"
          placeholder="Username"
        />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-transparent border-b border-white m-6"
          placeholder="Password"
        />
        {error && <p className="error ml-6">{error}</p>}
        {success && <p className="success ml-6 ">{success}</p>}
        <button
          type="submit"
          className="bg-white  text-black p-2 mt-2 mb-2 m-6"
        >
          Register
        </button>
        <br />
      </form>
      <Image
        src={HomeBackground}
        alt=""
        layout="fill"
        objectFit="cover"
        id="backgroundHomepage"
        className="z-[-1]"
      />
    </div>
  );
};

export default page;
