import React from "react";

const Input = ({ id = "", type = "text", value = "" }) => (
  <input className="input" id={id} type={type} value={value} />
);

export default Input;
