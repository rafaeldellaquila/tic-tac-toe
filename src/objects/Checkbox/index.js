import React from "react";
import Input from "../Input";
import Label from "../Label";

const Checkbox = ({ id = "", value = "", content = "" }) => (
  <>
    <Input id={id} value={value} content={content} type="checkbox" />
    <Label htmlFor={id} content={content} />
  </>
);

export default Checkbox;
