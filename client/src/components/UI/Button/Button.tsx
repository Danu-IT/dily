import { FC, ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  type: "submit" | "reset" | "button";
}

const Button: FC<ButtonProps> = ({ children, type }) => {
  return <Container type={type}>{children}</Container>;
};

const Container = styled.button`
  background: #00c65e;
  width: 100%;
  outline: none;
  border: none;
  color: white;
  height: 41px;
  border-radius: 10px;
`;

export default Button;
