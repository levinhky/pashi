import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { routes } from "routes/routes";
import DefaultLayout from "components/DefaultLayout/DefaultLayout";
import CheckoutPage from "pages/CheckoutPage/CheckoutPage";
import Loading from "components/Loading/Loading";

function App() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        {routes.map((route, index) => {
          const Layout =
            route.layout === "default" ? DefaultLayout : CheckoutPage;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Layout>{route.element}</Layout>}
            />
          );
        })}
      </Routes>
      <ToastContainer />
    </React.Suspense>
  );
}

export default App;
