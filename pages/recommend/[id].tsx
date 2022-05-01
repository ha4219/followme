import styled from "@emotion/styled";
import { Avatar, Button, Container, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ReplyContent from "@components/ReplyContent";
import useInput from "@hooks/useInput";
import { ICourseDetail } from "types/apiType";
import { useRecoilState, useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { toast } from "react-toastify";
import ShareButton from "@components/ShareButton";
import EditorDetailLeftLayout from "@components/editor/EditorDetailLeftLayout";
import ReviseDeleteButtons from "@components/ReviseDeleteButtons";
import ProgramHeader from "@components/ProgramHeader";
import {
  getRecommendDetailBoard,
  insertRecommentComment,
  likeRecommendBoard,
  getCommentsAll,
} from "api/board";
import { enterPickState } from "@store/map";
import MapDialog from "@components/map/MapDialog";

const RecommendDetail = () => {
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
  const [tmp, setTmp] = useState(1);
  const [enterPick, setEnterPick] = useRecoilState(enterPickState);
  const [show, setShow] = useState(false);

  const getDetail = async () => {
    const { id } = router.query;
    try {
      setIdx(id);

      if (id) {
        // const { data } = await API.post<ICourseDetail[]>(
        //   `/recommend/postDetail/${id}`,
        //   {
        //     id: loggedInId,
        //   }
        // );
        const data = await getRecommendDetailBoard({
          id: loggedInId,
          idx: id,
        });
        setLike(data[0].likeClicked ? 1 : 0);
        setLikeCnt(data[0].likeCnts);
        setCourse(data[0]);
        // setComments(data[0].comments);
        getComments({ idx: id });
      }
    } catch (e) {
      console.log("router not ready", e);
    }
  };

  const getComments = async ({ idx }) => {
    const comments = await getCommentsAll({ idx: idx, type: 0 });
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
        // const { data }: { data: { data: string } } = await API.post(
        //   `recommend/recommendBoards/insertReply/${idx}`,
        //   {
        //     id: loggedInId,
        //     content: comment,
        //   }
        // );
        const data = await insertRecommentComment({
          id: loggedInId,
          content: comment,
          idx: idx,
        });
        if (data.data === "success") {
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
          setTmp(tmp ^ 1);
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
        likeRecommendBoard({ idx: idx, id: loggedInId });
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

  const updateComment = () => {
    setTmp(tmp ^ 1);
  };

  useEffect(() => {
    if (idx) {
      getComments({ idx });
    }
  }, [tmp, idx]);
  const onCheck = (value) => {
    try {
      const [idx, id] = value.split(" ");
      console.log(idx, id);

      if (!idx) {
        return false;
      }
      if (!id) {
        return false;
      }
      if (Number("d") == Number(idx)) {
        return false;
      }
      setEnterPick([Number(idx), id]);
      return true;
    } catch (e) {}
    return false;
  };

  const onClick = (e) => {
    if (!onCheck(e.target.className)) return;
    setShow(true);
  };

  const onDialogClose = () => {
    setShow(false);
  };

  return (
    <Container maxWidth="lg">
      <Head>
        <title>{course?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {show && <MapDialog onClose={onDialogClose} show={show} />}
      {course && (
        <ProgramHeader title="Ulife 추천코스">
          <EditorDetailLeftLayout
            tags={course.tags}
            season={course.season}
            region={course.region}
          >
            <TitleContainer>
              <div className="sub">
                <Avatar
                  alt="user"
                  src={`${process.env.NEXT_PUBLIC_S3URL}/profile/${course.writer}`}
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
                <ShareButton
                  url={window.location.href}
                  user={loggedInId}
                  des={course.title}
                />
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
              </div>
            </TitleContainer>
            {course && (
              <ContentContainer
                onClick={onClick}
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
              <ReviseDeleteButtons url="recommend" id={loggedInId} idx={idx} />
            )}

            <ReplyContainer>
              <form className="write" onSubmit={onSubmitComment}>
                <TextField
                  id=""
                  value={comment}
                  onChange={onChangeComment}
                  fullWidth
                />
                <Button
                  type="submit"
                  className="btn"
                  variant="contained"
                  disabled={!loggedInId || !comment}
                >
                  등록
                </Button>
              </form>
              <div className="reply">
                {comments.map((item, index) => (
                  <ReplyContent
                    key={index}
                    type={0}
                    {...item}
                    boardIdx={idx}
                    index={index}
                    update={updateComment}
                  />
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
  margin-top: 5rem;
  & .write {
    display: flex;

    & .btn {
      height: 44px;
      margin-left: 2rem;
    }
  }
`;

export default RecommendDetail;
