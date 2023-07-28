import styled from "styled-components";
import Logo from "../../../Logo";
import Navbar from "../Navbar";
import PickTown from "../PickTown";
import User from "../../../User";

const Up = () => {
  return (
    <Container>
      <TopGradient />
      <Content>
        <Left>
          <Logo isColor={true} />
          <Navbar />
        </Left>
        <Right>
          <PickTown />
          <User />
        </Right>
      </Content>
      <Border />
    </Container>
  );
};

const Container = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 63px;
`;

const Right = styled.div`
  display: flex;
  gap: 25px;
`;
const Left = styled.div`
  display: flex;
`;

const TopGradient = styled.div`
  width: 100vw;
  position: relative;
  z-index: 4;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 6px;
  background: linear-gradient(90deg, #00c65e 25.16%, rgba(0, 198, 94, 0) 100%);
`;

const Border = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 1px;
  background: #dadcdc;
`;

export default Up;
