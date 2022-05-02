import styled from "@emotion/styled";
import { Avatar, Box, Button, Grid, IconButton } from "@mui/material";
import { useRouter } from "next/router";
import { useCallback, useState, VFC } from "react";
import { ICourse } from "types/apiType";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { contentSummary, titleSummary, toBase64 } from "@helpers/programHelper";
import ShareButton from "@components/ShareButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";

const EditorProgram: VFC<ICourse> = ({
  idx,
  mainImg,
  type,
  writer,
  fk_user_boards_id,
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
  const onClickLike = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      // setLike(like ? like ^ 1 : 0);
    },
    [like]
  );

  return (
    <EditorContainer item xs={6} sm={6} md={4} lg={4}>
      <Link href={type ? `/theme/${idx}` : `/recommend/${idx}`} passHref>
        <div>
          <div className="editorProgramPhotoWrapper">
            <EditorProgramPhoto
              className="editorProgramPhoto"
              src={`${toBase64(mainImg)}`}
            >
              <div className="editorProgramPhotoBest">BEST</div>
            </EditorProgramPhoto>
          </div>
          <div className="editorProgramBody">
            <div className="editorProgramProps">
              <div className="editorProgramLeft">
                <IconButton>
                  <Avatar
                    alt="user"
                    src={`${process.env.NEXT_PUBLIC_S3URL}/profile/${fk_user_boards_id}`}
                    // src={gravatar.url(user, { s: "28px", d: "retro" })}
                    className="avatar"
                  />
                </IconButton>
                <span className="editorProgramWriter">{fk_user_boards_id}</span>
              </div>
              <div className="editorProgramRight">
                <ShareButton
                  url={window.location.href}
                  // user={loggedInId}
                  // des={course.title}
                />
                <span className="editorProgramLikeCnt">{likeCnts}</span>
                <IconButton onClick={onClickLike}>
                  {like ? (
                    <FavoriteIcon
                      className="fillHeart"
                      sx={{
                        width: 20,
                        height: 20,
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className="heart"
                      sx={{ width: 20, height: 20 }}
                    />
                  )}
                </IconButton>
              </div>
            </div>
            <div className="editorProgramTitle">{title}</div>
            <div className="editorProgramContent">{shortContent}</div>
            <div className="editorProgramTags">
              {(tags ? tags : []).map((item, index) => (
                <span className="editorProgramTag" key={index}>
                  #{item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </EditorContainer>
  );
};

const EditorProgramPhoto = styled.div`
  background: url(${(props: { src: string }) => props.src}) no-repeat;
  & .editorProgramPhotoBest {
    margin-left: 10px;
    margin-top: 10px;
    font-family: paybooc-Bold;
    color: #ffffff;
    font-size: 12px;
    line-height: 11px;
    background-color: #f93b1d;
    padding: 5px 10px 7px 10px;
    border-radius: 5px;
    font-weight: bold;
  }
`;

const EditorContainer = styled(Grid)`
  cursor: pointer;
  font-family: paybooc-Light;

  & .editorProgramPhotoWrapper {
    width: 100%;
    height: 20rem;

    & .editorProgramPhoto {
      width: 100%;
      background-size: cover;
      position: relative;
      height: 20rem;
      border-radius: 10px;

      & .editorProgramPhotoBest {
        position: absolute;
      }
    }
  }

  & .editorProgramBody {
    & .editorProgramProps {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;

      & .editorProgramLeft {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
      }

      & .editorProgramRight {
        display: flex;
        padding-right: 1rem;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
      }

      & .heart {
        fill: #ff1d25;
      }

      & .fillHeart {
        fill: #ff1d25;
      }

      & button {
        padding: 0;
      }

      & .editorProgramWriter {
        padding-left: 5px;
        font-family: paybooc-Bold;
      }

      & .editorProgramLikeCnt {
        border-left: 1px solid #d8d8d8;
        padding: 0 1rem;
        font-size: 0.8rem;
        line-height: 15px;
      }
    }

    & .editorProgramTitle {
      font-family: paybooc-Bold;
      font-size: 1.3rem;
      height: 3rem;
    }

    & .editorProgramContent {
      height: 3rem;
      line-height: 1.33;
      letter-spacing: -0.83;
    }

    & .editorProgramTags {
      & .editorProgramTag {
        display: inline-block;
        font-size: 0.8rem;
        line-height: 0.92;
        padding-right: 8px;
      }
    }
  }
`;

export default EditorProgram;
