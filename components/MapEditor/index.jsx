import styled from "@emotion/styled";
import { useEffect, useState } from "react";

// declare global {
//   interface Window {
//     kakao: any;
//   }
// }
const MapEditor = () => {
  const [curPos, setCurPos] = useState({
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  });
  const [marker, setMarker] = useState();
  const [kakaoMap, setKakaoMap] = useState();

  const mapInit = async () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurPos({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    });

    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(curPos.lat, curPos.lon),
        };
        const map = new window.kakao.maps.Map(container, options);
        const tmpMarker = new window.kakao.maps.Marker({
          position: map.getCenter(),
        });
        window.marker = tmpMarker;
        window.marker.setMap(map);
        window.kakao.maps.event.addListener(map, "click", (e) => {
          window.marker.setPosition(e.latLng);
        });
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  };

  useEffect(() => {
    mapInit();
  }, []);

  return <MapContent id="map" />;
};

export const MapContent = styled.div`
  aspect-ratio: 320 / 220;
`;

export default MapEditor;
