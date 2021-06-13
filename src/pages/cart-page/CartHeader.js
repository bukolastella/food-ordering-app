import React from "react";
import Square from "../../components/page-header/Square";
import classes from "./CartHeader.module.css";
import { Link } from "react-router-dom";

const CartHeader = (props) => {
  return (
    <div className={classes.CartHeader}>
      <Square className={classes.home}>
        <Link to="/salad/popular">
          <i className="fas fa-home fa-2x"></i>
        </Link>
      </Square>
      <Square className={classes.user}>
        <i className="far fa-user"></i>
      </Square>
      <div className={classes["Total-cart"]}>
        <span className={classes.Item}>{props.item}</span>
        <Square className={classes.cart}>
          <Link to="/cart-page">
            <i className="fas fa-shopping-cart fa-2x"></i>
          </Link>
        </Square>
      </div>
    </div>
  );
};

export default CartHeader;
