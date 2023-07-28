import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../../routes";
import { useAppSelector } from "../../hooks/redux";
import Home from "../../pages/Private/Home";

const Router = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
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
            element={<Home />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
