import styled from "styled-components";
import ItemBanner from "./components/ItemBanner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

interface SliderProps {
  array: any[];
}

const SliderCustom = ({ array }: SliderProps) => {
  const [widthScrean, setWidthScrean] = useState(window.screen.availWidth);

  const widthScreen = (width: number) => {
    if (width <= 1920 && width > 1600) {
      return 3.2;
    } else if (width <= 1600 && width > 1080) {
      return 2.6;
    }
    return 2;
  };

  const settings = {
    dots: false,
    infinity: true,
    speed: 500,
    slidesToShow: widthScreen(widthScrean),
  };

  return (
    <Container>
      <Slider {...settings}>
        {array.map((el) => (
          <ItemBanner item={el} />
        ))}
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  width: 98vw;
  position: relative;
  z-index: 1;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
`;
export default SliderCustom;
