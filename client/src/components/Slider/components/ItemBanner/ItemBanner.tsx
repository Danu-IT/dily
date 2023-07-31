import { SliderInfotype } from "../../../../utils/sliders";
import styled from "styled-components";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface ItemBannerProps {
  item: SliderInfotype;
}

const ItemBanner = ({ item }: ItemBannerProps) => {
  const navigate = useNavigate();

  return (
    <Container
      color={item.color}
      bg={item.bg}>
      <Left>
        <Title>{item.title}</Title>
        <SubTitle>{item.body}</SubTitle>
        <Arrow
          onClick={() => navigate(item.path)}
          color={item.color}
          size={30}
        />
      </Left>
      <Right>
        <Image
          src={item.pic}
          alt={item.title}
        />
      </Right>
    </Container>
  );
};

interface ItemBannerStyleProps {
  bg: string;
  color: string;
}

const Container = styled.div<ItemBannerStyleProps>`
  background: ${({ bg }) => bg};
  position: relative;
  z-index: 2;
  border-radius: 10px;
  width: 570px;
  height: 200px;
  padding: 30px;
  color: ${({ color }) => color};
  border: 1px solid black;
  display: flex;
  position: relative;
`;

const Title = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;
const SubTitle = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  width: 350px;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Right = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const Image = styled.img`
  border-radius: 9px;
`;

const Arrow = styled(IoIosArrowDroprightCircle)`
  position: absolute;
  bottom: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export default ItemBanner;
