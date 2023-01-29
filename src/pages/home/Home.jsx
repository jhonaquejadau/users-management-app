import React from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../database/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [logout, setLogout] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully");
        setLogout(true);
      })
      .catch((error) => {
        console.log(error.message);
      });
    if (logout) {
      navigate("/");
    }
  };
  return (
    <div className="w-full h-screen bg-slate-300 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">{`WELCOME ${
        authUser ? authUser.email : ""
      } !!`}</h1>
      <button
        onClick={handleSignOut}
        className="bg-orange-600 rounded py-1 px-4 text-xl"
      >
        Log out
      </button>
    </div>
  );
};

export default Home;
