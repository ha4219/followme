import { useEffect, useState } from "react";
import styled from "@emotion/styled";

declare global {
  interface Window {
    kakao: any;
  }
}

const Map = () => {
  useEffect(() => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const x = 126.570667;
        const y = 33.450701;
        const options = {
          center: new window.kakao.maps.LatLng(y, x),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(y, x);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });

      window.kakao.maps.load(() => {
        const container = document.getElementById("map1");
        const x = 126.570667;
        const y = 33.450701;
        const options = {
          center: new window.kakao.maps.LatLng(y, x),
        };
        const map = new window.kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(y, x);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, []);

  return (
    <>
      <MapContainer id="map" />
    </>
  );
};

export const MapContainer = styled.div`
  aspect-ratio: 320 / 220;
`;

export default Map;
