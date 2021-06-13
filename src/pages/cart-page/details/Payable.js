import React from "react";
import IconDetails from "./IconDetails";
import classes from "./Payable.module.css";

const Payable = (props) => {
  const subTotal = props.payable;
  return (
    <IconDetails>
      <div className={classes.grid}>
        <div className={classes.choose}>Payable amount</div>
        <span className={classes.circle}>
          <i className="far fa-circle"></i>
        </span>
        <span className={classes.sub}>sub total</span>
        <span className={classes.dol}>{`$${subTotal.toFixed(2)}`}</span>
        <span className={classes.circle}>
          <i className="far fa-circle"></i>
        </span>
        <span className={classes.sub}>Delivery charge</span>
        <span className={classes.dol}>$5.00</span>
        <span className={classes.circle}>
          <i className="far fa-circle"></i>
        </span>
        <span className={classes.sub}>Discount</span>
        <span className={classes.dol}>-$10.00</span>
      </div>
    </IconDetails>
  );
};

export default Payable;
