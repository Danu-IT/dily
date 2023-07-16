import { FormEvent, useState } from "react";
import styled from "styled-components";
import SuperBoard from "../../../components/SuperBoard";
import Form from "../../../components/UI/Form";
import ResetForm from "../../../components/UI/Form/components/ResetForm";

const Reset = () => {
  const [resetForm, setResetForm] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResetForm("");
    console.log(resetForm);
  };

  return (
    <Container>
      <SuperBoard />
      <Form
        padding={false}
        onSubmit={handleSubmit}>
        <ResetForm
          resetForm={resetForm}
          setResetForm={setResetForm}
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

export default Reset;
