import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { ICourse } from "types/apiType";
import { contentSummary, titleSummary, toBase64 } from "@helpers/programHelper";
import Link from "next/link";
import { VFC } from "react";

const MainEditorContent: VFC<ICourse> = ({
  idx,
  mainImg,
  type,
  title,
  shortContent,
  region,
}) => {
  return (
    <Grid item xs={6} sm={6} md={4}>
      <WrapperContainer src={`${toBase64(mainImg)}`}>
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
          <Link href={type ? `/theme/${idx}` : `/recommend/${idx}`} passHref>
            <CustomButton>바로가기</CustomButton>
          </Link>
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
  background: rgba(0, 0, 0, 0.5);

  :hover {
    background: #323fb2b3;
  }

  & .tag {
    display: block;

    & span {
      background-color: #ff9016;
      padding: 0.3rem 2rem;
      border-radius: 20px;
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
