import React from "react";

import Home from "components/Home/Home";
import ProductGrid from "pages/ProductGrid/ProductGrid";
import Login from "pages/Login/Login";
import Cart from "pages/Cart/Cart";
const Detail = React.lazy(() => import("pages/Detail/Detail"));

export const routes = [
  { path: '', element: <Home /> },
  { path: "products/:id", element: <Detail /> },
  { path: "collections/:category", element: <ProductGrid /> },
  { path: "account/login", element: <Login /> },
  { path: "cart", element: <Cart /> },
]
