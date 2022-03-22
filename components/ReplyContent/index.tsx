import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import useInput from "@hooks/useInput";
import { Avatar, Button, TextField } from "@mui/material";
import gravatar from "gravatar";
import { IComment } from "types/apiType";
import { useState, useCallback } from "react";

const ReplyContent = ({ id, content, createdAt, fk_user_id }: IComment) => {
  const [value, setValue, onChangeValue] = useInput("");
  const [open, setOpen] = useState(false);

  const onSubmitValue = useCallback(
    (e) => {
      e.preventDefault();
      // TODO recomment
    },
    [value]
  );

  return (
    <MainContainer>
      <Avatar
        alt="user"
        // src={gravatar.url(id ? id : "default", {
        //   s: "28px",
        //   d: "retro",
        // })}
        className="avatar"
      />
      <div className="content">
        <div className="replyId">{id ? id : fk_user_id}</div>
        <div className="replyContent">{content}</div>
        <div className="replyContentFlex">
          <div className="replyDate">{dateHelper(createdAt)}</div>
          <div
            className={open ? "recomment recommentActive" : "recomment"}
            onClick={() => setOpen(!open)}
          >
            답글쓰기
          </div>
          <div className="report">신고하기</div>
        </div>
        {open && (
          <form className="write" onSubmit={onSubmitValue}>
            <TextField id="" value={value} onChange={onChangeValue} fullWidth />
            <Button type="submit" className="btn" variant="contained">
              등록
            </Button>
          </form>
        )}
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem;
  padding: 1rem 0;
  // align-items: center;
  border-bottom: 1px solid #d8d8d8;
  & .avatar {
    margin-right: 1rem;
  }
  & .content {
    width: 100%;

    & .replyId {
      font-weight: bold;
    }
    & .replyContent {
      padding: 1rem 0;
    }
    & .replyDate {
      color: #888888;
      font-size: 0.8rem;
    }
    // position: relative;
    // background-color: #f1f3f7;
    // border-radius: 20px;
    // padding: 1rem;

    // :after {
    //   content: "";
    //   position: absolute;
    //   left: 0;
    //   top: 50%;
    //   width: 0;
    //   height: 0;
    //   border: 24px solid transparent;
    //   border-right-color: #f1f3f7;
    //   border-left: 0;
    //   margin-top: -24px;
    //   margin-left: -10px;
    // }

    & .replyContentFlex {
      display: flex;
      color: #888888;
      font-size: 0.8rem;
      margin-bottom: 1rem;

      & div {
        margin-right: 1rem;
      }

      & .recomment {
        cursor: pointer;
      }

      & .recommentActive {
        color: #ff9016;
        text-decoration: underline;
      }

      & .report {
        cursor: pointer;
      }
    }

    // & .write {
    //   display: flex;

    //   & .btn {
    //     height: 44px;
    //     margin-left: 2rem;
    //   }
    // }
  }
`;

export default ReplyContent;
