import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./routes";
import GlobalStyle from "./styles/GlobalStyle";

// Pages
const MerPanelPage = React.lazy(() => import("./pages/MainPage"));
const LayoutMain = React.lazy(() => import("./layout"));

function App() {
  const auth = true;
  return (
    <GlobalStyle>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<MerPanelPage />} />
          {PrivateRoute.map((route) => (
            <Route
              element={route.component}
              path={route.path}
              key={route.key}
            />
          ))}
        </Route>
        {/* {auth
          ? PrivateRoute.map((route) => (
              <Route
                element={route.component}
                path={route.path}
                key={route.key}
              />
            ))
          : PublicRoute.map((route) => (
              <Route
                element={route.component}
                path={route.path}
                key={route.key}
              />
            ))} */}
      </Routes>
    </GlobalStyle>
  );
}

export default App;
