import React from "react";
import salad from "../../../assets/RainbowSalad0519_PDS.png";
import streak from "../../../assets/streak-meat.png";
import sandwich from "../../../assets/sandwich.png";
import pizza from "../../../assets/QuattroPizza.png";
import drink from "../../../assets/cocacola.png";
import burgar from "../../../assets/burgar.png";
import classes from "./OrdersItem.module.css";

const OrdersItem = (props) => {
  const addHandler = () => {
    props.onAddToCart(props.id);
  };
  const desHandler = () => {
    props.onDesToCart(props.id);
  };
  const onRemoveHandler = () => {
    props.onRemToCart(props.id);
  };
  let img;
  if (props.title.toLowerCase().includes("salad")) {
    img = salad;
  }
  if (props.title.toLowerCase().includes("pizza")) {
    img = pizza;
  }
  if (props.title.toLowerCase().includes("burgar")) {
    img = burgar;
  }
  if (props.title.toLowerCase().includes("drink")) {
    img = drink;
  }
  if (props.title.toLowerCase().includes("streak")) {
    img = streak;
  }
  if (props.title.toLowerCase().includes("sandwich")) {
    img = sandwich;
  }
  return (
    <div className={classes.Item}>
      <div className={classes.img}>
        <img src={img} alt="salad" />
      </div>
      <div className={classes.name}>{props.title}</div>
      <div className={classes.flex}>
        <div className={classes.sign} onClick={desHandler}>
          <i className="fas fa-minus"></i>
        </div>
        {props.quantity}
        <div className={classes.sign} onClick={addHandler}>
          <i className="fas fa-plus"></i>
        </div>
      </div>
      <div>{(props.quantity * props.price).toFixed(2)}</div>
      <div className={classes.fas} onClick={onRemoveHandler}>
        <i className="fas fa-times"></i>
      </div>
      <div className={classes.price}>{props.price}</div>
      <div className={classes.size}>quantity</div>
      <div className={classes.size}>subtotal</div>
    </div>
  );
};

export default OrdersItem;
