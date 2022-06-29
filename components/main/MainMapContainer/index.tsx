import MapContainer from "@components/MapContainer";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { curLimitDis } from "@store/map";
import { useRecoilState } from "recoil";

const MainMapContainer = () => {
  const [limitDis, setLimitDis] = useRecoilState(curLimitDis);
  return (
    <div>
      <HeadContainer>
        <TitleContainer>
          <div className="sub">Recommend Places</div>
          <div className="main">내 주변 추천 장소</div>
        </TitleContainer>
        <SortedContainer>
          <CustomButton
            className={limitDis === 5000 ? "active" : ""}
            onClick={() => setLimitDis(5000)}
          >
            5km이내
          </CustomButton>
          <CustomButton
            className={limitDis === 10000 ? "active" : ""}
            onClick={() => setLimitDis(10000)}
          >
            10km이내
          </CustomButton>
          <CustomButton
            className={limitDis === 20000 ? "active" : ""}
            onClick={() => setLimitDis(20000)}
          >
            20km이내
          </CustomButton>
          <CustomButton
            className={limitDis === -1 ? "active" : ""}
            onClick={() => setLimitDis(-1)}
          >
            전체
          </CustomButton>
        </SortedContainer>
      </HeadContainer>
      <MapContainer />
    </div>
  );
};

const TitleContainer = styled.div`
  & .sub {
    color: gray;
  }
  & .main {
    font-size: 2rem;
    letter-spacing: -1.76px;
    font-family: paybooc-ExtraBold;
  }
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 2.5rem;
  margin-top: 2.5rem;
`;
const SortedContainer = styled.div`
  display: flex;
  padding-top: 2rem;

  & .active {
    color: #ffffff;
    background-color: #000000;
  }
`;

const CustomButton = styled(Button)`
  border: 1px solid black;
  margin-left: 5px;
  height: 30px;
`;

export default MainMapContainer;
