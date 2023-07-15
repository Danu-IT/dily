import styled from "styled-components";
import SuperBoard from "../../../components/SuperBoard";
import Form from "../../../components/UI/Form";
import RegisterForm from "../../../components/UI/Form/components/RegisterForm";
import { FormEvent, useState } from "react";
import { validationRegistration } from "../../../utils";
import { RegForm } from "../../../type/form";

export interface ErrorForm {
  value: string;
  error: string;
}

const Register = () => {
  const [registerForm, setRegisterForm] = useState<RegForm>({
    name: "",
    surname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errorState, setError] = useState<ErrorForm>({ value: "", error: "" });

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validationRegistration(registerForm);
    if (result) setError({ value: result.value, error: result.error });
    console.log(result);
  };
  return (
    <Container>
      <SuperBoard />
      <Form onSubmit={handlerSubmit}>
        <RegisterForm
          error={errorState}
          registerForm={registerForm}
          setRegisterForm={setRegisterForm}
          setError={setError}
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

export default Register;
