import { useState } from "react";

import "@scss/components/Geolocation.scss";
import GeoCoordinates from "@components/main/GeoCoordinates";
import IpInfo from "@components/main/IpInfo";

const Geolocation = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);

  const handleBtnClick = () => {
    setIsBtnClicked(true)
  }

  return (
    <div className="main-container">
      {!isBtnClicked &&
        <button
          className="btn-geolocate mt-5"
          onClick={handleBtnClick}>
          Click to retrieve location and IP
        </button>

      }
      {isBtnClicked &&
        <>
          <GeoCoordinates />
          <IpInfo />
        </>
      }
    </div>
  );
};

export default Geolocation;
