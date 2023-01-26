import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../redux/states/user";

export default function Component1() {
  const dispatcher = useDispatch();
  const handleUser = () => {
    dispatcher(createUser({name: 'jhon quejada', email: "jhona.quejada@gmail.com"}));
  };
  return (
    <div>
      <h1>USER INFORMATION</h1>
      <button onClick={handleUser}>Crear usuario</button>
    </div>
  );
}
