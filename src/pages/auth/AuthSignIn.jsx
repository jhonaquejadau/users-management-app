import { useState } from "react";
import { Link } from "react-router-dom";
import { signInInputs } from "../../utilities";
import { FormInputs } from "../components/auth/FormInputs";
import { auth } from "../../database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthSignIn = () => {
  const [error, setError] = useState("");
  const [created, setCreated] = useState(false);
  const [values, setValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential);
        setCreated(true);
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });

    if (created) {
      setValues({
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className="absolute w-[600px] px-4 shadow-xl rounded">
      <p className="text-blue-500 text-center font-bold text-[1.5rem]">
        REGISTER FORMULARY!!
      </p>
      <p className="text-center">Fill inputs below to create you profile</p>
      <form onSubmit={handleSubmit}>
        {signInInputs.map((input) => (
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
          Create User
        </button>
        <Link to="/">
          <p className="mt-2 mb-4 text-slate-400 text-center font-bold hover:text-blue-500 hover:cursor-pointer">
            Already have an account? Login
          </p>
        </Link>
      </form>
    </div>
  );
};
