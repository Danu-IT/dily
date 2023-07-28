import styled from "styled-components";
import logo from "../../assets/logo.svg";
import logoColor from "../../assets/logoColor.svg";
import { FC } from "react";

interface LogoProps {
  isColor?: boolean;
}

const Logo: FC<LogoProps> = ({ isColor }) => {
  return <Image src={isColor ? logoColor : logo}></Image>;
};

const Image = styled.img``;

export default Logo;
