import React from "react";
import AuthBackground from "../../components/AuthBackground";
import { AuthLogIn } from "./AuthLogIn";

export const Auth = () => {
  return (
    <div className="w-full h-full relative border-2 flex justify-center items-center">
      <AuthBackground />
      <AuthLogIn />
    </div>
  );
};
