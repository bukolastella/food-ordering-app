import React, { useEffect, useState } from "react";
import MiddleBanner from "../../components/middle-banner/MiddleBanner";
import CategoryNav from "../../components/categories/CategoryNav";
import Popular from "./popular/Popular";
import PageHeader from "../../components/page-header/PageHeader";
import { Route, useParams, Switch, Link } from "react-router-dom";
import All from "./all/All";

const AVAILABLE_LINKS = [
  "salad",
  "drinks",
  "pizza",
  "streak",
  "sandwich",
  "hamburger",
];
const AVAILABLE_PRICE = [34.54, 25.4, 12.5, 30.4, 23, 39.4, 21.3, 12.3, 23.99];
const FrontPage = () => {
  const [popularState, setPopularState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [R, setR] = useState(0);
  const params = useParams();
  // console.log(params);
  const acceptedLink = AVAILABLE_LINKS.find(
    (ev) => ev === params.mealCat.toLowerCase()
  );

  useEffect(() => {
    const popularDish = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.edamam.com/api/food-database/v2/parser?ingr=${params.mealCat}&app_id=19c95833&app_key=${process.env.REACT_APP_FRONT_API_KEY}`
      );
      const resData = await response.json();
      const data = resData.hints.slice(2, 10);
      const formatData = data.map((ev, index) => ({
        id: `${ev.food.foodId}${index}`,
        unique: `${ev.food.foodId}`,
        title: ev.food.label,
        label: `${ev.food.categoryLabel ? ev.food.categoryLabel : ""},
         ${ev.food.category ? ev.food.category : ""},
          ${ev.food.brand ? ev.food.brand : ""}`,
        price: AVAILABLE_PRICE[index],
      }));
      setPopularState(formatData);
      setLoading(false);
    };
    try {
      popularDish();
    } catch (error) {
      // console.log(error);
    }
  }, [params.mealCat]);

  if (!acceptedLink) {
    return (
      <p>
        Unrealistic query detected, Don't worry just go back{" "}
        <Link to="/salad/popular">Home </Link>
      </p>
    );
  }
  const pass = (item) => {
    setR(item);
  };

  return (
    <div>
      <PageHeader zaItem={R} />
      <MiddleBanner />
      <CategoryNav />
      <Switch>
        <Route path="/:mealCat/popular/view-all">
          <All sortState={popularState} par={params.mealCat} item={pass} />
        </Route>
        <Route path={`/:mealCat/popular`} exact>
          <Popular loading={loading} popularState={popularState} item={pass} />
        </Route>
      </Switch>
    </div>
  );
};

export default FrontPage;
