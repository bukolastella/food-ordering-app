import classes from "./IconDetails.module.css";
import React from "react";

const IconDetails = (props) => {
  return (
    <div className={classes.IconDetails}>
      <div className={props.icon ? classes.icon : " "}>
        {props ? props.icon : ""}
      </div>
      {props.children}
    </div>
  );
};

export default IconDetails;
