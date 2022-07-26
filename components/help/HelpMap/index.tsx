import { useEffect, useState } from "react";
import styled from "@emotion/styled";

declare global {
  interface Window {
    kakao: any;
    map: any;
  }
}
const HelpMap = () => {
  const [curPos, setCurPos] = useState({
    lat: 37.571737377162,
    lon: 126.97044099818,
  });

  const kakaoMapInit = async () => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(curPos.lat, curPos.lon),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(
            Number(curPos.lat),
            Number(curPos.lon)
          ),
          title: "followme",
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  };

  useEffect(() => {
    kakaoMapInit();
  }, []);
  return <MapContainer id="map" />;
};

const MapContainer = styled.div`
  width: 100%;
  height: 500px;
`;

export default HelpMap;
