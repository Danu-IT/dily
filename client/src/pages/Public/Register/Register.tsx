import styled from "styled-components";
import SuperBoard from "../../../components/SuperBoard";
import Form from "../../../components/UI/Form";
import RegisterForm from "../../../components/UI/Form/components/RegisterForm";

const Register = () => {
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <Container>
      <SuperBoard />
      <Form onSubmit={handlerSubmit}>
        <RegisterForm />
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
