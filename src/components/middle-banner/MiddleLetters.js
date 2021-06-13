import classes from "./MiddleLetters.module.css";
import React from "react";

const MiddleLetters = (props) => {
  const k = classes.Flex + " " + props.className;
  return <div className={k}>{props.children}</div>;
};
export default MiddleLetters;
