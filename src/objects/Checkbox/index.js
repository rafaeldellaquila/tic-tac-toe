import React from "react";
import Input from "../Input";
import Label from "../Label";
import "./styles.css";

const CheckBox = ({ id = "", value = "", content = "" }) => (
  <>
    <Input id={id} type="checkbox" value={value} content={content} />
    <Label htmlFor={id} content={content} />
  </>
);

export default CheckBox;
