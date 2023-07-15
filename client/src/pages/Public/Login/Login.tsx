import styled from "styled-components";
import SuperBoard from "../../../components/SuperBoard";
import Form from "../../../components/UI/Form";
import { FormEvent, useState } from "react";
import { AuthForm } from "../../../type/form";
import LoginForm from "../../../components/UI/Form/components/LoginForm";

const Login = () => {
  const [loginForm, setLoginForm] = useState<AuthForm>({
    email: "",
    password: "",
  });
  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginForm);
  };

  return (
    <Container>
      <SuperBoard />
      <Form onSubmit={handlerSubmit}>
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
