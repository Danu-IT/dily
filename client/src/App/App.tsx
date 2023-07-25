import Router from "../components/Router";
import { useEffect } from "react";
import { authAPI } from "../store/services/authService";
import { useAppDispatch } from "../hooks/redux";
import { changeUser, toggleAuth } from "../store/slices/auth";

const App = () => {
  const [refresh, { data }] = authAPI.useLazyRefreshTokenQuery();

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
      <Router />
    </>
  );
};

export default App;
