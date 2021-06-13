import React from "react";
import IconDetails from "./IconDetails";
import classes from "./Payment.module.css";

const Payment = () => {
  return (
    <IconDetails icon={<i className="fas fa-pen-fancy"></i>}>
      <form className={classes.grid}>
        <div className={classes.choose}>payment options</div>
        <input
          type="radio"
          name="card"
          value="credit card"
          defaultChecked="checked"
          id="credit card"
        />
        <label htmlFor="credit card" className={classes.i}>
          <i className="fab fa-cc-mastercard fa-2x"></i>
        </label>
        <label htmlFor="credit card" className={classes.left}>
          credit card
        </label>
        <input type="radio" name="card" value="paypal" id="paypal" />
        <label htmlFor="paypal" className={classes.i}>
          <i className="fab fa-cc-paypal fa-2x"></i>
        </label>
        <label htmlFor="paypal" className={classes.left}>
          paypal
        </label>
      </form>
    </IconDetails>
  );
};

export default Payment;
