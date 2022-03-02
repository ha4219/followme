import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { API } from "@src/API";
import { idState } from "@store/auth";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ICourse } from "types/apiType";
import MainEditorContent from "../MainEditorContent";

const MainEditorPickContainer = () => {
  const [picks, setPicks] = useState<ICourse[]>([]);
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
    setPicks(data.slice(-9));
  };

  useEffect(() => {
    getTravel();
  }, []);

  return (
    <MainContainer>
      <HeadContainer>
        <TitleContainer>
          <div className="sub">{"Editor's Pick"}</div>
          <div className="main">추천 여행지</div>
          <div className="content">간단한 설명이 들어갈 자리입니다.</div>
        </TitleContainer>
        {/* <BtnContainer>
          <CustomButton>{"<"}</CustomButton>
          <CustomButton>{">"}</CustomButton>
        </BtnContainer> */}
      </HeadContainer>
      <BodyContainer>
        {picks.map((item, index) => (
          <MainEditorContent key={item.idx} {...item} />
        ))}
      </BodyContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  background: linear-gradient(0deg, #edeef8 30%, white 30%);
`;

const BodyContainer = styled.div`
  display: -webkit-box;
  overflow-x: auto;
`;

const TitleContainer = styled.div`
  width: 200px;
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
const HeadContainer = styled.div`
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
