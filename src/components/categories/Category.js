import React from "react";
import classes from "./Category.module.css";
import { NavLink } from "react-router-dom";
const Category = (props) => {
  return (
    <NavLink
      to={props.path}
      className={classes.Category}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  );
};

export default Category;
