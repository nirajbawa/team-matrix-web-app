"use client";
import React from "react";
import LoginForm from "./LoginForm";
import Triangle from "./Triangle";

function Login() {
  return (
    <div
      className="dark:bg-black pt-32 min-h-svh flex-col-reverse overflow-x-hidden lg:flex-row text-white flex w-full h-full gap-11 md:gap-36 pb-10 lg:px-28 justify-center items-center"
    >
      <LoginForm />
      <Triangle />
    </div>
  );
}

export default Login;
