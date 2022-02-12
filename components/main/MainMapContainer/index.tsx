import MapContainer from "@components/MapContainer";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useState } from "react";

const MainMapContainer = () => {
  const [sortedType, setSortedType] = useState(0);
  return (
    <div>
      <HeadContainer>
        <TitleContainer>
          <div className="sub">Recommend Places</div>
          <div className="main">내 주변 추천 장소</div>
        </TitleContainer>
        <SortedContainer>
          <CustomButton
            className={sortedType === 0 ? "active" : ""}
            onClick={() => setSortedType(0)}
          >
            5km이내
          </CustomButton>
          <CustomButton
            className={sortedType === 1 ? "active" : ""}
            onClick={() => setSortedType(1)}
          >
            10km이내
          </CustomButton>
          <CustomButton
            className={sortedType === 2 ? "active" : ""}
            onClick={() => setSortedType(2)}
          >
            20km이내
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
  }
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5rem;
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
`;

export default MainMapContainer;
