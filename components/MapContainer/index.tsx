import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MapDiv from "@components/MapDiv";
import { Button, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { getMapDummyDataGenerate } from "@data/MapData";

declare global {
  interface Window {
    kakao: any;
    map: any;
  }
}

const MapContainer = () => {
  const [curPos, setCurPos] = useState({
    lat: 37.0933576573074,
    lon: 127.1852009841304,
  });
  const data = getMapDummyDataGenerate(10, 50);
  const [map, setMap] = useState();
  const [page, setPage] = useState(0);
  const perPage = 3;

  const mapInit = async () => {
    try {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          kakaoMapInit({ lat: pos.coords.latitude, lon: pos.coords.longitude });
          setCurPos({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        },
        errorMessage,
        {
          enableHighAccuracy: true,
          maximumAge: 300000,
          timeout: 5000,
        }
      );
    } catch (e) {
      toast.error("지원하지 않는 브라우저입니다.");
    }
  };

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
  useEffect(() => {
    mapInit();
  }, []);

  useEffect(() => {
    if (window.kakao) {
      // window.kakao.map.setCenter(
      //   new window.kakao.maps.LatLng(curPos.lat, curPos.lon)
      // );
    }
  }, [curPos]);

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
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(data[i].lat, data[i].lon),
            title: data[i].title,
          });
        }
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  };

  return (
    <MainMapContainer>
      {/* <Grid item md={9}> */}
      <MapContent id="map" />
      {/* </Grid> */}
      {/* <Grid item md={3}> */}
      <BottomDiv>
        <div className="head">
          <div className="label">장소</div>
          <div className="bts">
            <button onClick={() => setPage(page > 0 ? page - 1 : page)}>
              {"<"}
            </button>
            <button
              onClick={() =>
                setPage(
                  page < Math.floor(data.length / perPage) ? page + 1 : page
                )
              }
            >
              {">"}
            </button>
          </div>
        </div>
        {data.slice(page * perPage, (page + 1) * perPage).map((item, index) => (
          <MapDiv key={index} {...item} />
        ))}
      </BottomDiv>
      {/* </Grid> */}
    </MainMapContainer>
  );
};

const MainMapContainer = styled.div`
  display: flex;
`;

const BottomDiv = styled.div`
  // display: block;
  height: 800px;
  // width: 500px;
  display: flex;
  flex-direction: column;
  // overflow: hidden;
  font-family: paybooc-Medium;
  padding: 1rem;
  background-color: #edeef8;

  & .head {
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;

    & .label {
      font-weight: bold;
    }
  }
`;

const LeftDiv = styled(Grid)``;

export const MapContent = styled.div`
  // aspect-ratio: 320 / 220;
  width: 100%;
  height: 800px;
`;

export default MapContainer;
