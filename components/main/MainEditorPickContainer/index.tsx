import styled from "@emotion/styled";
import { Button, Container, Grid, useTheme } from "@mui/material";
import { API } from "@src/API";
import { idState } from "@store/auth";
import { windowState } from "@store/window";
import theme from "@styles/theme";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ICourse } from "types/apiType";
import MainEditorContent from "../MainEditorContent";

const MainEditorPickContainer = () => {
  const [picks, setPicks] = useState<ICourse[]>([]);
  const theme = useTheme();
  const [page, setPage] = useState(0);
  const [perPageSize, setPaerPageSize] = useState(3);
  const loggedInId = useRecoilValue(idState);
  const [width, setWidth] = useRecoilState(windowState);

  const getTravel = async () => {
    const { data } = await API.post<ICourse[]>(
      "/theme/themeBoards",
      loggedInId.length
        ? {
            id: loggedInId,
          }
        : {}
    );
    setPicks(data.slice(-9));
  };

  const onRightClick = useCallback(() => {
    setPage(page < picks.length / perPageSize - 1 ? page + 1 : page);
  }, [page, perPageSize]);

  const onLeftClick = useCallback(() => {
    setPage(page > 0 ? page - 1 : page);
  }, [page]);

  useEffect(() => {
    if (width) {
      setPaerPageSize(width >= 900 ? 3 : 1);
    }
  }, [width]);

  //나중에 바꿔
  useEffect(() => {
    if (window) {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    getTravel();
  }, []);

  return (
    <MainContainer container>
      <Container sx={{ display: "flex" }}>
        <HeadContainer item sm={6} md={3}>
          <TitleContainer>
            <div className="sub">{"Editor's Pick"}</div>
            <div className="main">추천 여행지</div>
            <div className="content">간단한 설명이 들어갈 자리입니다.</div>
          </TitleContainer>
          <BtnContainer>
            <CustomButton onClick={onLeftClick}>{"<"}</CustomButton>
            <CustomButton onClick={onRightClick}>{">"}</CustomButton>
          </BtnContainer>
        </HeadContainer>
        <BodyContainer item sm={6} md={9}>
          <Grid container spacing={1}>
            {picks
              .slice(page * perPageSize, (page + 1) * perPageSize)
              .map((item, index) => (
                <MainEditorContent key={item.idx} {...item} />
              ))}
          </Grid>
        </BodyContainer>
      </Container>
    </MainContainer>
  );
};

const MainContainer = styled(Grid)`
  background: linear-gradient(0deg, #edeef8 30%, white 30%);
`;

const BodyContainer = styled(Grid)`
  display: -webkit-box;
  overflow-x: auto;
`;

const TitleContainer = styled.div`
  & .sub {
    color: gray;
  }
  & .main {
    font-size: 2rem;
    letter-spacing: -1.76px;
    letter-spacing: -0.66px;
  }
  & .content {
    font-size: 0.8rem;
  }
`;
const HeadContainer = styled(Grid)`
  // display: flex;
  display: block;
  // justify-content: space-between;
  // width: 160px;
  padding: 3rem;
  padding-bottom: 2.5rem;
`;
const BtnContainer = styled.div`
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

export default MainEditorPickContainer;
