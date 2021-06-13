import React from "react";
import { useParams } from "react-router";
import classes from "./PopularDish.module.css";

const PopularDish = (props) => {
  const params = useParams();

  const addCartHandler = () => {
    props.onAdd(props.id);
  };
  const k = props.clicked ? classes.PopularDish2 : classes.PopularDish;
  return (
    <div className={classes.Casing}>
      <div onClick={addCartHandler} className={k}>
        <img
          src={props.pics}
          style={
            params.mealCat === "drinks"
              ? {
                  objectFit: "cover",
                }
              : classes
          }
          alt="A salad dish"
        />
        <h1>{props.title}</h1>
        <p className={classes.Para}>{props.label}</p>
        <div className={classes.CartNo}>
          <span>{`$${props.price}`}</span>
          <span className={classes.Cart}>
            {" "}
            {props.clicked ? "added to cart" : "add to cart"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopularDish;
