import React from "react";

import Home from "components/Home/Home";
import ProductGrid from "pages/ProductGrid/ProductGrid";
import Login from "pages/Login2/Login";
import Cart from "pages/Cart/Cart";
import Information from "components/Checkout/Information";
import InformationLogin from "components/Checkout/InformationLogin";
import Payment from "components/Checkout/Payment";
import Success from "components/Checkout/Success";
// import Payment from "components/Checkout/Payment";
// import Success from "components/Checkout/Success";
const Detail = React.lazy(() => import("pages/Detail/Detail"));

export const routes = [
  { path: "", element: <Home />, layout: "default" },
  { path: "products/:id", element: <Detail />, layout: "default" },
  {
    path: "collections/:category",
    element: <ProductGrid />,
    layout: "default",
  },
  { path: "account/login", element: <Login />, layout: "default" },
  { path: "cart", element: <Cart />, layout: "default" },
  {
    path: "checkout/information",
    element: <Information />,
    layout: "checkout",
  },
  {
    path: "checkout/informationlogin",
    element: <InformationLogin />,
    layout: "checkout",
  },
  {
    path: "checkout/payment",
    element: <Payment />,
    layout: "checkout",
  },
  {
    path: "checkout/success",
    element: <Success />,
    layout: "checkout",
  }
  // { path: "checkout/payment", element: <Payment />, layout: "checkout" },
  // { path: "checkout/success", element: <Success />, layout: "checkout" },
];
