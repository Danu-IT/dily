import styled from "styled-components";
import { stores } from "../../utils/stores";
import Assessment from "../Assessment";

const PopularStores = () => {
  return (
    <Container>
      <Title>Популярные магазины</Title>
      <Content>
        {stores.map((el) => (
          <Item bg={el.color}>
            <Up>
              <Logo src={el.img} />
              <TitleItem>{el.title}</TitleItem>
            </Up>
            <Down>
              <Bg>
                <Star>{el.star}</Star>
                <Assessment score={el.star} />
              </Bg>
              <City>{el.city}</City>
            </Down>
          </Item>
        ))}
      </Content>
    </Container>
  );
};

interface ItemStyleProps {
  bg: string;
}

const Container = styled.div``;
const Down = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
const Star = styled.span`
  color: #00c65e;
  font-size: 14px;
  margin-bottom: 2px;
`;
const Bg = styled.div`
  border-radius: 10px;
  background: #fff;
  padding: 10px;

  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 3px;
`;
const Up = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Logo = styled.img``;
const Title = styled.div`
  color: #363a45;
  font-family: TT Norms;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  padding-bottom: 30px;
`;
const TitleItem = styled.div`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
`;
const Item = styled.div<ItemStyleProps>`
  width: 214px;
  height: 150px;
  background-color: ${({ bg }) => bg};
  border-radius: 10px;
  padding: 15px;
  color: white;

  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const City = styled.div`
  padding: 12px 16px;
  border-radius: 10px;
  background: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: black;
`;

export default PopularStores;
