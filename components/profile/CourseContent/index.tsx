import ShadowTag from "@components/ShadowTag";
import styled from "@emotion/styled";
import { titleSummary } from "@helpers/programHelper";
import { Box, Grid, IconButton } from "@mui/material";
import { VFC } from "react";
import { ICourse } from "types/apiType";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface IProp {
  course: ICourse;
  like: boolean;
}

const CourseContent: VFC<IProp> = ({ course, like }) => {
  const toBase64 = (arr) => {
    return Buffer.from(arr);
  };

  const onClickLike = () => {
    console.log("todo");
  };

  return (
    <Grid item xs={4} md={4} lg={4}>
      <MainContainer>
        <PhotoContainer src={`${toBase64(course.mainImg.data)}`}>
          {like && (
            <div className="topContainer">
              <IconButton
                onClick={onClickLike}
                sx={{ padding: 0, marginRight: 2, display: "flex" }}
              >
                <div className="haertContainer">
                  {true ? (
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
                      sx={{ width: 28, height: 28 }}
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
    justify-content: right;
    
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
