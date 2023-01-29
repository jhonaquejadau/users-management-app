import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormInputs } from "../components/auth/FormInputs";
import { logInInputs } from "../../utilities";
import { auth } from "../../database/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthLogIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [created, setCreated] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential);
        setCreated(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
    if (created) {
      setValues({ email: "", password: "" });
      navigate('/home')
    }
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
