import CourseLeftLayout from "@components/course/CourseLeftLayout";
import { Avatar, Box, Button, Container, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DateRangeIcon from "@mui/icons-material/DateRange";
import useInput from "@hooks/useInput";
import ReplyContent from "@components/ReplyContent";
import { ICourseDetail } from "types/apiType";
import { toast } from "react-toastify";
import ShareButton from "@components/ShareButton";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import ReviseDeleteButtons from "@components/ReviseDeleteButtons";
import { getCourseDetailBoard, insertCourseComment } from "api/board";

const CourseDetail = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [course, setCourse] = useState<ICourseDetail>();
  const [comments, setComments] = useState<any[]>([]);
  const [comment, setComment, onChangeComment] = useInput("");
  const [like, setLike] = useState(false);
  const [idx, setIdx] = useState<any>();
  const loggedInId = useRecoilValue(idState);
  const onSubmitComment = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const data = await insertCourseComment({
          id: loggedInId,
          content: comment,
          idx: idx,
        });
        if (data.data === "success") {
          toast.success("댓글 작성 성공");
          setComments([
            ...comments,
            {
              idx: "999",
              fk_user_comments_id: loggedInId,
              content: comment,
              createdAt: new Date().toISOString(),
              childrenReply: [],
            },
          ]);
        }
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
    setIdx(id);

    if (id) {
      // const { data } = await API.get<ICourseDetail[]>(
      //   `/course/courseBoards/${id}`,
      //   {
      //     // id: loggedInId,
      //   }
      // );
      const data = await getCourseDetailBoard({
        id: loggedInId,
        idx: id,
      });
      setCourse(data[0]);
      // if (data[0].comments) {
      //   setComments(data[0].comments);
      // }
      // setLike(data[0].)
      getComments(data[0].comments);
      // setComments(data[0].comments);
    }

    // setCourse(COURSES[Number(id)]);
  };

  const onClickHeart = () => {
    //TODO
    toast.info("추가 예정입니다");
    setLike(!like);
  };

  const getComments = (comments) => {
    const parent = comments.filter((item) => !item.recomment);
    const child = comments.filter((item) => item.recomment);
    const res = parent.map((item) => {
      const resTmp = child.filter((item1) => item.idx === item1.recomment);
      return { ...item, childrenReply: resTmp };
    });

    setComments(res);

    // const { id } = router.query;
    // try {
    //   if (id) {
    //     const { data } = await API.get<IComment[]>(
    //       `/theme/themeBoards/reply/${id}`,
    //       {}
    //     );
    //     setComments(data);
    //   }
    // } catch (e) {
    //   console.log("router not ready", e);
    // }
    // setIdx(id);
  };

  useEffect(() => {
    getCourse();
    // getComments();
  }, []);

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
                <div className="subsub">
                  <Avatar
                    alt="user"
                    // src={gravatar.url(user, { s: "28px", d: "retro" })}
                    className="avatar"
                  />
                  <div className="subContainer">
                    <div className="title">{course.title}</div>
                  </div>
                </div>
                <div className="btns">
                  {/*
                  <span className="heartLabel"> {course.writer}</span>
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
                   <Button className="share" onClick={onClickShare}>
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
                className="detailContent"
                dangerouslySetInnerHTML={{ __html: course.content }}
              />
              {course && course.writer === loggedInId && (
                // <ButtonContainer>
                //   <Button variant="contained">수정</Button>
                //   <Button variant="contained" color="error">
                //     삭제
                //   </Button>
                // </ButtonContainer>
                <ReviseDeleteButtons url="course" id={loggedInId} idx={idx} />
              )}
              <ReplyContainer>
                <div className="replyCnt">{`댓글: ${
                  course.comments ? course.comments.length : 0
                }`}</div>
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
                    <ReplyContent
                      key={index}
                      type={2}
                      {...item}
                      boardIdx={idx}
                    />
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

// <div className="dateContainer">
//   <div className="start">
//     <span className="bold">출발 예정일</span>
//     {/* {course.start} */}
//     <DateRangeIcon />
//   </div>
//   <div className="end">
//     <span className="bold">도착 예정일</span>
//     {/* {course.end} */}
//     <DateRangeIcon />
//   </div>
// </div>;

const MainContainer = styled(Box)`
  & .dateContainer {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & div {
      display: flex;
      align-items: center;
      margin-right: 1rem;
    }
  }

  & .titleContainer {
    display: flex;
    padding: 2rem 0;
    justify-content: space-between;

    border-bottom: 1px solid #3e3e3e;

    & .subsub {
      display: flex;
    }
    & .avatar {
      margin-right: 1rem;
    }
    & .subContainer {
      display: flex;
      flex-direction: column;
      & .title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: auto;
        margin-top: auto;
      }
    }

    & .btns {
      display: flex;
      align-items: end;
      & .heartLabel {
        font-weight: 300;
        font-size: 0.8rem;
        margin-right: 0.5rem;
      }

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
  & .detailContent {
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
