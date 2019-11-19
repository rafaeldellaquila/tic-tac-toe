import React from "react";

const InputGame = ({ id = "", type = "text", value = "" }) => (
  <input className="input-game" id={id} type={type} value={value} />
);

export default InputGame;
