import React from "react";
import { useSelector } from "react-redux";

export default function Component2 () {
  const userState = useSelector((store) => store.user);
  return (
    <div>
      <p>La informacion del usuario es: </p>
      <p>{JSON.stringify(userState)}</p>
      {/* <button onClick={handleUser}>Modificar Informacion</button> */}
    </div>
  );
}
