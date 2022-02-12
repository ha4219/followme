import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import MapDiv from "@components/MapDiv";

const { kakao } = window;

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
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯맛없을듯맛없을듯맛없을듯맛없을듯맛없을듯맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distance: 100,
  },
];

const MapContainer = () => {
  const [curPos, setCurPos] = useState({
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  });
  const id = 1;

  const mapInit = async () => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setCurPos({ lat: pos.coords.latitude, lon: pos.coords.longitude });
    });

    const mapScript = document.createElement("script");

    mapScript.async = true;
    mapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API}&autoload=false`;

    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      kakao.maps.load(() => {
        const container = document.getElementById("map");
        const positions = [
          {
            title: "test",
            latlng: new kakao.maps.LatLng(
              37.62933576573074,
              127.08152009841304
            ),
          },
          {
            title: "test",
            latlng: new kakao.maps.LatLng(
              37.62933576573074,
              127.09152009841304
            ),
          },
        ];
        const options = {
          center: new kakao.maps.LatLng(curPos.lat, curPos.lon),
        };
        const map = new kakao.maps.Map(container, options);
        for (let i = 0; i < positions.length; i++) {
          const marker = new kakao.maps.Marker({
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

  return (
    <div>
      <MapContent id="map" />
      <BottomDiv>
        {/* <MapDiv /> */}
        {FAKE.map((item, index) => (
          <MapDiv key={index} {...item} />
        ))}
      </BottomDiv>
    </div>
  );
};

const BottomDiv = styled.div`
  position: relative;
  display: flex;
  margin-top: -200px;
  z-index: 10;
  overflow-x: auto;
  font-family: paybooc-Medium;
  padding: 1rem;
`;

export const MapContent = styled.div`
  aspect-ratio: 320 / 220;
`;

export default MapContainer;
