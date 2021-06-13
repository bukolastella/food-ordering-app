import React, { useContext, useState } from "react";
import PopularDish from "./PopularDish";
import classes from "./Popular.module.css";
import { Link, useParams } from "react-router-dom";
import Loader from "../../../components/ui/Loader";
import AuthContext from "../../../store/auth-context";

const Popular = (props) => {
  // eslint-disable-next-line
  const [, setstate] = useState(false);
  const params = useParams();
  const ctx = useContext(AuthContext);
  const k = props.loading;
  function importAll(r) {
    let images = {};
    // eslint-disable-next-line
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("../../../assets/total", false, /\.(png|jpe?g|svg)$/)
  );
  let a;
  if (params.mealCat === "salad") {
    a = 14;
  }
  if (params.mealCat === "drinks") {
    a = 5;
  }
  if (params.mealCat === "pizza") {
    a = 10;
  }
  if (params.mealCat === "sandwich") {
    a = 19;
  }
  if (params.mealCat === "hamburger") {
    a = 1;
  }
  if (params.mealCat === "streak") {
    a = 25;
  }
  const addCartHandler = (id) => {
    const existing = ctx.cartData.findIndex((ev) => ev.id === id);
    const existingCart = ctx.cartData[existing];
    if (existingCart) {
      //undefined.part of the cart.
      props.item(ctx.cartData.length - 1);
      ctx.cartData = [...ctx.cartData.filter((ev) => ev.id !== id)];
      setstate((prev) => !prev);
      return;
    }
    const selectedFood = props.popularState.find((ev) => ev.id === id);
    ctx.cartData.push({ ...selectedFood, quantity: 1 });
    props.item(ctx.cartData.length);
    setstate((prev) => !prev);
  };

  let reveal = props.popularState
    .slice(0, 4)
    .map((ev, index) => (
      <PopularDish
        key={ev.id}
        id={ev.id}
        onAdd={addCartHandler}
        clicked={ctx.cartData.find((cev) => cev.unique === ev.unique)}
        pics={images[`${index + a}.png`]["default"]}
        title={ev.title}
        price={ev.price}
        label={ev.label}
      />
    ));

  return k ? (
    <Loader />
  ) : (
    <div>
      <div className={classes.Flex}>
        <h1>popular {params.mealCat}</h1>
        <Link
          to={`/${params.mealCat}/popular/view-all`}
          className={classes.View}
        >
          <div> view all </div>
          <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      <div className={classes.Popular}>{reveal}</div>
    </div>
  );
};

export default Popular;
