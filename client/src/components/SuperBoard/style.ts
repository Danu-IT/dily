import styled from "styled-components";
import Logo from "../Logo";

export const Container = styled.div`
  background: #00c65e;
  width: 45%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0px;
`;
export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 107px;
`;
export const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 45px;
`;
export const Info = styled.div`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.5px;
`;
export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Title = styled.h3`
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.5px;
`;

export const LogoBoard = styled(Logo)`
  width: 148px;
  height: 62px;
`;