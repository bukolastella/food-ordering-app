import React from "react";
const AuthContext = React.createContext({
  cartData: [],
  totalPrice: 0,
});
export default AuthContext;
