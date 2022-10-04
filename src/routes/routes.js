import React from "react";

import Home from "components/Home/Home";
import ProductGrid from "pages/ProductGrid/ProductGrid";
import Login from "pages/Login/Login";
import Cart from "pages/Cart/Cart";
import CheckoutPage from "pages/CheckoutPage/CheckoutPage";
import Information from "components/Checkout/Information";
import DefaultLayout from "components/DefaultLayout/DefaultLayout";
const Detail = React.lazy(() => import("pages/Detail/Detail"));

export const routes = [
  { path: '', element: <Home />, layout: 'default' },
  { path: "products/:id", element: <Detail />, layout: 'default' },
  { path: "collections/:category", element: <ProductGrid />, layout: 'default' },
  { path: "account/login", element: <Login />, layout: 'default' },
  { path: "cart", element: <Cart />, layout: 'default' },
  { path: "checkout", element: <Information />, layout: 'checkout' }
]
