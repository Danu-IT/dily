import Router from "../components/Router";
import { useEffect } from "react";
import { authAPI } from "../store/services/authService";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { changeUser, toggleAuth } from "../store/slices/auth";
import { differentAPI } from "../store/services/differentService";
import { getCategories } from "../store/slices/different";

const App = () => {
  const [refresh, { data }] = authAPI.useLazyRefreshTokenQuery();
  const { data: categories } = differentAPI.useGetCategoriesQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      refresh();
    }
  }, []);

  useEffect(() => {
    categories && dispatch(getCategories(categories.items));
  }, [categories]);

  useEffect(() => {
    if (data?.user) {
      dispatch(changeUser(data.user));
      dispatch(toggleAuth(true));
    }
  }, [data]);

  return (
    <>
      <Router />
    </>
  );
};

export default App;
