import styled from "styled-components";
import Logo from "../Logo";
import { RiPagesLine, RiAuctionLine } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { LuHelpingHand } from "react-icons/lu";

const SuperBoard = () => {
  return (
    <Container>
      <ContainerContent>
        <Top>
          <LogoBoard />
          <Title>Супер доска объявлений</Title>
        </Top>
        <Bottom>
          <Block>
            <RiPagesLine size={30} />
            <Info>Размещайте объявления бесплатно</Info>
          </Block>
          <Block>
            <RiAuctionLine size={30} />
            <Info>Продавайте на аукционе</Info>
          </Block>
          <Block>
            <GiAutoRepair size={30} />
            <Info>Ремонтируйте свою технику </Info>
          </Block>
          <Block>
            <BsShop size={30} />
            <Info>Откройте свой магазин</Info>
          </Block>
          <Block>
            <LuHelpingHand size={30} />
            <Info>Помогайте нуждающимся </Info>
          </Block>
        </Bottom>
      </ContainerContent>
    </Container>
  );
};

const Container = styled.div`
  background: #00c65e;
  width: 45%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
`;
const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 107px;
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 45px;
`;
const Info = styled.div`
  font-size: 18px;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Title = styled.h3`
  letter-spacing: 5px;
  font-size: 28px;
`;

const LogoBoard = styled(Logo)`
  width: 148px;
  height: 62px;
`;

export default SuperBoard;
