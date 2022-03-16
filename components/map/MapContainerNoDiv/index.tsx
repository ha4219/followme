import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import MapDiv from "@components/MapDiv";
import { Button, Grid } from "@mui/material";
import { toast } from "react-toastify";
import { mapDummyData, MapDataType } from "@data/MapData";
import { mapTitleSummary } from "@helpers/programHelper";
import dynamic from "next/dynamic";
import { useRecoilState } from "recoil";
import { mapSelectedState, mapState } from "@store/map";
import { inflateSync } from "zlib";

declare global {
  interface Window {
    kakao: any;
    map: any;
  }
}

const MapContainerNoDiv = () => {
  const [curPos, setCurPos] = useState({
    lat: 37.0933576573074,
    lon: 127.1852009841304,
  });
  const [data, setData] = useState<MapDataType[]>([]);
  const [map, setMap] = useState();
  const [mapLatLonState, setMapLatLonState] = useRecoilState(mapState);
  const [markers, setMarkers] = useState<any[]>([]);
  const [infos, setInfos] = useState<any[]>([]);

  const mapInit = async () => {
    try {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log(pos);

          kakaoMapInit({ lat: pos.coords.latitude, lon: pos.coords.longitude });
          setCurPos({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        },
        errorMessage,
        {
          enableHighAccuracy: true,
          maximumAge: 300000,
          timeout: 10000,
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
    setData(mapDummyData);
  }, []);

  useEffect(() => {
    if (map) {
      // for (let i = 0; i < data.length; i++) {
      //   //   const latlon = new window.kakao.maps.LatLng(data[i].lat, data[i].lon);
      //   //   const marker = new window.kakao.maps.Marker({
      //   //     position: latlon,
      //   //     title: data[i].title,
      //   //   });
      //   //   marker.setMap(window.kakao.map);
      //   //   const iwContent = `<div style="display:flex;padding:5px;"><img src="${
      //   //     data[i].url
      //   //   }" />${mapTitleSummary(data[i].title)}</div>`;
      //   //   const infowindow = new window.kakao.maps.CustomOverlay({
      //   //     // position: latlon,w
      //   //     content: iwContent,
      //   //     removable: true,
      //   //   });
      //   //   // infowindow.open(map, marker);
      //   //   window.kakao.maps.event.addListener(marker, "click", function (e) {
      //   //     // 마커 위에 인포윈도우를 표시합니다
      //   //     console.log(e);
      //   //     infowindow.open(window.kakao.map, marker);
      //   //   });
      // }
      for (let i = 0; i < data.length; i++) {
        markers[i].setMap(map);
        window.kakao.maps.event.addListener(markers[i], "click", function () {
          infos[i].open(map, markers[i]);
        });
      }
    }
  }, [infos, markers, map]);

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
          level: 10,
        };
        const map = new window.kakao.maps.Map(container, options);

        window.kakao.map = map;
        setMap(map);
        const mms: any[] = [];
        const ins: any[] = [];
        for (let i = 0; i < data.length; i++) {
          const latlon = new window.kakao.maps.LatLng(data[i].lat, data[i].lon);
          const marker = new window.kakao.maps.Marker({
            position: latlon,
            title: data[i].title,
          });
          mms.push(marker);
          // marker.setMap(map);
          // const iwContent = `<div style="display:flex;padding:5px;"><img style="width: 100px; height: 100px;" src="${
          //   data[i].url
          // }" />${mapTitleSummary(data[i].title)}</div>`;
          const count = Math.ceil(data[i].score);
          const fillStar = `<svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              style="fill: #f3c221;"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
          `;
          const outlineStar = `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" style="fill: #f3c221;"><path d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z"/></svg>`;
          let starsBody = "";
          for (let i = 0; i < 5; i++) {
            if (count - 1 >= i) {
              starsBody += fillStar;
            } else {
              starsBody += outlineStar;
            }
          }
          const stars = `<div style="display: flex;">${starsBody}</div>`;
          const tag = (value) => `<div style="display: inline-block;
        color: #b69775;
        font-family: paybooc-Bold;
        font-size: 0.8rem;
        padding: 0.2rem;
        margin-right: 5px;
        border: 1px solid #b69775;
        border-radius: 12px;">${value}</div>`;
          let tags = "";
          for (let j = 0; j < data[i].tags.length; j++) {
            tags += tag(data[i].tags[j]);
          }

          const iwContent = `<div style='display:flex; padding: 1rem;'><img src='${data[i].url}' style="width: 200px; height: 200px;margin-right: 1rem; border-radius: 200px" alt=${data[i].url}/><div style="font-family: paybooc-Light;"><div style="font-family: paybooc-Bold; height: 2rem; font-size: 1.2rem;">${data[i].title}</div><div style="height: 4rem;">${data[i].content}</div><div style="height: 2rem">${stars}</div><div style="height: 2rem">${tags}</div></div></div>`;

          const infowindow = new window.kakao.maps.InfoWindow({
            // position: latlon,w
            content: iwContent,
            removable: true,
          });
          ins.push(infowindow);

          // infowindow.open(map, marker);
          // window.kakao.maps.event.addListener(marker, "click", function () {
          //   // 마커 위에 인포윈도우를 표시합니다

          //   infowindow?.open(window.kakao.map, marker);
          // });
        }
        setMarkers(mms);
        setInfos(ins);
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
      {/* <BottomDiv>
        <div className="head">
          <div className="label">장소</div>
          <div className="bts">
            <button onClick={onPrevPage}>{"<"}</button>
            <button onClick={onNextPage}>{">"}</button>
          </div>
        </div>
        {data.slice(page * perPage, (page + 1) * perPage).map((item, index) => (
          <MapDiv key={index} {...item} />
        ))}
      </BottomDiv> */}
      {/* </Grid> */}
    </MainMapContainer>
  );
};

const MainMapContainer = styled.div`
  display: flex;
`;

const BottomDiv = styled.div`
  // display: block;
  height: 500px;
  // width: 500px;
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

export default MapContainerNoDiv;
