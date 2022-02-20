import TagContainer from "@components/TagContainer";
import styled from "@emotion/styled";
import { Avatar, Box, Button, Grid } from "@mui/material";
import { useCallback, useState, VFC } from "react";
import gravatar from "gravatar";
import { contentSummary, titleSummary } from "@helpers/programHelper";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ICourse } from "types/apiType";
import ShareButton from "@components/ShareButton";
import { API } from "@src/API";
import { idState } from "@store/auth";
import { useRecoilValue } from "recoil";
import { useRouter } from "next/router";

const MainThemeContent: VFC<ICourse> = ({
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
  const [like, setLike] = useState(likeClicked);
  const loggedInId = useRecoilValue(idState);
  const router = useRouter();

  const onClickProgram = useCallback((id) => {
    router.push(`/theme/${idx}`);
  }, []);

  const onClickLike = useCallback(
    async (e) => {
      e.stopPropagation();
      API.post(`/theme/postLike/${idx}`, {
        id: loggedInId,
      })
        .then(({ data }) => {
          console.log(data);
          setLike(like ? 0 : 1);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [like]
  );

  const toBase64 = (arr) => {
    return Buffer.from(arr);
  };

  return (
    <MainContainer md={3} sm={3} xs={3} lg={3} item>
      <Box sx={{ cursor: "pointer" }} onClick={onClickProgram}>
        <PhotoContainer src={`${toBase64(mainImg.data)}`}>
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
          <div className="content">{contentSummary(shortContent)}</div>
        </ContentContainer>
      </Box>
      <BottomContainer>
        <Button className="heart" onClick={onClickLike}>
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
          <div className="heartTxt">{likeCnts}</div>
        </Button>
        <ShareButton
          url={`${process.env.NEXT_PUBLIC_DEPLOYURL}/theme/${idx}`}
        />
        {/* <Button className="share" onClick={onClickShare}>
          <ShareIcon />
        </Button> */}
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
    font-weight: bold;
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
