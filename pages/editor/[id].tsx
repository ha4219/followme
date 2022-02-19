import LeftLayout from "@components/LeftLayout";
import styled from "@emotion/styled";
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import { API, getPayload } from "@src/API";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import gravatar from "gravatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ReplyContent from "@components/ReplyContent";
import useInput from "@hooks/useInput";
import { IComment, ICourseDetail } from "types/apiType";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { toast } from "react-toastify";

const EditorDetail = () => {
  const router = useRouter();
  // const { memberId } = getPayload();
  const [course, setCourse] = useState<ICourseDetail>();
  const [isLoading, setLoading] = useState(true);
  const [comments, setComments] = useState<IComment[]>([]);
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
        const { data } = await API.post<ICourseDetail[]>(
          `/main/postDetail/${id}`,
          {
            id: loggedInId,
          }
        );
        setLike(data[0].likeClicked ? 1 : 0);
        setLikeCnt(data[0].likeCnts);
        setCourse(data[0]);
      }
    } catch (e) {
      console.log("router not ready", e);
    }
  };

  const getComments = async () => {
    const { id } = router.query;
    try {
      if (id) {
        const { data } = await API.get<IComment[]>(
          `/main/travelBoards/reply/${id}`,
          {}
        );
        setComments(data);
      }
    } catch (e) {
      console.log("router not ready", e);
    }
    setIdx(id);
  };

  const onSubmitComment = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        const { data }: { data: { data: string } } = await API.post(
          `main/travelBoards/insertReply/${idx}`,
          {
            id: "admin",
            content: comment,
          }
        );
        if (data.data === "success") {
          setComments([
            ...comments,
            { id: "admin", content: comment, updatedAt: "" },
          ]);
        }
      } catch (e) {
        console.log("댓글 작성 실패", e);
        toast.error("댓글 작성 error");
      } finally {
        setComment("");
      }
    },
    [comment]
  );

  const onClickLike = useCallback(
    async (e) => {
      e.stopPropagation();
      API.post(`/main/postLike/${idx}`, {
        id: loggedInId,
      })
        .then(({ data }) => {
          console.log(data);
          if (course) {
            if (like) {
              setLikeCnt(course.likeCnts - 1);
            } else {
              setLikeCnt(course.likeCnts);
            }
          }

          setLike(1 ^ like);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [like]
  );
  const onClickShare = () => {
    console.log();
  };

  useEffect(() => {
    getDetail();
    getComments();
    return () => setLoading(false);
  }, [router.isReady]);

  return (
    <Container maxWidth="lg">
      <Head>
        <title>{course?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LeftLayout>
        {course && (
          <>
            <TitleContainer>
              <div className="sub">
                <Avatar
                  alt="user"
                  src={gravatar.url(course ? course.writer : "default", {
                    s: "28px",
                    d: "retro",
                  })}
                  className="avatar"
                />
                <div className="title">{course?.title}</div>
              </div>
              <div className="btns">
                <span className="heartLabel"> {likeCnt}</span>
                <Button className="heart" onClick={onClickLike}>
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
                <Button className="share" onClick={onClickShare}>
                  <ShareIcon
                    sx={{
                      width: 18,
                      height: 18,
                      alignItems: "center",
                      verticalAlign: "center",
                    }}
                  />
                </Button>
              </div>
            </TitleContainer>
            {course && (
              <ContentContainer
                dangerouslySetInnerHTML={{ __html: course.content }}
              />
            )}
            {/* {course && course.writer === isLoggedInId && (
          <ButtonContainer>
            <Button variant="contained">수정</Button>
            <Button variant="contained" color="error">
              삭제
            </Button>
          </ButtonContainer>
        )} */}

            <ReplyContainer>
              <form className="write" onSubmit={onSubmitComment}>
                <TextField
                  id=""
                  label=""
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
      </LeftLayout>
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

export default EditorDetail;
