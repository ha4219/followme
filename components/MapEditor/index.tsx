import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { mapState } from "@store/map";
import { toast } from "react-toastify";
import { MapDataType, mapDummyData } from "@data/MapData";
import { toBase64 } from "@helpers/programHelper";
import { getEnterprises } from "api/enterprise";
import { IEnterpriseType } from "types/apiType";
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
  const [data, setData] = useState<IEnterpriseType[]>([]);

  useEffect(() => {
    if (window.kakao?.maps && window.kakao.map) {
      for (let i = 0; i < data.length; i++) {
        const latlon = new window.kakao.maps.LatLng(
          Number(data[i].latitude),
          Number(data[i].longitude)
        );
        const marker = new window.kakao.maps.Marker({
          position: latlon,
          title: data[i].name,
        });

        marker.setMap(window.kakao.map);
      }
    }
  }, [data]);
  // const [marker, setMarker] = useState();
  const [map, setMap] = useState();
  const [mapLatLonState, setMapLatLonState] = useRecoilState(mapState);
  const errorMessage = async (err) => {
    switch (err.code) {
      case err.PERMISSION_DENIED:
        toast.error("Geolocation API 사용을 허용해주세요");
        break;
      case err.POSITION_UNAVAILABLE:
        toast.error("가져온 위치 정보를 사용할 수 없습니다");
        break;
      case err.TIMEOUT:
        toast.error("요청 허용 시간을 초과했습니다.");
        break;
      case err.UNKNOWN_ERROR:
        toast.error("알 수 없는 오류입니다.");
        break;
    }
    kakaoMapInit({
      lat: curPos.lat,
      lon: curPos.lon,
    });
  };

  const kakaoMapInit = async ({ lat, lon }) => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");

        const options = {
          center: new window.kakao.maps.LatLng(lat, lon),
        };
        const map = new window.kakao.maps.Map(container, options);

        window.kakao.map = map;
        setMap(map);
        for (let i = 0; i < data.length; i++) {
          const latlon = new window.kakao.maps.LatLng(
            Number(data[i].latitude),
            Number(data[i].longitude)
          );
          const marker = new window.kakao.maps.Marker({
            position: latlon,
            title: data[i].name,
          });

          marker.setMap(map);
          // const iwContent = `<div style="display:flex;padding:5px;"><img src="${
          //   data[i].url
          // }" />${mapTitleSummary(data[i].title)}</div>`;

          // const infowindow = new window.kakao.maps.CustomOverlay({
          //   // position: latlon,w
          //   content: iwContent,
          //   removable: true,
          // });
          // infowindow.open(map, marker);
          // window.kakao.maps.event.addListener(marker, "click", function () {
          //   // 마커 위에 인포윈도우를 표시합니다
          //   infowindow.open(map, marker);
          // });
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  };

  const mapInit = async () => {
    try {
      const dataTmp2 = await getEnterprises();
      const dataTmp = dataTmp2.map((item) => ({
        ...item,
        profileImage: `${toBase64(item.profileImage)}`,
      }));

      setData(dataTmp);
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          kakaoMapInit({ lat: pos.coords.latitude, lon: pos.coords.longitude });
          setCurPos({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        },
        errorMessage,
        {
          // enableHighAccuracy: true,
          // maximumAge: 300000,
          // timeout: 10000,
        }
      );
    } catch (e) {
      toast.error("지원하지 않는 브라우저입니다.");
    }
  };

  useEffect(() => {
    if (window.kakao?.map && window.kakao?.maps) {
      const moveLatLon = new window.kakao.maps.LatLng(
        mapLatLonState[0],
        mapLatLonState[1]
      );

      window.kakao.map.panTo(moveLatLon);
    }
  }, [mapLatLonState]);

  useEffect(() => {
    mapInit();
  }, []);

  return <MapContent id="map" />;
};

export const MapContent = styled.div`
  // aspect-ratio: 1;
  width: 100%;
  // width: 300px;
  height: 200px;
  margin-bottom: 1rem;
`;

export default MapEditor;
