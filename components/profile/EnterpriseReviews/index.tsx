import styled from "@emotion/styled";
import useInput from "@hooks/useInput";
import { Avatar, Button, TextField } from "@mui/material";
import { idState } from "@store/auth";
import { delEnterpriseReview, insertEnterpriseReview } from "api/enterprise";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { IEnterpriseReviewType } from "types/apiType";

const MapDialogReviewItem = ({
  idx,
  writer,
  content,
  enterId,
}: IEnterpriseReviewType) => {
  const id = useRecoilValue(idState);
  const onClickDel = async () => {
    try {
      const data = await delEnterpriseReview({ idx: idx, writer: id });
      if (data.data === "success") {
        toast.success("삭제");
      }
    } catch (e) {
      console.log("delEnterpriseReview", e);
    }
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
          </div>
        </div>
      </div>
      <div
        className="mapDialogReviewItemContent"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </MapDialogReviewItemContainer>
  );
};

const MapDialogReviews = ({
  reviews,
}: {
  reviews: IEnterpriseReviewType[];
}) => {
  const [show, setShow] = useState(false);
  const [score, setScore] = useState(0);
  const [content, setContent, onChangeContent] = useInput("");
  const id = useRecoilValue(idState);

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
    width: 13rem;
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

    & img {
      width: 200px;
      height: 200px;
    }
  }
`;

export default MapDialogReviews;
