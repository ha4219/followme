import TagContainer from "@components/TagContainer";
import styled from "@emotion/styled";
import { Avatar, Button, Grid } from "@mui/material";
import { useCallback, useState, VFC } from "react";
import gravatar from "gravatar";
import { contentSummary, titleSummary } from "@helpers/programHelper";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

interface Props {
  title: string;
  tags: string[];
  writer: string;
  content: string;
  src: string;
  heartCnt: number;
}

const MainThemeContent: VFC<Props> = ({
  title,
  tags,
  writer,
  content,
  src,
  heartCnt,
}) => {
  const [like, setLike] = useState(false);

  const onClick = useCallback(() => {
    setLike(!like);
  }, [like]);

  const onClickShare = useCallback(() => {
    console.log("share");
  }, []);

  return (
    <MainContainer md={3} item>
      <PhotoContainer src={src}>
        <span className="title">{titleSummary(title)}</span>
      </PhotoContainer>
      <TagContainer tags={tags} />
      <ContentContainer>
        <div className="avatar">
          <Avatar
            alt="user"
            src={gravatar.url(writer, { s: "28px", d: "retro" })}
          />
        </div>
        <div className="content">{contentSummary(content)}</div>
      </ContentContainer>
      <BottomContainer>
        <Button className="heart" onClick={onClick}>
          {like ? (
            <FavoriteIcon
              className="fillHeart"
              sx={{
                width: 22,
                height: 22,
                alignItems: "center",
                verticalAlign: "center",
              }}
            />
          ) : (
            <FavoriteBorderIcon
              className="fillNotHeart"
              sx={{
                width: 22,
                height: 22,
                alignItems: "center",
                verticalAlign: "center",
              }}
            />
          )}
          <div className="heartTxt">{heartCnt}</div>
        </Button>
        <Button className="share" onClick={onClickShare}>
          <ShareIcon />
        </Button>
      </BottomContainer>
    </MainContainer>
  );
};

const MainContainer = styled(Grid)`
  :hover {
    color: #00a0e0;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 327px;
  background: url(${(props: { src: string }) => props.src}) no-repeat;
  padding: 0 1rem;
  

  & .title {
    padding: 0.2rem;
    font-size: 1.1rem;
    align-self:flex-end
    display: inline-flex;
    background-color: #ffffff;
  }
`;

const BottomContainer = styled.div`
  font-size: 0.8rem;
  display: flex;
  color: black;
  & .heart {
    display: flex;
    & .heartTxt {
      margin-left: 0.5rem;
      font-weight: bold;
    }
    & .fillHeart {
      color: #f93b1d;
    }
    & .fillNotHeart {
      color: #f93b1d;
    }
  }

  & .share {
    color: #b9b9b9;
  }
`;

const ContentContainer = styled.div`
  display: inline-flex;
  border-bottom: 1px solid #d8d8d8;
  padding: 1rem 0;
  & .avatar {
  }
  & .content {
    padding: 0 1rem;
  }
`;
// background: url(${(props: { src: string }) => props.src}) no-repeat;

export default MainThemeContent;
