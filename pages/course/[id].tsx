import CourseLeftLayout from "@components/course/CourseLeftLayout";
import { COURSES, ICourseData, REPLYDATA } from "@data/CourseData";
import { Avatar, Box, Button, Container, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import DateRangeIcon from "@mui/icons-material/DateRange";
import useInput from "@hooks/useInput";
import ReplyContent from "@components/ReplyContent";
import { IComment } from "types/apiType";
import { toast } from "react-toastify";
import ShareButton from "@components/ShareButton";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";

const CourseDetail = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [course, setCourse] = useState<ICourseData>();
  const [comments, setComments] = useState<IComment[]>([]);
  const [comment, setComment, onChangeComment] = useInput("");
  const [like, setLike] = useState(false);
  const loggedInId = useRecoilValue(idState);
  const onSubmitComment = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        // const { data }: { data: { data: string } } = await API.post(
        //   `main/travelBoards/insertReply/${idx}`,
        //   {
        //     id: "admin",
        //     content: comment,
        //   }
        // );
        // if (data.data === "success") {
        toast.success("댓글 작성 성공");
        setComments([
          ...comments,
          {
            id: "admin",
            content: comment,
            createdAt: new Date().toISOString(),
          },
        ]);
        // }
      } catch (e) {
        console.log("post comment error", e);
        toast.error("댓글 작성 실패");
      } finally {
        setComment("");
      }
    },
    [comment]
  );

  const getCourse = async () => {
    const { id } = router.query;
    setCourse(COURSES[Number(id)]);
  };

  const getComments = async () => {
    const { id } = router.query;

    setComments(REPLYDATA.slice(0, COURSES[Number(id)].replyCnt));
  };

  const onClickHeart = () => {
    //TODO
    setLike(!like);
  };

  const onClickShare = () => {
    //TODO
  };

  useEffect(() => {
    getCourse();
    getComments();
  }, [router.isReady]);

  return (
    <Container maxWidth="lg">
      <Head>
        <title>{course ? course.title : "detail"}</title>
      </Head>
      <CourseLeftLayout>
        <MainContainer py={2}>
          {course && (
            <>
              <div className="titleContainer">
                <Avatar
                  alt="user"
                  // src={gravatar.url(user, { s: "28px", d: "retro" })}
                  className="avatar"
                />
                <div className="subContainer">
                  <div className="title">{course.title}</div>
                  <div className="dateContainer">
                    <div className="start">
                      <span className="bold">출발 예정일</span>
                      {course.start}
                      <DateRangeIcon />
                    </div>
                    <div className="end">
                      <span className="bold">도착 예정일</span>
                      {course.end}
                      <DateRangeIcon />
                    </div>
                  </div>
                </div>
                <div className="btns">
                  <Button className="heart" onClick={onClickHeart}>
                    {like ? (
                      <FavoriteIcon
                        className="fillHeart"
                        sx={{
                          width: 15,
                          height: 15,
                          alignItems: "center",
                          verticalAlign: "center",
                        }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        className="fillNotHeart"
                        sx={{
                          width: 15,
                          height: 15,
                          alignItems: "center",
                          verticalAlign: "center",
                        }}
                      />
                    )}
                  </Button>
                  {/* <Button className="share" onClick={onClickShare}>
                    <ShareIcon />
                  </Button> */}
                  <ShareButton
                    url={window.location.href}
                    des={course.title}
                    user={loggedInId}
                  />
                </div>
              </div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: course.content }}
              />
              {/* {course && course.writer === memberId && (
          <ButtonContainer>
            <Button variant="contained">수정</Button>
            <Button variant="contained" color="error">
              삭제
            </Button>
          </ButtonContainer>
        )} */}
              <ReplyContainer>
                <div className="replyCnt">{`댓글: ${course.replyCnt}`}</div>
                <form className="write" onSubmit={onSubmitComment}>
                  <TextField
                    id=""
                    label=""
                    placeholder="내용을 입력해주세요."
                    value={comment}
                    onChange={onChangeComment}
                    fullWidth
                  />
                  <Button type="submit" className="btn" variant="contained">
                    등록
                  </Button>
                </form>
                <div className="reply">
                  {comments.map((item, index) => (
                    <ReplyContent key={index} {...item} />
                  ))}
                </div>
              </ReplyContainer>
            </>
          )}
        </MainContainer>
      </CourseLeftLayout>
    </Container>
  );
};

const MainContainer = styled(Box)`
  & .titleContainer {
    display: flex;
    padding: 2rem 0;
    border-bottom: 1px solid #3e3e3e;
    & .avatar {
      margin-right: 1rem;
    }
    & .subContainer {
      display: block;
      & .title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 1rem;
      }
      & .dateContainer {
        display: flex;
        align-items: center;

        & div {
          display: flex;
          align-items: center;
          margin-right: 1rem;
        }
      }
    }
    & .btns {
      display: flex;
      align-items: end;

      & .fillHeart {
        color: #ff4e40;
        align-items: end;
      }
      & .fillNotHeart {
        align-items: end;
        color: #ff4e40;
      }
      & .share {
        align-items: end;
      }
    }
  }
  & .content {
    width: 100%;
    padding: 2rem;
    border-bottom: 1px solid #dcdce6;
  }

  & .bold {
    font-weight: bold;
    margin-right: 0.3rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: center;

  & button {
    margin: 1rem;
  }
`;

const ReplyContainer = styled.div`
  & .write {
    display: flex;

    & .btn {
      height: 44px;
      margin-left: 2rem;
    }
  }

  & .replyCnt {
    font-weight: bold;
    padding: 1rem 0;
  }
`;

export default CourseDetail;