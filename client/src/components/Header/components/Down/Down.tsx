import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";
import { mockDashboard } from "../../../../utils/navbar";
import Search from "../Navbar/components/Search";
import { IoAddCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAppSelector } from "../../../../hooks/redux";
import { Category, SubCategory } from "../../../../type/different";

const Down = () => {
  const [isVisibleCategory, setIsVisibleCategory] = useState(false);
  const [isVisibleSubMenu, setIsVisibleSubMenu] = useState<boolean>(false);

  const { category } = useAppSelector((state) => state.different);

  const [activeSubCategory, setActiveSubCategory] = useState<
    SubCategory[] | null
  >();

  const hoverMenu = (el: Category) => {
    if (el.subcategories) {
      setActiveSubCategory(el.subcategories);
      setIsVisibleSubMenu(true);
    }
  };

  const unHoverMenu = () => setIsVisibleSubMenu(false);

  useEffect(() => {
    if (!isVisibleCategory) setIsVisibleSubMenu(false);
  }, [isVisibleCategory]);

  return (
    <Container>
      <Content>
        <Menu onClick={() => setIsVisibleCategory((prev) => !prev)}>
          {isVisibleCategory ? (
            <AiOutlineClose
              size={20}
              color="#00C65E"></AiOutlineClose>
          ) : (
            <HiMenuAlt2
              color="#363A45"
              size={20}
            />
          )}
        </Menu>
        {isVisibleCategory && (
          <MenuCategory>
            {category.map((el) => (
              <ItemMenu
                onMouseEnter={() => hoverMenu(el)}
                onMouseLeave={unHoverMenu}
                key={el.value}>
                <Image
                  src={`http://localhost:5000/categories/${el.icon}`}
                  alt=""
                />
                <Text>{el.value}</Text>
              </ItemMenu>
            ))}
          </MenuCategory>
        )}
        {isVisibleSubMenu && (
          <SubCategoryMenu
            onMouseEnter={() => {
              setIsVisibleSubMenu(true);
            }}
            onMouseLeave={() => {
              setIsVisibleSubMenu(false);
              setActiveSubCategory(null);
            }}>
            {activeSubCategory &&
              activeSubCategory.map((el) => (
                <div key={el.value}>{el.value}</div>
              ))}
          </SubCategoryMenu>
        )}
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

const Menu = styled.div`
  margin-top: 2px;
  cursor: pointer;
`;

const MenuCategory = styled.div`
  position: absolute;
  z-index: 3;
  top: 60px;
  box-shadow: 0px 4px 12px 0px rgba(54, 58, 69, 0.2);
  border-radius: 10px;
  background: #fff;
  font-size: 16px;
  width: 24%;
  padding: 26px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SubCategoryMenu = styled.div`
  position: absolute;
  z-index: 3;
  top: 60px;
  left: 24%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(54, 58, 69, 0.2);
  width: 76%;
  padding: 26px;
`;

const ItemMenu = styled.div`
  display: flex;
  width: 111%;
  align-items: center;
  gap: 12px;
`;

const Text = styled.div``;
const Image = styled.img``;

export default Down;
