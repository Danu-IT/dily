import { Dispatch, FC, SetStateAction } from "react";
import Input from "../../../Input";
import styled from "styled-components";
import Button from "../../../Button";
import Named from "../../../../Named";
import { ErrorForm, RegForm } from "../../../../../type/form";
import { Link } from "react-router-dom";

interface RegisterFormProps {
  registerForm: RegForm;
  setRegisterForm: Dispatch<SetStateAction<RegForm>>;
  error: ErrorForm | ErrorForm[];
  setError?: Dispatch<SetStateAction<ErrorForm | ErrorForm[]>>;
}

const RegisterForm: FC<RegisterFormProps> = ({
  registerForm,
  setRegisterForm,
  error,
  setError,
}) => {
  const constructorError = (value: string) => {
    if (Array.isArray(error)) {
      const index = error.findIndex((el) => el.value === value);
      return error[index];
    } else {
      return error;
    }
  };

  return (
    <>
      <ContainerInput>
        <Top>
          <Initials>
            {registerForm.name[0]?.toUpperCase()}
            {registerForm.surname[0]?.toUpperCase()}
          </Initials>
          <Name
            name={registerForm.name}
            surname={registerForm.surname}
            max={22}
          />
        </Top>
        <Inputs>
          <Input
            value={registerForm.name}
            setValue={(value) =>
              setRegisterForm({ ...registerForm, name: value })
            }
            placeholder="Имя"
            error={constructorError("name")}
            name="Ваше имя"
            type="name"
            setError={setError}></Input>
          <Input
            value={registerForm.surname}
            setValue={(value) =>
              setRegisterForm({ ...registerForm, surname: value })
            }
            placeholder="Фамилия"
            error={constructorError("surname")}
            name="Ваша фамилия"
            type="surname"
            setError={setError}></Input>
          <Input
            value={registerForm.email}
            setValue={(value) =>
              setRegisterForm({ ...registerForm, email: value })
            }
            placeholder="name@inbox.ru"
            name="E-mail"
            type="email"
            error={constructorError("email")}
            setError={setError}></Input>
          <Input
            value={registerForm.password}
            setValue={(value) =>
              setRegisterForm({ ...registerForm, password: value })
            }
            placeholder="Пароль"
            name="Пароль"
            type="password"
            error={constructorError("password")}
            setError={setError}></Input>
          <Input
            value={registerForm.cpassword}
            setValue={(value) =>
              setRegisterForm({ ...registerForm, cpassword: value })
            }
            placeholder="Повторить пароль"
            type="password"
            name="Повторить пароль"
            error={constructorError("password")}
            setError={setError}></Input>
        </Inputs>
      </ContainerInput>
      <Button type="submit">Зарегистрироваться</Button>
      <Quest>
        У вас уже есть аккаунт? <Link to="/login">Есть</Link>
      </Quest>
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
const Quest = styled.div`
  text-align: center;
`;

export default RegisterForm;
