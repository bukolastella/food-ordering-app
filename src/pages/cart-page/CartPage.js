import classes from "./CartPage.module.css";
import React, { useState, useContext } from "react";
import Orders from "./orders/Orders";
import Details from "./details/Details";
import CartHeader from "./CartHeader";
import AuthContext from "../../store/auth-context";

const CartPage = () => {
  const ctx = useContext(AuthContext);

  const [state, setstate] = useState(
    ctx.cartData.reduce((accu, cur) => cur.price * cur.quantity + accu, 0)
  );
  const onPay = (pay) => {
    setstate(pay);
  };
  return (
    <div className={classes.CartPage}>
      <CartHeader item={ctx.cartData.length} />
      <div className={classes.column}>
        <Orders payable={onPay} oldState={state} />
        <Details payable={state} />
      </div>
    </div>
  );
};

export default CartPage;
