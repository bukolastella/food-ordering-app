import classes from "./VerticalDash.module.css";
import React from "react";

const VerticalDash = (props) => {
  const k = classes.Dash + " " + props.className;
  return <div className={k}></div>;
};

export default VerticalDash;
