import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, VFC } from "react";

interface Props {
  region: string;
  title: string;
  src: string;
  content: string;
  link: string;
}

const MainEditorContent: VFC<Props> = ({
  region,
  title,
  content,
  link,
  src,
}) => {
  const router = useRouter();
  const onClick = useCallback(() => {
    router.push(link);
  }, [link]);

  return (
    <MainContainer url={src}>
      <div className="tag">
        <span>{region}</span>
      </div>
      <div className="title">
        <span>{title}</span>
      </div>
      <div className="content">
        <span>{content}</span>
      </div>
      <CustomButton onClick={onClick}>바로가기</CustomButton>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 346px;
  display: block;
  background: url(${(props: { url: string }) => props.url}) no-repeat;
  border-radius: 5px;
  color: #ffffff;
  text-align: center;
  padding: 5rem;

  :hover {
    background-color: #ffffff;
    opacity: 0.6;
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
  margin-top: 3rem;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 5px;
`;

export default MainEditorContent;
