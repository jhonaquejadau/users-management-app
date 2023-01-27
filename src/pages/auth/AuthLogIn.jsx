import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormInputs } from "../components/auth/FormInputs";
import { logInInputs } from "../../utilities";

export const AuthLogIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="absolute w-[600px] rounded px-4 shadow-xl">
      <p className="text-blue-500 text-center font-bold text-[1.5rem]">
        WELCOME BACK!!
      </p>
      <p className="text-center">Login your account</p>
      <form onSubmit={handleSubmit}>
        {logInInputs.map((input) => (
          <FormInputs
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        <button
          type="submit"
          className="py-1 px-8 my-2 w-full mx-auto rounded font-bold text-slate-100 bg-blue-500 hover:bg-blue-700"
        >
          Login
        </button>
        <Link to="/signin">
          <p className="my-4 capitalize text-center font-bold text-slate-400 hover:text-blue-500 hover:cursor-pointer">
            create account
          </p>
        </Link>
      </form>
    </div>
  );
};
