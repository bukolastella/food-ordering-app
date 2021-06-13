import classes from "./Details.module.css";
import React, { useState, useContext } from "react";
import Delivery from "./Delivery";
import Payment from "./Payment";
import Rider from "./Rider";
import Payable from "./Payable";
import AuthContext from "../../../store/auth-context";
import { Link } from "react-router-dom";

const Details = (props) => {
  const ctx = useContext(AuthContext);
  const [state, setstate] = useState("");
  const grandTotal = props.payable - 5;
  let z = !state;
  if (ctx.cartData.length === 0) {
    z = true;
  }
  // console.log(z, ctx.cartData.length === 0, !state);
  const btnSubmit = () => {
    ctx.cartData = [];
    ctx.totalPrice = 0;
  };

  return (
    <div className={classes.Details}>
      <Delivery enable={setstate} />
      <Payment />
      <Rider />
      <Payable payable={props.payable} />
      <div className={classes.last}>
        <span>grand total</span>
        <span>{grandTotal < 1 ? `$0.00` : `$${grandTotal.toFixed(2)}`} </span>
      </div>
      <Link
        to="/salad/popular"
        onClick={btnSubmit}
        className={classes.btn}
        style={z ? { pointerEvents: "none", background: "#86858869" } : null}
      >
        confirm order and pay{" "}
      </Link>
    </div>
  );
};

export default Details;
