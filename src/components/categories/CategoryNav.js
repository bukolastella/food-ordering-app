import React from "react";
import Category from "./Category";
import Salad from "../../assets/RainbowSalad0519_PDS.png";
import Pizza from "../../assets/QuattroPizza.png";
import Streak from "../../assets/streak-meat.png";
import Sandwich from "../../assets/sandwich.png";
import Drinks from "../../assets/cocacola.png";
import Burgar from "../../assets/burgar.png";
import classes from "./CategoryNav.module.css";

const CategoryNav = () => {
  return (
    <div className={classes.CategoryNav}>
      <Category path="/salad/popular">
        <img src={Salad} alt="A salad Dish" />
        <div>salad</div>
      </Category>
      <Category path="/pizza/popular">
        <img src={Pizza} alt="A Pizza Dish" />
        <div>Pizza</div>
      </Category>
      <Category path="/streak/popular">
        <img src={Streak} alt="A Streak Dish" />
        <div>Streak</div>
      </Category>
      <Category path="/sandwich/popular">
        <img src={Sandwich} alt="A Sandwich Dish" />
        <div>Sandwich</div>
      </Category>
      <Category path="/drinks/popular">
        <img src={Drinks} alt="A Drinks Dish" />
        <div>Drinks</div>
      </Category>
      <Category path="/hamburger/popular">
        <img src={Burgar} alt="A Burgar Dish" />
        <div>Burgar</div>
      </Category>
    </div>
  );
};

export default CategoryNav;
