import classes from "./PageHeader.module.css";
import React, { useContext } from "react";
import Search from "./Search";
import Square from "./Square";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const PageHeader = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div className={classes.PageHeader}>
      <Square className={classes.home}>
        <Link to="/salad/popular" className={classes.Linkhome}>
          <i className="fas fa-home fa-2x"></i>
        </Link>
      </Square>
      <Search />
      <Square className={classes.user}>
        <i className="far fa-user"></i>
      </Square>
      <div className={classes["Total-cart"]}>
        <span className={classes.Item}>{ctx.cartData.length}</span>
        <Square className={classes.cart}>
          <Link to="/cart-page" className={classes.Linkcart}>
            <i className="fas fa-shopping-cart fa-2x"></i>
          </Link>
        </Square>
      </div>
    </div>
  );
};

export default PageHeader;
