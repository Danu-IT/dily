import { IoNavigate } from "react-icons/io5";
import { useAppSelector } from "../../../../hooks/redux";
import styled from "styled-components";

const PickTown = () => {
  const { town } = useAppSelector((state) => state.different);

  return (
    <Container>
      <IoNavigate
        size="20px"
        color="#00C65E"
      />
      {town}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export default PickTown;
