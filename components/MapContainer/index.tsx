import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import MapDiv from "@components/MapDiv";
import { Button, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { mapDummyData, MapDataType } from "@data/MapData";
import { mapTitleSummary, toBase64 } from "@helpers/programHelper";
import dynamic from "next/dynamic";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  curLimitDis,
  curMapState,
  mapSelectedState,
  mapState,
} from "@store/map";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { getDistance } from "@helpers/mapHelper";
import { IEnterpriseType } from "types/apiType";
import { getEnterprises } from "api/enterprise";

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
  const [data, setData] = useState<IEnterpriseType[]>([]);
  const [allData, setAllData] = useState<IEnterpriseType[]>([]);
  const [map, setMap] = useState();
  const [page, setPage] = useState(0);
  const [clickList, setClickList] = useState([]);
  const perPage = 3;
  const [mapLatLonState, setMapLatLonState] = useRecoilState(mapState);
  const [curMapLatLonState, setCurMapLatLonState] = useRecoilState(curMapState);
  const [markers, setMarkers] = useState<any[]>([]);
  const limitDis = useRecoilValue(curLimitDis);

  const mapInit = async () => {
    try {
      const dataTmp2 = await getEnterprises();
      const dataTmp = dataTmp2.map((item) => ({
        ...item,
        profileImage: `${toBase64(item.profileImage)}`,
      }));
      setAllData(dataTmp);
      setData(dataTmp);

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          kakaoMapInit({
            lat: pos.coords.latitude,
            lon: pos.coords.longitude,
            dataTmp: dataTmp,
          });
          setCurPos({ lat: pos.coords.latitude, lon: pos.coords.longitude });
          setCurMapLatLonState([pos.coords.latitude, pos.coords.longitude]);
        },
        errorMessage,
        {
          // enableHighAccuracy: true,
          // maximumAge: 300000,
          // timeout: 10000,
        }
      );
    } catch (e) {
      console.warn(e);
      // toast.error("지원하지 않는 브라우저입니다.");
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
    const arr = allData.filter(
      (item) =>
        getDistance(
          // curMapLatLonState[0],
          // curMapLatLonState[1],
          curPos.lat,
          curPos.lon,
          Number(item.latitude),
          Number(item.longitude)
        ) <= limitDis
    );

    setData(arr);
    // setData(mapDummyData);
  }, [curMapLatLonState, limitDis]);

  const onNextPage = useCallback(() => {
    setPage(page < Math.floor(data.length / perPage) ? page + 1 : page);
  }, [page, data.length]);

  const onPrevPage = useCallback(() => {
    setPage(page > 0 ? page - 1 : page);
  }, [page, data.length]);

  useEffect(() => {
    if (window.kakao?.maps && window.kakao?.map) {
      const moveLatLon = new window.kakao.maps.LatLng(
        mapLatLonState[0],
        mapLatLonState[1]
      );

      window.kakao.map.panTo(moveLatLon);
    }
  }, [mapLatLonState]);

  useEffect(() => {
    if (map) {
      for (let i = 0; i < markers.length; i++) {
        if (
          getDistance(markers[i].lat, markers[i].lon, curPos.lat, curPos.lon) <
          limitDis
        ) {
          markers[i].marker.setMap(map);
        } else {
          markers[i].marker.setMap(null);
        }
      }
    }
  }, [markers, map, limitDis]);

  const kakaoMapInit = async ({ lat, lon, dataTmp }) => {
    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const data = dataTmp;
        const options = {
          center: new window.kakao.maps.LatLng(lat, lon),
        };
        const map = new window.kakao.maps.Map(container, options);

        window.kakao.map = map;
        setMap(map);
        const mms: any[] = [];
        for (let i = 0; i < data.length; i++) {
          const latlon = new window.kakao.maps.LatLng(
            Number(data[i].latitude),
            Number(data[i].longitude)
          );
          const marker = new window.kakao.maps.Marker({
            position: latlon,
            title: data[i].name,
          });
          mms.push({
            marker: marker,
            lat: Number(data[i].latitude),
            lon: Number(data[i].longitude),
          });
          // marker.setMap(map);
        }
        setMarkers(mms);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  };

  return (
    <MainMapContainer>
      <MapContent id="map" />
      <BottomDiv>
        <div className="head">
          <div className="label">장소</div>
          <div className="bts">
            <button onClick={onPrevPage}>
              <KeyboardArrowLeftIcon />
            </button>
            <button onClick={onNextPage}>
              <ChevronRightIcon />
            </button>
          </div>
        </div>
        {data.slice(page * perPage, (page + 1) * perPage).map((item, index) => (
          <MapDiv key={index} {...item} />
        ))}
      </BottomDiv>
    </MainMapContainer>
  );
};

const MainMapContainer = styled.div`
  display: flex;
`;

const BottomDiv = styled.div`
  // display: block;
  height: 500px;
  width: 500px;
  display: inline-block;
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

export const MapContent = styled.div`
  // aspect-ratio: 320 / 220;
  width: 100%;
  height: 500px;
`;

export default MapContainer;
