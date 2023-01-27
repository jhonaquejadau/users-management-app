import React from "react";

export const FormInputs = ({label, errorMessage, onChange, ...inputs}) => {
  return (
    <div className="flex flex-col my-2 w-full h-full py-1">
      <label className="mb-2 capitalize">{label}</label>
      <input className="border-2 p-2" {...inputs} onChange={onChange} />
      <span>{errorMessage ? errorMessage : ''}</span>
    </div>
  );
};
