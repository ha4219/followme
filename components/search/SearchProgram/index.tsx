import ShareButton from "@components/ShareButton";
import styled from "@emotion/styled";
import { toBase64 } from "@helpers/programHelper";
import { Avatar, Grid, IconButton } from "@mui/material";
import { idState } from "@store/auth";
import Link from "next/link";
import { useCallback, useState } from "react";
import { useRecoilValue } from "recoil";
import { ICourse } from "types/apiType";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { contentSummary, titleSummary } from "@helpers/programHelper";

const SearchProgram = ({
  idx,
  mainImg,
  writer,
  title,
  shortContent,
  tags,
  likeCnts,
  likeClicked,
  type,
}: ICourse) => {
  const [like, setLike] = useState<number>(likeClicked ? likeClicked : 0);
  const [likeCnt, setLikeCnt] = useState(likeCnts ? likeCnts : 0);
  const id = useRecoilValue(idState);
  const onClickLike = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (id) {
        // likeThemeBoard({ idx, id });
        if (like) {
          setLikeCnt(likeCnt - 1);
        } else {
          setLikeCnt(likeCnt + 1);
        }
        setLike(like ^ 1);
      }
    },
    [like]
  );

  return (
    <Link href={type ? `/theme/${idx}` : `/recommend/${idx}`} passHref>
      <EditorContainer item xs={6} sm={6} md={4} lg={4}>
        <div className="editorProgramPhotoWrapper">
          <img
            className="editorProgramPhoto"
            src={`${toBase64(mainImg)}`}
            alt={title}
          />
        </div>
        <div className="editorProgramBody">
          <div className="editorProgramProps">
            <div className="editorProgramLeft">
              <IconButton>
                <Avatar
                  alt="user"
                  // src={gravatar.url(user, { s: "28px", d: "retro" })}
                  className="avatar"
                />
              </IconButton>
              <span className="editorProgramWriter">{writer}</span>
            </div>
            <div className="editorProgramRight">
              <ShareButton
                url={window.location.href}
                // user={loggedInId}
                // des={course.title}
              />
              <span className="editorProgramLikeCnt">{likeCnt}</span>
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
          <div className="editorProgramTitle">{titleSummary(title)}</div>
          <div className="editorProgramContent">
            {contentSummary(shortContent)}
          </div>
          <div className="editorProgramTags">
            {(tags ? tags : []).map((item, index) => (
              <span className="editorProgramTag" key={index}>
                #{item}
              </span>
            ))}
          </div>
        </div>
      </EditorContainer>
    </Link>
  );
};

const EditorContainer = styled(Grid)`
  cursor: pointer;
  font-family: paybooc-Light;

  & .editorProgramPhotoWrapper {
    width: 100%;
    height: 20rem;

    & .editorProgramPhoto {
      width: 100%;
      background-size: cover;
      height: 20rem;
      border-radius: 10px;
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
      }
    }

    & .editorProgramTitle {
      font-family: paybooc-Bold;
      font-size: 1.3rem;
      height: 3rem;
    }

    & .editorProgramContent {
      height: 4rem;
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

export default SearchProgram;
