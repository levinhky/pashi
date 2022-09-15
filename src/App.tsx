import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { routes } from "routes/routes";
import DefaultLayout from "components/DefaultLayout/DefaultLayout";

function App() {
  const Layout = DefaultLayout;
  return (
    <React.Suspense
      fallback={<h1 style={{ textAlign: "center" }}>Loading...</h1>}
    >
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<Layout>{route.element}</Layout>}
          />
        ))}
      </Routes>
      <ToastContainer />
    </React.Suspense>
  );
}

export default App;
