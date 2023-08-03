import { useState, useEffect } from "react";
import styled from "styled-components";
import { Category } from "../../../../../../type/different";
import { BiSolidRightArrow } from "react-icons/bi";

interface ItemProps {
  item: Category;
  setIsVisibleSubMenu: any;
  setActiveSubCategory: any;
  activeSubCategory: any;
  currentCategory: any;
  setCurrentCategory: any;
  setCurrentImage: any;
}

const Item = ({
  item,
  setIsVisibleSubMenu,
  setActiveSubCategory,
  setCurrentCategory,
  currentCategory,
  setCurrentImage,
}: ItemProps) => {
  const hoverMenu = (el: Category) => {
    if (el.subcategories) {
      setActiveSubCategory(el.subcategories);
      setIsVisibleSubMenu(true);
      setCurrentCategory(el.value);
      setCurrentImage(el.picture);
    }
  };

  const isActive = currentCategory === item.value;

  const unHoverMenu = () => {
    setIsVisibleSubMenu(false);
  };

  return (
    <ItemMenu
      onMouseEnter={() => hoverMenu(item)}
      onMouseLeave={unHoverMenu}
      key={item.value}>
      <Image
        src={`http://localhost:5000/categories/${item.icon}`}
        alt=""
      />
      <Text color={isActive ? "green" : ""}>{item.value}</Text>
      {isActive && <Arrow />}
    </ItemMenu>
  );
};

const ItemMenu = styled.div`
  display: flex;
  width: 111%;
  align-items: center;
  gap: 12px;
  position: relative;
  cursor: pointer;
`;

const Image = styled.img``;

interface ItenStyleProps {
  color: string;
}

const Text = styled.div<ItenStyleProps>`
  color: ${({ color }) => color};
`;
const Arrow = styled(BiSolidRightArrow)`
  position: absolute;
  right: 10px;
  color: #00c65e;
`;

export default Item;
