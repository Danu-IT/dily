import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppSelector } from "../../../../hooks/redux";
import { SubCategory } from "../../../../type/different";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import Item from "./components/Item";

const Menu = () => {
  const { category } = useAppSelector((state) => state.different);

  const [isVisibleCategory, setIsVisibleCategory] = useState(false);
  const [isVisibleSubMenu, setIsVisibleSubMenu] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>();

  const [currrentImage, setCurrentImage] = useState<string>();
  const [activeSubCategory, setActiveSubCategory] = useState<
    SubCategory[] | null
  >();

  useEffect(() => {
    if (!isVisibleCategory) setIsVisibleSubMenu(false);
  }, [isVisibleCategory]);

  useEffect(() => {
    if (!isVisibleSubMenu) {
      setCurrentCategory(null);
    }
  }, [isVisibleSubMenu, currentCategory]);

  useEffect(() => {
    if (!activeSubCategory?.length) {
      setIsVisibleSubMenu(false);
    }
  }, [activeSubCategory]);

  return (
    <Container>
      <MenuBlock onClick={() => setIsVisibleCategory((prev) => !prev)}>
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
      </MenuBlock>
      {isVisibleCategory && (
        <MenuCategory>
          {category.map((el) => (
            <Item
              item={el}
              setIsVisibleSubMenu={setIsVisibleSubMenu}
              setActiveSubCategory={setActiveSubCategory}
              activeSubCategory={activeSubCategory}
              currentCategory={currentCategory}
              setCurrentCategory={setCurrentCategory}
              setCurrentImage={setCurrentImage}
            />
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
            setCurrentCategory(null);
          }}>
          {activeSubCategory &&
            activeSubCategory.map((el, i) => (
              <ItemSubMenu key={el.value}>
                <Title>{el.value}</Title>
                <SubCategoryItems>
                  {el.type.map((item) => (
                    <SubCategoryItem>{item}</SubCategoryItem>
                  ))}
                </SubCategoryItems>
              </ItemSubMenu>
            ))}
          <ImageCategory
            src={`http://localhost:5000/categories/${currrentImage}`}
          />
        </SubCategoryMenu>
      )}
    </Container>
  );
};

const Container = styled.div``;

const MenuBlock = styled.div`
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

  display: grid;
  grid-template-columns: 200px 200px 200px;
  gap: 50px;
`;

const ImageCategory = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const ItemSubMenu = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.div`
  color: #363a45;
  font-family: TT Norms;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  cursor: pointer;
  &:hover {
    color: #00c65e;
  }
`;

const SubCategoryItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SubCategoryItem = styled.div`
  &:hover {
    color: #00c65e;
    cursor: pointer;
  }
`;

export default Menu;
