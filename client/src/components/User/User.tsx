import styled from "styled-components";
import { useAppSelector } from "../../hooks/redux";
import { firstLetterUppercase } from "../../utils/index";
import { BiSolidUser } from "react-icons/bi";

const User = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <Container>
      <BiSolidUser color="#00C65E" />
      {user ? (
        <UserCurrent>
          <div>{firstLetterUppercase(user.name)}</div>
          <div>{firstLetterUppercase(user.surname)}</div>
        </UserCurrent>
      ) : (
        <>Вход/ регистрация</>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  cursor: pointer;
`;
const UserCurrent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export default User;
