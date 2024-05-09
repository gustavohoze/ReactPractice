import router from "next/router";
import React, { FC } from "react";

type userData = {
  username: string;
  password: string;
};

async function handleSubmit(username: string, password: string) {
  const database = await fetch("http://localhost:3000/users");
  const databasedata = await database.json();
  let flag = 0;
  for (let data of databasedata) {
    if (username == data.username && password == data.password) {
      console.log("Success");
      flag++;
    }
  }
  if (flag == 0) {
    window.alert("Invalid username or password");
  }
}

const LoginValidationButton: FC<userData> = ({ username, password }) => {
  return (
    <button
      onClick={() => {
        handleSubmit(username, password);
      }}
    >
      Login
    </button>
  );
};

export default LoginValidationButton;
