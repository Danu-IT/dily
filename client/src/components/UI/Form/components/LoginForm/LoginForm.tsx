import { Dispatch, FC, SetStateAction } from "react";
import Input from "../../../Input";
import { AuthForm } from "../../../../../type/form";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../../../Button";

interface LoginFormProps {
  loginForm: AuthForm;
  setLoginForm: Dispatch<SetStateAction<AuthForm>>;
}

const LoginForm: FC<LoginFormProps> = ({ setLoginForm, loginForm }) => {
  return (
    <>
      <Container>
        <Title>Вход и регистрация</Title>
        <Input
          value={loginForm.email}
          setValue={(value) => setLoginForm({ ...loginForm, email: value })}
          placeholder="name@inbox.ru"
          name="E-mail"
          type="email"></Input>
        <Input
          value={loginForm.password}
          setValue={(value) => setLoginForm({ ...loginForm, password: value })}
          placeholder="Пароль"
          name="Пароль"
          type="password"></Input>
        <Button type="submit">Войти</Button>
      </Container>
      <Quest>
        <Link to="/reset">Забыли пароль?</Link>
        Уже есть аккаунт?<Link to="/register">Нет</Link>
      </Quest>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Quest = styled.div`
  text-align: center;
`;

const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export default LoginForm;
