import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MapDiv from "@components/MapDiv";
import { Grid } from "@mui/material";

declare global {
  interface Window {
    kakao: any;
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
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  });
  const [map, setMap] = useState();

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
          center: new window.kakao.maps.LatLng(curPos.lat, curPos.lon),
        };
        const map = new window.kakao.maps.Map(container, options);
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

  useEffect(() => {
    mapInit();
  }, []);

  useEffect(() => {
    if (map) {
      console.log(map.setMap);

      map.setCenter(new window.kakao.maps.LatLng(curPos.lat, curPos.lon));
    }
  }, [curPos]);

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
