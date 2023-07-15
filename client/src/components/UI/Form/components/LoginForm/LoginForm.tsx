import { Dispatch, FC, SetStateAction } from "react";
import Input from "../../../Input";
import { AuthForm } from "../../../../../type/form";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface LoginFormProps {
  loginForm: AuthForm;
  setLoginForm: Dispatch<SetStateAction<AuthForm>>;
}

const LoginForm: FC<LoginFormProps> = ({ setLoginForm, loginForm }) => {
  return (
    <Container>
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
      <Quest>
        <Link to="/reset">Забыли пароль?</Link>
      </Quest>
    </Container>
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

export default LoginForm;
