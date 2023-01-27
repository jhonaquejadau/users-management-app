import React from "react";
import { useNavigate } from "react-router-dom";
import AuthBackground from "../../components/AuthBackground";
import { LogIn } from "./LogIn";
import { LogOut } from "./LogOut";

export const Auth = () => {
  return (
    <div className="w-full h-screen relative border-2">
      <AuthBackground />
      <LogIn />
    </div>
  );
};
