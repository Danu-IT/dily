import { Dispatch, SetStateAction, FC } from "react";
import styled from "styled-components";
import Input from "../../../Input";
import Button from "../../../Button";
import { Link } from "react-router-dom";

interface ResetFormProps {
  resetForm: string;
  setResetForm: Dispatch<SetStateAction<string>>;
}

const ResetForm: FC<ResetFormProps> = ({ resetForm, setResetForm }) => {
  return (
    <>
      <Top>
        <Title>Забыли пароль?</Title>
        <Subtitle>
          На ваш e-mail будут высланы инструкции по восстановлению паролю
        </Subtitle>
      </Top>
      <Bottom>
        <Input
          value={resetForm}
          setValue={(value) => setResetForm(value)}
          placeholder="name@inbox.ru"
          name="E-mail"
          type="email"></Input>
        <Button type="submit">Отправить</Button>
      </Bottom>
      <Quest>
        Уже есть аккаунт?<Link to="/login">Есть</Link>
      </Quest>
    </>
  );
};

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Quest = styled.div`
  text-align: center;
`;

const Bottom = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Title = styled.div`
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

const Subtitle = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: 269px;
  text-align: center;
`;

export default ResetForm;
