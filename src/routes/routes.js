import React from "react";

import Home from "components/Home/Home";
import ProductGrid from "pages/ProductGrid/ProductGrid";
import Login from "pages/Login2/Login";
import Cart from "pages/Cart/Cart";
import Information from "components/Checkout/Information";
import Success from "components/Checkout/Success";
import AccountGeneral from "../pages/Account/AccountGeneral";
import ProductSearch from "../pages/ProductSearch/ProductSearch";
import AboutUs from "../components/FooterInfo/AboutUs";
import StoreInfo from "../components/FooterInfo/StoreInfo";
import Policy from "../components/FooterInfo/Policy";
import HowToShop from "../components/FooterInfo/HowToShop";
import HowToPayment from "../components/FooterInfo/HowToPayment";
import Contact from "../components/FooterInfo/Contact";
import Recruit from "../components/FooterInfo/Recruit";

const Detail = React.lazy(() => import("pages/Detail/Detail"));

export const routes = [
    {path: "", element: <Home/>, layout: "default"},
    // {path: "products/:id", element: <Detail/>, layout: "default"},
    {path: "products/detail", element: <Detail/>, layout: "default"},
    {path: "products/search/:value", element: <ProductSearch/>, layout: "default"},
    {path: "collections/:category", element: <ProductGrid/>, layout: "default"},
    {path: "account/login", element: <Login/>, layout: "default"},
    {path: "account", element: <AccountGeneral/>, layout: "default"},
    {path: "cart", element: <Cart/>, layout: "default"},
    {path: "checkout/information", element: <Information/>, layout: "checkout"},
    {path: "checkout/success", element: <Success/>, layout: "default"},
    {path: "gioi-thieu", element: <AboutUs/>, layout: "default"},
    {path: "he-thong-cua-hang", element: <StoreInfo />, layout: "default"},
    {path: "dieu-khoan-dich-vu", element: <Policy />, layout: "default"},
    {path: "huong-dan-mua-hang", element: <HowToShop />, layout: "default"},
    {path: "huong-dan-thanh-toan", element: <HowToPayment />, layout: "default"},
    {path: "lien-he", element: <Contact />, layout: "default"},
    {path: "tuyen-dung", element: <Recruit />, layout: "default"},
];
