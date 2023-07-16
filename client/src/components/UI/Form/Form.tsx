import { FC, ReactNode, FormEvent } from "react";
import styled from "styled-components";

interface FormProps {
  children: ReactNode;
  padding?: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({ children, onSubmit, padding }) => {
  return (
    <Container padding={padding}>
      <FormContainer onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmit(e)}>
        {children}
      </FormContainer>
    </Container>
  );
};

interface FormStyleProps {
  padding: boolean | undefined;
}

const Container = styled.div<FormStyleProps>`
  color: #262626;
  display: flex;
  justify-content: center;
  align-items: ${({ padding }) => (padding ? "" : "center")};
  flex: 1;
  padding-top: ${({ padding }) => (padding ? "100px" : "0")};
  position: relative;
`;
const FormContainer = styled.form``;

export default Form;
