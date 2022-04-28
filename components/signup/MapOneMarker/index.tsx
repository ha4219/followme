import styled from "@emotion/styled";
import { enterSignupState } from "@store/map";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
declare global {
  interface Window {
    kakao: any;
  }
}
const MapOneMarker = () => {
  const [enterPos, setEnterPos] = useRecoilState(enterSignupState);
  const [map, setMap] = useState();
  const [marker, setMarker] = useState<any>();
  const errorMessage = (err) => {
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
  };

  // const callback = (result, status) => {
  //   if (status === window.kakao.services.Status.OK) {
  //     setEnterPos([enterPos[0], enterPos[1], result[0].road_addres]);
  //   }
  // };

  // function searchAddrFromCoords(coords, callback) {
  //   // 좌표로 행정동 주소 정보를 요청합니다
  //   geo.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  // }

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
        const markerTmp = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(lat, lon),
        });
        markerTmp.setMap(map);
        setMarker(markerTmp);
        window.kakao.map = map;
        setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  };

  const onCursorSet = (e) => {
    setEnterPos([e.latLng.getLat(), e.latLng.getLng()]);
    // searchAddrFromCoords(e.latLng, callback);
  };

  useEffect(() => {
    if (map) {
      window.kakao.maps.event.addListener(map, "click", onCursorSet);

      return () =>
        window.kakao.maps.event.removeListener(map, "click", onCursorSet);
    }
  }, [map]);

  const mapInit = async () => {
    try {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          kakaoMapInit({ lat: pos.coords.latitude, lon: pos.coords.longitude });
          setEnterPos([pos.coords.latitude, pos.coords.longitude]);
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
    if (window.kakao?.map && window.kakao?.maps && marker) {
      const moveLatLon = new window.kakao.maps.LatLng(enterPos[0], enterPos[1]);
      marker.setPosition(moveLatLon);

      // window.kakao.map.panTo(moveLatLon);
    }
  }, [enterPos]);

  useEffect(() => {
    mapInit();
  }, []);

  return <MapContent id="map" />;
};

export const MapContent = styled.div`
  // aspect-ratio: 1;
  // width: 100%;
  width: 500px;
  height: 500px;
`;

export default MapOneMarker;
