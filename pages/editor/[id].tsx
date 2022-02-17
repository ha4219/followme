import LeftLayout from "@components/LeftLayout";
import styled from "@emotion/styled";
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import { API } from "@src/API";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import gravatar from "gravatar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ReplyContent from "@components/ReplyContent";
import useInput from "@hooks/useInput";

interface ICourse {
  title: string;
  content: string;
  writer: string;
}

const FAKE = [
  {
    writer: "dongha",
    content:
      "국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.",
  },
  {
    writer: "jdongha",
    content:
      "국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.",
  },
  {
    writer: "admin",
    content:
      "국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로 이전하거나 그 경영을 통제 또는 관리할 수 없다.",
  },
];

const EditorDetail = () => {
  const router = useRouter();
  const [reply, setReply, onChangeReply] = useInput("");
  const [course, setCourse] = useState<ICourse>();
  const [isLoading, setLoading] = useState(true);
  const getDetail = async () => {
    const { id } = router.query;
    if (id) {
      const { data } = await API.get<ICourse[]>(`/main/postDetail/${id}`, {});
      setCourse(data[0]);
    }
  };

  const onClick = () => {
    console.log();
  };
  const onClickShare = () => {
    console.log();
  };

  const like = false;
  const heartCnt = 10;

  useEffect(() => {
    getDetail();

    return () => setLoading(false);
  }, []);

  return (
    <Container maxWidth="lg">
      <Head>
        <title>{course?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <LeftLayout>
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
            <Button className="heart" onClick={onClick}>
              {like ? (
                <FavoriteIcon
                  className="fillHeart"
                  sx={{
                    width: 22,
                    height: 22,
                    alignItems: "center",
                    verticalAlign: "center",
                  }}
                />
              ) : (
                <FavoriteBorderIcon
                  className="fillNotHeart"
                  sx={{
                    width: 22,
                    height: 22,
                    alignItems: "center",
                    verticalAlign: "center",
                  }}
                />
              )}
            </Button>
            <Button className="share" onClick={onClickShare}>
              <ShareIcon />
            </Button>
          </div>
        </TitleContainer>
        <ContentContainer
          dangerouslySetInnerHTML={{ __html: course?.content }}
        />
        <ButtonContainer>
          <Button variant="contained">수정</Button>
          <Button variant="contained" color="error">
            삭제
          </Button>
        </ButtonContainer>
        <ReplyContainer>
          <div className="write">
            <TextField
              id=""
              label=""
              value={reply}
              onChange={onChangeReply}
              fullWidth
            />
            <Button className="btn" variant="contained">
              등록
            </Button>
          </div>
          <div className="reply">
            {FAKE.map((item, index) => (
              <ReplyContent key={index} {...item} />
            ))}
          </div>
        </ReplyContainer>
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

  & .sub {
    display: flex;

    & .avatar {
      margin-right: 1rem;
    }
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
  & .write {
    display: flex;

    & .btn {
      height: 44px;
      margin-left: 2rem;
    }
  }
`;

export default EditorDetail;
