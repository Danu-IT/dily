import { useState } from "react";
import Input from "../../../Input";
import styled from "styled-components";
import Button from "../../../Button";
import Named from "../../../../Named";

const RegisterForm = () => {
  const [loginForm, setLoginForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  return (
    <>
      <ContainerInput>
        <Top>
          <Initials>
            {loginForm.name[0]?.toUpperCase()}
            {loginForm.surname[0]?.toUpperCase()}
          </Initials>
          <Name
            name={loginForm.name}
            surname={loginForm.surname}
            max={22}
          />
        </Top>
        <Inputs>
          <Input
            value={loginForm.name}
            setValue={(value) => setLoginForm({ ...loginForm, name: value })}
            placeholder="Имя"
            name="Ваше имя"></Input>
          <Input
            value={loginForm.surname}
            setValue={(value) => setLoginForm({ ...loginForm, surname: value })}
            placeholder="Фамилия"
            name="Ваша фамилия"></Input>
          <Input
            value={loginForm.email}
            setValue={(value) => setLoginForm({ ...loginForm, email: value })}
            placeholder="name@inbox.ru"
            name="E-mail"
            type="email"></Input>
          <Input
            value={loginForm.password}
            setValue={(value) =>
              setLoginForm({ ...loginForm, password: value })
            }
            placeholder="Пароль"
            name="Пароль"
            type="password"></Input>
          <Input
            value={loginForm.cpassword}
            setValue={(value) =>
              setLoginForm({ ...loginForm, cpassword: value })
            }
            placeholder="Повторить пароль"
            type="password"
            name="Повторить пароль"></Input>
        </Inputs>
      </ContainerInput>
      <Button type="submit">Войти</Button>
    </>
  );
};

const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled(Named)`
  color: #262626;
  padding: 20px 0;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
  position: relative;
  height: 60px;
`;

const Initials = styled.div`
  width: 80.879px;
  height: 80.217px;
  background: #dadcdc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 42px */
  letter-spacing: 0.5px;
  color: #fff;
`;

const Inputs = styled.div`
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export default RegisterForm;
