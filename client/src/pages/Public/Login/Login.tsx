import styled from "styled-components";
import SuperBoard from "../../../components/SuperBoard";

const Login = () => {
  return (
    <Container>
      <SuperBoard />
      <Form>FROM</Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  color: white;
  width: 100%;
`;

const Form = styled.div`
  width: 65%;
`;

export default Login;
