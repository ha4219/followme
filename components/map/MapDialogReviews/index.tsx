import styled from "@emotion/styled";
import useInput from "@hooks/useInput";
import { Avatar, Button, TextField } from "@mui/material";
import { idState } from "@store/auth";
import { insertEnterpriseReview } from "api/enterprise";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { IEnterpriseReviewType } from "types/apiType";
import MapDialogReviewStar from "../MapDialogReviewStar";

const MapDialogReviewItem = ({
  idx,
  score,
  writer,
  content,
  enterId,
}: IEnterpriseReviewType) => {
  const id = useRecoilValue(idState);

  const onClickDel = async () => {
    toast.info("추후 진행");
  };
  return (
    <MapDialogReviewItemContainer>
      <div className="mapDialogReviewItemProfile">
        <div className="mapDialogReviewItemProfileAvatarContainer">
          <Avatar
            alt="user"
            // src={gravatar.url(id ? id : "default", {
            //   s: "28px",
            //   d: "retro",
            // })}
            className="mapDialogReviewItemProfileAvatar"
          />
          <div>
            <div>{writer}</div>
            {id === writer && (
              <div
                className="mapDialogReviewItemProfileDelBtn"
                onClick={onClickDel}
              >
                삭제하기
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mapDialogReviewItemContent">{content}</div>
    </MapDialogReviewItemContainer>
  );
};

const DATA: IEnterpriseReviewType[] = [
  {
    idx: 0,
    score: 5,
    writer: "dongha",
    content: "testtest",
    enterId: "dongha",
  },
  {
    idx: 1,
    score: 5,
    writer: "dongha",
    content: "testtest",
    enterId: "dongha",
  },
];

const MapDialogReviews = ({
  reviews,
  enterId,
}: {
  reviews: IEnterpriseReviewType[];
  enterId: string;
}) => {
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [content, setContent, onChangeContent] = useInput("");
  const id = useRecoilValue(idState);

  const onClick = async () => {
    try {
      const data = await insertEnterpriseReview({
        enterId: enterId,
        score: score,
        writer: id,
        content: content,
      });
      if (data.data === "success") {
        toast.success("성공");
      }
    } catch (e) {
      console.log("insert enter review ", e);
    }
  };

  return (
    <MapDialogReviewsContainer>
      {show && (
        <div className="mapDialogReviewsItems">
          {reviews.map((item, idx) => {
            return <MapDialogReviewItem key={item.idx} {...item} />;
          })}
        </div>
      )}
      <Button onClick={() => setShow(!show)} fullWidth variant="contained">
        {show ? "리뷰 접기" : "리뷰 열기"}
      </Button>
      <div className="mapDialogReviewsInsert">
        <span>리뷰작성</span>
        <MapDialogReviewStar score={score} setScore={setScore} />
        <div className="mapDialogReviewsInsertContainer">
          <TextField fullWidth value={content} onChange={onChangeContent} />
          <Button
            variant="contained"
            onClick={onClick}
            className="mapDialogReviewsInsertContainerBtn"
          >
            write
          </Button>
        </div>
      </div>
    </MapDialogReviewsContainer>
  );
};

const MapDialogReviewsContainer = styled.div`
  padding: 1rem;

  & .mapDialogReviewsInsert {
    padding: 1rem 0;
    font-family: paybooc-Light;

    & .mapDialogReviewsInsertContainer {
      display: flex;

      & .mapDialogReviewsInsertContainerBtn {
        margin-left: 1rem;
      }
    }
  }
`;

const MapDialogReviewItemContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #818181;
  margin-bottom: 1rem;
  padding: 0.5rem 0;

  & .mapDialogReviewItemProfile {
    margin-right: 1rem;
    & .mapDialogReviewItemProfileAvatarContainer {
      display: flex;

      & .mapDialogReviewItemProfileAvatar {
        margin-right: 1rem;
      }

      font-family: paybooc-Bold;
      font-size: 0.8rem;
    }

    & .mapDialogReviewItemProfileDelBtn {
      font-family: paybooc-Light;
      font-size: 0.7rem;
      cursor: pointer;
    }
  }

  & .mapDialogReviewItemContent {
    font-family: paybooc-Light;
    width: 100%;
    font-size: 0.7rem;
  }
`;

export default MapDialogReviews;
