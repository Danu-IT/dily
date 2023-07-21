import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import styled from "styled-components";
import { CgAsterisk } from "react-icons/cg";
import { IoEyeSharp } from "react-icons/io5";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { ErrorForm } from "../../../type/form";

interface InputProps {
  placeholder?: string;
  name?: string;
  value: string;
  setValue: (value: string) => void;
  type?: string;
  error?: ErrorForm;
  setError?: Dispatch<SetStateAction<ErrorForm | ErrorForm[]>>;
}

const Input: FC<InputProps> = ({
  placeholder,
  name,
  value,
  setValue,
  type,
  error,
  setError,
}) => {
  const [visible, setVisible] = useState(true);

  const handleInput = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);

    if (error?.value === type) {
      setError && setError({ value: "", error: "" });
    }
  };

  return (
    <Container>
      <Top>
        <Name>{name}</Name>
        <CgAsterisk color="#00C65E" />
      </Top>
      <InputTag
        maxLength={type === "email" ? 50 : 15}
        type={visible ? type : "text"}
        value={value}
        onChange={(e: FormEvent<HTMLInputElement>) => handleInput(e)}
        placeholder={placeholder}
      />
      {error?.error && error?.value === type && <Error>* {error.error}</Error>}
      {type === "password" && (
        <Eye onClick={() => setVisible((prev) => !prev)}>
          {visible ? <BsFillEyeSlashFill /> : <IoEyeSharp />}
        </Eye>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 5px;
`;
const Top = styled.div`
  display: flex;
`;
const Eye = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;
  top: 55%;
`;
const Name = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const InputTag = styled.input`
  border-radius: 10px;
  border: 1px solid #dadcdc;
  background: #fff;
  padding: 10px 15px;
  display: flex;
  width: 304px;
`;
const Error = styled.div`
  position: absolute;
  bottom: -17px;
  left: 10px;
  font-size: 13px;
  color: red;
`;

export default Input;
