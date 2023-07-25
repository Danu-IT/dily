import styled from "styled-components";
import SuperBoard from "../../../components/SuperBoard";
import Form from "../../../components/UI/Form";
import { FormEvent, useState, useEffect } from "react";
import { AuthForm } from "../../../type/form";
import LoginForm from "../../../components/UI/Form/components/LoginForm";
import { authAPI } from "../../../store/services/authService";
import { useAppDispatch } from "../../../hooks/redux";
import { changeUser, toggleAuth } from "../../../store/slices/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, { data: userInfo }] =
    authAPI.usePostAuthorizationMutation();

  const [loginForm, setLoginForm] = useState<AuthForm>({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(loginForm);
  };

  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("token", userInfo.accessToken);
      dispatch(changeUser(userInfo.user));
      dispatch(toggleAuth(true));
      navigate("/");
    }
  }, [userInfo?.user.email]);

  return (
    <Container>
      <SuperBoard />
      <Form
        padding={false}
        onSubmit={handlerSubmit}>
        <LoginForm
          loginForm={loginForm}
          setLoginForm={setLoginForm}
        />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  color: white;
  width: 100%;
`;

export default Login;
