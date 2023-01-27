import React from "react";
import { useState } from "react";

export const FormInputs = ({ label, errorMessage, onChange, ...inputs }) => {
  const [focused, setFocused] = useState(false);

  const handleFocused = (e) => {
    e.preventDefault();
    setFocused(true);
  };

  return (
    <div className="flex flex-col my-2 w-full h-full py-1">
      <label className="mb-2 capitalize">{label}</label>
      <input className="border-[1px] focus:outline-none p-2" {...inputs} onChange={onChange} onBlur={handleFocused} focused={focused.toString()}/>
      <span>{errorMessage}</span>
    </div>
  );
};
