import styled from "styled-components";
import { sliderInfo } from "../../../utils/sliders";
import SliderCustom from "../../../components/Slider";
import { useAppSelector } from "../../../hooks/redux";

const Home = () => {
  return (
    <Container>
      <SliderCustom array={sliderInfo} />
    </Container>
  );
};

const Container = styled.div`
  padding-top: 50px;
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
`;

export default Home;
