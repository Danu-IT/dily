import { RiPagesLine, RiAuctionLine } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { LuHelpingHand } from "react-icons/lu";
import {
  Block,
  Bottom,
  Container,
  ContainerContent,
  Info,
  LogoBoard,
  Title,
  Top,
} from "./style";

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

export default SuperBoard;
