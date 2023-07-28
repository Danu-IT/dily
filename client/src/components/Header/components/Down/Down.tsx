import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";
import { mockDashboard } from "../../../../utils/navbar";

const Down = () => {
  return (
    <Container>
      <Content>
        <HiMenuAlt2
          color="#363A45"
          size={20}></HiMenuAlt2>
        <Dashboard>
          {mockDashboard.map((el) => (
            <Item>
              <el.pic></el.pic>
              {el.value}
            </Item>
          ))}
        </Dashboard>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  position: relative;
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
  height: 50px;
`;

const Dashboard = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-left: 40px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default Down;
