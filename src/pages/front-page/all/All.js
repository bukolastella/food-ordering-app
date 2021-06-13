import React, { useState, useContext } from "react";
import { Redirect, useHistory, useParams } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import PopularDish from "../popular/PopularDish";
import classes from "./All.module.css";

const All = (props) => {
  const [changeState, setChangeState] = useState(false);
  const [state, setState] = useState(props.sortState);
  // eslint-disable-next-line
  const [altState, setAltstate] = useState(false);

  const history = useHistory();
  const params = useParams();

  const ctx = useContext(AuthContext);
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
  // eslint-disable-next-line
  let a, b;
  if (params.mealCat === "salad") {
    a = 14;
    b = 10;
  }
  if (params.mealCat === "drinks") {
    a = 5;
    b = 1;
  }
  if (params.mealCat === "pizza") {
    a = 10;
    b = 6;
  }
  if (params.mealCat === "sandwich") {
    a = 19;
    b = 15;
  }
  if (params.mealCat === "hamburger") {
    a = 1;
    b = -3;
  }
  if (params.mealCat === "streak") {
    a = 25;
    b = 21;
  }
  const addCartHandler = (id) => {
    const selectedFood = props.popularState.find((ev) => ev.id === id);
    ctx.cartData.push({ ...selectedFood, quantity: 1 });
    setAltstate((prev) => !prev);
  };
  const pricesArray = [...state];

  if (!changeState) {
    pricesArray.sort((a, b) => a.price - b.price);
  }

  if (state.length === 0) {
    return <Redirect to={`/${props.par}/popular`} />;
  }
  const sortHandler = (event) => {
    if (event.target.value === "High to Low") {
      setChangeState(true);
      history.push(`/${props.par}/popular/view-all?sort=desc`);
      pricesArray.sort((a, b) => b.price - a.price);
      setState(pricesArray);
    } else {
      setChangeState(false);
      history.push(`/${props.par}/popular/view-all?sort=asc`);
      pricesArray.sort((a, b) => a.price - b.price);
      setState(pricesArray);
    }
  };
  let z;
  let reveal = pricesArray.map((ev, index) => {
    if (index > 3) {
      z = index + b;
      console.log(z);
    } else {
      z = index + a;
      console.log(z);
    }
    return (
      <PopularDish
        key={ev.id}
        id={ev.id}
        onAdd={addCartHandler}
        clicked={ctx.cartData.find((cev) => cev.unique === ev.unique)}
        pics={images[`${z}.png`]["default"]}
        title={ev.title}
        price={ev.price}
        label={ev.label}
      />
    );
  });
  return (
    <div>
      <div className={classes.Flex}>
        <h1>{props.par}</h1>
        <div className={classes.View}>
          <span>sort by Price: </span>
          <form>
            <select
              name="prices"
              className={classes.select}
              onChange={sortHandler}
            >
              <option value="Low to High" className={classes.option}>
                Low to High
              </option>
              <option value="High to Low" className={classes.option}>
                High to Low
              </option>
            </select>
          </form>
        </div>
      </div>
      <div className={classes.Popular}>{reveal}</div>
    </div>
  );
};

export default All;
