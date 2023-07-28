import { useGeolocated } from "react-geolocated";
import Down from "./components/Down";
import Up from "./components/Up";
import { differentAPI } from "../../store/services/differentService";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { toggleTown } from "../../store/slices/different";
import { BrowserRouter } from "react-router-dom";

const Header = () => {
  const { coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  const dispatch = useAppDispatch();

  const [sendGeolocation, { data: town }] = differentAPI.usePostTownMutation();

  useEffect(() => {
    if (coords) {
      sendGeolocation({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });
    }
  }, [coords]);

  useEffect(() => {
    if (town) {
      dispatch(toggleTown(town.suggestions[0].data.city));
    }
  }, [town]);

  return (
    <BrowserRouter>
      <Up />
      <Down />
    </BrowserRouter>
  );
};

export default Header;
