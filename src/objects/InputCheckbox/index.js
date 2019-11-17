import React from "react";
import InputGame from "../InputGame";
import LabelGame from "../LabelGame";
import "./styles.css";

const InputCheckBox = ({ id = "", value = "", content = "" }) => (
  <>
    <InputGame id={id} type="checkbox" value={value} content={content} />
    <LabelGame htmlFor={id} content={content} />
  </>
);

export default InputCheckBox;
