import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { KayakingOutlined } from "@mui/icons-material";
import MapDiv from "@components/mapDiv";

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
    distacne: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯맛없을듯맛없을듯맛없을듯맛없을듯맛없을듯맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distacne: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distacne: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distacne: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distacne: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distacne: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distacne: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distacne: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distacne: 100,
  },
  {
    url: "https://news.kbs.co.kr/data/news/2017/01/04/3405677_bH6.jpg",
    title: "닭강정",
    content: "맛없을듯",
    tags: ["kbs", "핸드폰", "음식사진"],
    distacne: 100,
  },
];

const Map = () => {
  const [curPos, setCurPos] = useState({
    lat: 37.62933576573074,
    lon: 127.08152009841304,
  });
  useEffect(() => {
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
  }, []);

  return (
    <>
      <MapContainer id="map" />
      <BottomDiv>
        {/* <MapDiv /> */}
        {FAKE.map((item, index) => (
          <MapDiv key={index} {...item} />
        ))}
      </BottomDiv>
    </>
  );
};

const BottomDiv = styled.div`
  position: relative;
  display: flex;
  margin-top: -150px;
  z-index: 10;
  overflow-x: auto;
  font-family: paybooc-Medium;
  padding: 1rem;
`;

export const MapContainer = styled.div`
  aspect-ratio: 320 / 220;
`;

export default Map;
