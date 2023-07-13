import styled from "styled-components";
import SuperBoard from "../../../components/SuperBoard";
import Form from "../../../components/UI/Form";

const Login = () => {
  return (
    <Container>
      <SuperBoard />
      {/* <Form>f</Form> */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  color: white;
  width: 100%;
`;

export default Login;
