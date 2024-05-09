"use client";
import Login from "@/components/Login";
import LoginValidationButton from "@/components/LoginValidationButton";
import React, { useState } from "react";
import Image from "next/image";
import HomeBackground from "@/assets/HomeBackground.jpg";

const page = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState("");

  return (
    <div className="grid min-w-screen min-h-[90vh] bg-transparent items-center justify-center">
      <form className="grid min-h-[40vh] min-w-[30vw] col-span-3 border border-white bg-black text-white p-3 gap-3 rounded-xl ">
        <h1 className=" flex min-w-full items-center justify-center p-6 uppercase">
          Login
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

        <p>{error}</p>

        <LoginValidationButton username={username} password={password} />
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
