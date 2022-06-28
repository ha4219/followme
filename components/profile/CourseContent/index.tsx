import ShadowTag from "@components/ShadowTag";
import styled from "@emotion/styled";
import { titleSummary, toBase64 } from "@helpers/programHelper";
import { Box, Grid, IconButton } from "@mui/material";
import { useCallback, useState, VFC } from "react";
import { ICourse } from "types/apiType";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { API } from "@src/API";
import { likeRecommendBoard, likeThemeBoard } from "api/board";
import Link from "next/link";

interface IProp {
  course: ICourse;
  likeCh: boolean;
}

const CourseContent: VFC<IProp> = ({ course, likeCh }) => {
  const loggedInId = useRecoilValue(idState);
  const [like, setLike] = useState(course.likeClicked ? 1 : 0);

  const onClickLike = useCallback(
    async (e) => {
      e.stopPropagation();
      // API.post(`/main/postLike/${course.idx}`, {
      //   id: loggedInId,
      // })
      //   .then(({ data }) => {
      //     console.log(data);
      //     setLike(!like);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      try {
        if (course.type) {
          const data = likeThemeBoard({
            id: loggedInId,
            idx: course.idx,
          });
        } else {
          const data = likeRecommendBoard({
            id: loggedInId,
            idx: course.idx,
          });
        }
        setLike(1 ^ like);
      } catch (e) {
        console.log(e);
      }
    },
    [like]
  );

  console.log(course);

  return (
    <Grid item xs={4} md={4} lg={4}>
      <Link
        href={`/${course.type ? "theme" : "recommend"}/${course.idx}`}
        passHref
      >
        <MainContainer>
          <PhotoContainer src={`${toBase64(course.mainImg)}`}>
            {likeCh && (
              <div className="topContainer">
                <span className="editorProgramPhotoBest">
                  {course.type ? "테마" : "추천"}
                </span>

                <IconButton
                  onClick={onClickLike}
                  sx={{ padding: 0, marginRight: 2, display: "flex" }}
                >
                  <div className="haertContainer">
                    {like ? (
                      <FavoriteIcon
                        className="fillHeart"
                        sx={{
                          width: 28,
                          height: 28,
                          alignItems: "center",
                          verticalAlign: "center",
                        }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        className="heart"
                        sx={{
                          width: 28,
                          height: 28,
                          alignItems: "center",
                          verticalAlign: "center",
                        }}
                      />
                    )}
                  </div>
                </IconButton>
              </div>
            )}
          </PhotoContainer>
          <div className="courseContent">
            <div className="courseTitle">{titleSummary(course.title)}</div>
            <div className="courseTags">
              {course.tags.slice(-3).map((item, index) => (
                <ShadowTag tag={item} key={index} />
              ))}
            </div>
          </div>
        </MainContainer>
      </Link>
    </Grid>
  );
};

type PhotoProps = {
  src: string;
};

const MainContainer = styled(Box)`
  overflow: hidden;

  & .courseContent {
    padding: 12px;
    & .courseTitle {
      font-size: 1.2rem;
      font-weight: bold;
    }

    & .courseTags {
      padding: 1rem 0;
      display: flex;
    }
  }
  :hover {
    color: #0068ff;
    cursor: pointer;
  }
`;

const PhotoContainer = styled.div<PhotoProps>`
  height: 30vh;
  background: url(${(props) => props.src}) no-repeat;
  border-radius: 12px;
  background-size: cover;

  

  :hover {
    background-color: #ffffff;
    opacity: 0.6;
  }

  & .topContainer {
    display: flex;
    justify-content: space-between;
    
    & .editorProgramPhotoBest {
      margin-left: 10px;
      margin-top: 10px;
      height: 20px;
      font-family: paybooc-Bold;
      color: #ffffff;
      font-size: 12px;
      line-height: 11px;
      background-color: #f93b1d;
      padding: 5px 10px 7px 10px;
      border-radius: 5px;
      font-weight: bold;
    }

    & .haertContainer {
      margin-top: 5px;
      & .heart {
        fill: white;
        z-index: 1;
      }

      & .fillHeart {
        fill: white;
        z-index: 1;
      }
    }
`;

export default CourseContent;
