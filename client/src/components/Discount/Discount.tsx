import styled from "styled-components";
import road from "../../assets/discount/road.svg";
import mask from "../../assets/discount/Mask.svg";
import sale30 from "../../assets/discount/Sale30.svg";
import sale40 from "../../assets/discount/Sale40.svg";
import sale60 from "../../assets/discount/Sale60.svg";
import computer from "../../assets/compilation/computer.svg";
import chear from "../../assets/compilation/chear.svg";
import lamp from "../../assets/compilation/lamp.svg";
import playOpacity from "../../assets/compilation/playOpacity.svg";
import playGreen from "../../assets/compilation/PlayGreen.svg";
import playOrange from "../../assets/compilation/PlayOrange.svg";
import { IoIosArrowForward } from "react-icons/io";

const Discount = () => {
  return (
    <Container>
      <Left>
        <Title>Скидки от Dily.ru </Title>
        <Subtitle>горячие цены сезона </Subtitle>
        <Road src={road} />
        <Mask src={mask} />
        <Sale30 src={sale30} />
        <Sale40 src={sale40} />
        <Sale60 src={sale60} />
        <ShadowBgLeft />
      </Left>
      <Right>
        <TitleR>Подборка товаров для идеального рабочего места</TitleR>
        <Arrow
          size={30}
          color="#00C65E"
        />
        <ShadowBgRight />
        <Computer src={computer} />
        <Chear src={chear} />
        <Lamp src={lamp} />
        <PlayOpacity src={playOpacity} />
        <PlayGrean src={playGreen} />
        <PlayOrange src={playOrange} />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 54px;
`;

const Right = styled.div`
  width: 550px;
  height: 170px;
  border-radius: 15px;
  position: relative;
  background: white;
  overflow: hidden;
  padding: 30px;
  color: #363a45;
`;

const ShadowBgRight = styled.div`
  background: linear-gradient(
    134deg,
    #ffb762 0%,
    rgba(255, 255, 255, 0.22) 100%
  );
  transform: rotate(-72.99deg);
  opacity: 0.30000001192092896;
  filter: blur(19px);
  width: 219.29px;
  height: 208.039px;
  position: absolute;
  left: 0;
  top: 0;
`;

const Left = styled.div`
  width: 550px;
  background: #00c65e;
  width: 558px;
  height: 170px;
  border-radius: 15px;
  padding: 30px;
  position: relative;
  overflow: hidden;
  color: white;
`;

const Title = styled.div`
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
  position: relative;
  z-index: 1;
`;

const TitleR = styled(Title)`
  font-size: 22px;
  font-style: normal;
  font-weight: bold;
`;

const Subtitle = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  color: white;
  padding-left: 50px;
  position: relative;
  z-index: 1;
`;

const Road = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 30px;
`;
const Sale30 = styled.img`
  position: absolute;
  z-index: 1;
  right: 300px;
  bottom: 0;
`;
const Sale40 = styled.img`
  position: absolute;
  z-index: 1;
  top: 20px;
  right: 180px;
`;
const Sale60 = styled.img`
  position: absolute;
  z-index: 1;
  top: 40px;
  right: 10px;
`;
const Mask = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 30px;
`;
const Arrow = styled(IoIosArrowForward)`
  border-radius: 50%;
  border: 1px solid #00c65e;
  padding: 2px;
  margin-top: 15px;
`;

const ShadowBgLeft = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 30px;
  width: 302.168px;
  height: 286.664px;
  z-index: 0;
  border-radius: 302.168px;
  opacity: 0.800000011920929;
  background: linear-gradient(
    334deg,
    #00c65e 11.76%,
    rgba(113, 235, 171, 0.82) 67.2%,
    #fff 97.63%
  );
  filter: blur(19px);
`;

const Computer = styled.img`
  position: absolute;
  top: 0;
  right: 45%;
  top: 80px;
  z-index: 1;
`;
const Chear = styled.img`
  position: absolute;
  top: 65px;
  right: 25%;
  z-index: 1;
`;
const Lamp = styled.img`
  position: absolute;
  top: 0;
  right: 20px;
  z-index: 1;
`;
const PlayOpacity = styled.img`
  position: absolute;
  top: 0;
  right: 50%;
  top: 90px;
`;
const PlayGrean = styled.img`
  position: absolute;
  top: 105px;
  right: 30%;
`;
const PlayOrange = styled.img`
  position: absolute;
  top: 60px;
  right: 25px;
`;

export default Discount;
