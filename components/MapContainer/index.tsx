import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MapDiv from "@components/MapDiv";
import { Grid } from "@mui/material";
import { toast } from "react-toastify";

declare global {
  interface Window {
    kakao: any;
    map: any;
  }
}
const FAKE = [
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  },
];

const MapContainer = () => {
  const [curPos, setCurPos] = useState({
    lat: 37.0933576573074,
    lon: 127.1852009841304,
  });
  const [map, setMap] = useState();

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
        const positions = [
          {
            title: "test",
            latlng: new window.kakao.maps.LatLng(
              37.62933576573074,
              127.08152009841304
            ),
          },
          {
            title: "test",
            latlng: new window.kakao.maps.LatLng(
              37.62933576573074,
              127.09152009841304
            ),
          },
        ];

        const options = {
          center: new window.kakao.maps.LatLng(lat, lon),
        };
        const map = new window.kakao.maps.Map(container, options);

        window.kakao.map = map;
        setMap(map);
        for (let i = 0; i < positions.length; i++) {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: positions[i].latlng,
            title: positions[i].title,
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
        {FAKE.map((item, index) => (
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

const MapContentDiv = styled(Grid)``;

const BottomDiv = styled.div`
  // display: block;
  height: 500px;
  width: 500px;
  overflow-y: auto;
  // overflow: hidden;
  font-family: paybooc-Medium;
  padding: 1rem;
`;

const LeftDiv = styled(Grid)``;

export const MapContent = styled.div`
  // aspect-ratio: 320 / 220;
  width: 100%;
  height: 500px;
`;

export default MapContainer;
