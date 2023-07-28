import Router from "../components/Router";
import { useEffect } from "react";
import { authAPI } from "../store/services/authService";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { changeUser, toggleAuth } from "../store/slices/auth";
import Header from "../components/Header";

const App = () => {
  const [refresh, { data }] = authAPI.useLazyRefreshTokenQuery();
  const { isAuth } = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      refresh();
    }
  }, []);

  useEffect(() => {
    if (data?.user) {
      dispatch(changeUser(data.user));
      dispatch(toggleAuth(true));
    }
  }, [data]);

  return (
    <>
      {isAuth && <Header />}
      <Router />
    </>
  );
};

export default App;
