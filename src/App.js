import { Route, Redirect, Switch } from "react-router";
import classes from "./App.module.css";
import React from "react";
import FrontPage from "./pages/front-page/FrontPage";
import CartPage from "./pages/cart-page/CartPage";
import AuthContext from "./store/auth-context";

function App() {
  return (
    <AuthContext.Provider
      value={{
        cartData: [],
      }}
    >
      <div className={classes.App}>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/salad/popular" />
          </Route>
          <Route path={`/:mealCat/popular`} exact>
            <FrontPage />
          </Route>
          <Route path={`/:mealCat/popular/view-all`} exact>
            <FrontPage />
          </Route>
          <Route path={`/cart-page`} exact>
            <CartPage />
          </Route>
          <Route path="*">
            <p>page not found</p>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
