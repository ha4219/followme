import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { API } from "@src/API";
import { idState } from "@store/auth";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ICourse } from "types/apiType";
import MainThemeContent from "../MainThemeContent";

const MainThemeContainer = () => {
  const [travels, setTravels] = useState<ICourse[]>([]);
  const [themes, setThemes] = useState<ICourse[]>([]);
  const [sortedType, setSortedType] = useState(0);
  const loggedInId = useRecoilValue(idState);

  const getTravel = async () => {
    const { data } = await API.post<ICourse[]>(
      "/theme/themeBoards",
      loggedInId.length
        ? {
            id: loggedInId,
          }
        : {}
    );
    setTravels(data.slice(-16));
    setThemes(data.slice(-16));
  };

  useEffect(() => {
    const arr = [...travels];

    if (sortedType === 0) {
      arr.sort((l, r) => {
        return r.likeCnts - l.likeCnts;
      });
    } else if (sortedType === 1) {
      arr.sort((l, r) => {
        return r.views - l.views;
      });
    } else {
      arr.sort((l, r) => {
        if (r.createdAt > l.createdAt) {
          return 1;
        }
        return -1;
      });
    }

    setThemes(arr);
  }, [sortedType]);

  useEffect(() => {
    getTravel();
  }, []);

  return (
    <MainContainer>
      <HeadContainer>
        <TitleContainer>
          <div className="sub">Theme Tour</div>
          <div className="main">테마여행</div>
        </TitleContainer>
        <SortedContainer>
          <CustomButton
            className={sortedType === 0 ? "active" : ""}
            onClick={() => setSortedType(0)}
          >
            추천순
          </CustomButton>
          <CustomButton
            className={sortedType === 1 ? "active" : ""}
            onClick={() => setSortedType(1)}
          >
            인기순
          </CustomButton>
          <CustomButton
            className={sortedType === 2 ? "active" : ""}
            onClick={() => setSortedType(2)}
          >
            최신순
          </CustomButton>
        </SortedContainer>
      </HeadContainer>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {themes.map((item) => (
          <MainThemeContent {...item} key={item.idx} />
        ))}
      </Grid>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 2rem 0;
`;

const TitleContainer = styled.div`
  & .sub {
    color: gray;
  }
  & .main {
    font-family: paybooc-ExtraBold;
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
  height: 30px;
`;

export default MainThemeContainer;
