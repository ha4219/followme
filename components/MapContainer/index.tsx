import styled from "@emotion/styled";
import React, { useCallback, useEffect, useState } from "react";
import MapDiv from "@components/MapDiv";
import { toast } from "react-toastify";
import { toBase64 } from "@helpers/programHelper";
import { useRecoilState, useRecoilValue } from "recoil";
import { curLimitDis, curMapState, enterPickState, mapState } from "@store/map";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { getDistance } from "@helpers/mapHelper";
import { IEnterpriseType } from "types/apiType";
import { getEnterprises } from "api/enterprise";
import MapDialog from "@components/map/MapDialog";
import { Grid, Table, TableBody } from "@mui/material";

declare global {
  interface Window {
    kakao: any;
    map: any;
  }
}

const MapContainer = () => {
  const [curPos, setCurPos] = useState({
    lat: 37.56,
    lon: 126.9753,
  });
  const [data, setData] = useState<IEnterpriseType[]>([]);
  const [allData, setAllData] = useState<IEnterpriseType[]>([]);
  const [map, setMap] = useState();
  const [page, setPage] = useState(0);
  const perPage = 3;
  const [show, setShow] = useState(false);
  const [enterPick, setEnterPick] = useRecoilState(enterPickState);

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
          enableHighAccuracy: true,
          maximumAge: 300000,
          timeout: 10000,
        }
      );
    } catch (e) {
      console.warn(e);
    }
  };

  const errorMessage = async (err) => {
    console.log(err);

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
    setCurMapLatLonState([curPos.lat, curPos.lon]);
    const dataTmp2 = await getEnterprises();
    const dataTmp = dataTmp2.map((item) => ({
      ...item,
      profileImage: `${toBase64(item.profileImage)}`,
    }));
    kakaoMapInit({
      lat: curPos.lat,
      lon: curPos.lon,
      dataTmp: dataTmp,
    });
  };
  useEffect(() => {
    mapInit();
  }, []);

  useEffect(() => {
    let arr: any[] = [];
    if (limitDis === -1) {
      arr = [...allData];
    } else {
      arr = allData.filter(
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
    }

    setData(arr);
    // setData(mapDummyData);
  }, [curMapLatLonState, limitDis]);

  const onNextPage = useCallback(() => {
    setPage(page + 1 < Math.floor(data.length / perPage) ? page + 1 : page);
  }, [page, data]);

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
            limitDis ||
          limitDis === -1
        ) {
          if (
            markers[i].lat &&
            markers[i].lon &&
            33 < markers[i].lat &&
            markers[i].lat < 38 &&
            markers[i].lon > 120 &&
            markers[i].lon < 140
          ) {
            markers[i].marker.setMap(map);
            markers[i].info.open(map, markers[i].marker);
            window.kakao.maps.event.addListener(
              markers[i].marker,
              "click",
              function (e) {
                setShow(true);
                setEnterPick([markers[i].idx, markers[i].id]);
              }
            );
          }
        } else {
          markers[i].marker.setMap(null);
          markers[i].info.open(null);
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
        window.kakao.maps.event.addListener(map, "dragend", () => {
          if (!map) {
            return;
          }
          const latlng = map.getCenter();
          setCurPos({ lat: latlng.Ma, lon: latlng.La });
          setCurMapLatLonState([latlng.Ma, latlng.La]);
        });
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
            text: data[i].name,
          });
          const infowindow = new window.kakao.maps.InfoWindow({
            position: latlon,
            content: `<span>${data[i].name}</span>`,
          });
          mms.push({
            marker: marker,
            info: infowindow,
            lat: Number(data[i].latitude),
            lon: Number(data[i].longitude),
            idx: data[i].idx,
            id: data[i].id,
          });

          // marker.setMap(map);
        }
        setMarkers(mms);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  };

  const onClose = useCallback(() => {
    setShow(false);
  }, [show]);

  return (
    <div>
      {show && <MapDialog onClose={onClose} show={show} />}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{
            display: {
              xs: "flex",
              sm: "flex",
              md: "none",
            },
          }}
        >
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
            {data
              .slice(page * perPage, (page + 1) * perPage)
              .map((item, index) => (
                <MapDiv key={index} {...item} />
              ))}
          </BottomDiv>
        </Grid>
        <Grid item xs={12} md={9}>
          <MapContent id="map" />
        </Grid>
        <Grid
          item
          md={3}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "flex",
            },
          }}
        >
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
            <div>
              {data
                .slice(page * perPage, (page + 1) * perPage)
                .map((item, index) => (
                  <MapDiv key={index} {...item} />
                ))}
            </div>
          </BottomDiv>
        </Grid>
      </Grid>
    </div>
  );
};

const BottomDiv = styled.div`
  height: 500px;
  width: 100%;
  display: inline-block;
  flex-direction: column;
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
  width: 100%;
  height: 500px;
`;

export default MapContainer;
