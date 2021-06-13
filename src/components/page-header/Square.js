import classes from "./Square.module.css";
import React from "react";

const Square = (props) => {
  const rub = classes.Square + " " + props.className;
  return <div className={rub}>{props.children}</div>;
};
export default Square;
