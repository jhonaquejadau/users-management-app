export const signInInputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "name",
    label: "name",
    errorMessage:
      "Username should be 3-16 characters and shouldn't include any special character!",
    pattern: "^[A-Za-z0-9]{3,20}$",
    required: true,
  },
  {
    id: 2,
    name: "lastname",
    type: "text",
    placeholder: "lastname",
    label: "lastname",
    errorMessage:
      "Lastname should be 3-16 characters and shouldn't include any special character!",
    required: true,
  },
  {
    id: 3,
    name: "email",
    type: "text",
    placeholder: "email",
    label: "email",
    errorMessage: "It should be a valid email address!",
    required: true,
  },
  {
    id: 4,
    name: "password",
    type: "password",
    placeholder: "password",
    label: "password",
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    required: true,
  }
];
