import styled from "styled-components";
import { navbar } from "../../../../utils/navbar";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let search = useLocation().pathname;
  const [navbarState, setNavbarState] = useState(navbar);
  const navigate = useNavigate();

  const hanldeLink = (value: string, path: string) => {
    const newState = navbarState.map((el) => {
      if (el.value === value) {
        return {
          ...el,
          activate: true,
        };
      }
      return { ...el, activate: false };
    });
    setNavbarState(newState);
    navigate(path);
  };

  const updateLink = () => {
    const renderNavbarState = navbarState.map((el) => {
      if (el.path === search) {
        return {
          ...el,
          activate: true,
        };
      }
      return { ...el, activate: false };
    });
    setNavbarState(renderNavbarState);
  };

  useEffect(() => {
    updateLink();
  }, [search]);

  return (
    <Container>
      {navbarState.map((el) => (
        <Item
          isBg={el.activate}
          onClick={() => hanldeLink(el.value, el.path)}>
          {el.value}
        </Item>
      ))}
    </Container>
  );
};

interface NavbarStyleProps {
  isBg: boolean;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const Item = styled.div<NavbarStyleProps>`
  padding: 21px 20px 23px 20px;
  background-color: ${({ isBg }) => (isBg ? "#68FDAF" : "white")};
  border-bottom: ${({ isBg }) => (isBg ? "1px solid #00c65e" : "gray")};
  position: relative;
  z-index: ${({ isBg }) => (isBg ? 1 : 0)};
  cursor: pointer;
`;

export default Navbar;
