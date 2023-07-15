import { FC, ReactNode, FormEvent } from "react";
import styled from "styled-components";

interface FormProps {
  children: ReactNode;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <Container>
      <FormContainer onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}>
        {children}
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  color: #262626;
  display: flex;
  justify-content: center;
  flex: 1;
  padding-top: 100px;
  position: relative;
`;
const FormContainer = styled.form``;

export default Form;
