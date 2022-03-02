import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useState, VFC } from "react";
import { ICourse } from "types/apiType";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { contentSummary, titleSummary } from "@helpers/programHelper";

const MainEditorContent: VFC<ICourse> = ({
  idx,
  mainImg,
  writer,
  title,
  shortContent,
  tags,
  likeCnts,
  views,
  createdAt,
  isLocal,
  likeClicked,
  region,
  schedule,
  season,
  updatedAt,
}) => {
  const router = useRouter();
  const onClickProgram = useCallback((id) => {
    router.push(`/editor/${idx}`);
  }, []);

  const toBase64 = (arr) => {
    return Buffer.from(arr);
  };
  return (
    <Grid item sm={12} md={4}>
      <WrapperContainer src={`${toBase64(mainImg.data)}`}>
        <MainContainer>
          <div className="tag">
            <span>{region}</span>
          </div>
          <div className="title">
            <span>{titleSummary(title)}</span>
          </div>
          <div className="content">
            <span>{contentSummary(shortContent)}</span>
          </div>
          <CustomButton onClick={onClickProgram}>바로가기</CustomButton>
        </MainContainer>
      </WrapperContainer>
    </Grid>
  );
};

const WrapperContainer = styled.div`
  background: url(${(props: { src: string }) => props.src}) no-repeat;
  border-radius: 5px;
  background-size: cover;
  height: 50vh;
`;

const MainContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  text-align: center;
  padding: 5rem 1rem;
  border-radius: 5px;

  :hover {
    background: #323fb2b3;
  }

  & .tag {
    display: block;

    & span {
      background-color: #ff9016;
      padding: 0.3rem 2rem;
      border-radius: 14px;
    }
  }
  & .title {
    padding-top: 1rem;
    display: block;
    & span {
      font-size: 1.4rem;
    }
  }
  & .content {
    padding-top: 1rem;

    display: block;
    & span {
    }
  }
`;

const CustomButton = styled(Button)`
  // display: block;
  width: 130px;
  margin-top: auto;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;

export default MainEditorContent;
