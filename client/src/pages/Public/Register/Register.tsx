import styled from "styled-components";
import SuperBoard from "../../../components/SuperBoard";
import Form from "../../../components/UI/Form";
import RegisterForm from "../../../components/UI/Form/components/RegisterForm";
import { FormEvent, useState, useEffect } from "react";
import { validationRegistration } from "../../../utils";
import { ErrorForm, RegForm } from "../../../type/form";
import { authAPI } from "../../../store/services/authService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerForm, setRegisterForm] = useState<RegForm>({
    name: "",
    surname: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const navigate = useNavigate();

  const [registrationUser, { data: info, error, isError }] =
    authAPI.usePostRegistrationMutation<any>();

  const [errorState, setError] = useState<ErrorForm | ErrorForm[]>({
    value: "",
    error: "",
  });

  useEffect(() => {
    if (info) {
      toast.success(`${info?.message}`);
      navigate("/login");
    }
  }, [info]);

  useEffect(() => {
    if (isError && error && "status" in error) {
      toast.error(`${error?.data?.message}`);
    }
  }, [error]);

  const handlerSubmit = (e: FormEvent<HTMLFormElement>) => {
    setError({ value: "", error: "" });
    e.preventDefault();
    const result = validationRegistration(registerForm);
    if (result) {
      if (Array.isArray(result)) {
        setError(result);
      } else {
        setError({ value: result.value, error: result.error });
      }
    } else {
      const { email, name, password, surname } = registerForm;

      registrationUser({
        email: email,
        name: name,
        password: password,
        surname: surname,
      });
    }
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
  max-width: 100%;
`;

export default Register;
