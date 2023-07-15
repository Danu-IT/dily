import { Suspense, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import Login from "../../pages/Public/Login";

const Router = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <BrowserRouter>
      <Suspense fallback={<>Загрузка....</>}>
        <Routes>
          {isAuth
            ? privateRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))
            : publicRoutes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
          <Route
            path="*"
            element={<Login />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
