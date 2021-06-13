import classes from "./Orders.module.css";
import React, { useContext, useState } from "react";
import VerticalDash from "../../../components/middle-banner/VerticalDash";
import OrdersItem from "./OrdersItem";
import AuthContext from "../../../store/auth-context";
const Orders = (props) => {
  const ctx = useContext(AuthContext);
  const [, setstate] = useState(false);
  ctx.totalPrice = ctx.cartData.reduce(
    (accu, cur) => cur.price * cur.quantity + accu,
    0
  );

  const onAddToCart = (id) => {
    const increase = ctx.cartData.find((ev) => ev.id === id);
    increase.quantity++;
    props.payable(
      ctx.cartData.reduce((accu, cur) => cur.price * cur.quantity + accu, 0)
    );
    setstate((prev) => !prev);
  };
  const onDesToCart = (id) => {
    const increase = ctx.cartData.find((ev) => ev.id === id);
    if (increase.quantity === 1) {
      ctx.cartData = [...ctx.cartData.filter((ev) => ev.id !== id)];
    } else {
      increase.quantity--;
    }
    props.payable(
      ctx.cartData.reduce((accu, cur) => cur.price * cur.quantity + accu, 0)
    );
    setstate((prev) => !prev);
  };
  const removeHandler = (id) => {
    ctx.cartData = [...ctx.cartData.filter((ev) => ev.id !== id)];
    props.payable(
      ctx.cartData.reduce((accu, cur) => cur.price * cur.quantity + accu, 0)
    );
    setstate((prev) => !prev);
  };
  return (
    <div className={classes.Orders}>
      <div className={classes.Title}>
        added items
        <VerticalDash className={classes.Das} />
        order number <span>#23456</span>
      </div>
      {ctx.cartData.length === 0 && (
        <div className={classes.NoItem}>
          <hr />
          <span>No item found.</span>

          <div>Try adding to your cart</div>
        </div>
      )}
      {ctx.cartData.map((ev) => (
        <OrdersItem
          key={ev.id}
          id={ev.id}
          title={ev.title}
          price={ev.price}
          quantity={ev.quantity}
          onAddToCart={onAddToCart}
          onDesToCart={onDesToCart}
          onRemToCart={removeHandler}
        />
      ))}
    </div>
  );
};

export default Orders;
