import styled from "@emotion/styled";
import { Avatar, Button, Container, TextField } from "@mui/material";
import { API } from "@src/API";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyContent from "@components/ReplyContent";
import useInput from "@hooks/useInput";
import { IComment, ICourseDetail } from "types/apiType";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { toast } from "react-toastify";
import ShareButton from "@components/ShareButton";
import EditorDetailLeftLayout from "@components/editor/EditorDetailLeftLayout";
import ReviseDeleteButtons from "@components/ReviseDeleteButtons";
import ProgramHeader from "@components/ProgramHeader";
import { doRecommendLike } from "api/theme";
import {
  getThemeDetailBoard,
  insertThemeComment,
  likeThemeBoard,
} from "api/board";

const ThemeDetail = () => {
  const router = useRouter();
  // const { memberId } = getPayload();
  const [course, setCourse] = useState<ICourseDetail>();
  const [isLoading, setLoading] = useState(true);
  const [comments, setComments] = useState<any[]>([]);
  const [comment, setComment, onChangeComment] = useInput("");
  const [idx, setIdx] = useState<any>();
  const [like, setLike] = useState(0);
  const [likeCnt, setLikeCnt] = useState(0);
  const loggedInId = useRecoilValue(idState);

  const getDetail = async () => {
    const { id } = router.query;
    try {
      setIdx(id);

      if (id) {
        // const { data } = await API.post<ICourseDetail[]>(
        //   `/theme/postDetail/${id}`,
        //   {
        //     id: loggedInId,
        //   }
        // );
        const data = await getThemeDetailBoard({
          id: loggedInId,
          idx: id,
        });
        setLike(data[0].likeClicked ? 1 : 0);
        setLikeCnt(data[0].likeCnts);
        setCourse(data[0]);
        getComments(data[0].comments);
        // setComments(data[0].comments);
      }
    } catch (e) {
      console.log("router not ready", e);
    }
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

  const onSubmitComment = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        // const { data }: { data: { data: string } } = await API.post(
        //   `theme/themeBoards/insertReply/${idx}`,
        //   {
        //     id: loggedInId,
        //     content: comment,
        //   }
        // );
        const data = await insertThemeComment({
          id: loggedInId,
          idx: idx,
          content: comment,
        });
        if (data.data === "success") {
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
      } catch (e) {
        console.log("댓글 작성 실패", e);
        toast.error("댓글 작성 error");
      } finally {
        setComment("");
      }
    },
    [comment, idx]
  );

  const onClickLike = useCallback(
    async (e) => {
      e.stopPropagation();
      if (loggedInId) {
        likeThemeBoard({ idx: idx, id: loggedInId });
        if (like) {
          setLikeCnt(likeCnt - 1);
        } else {
          setLikeCnt(likeCnt + 1);
        }
        setLike(like ^ 1);
      }
    },
    [like, idx, likeCnt]
  );

  useEffect(() => {
    getDetail();
    // getComments();
    return () => setLoading(false);
  }, [router.isReady]);

  return (
    <Container maxWidth="lg">
      <Head>
        <title>{course?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {course && (
        <ProgramHeader title="테마여행">
          <EditorDetailLeftLayout
            tags={course.tags}
            season={course.season}
            region={course.region}
          >
            <TitleContainer>
              <div className="sub">
                <Avatar
                  alt="user"
                  // src={gravatar.url(course ? course.writer : "default", {
                  //   s: "28px",
                  //   d: "retro",
                  // })}
                  className="avatar"
                />
                <div className="title">{course?.title}</div>
              </div>
              <div className="btns">
                <span className="heartLabel"> {course.writer}</span>
                <Button className="heart" onClick={onClickLike}>
                  <span className="heartLabel"> &nbsp;{likeCnt}</span>
                  {like ? (
                    <FavoriteIcon
                      className="fillHeart"
                      sx={{
                        width: 18,
                        height: 18,
                        alignItems: "center",
                        verticalAlign: "center",
                      }}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className="fillNotHeart"
                      sx={{
                        width: 18,
                        height: 18,
                        alignItems: "center",
                        verticalAlign: "center",
                      }}
                    />
                  )}
                </Button>
                {/* <Button className="share" onClick={onClickShare}>
                  <ShareIcon
                    sx={{
                      width: 18,
                      height: 18,
                      alignItems: "center",
                      verticalAlign: "center",
                    }}
                  />
                </Button> */}
                <ShareButton
                  url={window.location.href}
                  user={loggedInId}
                  des={course.title}
                />
              </div>
            </TitleContainer>
            {course && (
              <ContentContainer
                dangerouslySetInnerHTML={{ __html: course.content }}
              />
            )}
            {course && course.writer === loggedInId && (
              // <ButtonContainer>
              //   <Button variant="contained">수정</Button>
              //   <Button variant="contained" color="error">
              //     삭제
              //   </Button>
              // </ButtonContainer>
              <ReviseDeleteButtons url="theme" id={loggedInId} idx={idx} />
            )}

            <ReplyContainer>
              <div className="replylabel">{`댓글  ${comments.length}`}</div>

              <form className="write" onSubmit={onSubmitComment}>
                <TextField
                  value={comment}
                  onChange={onChangeComment}
                  fullWidth
                  placeholder={
                    loggedInId.length
                      ? ""
                      : "댓글을 작성하려면 로그인 해주세요."
                  }
                />
                <Button type="submit" className="btn" variant="contained">
                  등록
                </Button>
              </form>
              <div className="reply">
                {comments.map((item, index) => (
                  <ReplyContent type={1} key={index} {...item} boardIdx={idx} />
                ))}
              </div>
            </ReplyContainer>
          </EditorDetailLeftLayout>
        </ProgramHeader>
      )}
    </Container>
  );
};

const TitleContainer = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid #3e3e3e;
  justify-content: space-between;
  align-items: center;

  & .sub {
    display: flex;
    align-items: center;

    & .avatar {
      margin-right: 1rem;
    }
  }

  & .heartLabel {
    font-weight: 300;
    font-size: 0.8rem;
    margin-right: 0.5rem;
  }
  & .fillHeart {
    color: #ff4e40;
  }
  & .fillNotHeart {
    color: #ff4e40;
  }
`;

const ContentContainer = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #c7cacf;

  & img {
    width: 100%;
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
  margin-top: 3rem;

  & .replylabel {
    margin-bottom: 1rem;
    font-weight: bold;
  }

  & .write {
    display: flex;

    & .btn {
      height: 44px;
      margin-left: 2rem;
    }
  }
`;

export default ThemeDetail;
