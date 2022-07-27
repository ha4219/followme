import CourseLeftLayout from "@components/course/CourseLeftLayout";
import { Avatar, Box, Button, Container, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import useInput from "@hooks/useInput";
import ReplyContent from "@components/ReplyContent";
import { ICourseDetail } from "types/apiType";
import { toast } from "react-toastify";
import ShareButton from "@components/ShareButton";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import ReviseDeleteButtons from "@components/ReviseDeleteButtons";
import {
  getCommentsAll,
  getCourseDetailBoard,
  insertCourseComment,
} from "api/board";

const CourseDetail = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [course, setCourse] = useState<ICourseDetail>();
  const [comments, setComments] = useState<any[]>([]);
  const [comment, setComment, onChangeComment] = useInput("");
  const [like, setLike] = useState(false);
  const [idx, setIdx] = useState<any>();
  const loggedInId = useRecoilValue(idState);
  const [tmp, setTmp] = useState(1);
  const updateComment = () => {
    setTmp(tmp ^ 1);
  };

  useEffect(() => {
    if (idx) {
      getComments({ idx });
    }
  }, [tmp, idx]);

  const getComments = async ({ idx }) => {
    const comments = await getCommentsAll({ idx: idx, type: 2 });
    const parent = comments.filter((item) => !item.recomment);
    const child = comments.filter((item) => item.recomment);
    const res = parent.map((item) => {
      const resTmp = child.filter((item1) => item.idx === item1.recomment);
      return { childrenReply: resTmp, ...item };
    });
    setComments(res);
  };

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
          // setComments([
          //   ...comments,
          //   {
          //     idx: "999",
          //     fk_user_comments_id: loggedInId,
          //     content: comment,
          //     createdAt: new Date().toISOString(),
          //     childrenReply: [],
          //   },
          // ]);
          updateComment();
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
      getComments({ idx: id });
      // setComments(data[0].comments);
    }

    // setCourse(COURSES[Number(id)]);
  };

  useEffect(() => {
    getCourse();
    // getComments();
  }, []);

  return (
    <MainContainerWrapper maxWidth="lg">
      <Head>
        <title>{course ? course.title : "detail"}</title>
      </Head>
      <Box className="editorPath" py={1}>
        <div className="MainContainerPathIcon">
          <Image
            src="/icons/icon.home.png"
            width="18px"
            height="18px"
            alt="homeIcon"
          />
        </div>
        <span>
          <span className="MainContainerPathColor">홈</span>
          <span className="dividor">|</span>
          {"코스를 부탁해"}
        </span>
      </Box>

      <Box className="editorTitle">{"코스를 부탁해"}</Box>
      <CourseLeftLayout>
        <MainContainer py={2}>
          {course && (
            <>
              <div className="titleContainer">
                <div className="subsub">
                  <Avatar
                    alt="user"
                    src={`${process.env.NEXT_PUBLIC_S3URL}/profile/${course.writer}`}
                    // src={gravatar.url(user, { s: "28px", d: "retro" })}
                    className="avatar"
                  />
                  <div className="subContainer">
                    <div className="title">{course.title}</div>
                  </div>
                </div>
                <div className="btns">
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
                <ReviseDeleteButtons url="course" id={loggedInId} idx={idx} />
              )}
              <ReplyContainer>
                <div className="replyCnt">{`댓글: ${
                  course.comments ? course.comments.length : 0
                }`}</div>
                <form className="write" onSubmit={onSubmitComment}>
                  <TextField
                    id=""
                    placeholder="내용을 입력해주세요."
                    value={comment}
                    onChange={onChangeComment}
                    fullWidth
                  />
                  <Button
                    disabled={!loggedInId || !comment}
                    type="submit"
                    className="btn"
                    variant="contained"
                  >
                    등록
                  </Button>
                </form>
                <div className="reply">
                  {comments.map((item, index) => (
                    <ReplyContent
                      key={index}
                      type={2}
                      update={updateComment}
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
    </MainContainerWrapper>
  );
};
const MainContainerWrapper = styled(Container)`
  & .searchContainer {
    border-radius: 27px;
  }

  & .MainContainerPathIcon {
    height: 21px;
    margin-right: 6px;
  }
  & .editorPath {
    display: flex;
    font-size: 0.9rem;
    font-family: paybooc-Medium;

    & .MainContainerPathColor {
      color: #888888;
    }
    & .dividor {
      padding: 1rem;
    }
  }
  & .editorTitle {
    font-family: paybooc-Bold;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
  }
`;

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
