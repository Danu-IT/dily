import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  return (
    <Container>
      <Icon />
      <Input placeholder="Я хочу купить"></Input>
      <Button>Найти</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  margin-left: 50px;
  position: relative;
`;
const Input = styled.input`
  padding: 13px 0px 13px 45px;
  border: none;
  outline: none;
  border-radius: 15px 0px 0 15px;
  width: 250px;
  font-size: 12px;
`;

const Button = styled.div`
  background-color: #dadcdc;
  color: #363a45;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  padding: 12px 24px;
  border-radius: 0px 15px 15px 0;
`;

const Icon = styled(AiOutlineSearch)`
  position: absolute;
  left: 10px;
`;

export default Search;
