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
  const [markerPos, setMarkerPos] = useState();
  const [markers, setMarkers] = useState([]);
  const [curMarker, setCurMarker] = useState();
  // const [userMarker, setUserMarker] = useState(
  //   new window.kakao.maps.LatLng(37.62933576573074, 127.08152009841304)
  // );

  const doMarker = () => {
    try {
      if (markerPos) {
        console.log(markerPos);
        const marker = new window.kakao.maps.Marker({
          position: markerPos,
          title: "asdf",
        });
        marker.setMap(map);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // doMarker();
  }, [markerPos]);

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
        // const positions = [
        //   {
        //     title: "test",
        //     latlng: userMarker,
        //   },
        // ];
        const options = {
          center: new window.kakao.maps.LatLng(curPos.lat, curPos.lon),
        };
        const map = new window.kakao.maps.Map(container, options);
        // for (let i = 0; i < positions.length; i++) {
        //   const marker = new window.kakao.maps.Marker({
        //     map: map,
        //     position: positions[i].latlng,
        //     title: positions[i].title,
        //   });
        // }
        window.kakao.maps.event.addListener(map, "click", (e) => {
          if (curMarker) {
            console.log(curMarker);
          }
          try {
            console.log(map);
            curMarker.setMap(null);
          } catch (e) {
            console.log(e);
          }

          const marker = new window.kakao.maps.Marker({
            position: e.latLng,
            title: "asdf",
          });
          marker.setMap(map);
          setCurMarker(marker);
        });
        // map.addListener("click", (e) => {
        //   const latlng = e.latLng;

        //   setMarkerPos(latlng);
        // });
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
