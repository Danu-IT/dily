import styled from "styled-components";
import { mockDashboard } from "../../../../utils/navbar";
import Search from "../Navbar/components/Search";
import { IoAddCircleSharp } from "react-icons/io5";
import Menu from "../Menu";

const Down = () => {
  return (
    <Container>
      <Content>
        <Menu />
        <Dashboard>
          {mockDashboard.map((el) => (
            <Item>
              <el.pic />
              {el.value}
            </Item>
          ))}
        </Dashboard>
        <Search />
        <ButtonIcon>
          Подать объявление
          <IoAddCircleSharp />
        </ButtonIcon>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  position: absolute;
  z-index: 4;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: #f7f7f7;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
`;

const Dashboard = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: 40px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ButtonIcon = styled.div`
  margin-left: 60px;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 15px;
  border-radius: 18px;
  background: #00c65e;
  padding: 6px 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export default Down;
