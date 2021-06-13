import classes from "./PageHeader.module.css";
import React from "react";
import Search from "./Search";
import Square from "./Square";
import { Link } from "react-router-dom";

const PageHeader = (props) => {
  return (
    <div className={classes.PageHeader}>
      <Square className={classes.home}>
        <Link to="/salad/popular">
          <i className="fas fa-home fa-2x"></i>
        </Link>
      </Square>
      <Search />
      <Square className={classes.user}>
        <i className="far fa-user"></i>
      </Square>
      <div className={classes["Total-cart"]}>
        <span className={classes.Item}>{props.zaItem}</span>
        <Square className={classes.cart}>
          <Link to="/cart-page">
            <i className="fas fa-shopping-cart fa-2x"></i>
          </Link>
        </Square>
      </div>
    </div>
  );
};

export default PageHeader;
