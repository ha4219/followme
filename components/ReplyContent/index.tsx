import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import useInput from "@hooks/useInput";
import { Avatar, Button, TextField, Box } from "@mui/material";
import { IComment } from "types/apiType";
import { useState, useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import {
  insertThemeChildComment,
  insertRecommendChildComment,
  insertCourseChildComment,
  reportThemeCommentBoard,
  reportCourseCommentBoard,
  reportRecommendCommentBoard,
  reportComment,
  updateBoardComment,
} from "api/board";
import { toast } from "react-toastify";
import { delComment } from "api/admin";

interface IProps {
  idx: string;
  id: string;
  content: string;
  createdAt: string;
  fk_user_comments_id: string;
  boardIdx: number;
  childrenReply: IComment[];
  type: number;
  update: any;
}

const ReplyChildContent = ({
  idx,
  id,
  content,
  createdAt,
  fk_user_comments_id,
  boardIdx,
  type,
  update,
}: IProps) => {
  const [value, setValue, onChangeValue] = useInput("");
  // const [open, setOpen] = useState(false);
  // const [childrenState, setChildrenState] = useState<IComment[]>([]);
  const [isRevise, setIsRevise] = useState(false);

  const onClickReport = async () => {
    const check = confirm(
      // "신고하기",
      `${fk_user_comments_id}님을 신고하시겠습니까?`
    );
    try {
      if (check) {
        const data = await reportComment({
          idx: boardIdx,
          type: type,
          commentIdx: idx,
        });
        if (data.data === "success") {
          toast.success("신고완료");
        }
      }
    } catch (e) {
      console.log("report error", e);
    }
  };

  const onClickRevise = async () => {
    try {
      const data = await updateBoardComment({
        id: id,
        type: type,
        idx: boardIdx,
        commentIdx: idx,
        content: value,
        parentIdx: fk_user_comments_id,
      });
      if (data.data === "success") {
        toast.success("수정완료");
      }
    } catch (e) {
      console.log("revise error", e);
    }
  };

  const onClickDel = async () => {
    const check = confirm(
      // "신고하기",
      `해당 댓글을 삭제하시겠습니까?`
    );
    try {
      if (check) {
        const data = await delComment({ id: id, type: type, idx: idx });
        if (data.data === "success") {
          toast.success("삭제");
          update();
        }
      }
    } catch (e) {
      console.log("del comment", e);
    }
  };

  return (
    <ReplyContentContainer>
      <div className="replyContentContainerProfile">
        <div>
          <Avatar
            alt="user"
            src={`${process.env.NEXT_PUBLIC_S3URL}/profile/${fk_user_comments_id}`}
            // src={gravatar.url(id ? id : "default", {
            //   s: "28px",
            //   d: "retro",
            // })}
            className="avatar"
          />
        </div>
        <div className="replyContentContainerProfileIdDate">
          <div className="replyId">{fk_user_comments_id}</div>
          <div className="replyContentContainerDate">
            {dateHelper(createdAt)}
          </div>
          {idx !== "-1" && (
            <>
              <div
                className="replyContentContainerReport"
                onClick={onClickReport}
              >
                신고하기
              </div>
              {id === fk_user_comments_id && (
                <>
                  <div
                    className="replyContentContainerReport"
                    onClick={() => setIsRevise((prev) => !prev)}
                  >
                    수정하기
                  </div>
                  <div
                    className="replyContentContainerReport"
                    onClick={onClickDel}
                  >
                    삭제하기
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
      <>
        {isRevise ? (
          <form className="write" onSubmit={onClickRevise}>
            <TextField
              id="replyField"
              value={value}
              onChange={onChangeValue}
              fullWidth
              multiline
            />
            <Button
              disabled={!id || !value}
              type="submit"
              className="btn"
              variant="contained"
            >
              수정
            </Button>
          </form>
        ) : (
          <div className="replyContentContainerContent">{content}</div>
        )}
      </>
    </ReplyContentContainer>
  );
};

const ReplyContent = ({
  idx,
  type,
  content,
  createdAt,
  fk_user_comments_id,
  boardIdx,
  childrenReply,
  update,
}: IProps) => {
  const [value, setValue, onChangeValue] = useInput("");
  const [open, setOpen] = useState(false);
  const [childrenState, setChildrenState] = useState<IComment[]>([]);
  const id = useRecoilValue(idState);
  const [isRevise, setIsRevise] = useState(false);

  useEffect(() => {
    setChildrenState(childrenReply);
  }, [update]);

  const onClickDel = async () => {
    const check = confirm(
      // "신고하기",
      `해당 댓글을 삭제하시겠습니까?`
    );
    try {
      if (check) {
        const data = await delComment({ id: id, type: type, idx: idx });
        if (data.data === "success") {
          toast.success("삭제");
          update();
        }
      }
    } catch (e) {
      console.log("del comment", e);
    }
  };

  const onClickReport = async () => {
    const check = confirm(
      // "신고하기",
      `${fk_user_comments_id}님을 신고하시겠습니까?`
    );
    try {
      if (check) {
        if (type === 0) {
          const data = await reportRecommendCommentBoard({
            // id: id,
            idx: boardIdx,
            commentIdx: idx,
          });
          if (data.data === "success") {
            toast.success("신고완료");
          }
        } else if (type === 1) {
          const data = await reportThemeCommentBoard({
            // id: id,
            idx: boardIdx,
            commentIdx: idx,
          });
          if (data.data === "success") {
            toast.success("신고완료");
          }
        } else if (type === 2) {
          const data = await reportCourseCommentBoard({
            // id: id,
            idx: boardIdx,
            commentIdx: idx,
          });
          if (data.data === "success") {
            toast.success("신고완료");
          }
        }
      }
    } catch (e) {
      console.log("report error", e);
    }
  };

  const onClickRevise = async () => {
    try {
      const data = await updateBoardComment({
        id: id,
        type: type,
        idx: boardIdx,
        commentIdx: idx,
        content: value,
        parentIdx: undefined,
      });
      if (data.data === "success") {
        toast.success("수정완료");
      }
    } catch (e) {
      console.log("revise error", e);
    }
  };

  const onSubmitValue = useCallback(
    async (e) => {
      e.preventDefault();
      console.warn(e);
      try {
        if (type === 0) {
          const data = await insertRecommendChildComment({
            id: id,
            idx: boardIdx,
            content: value,
            parentIdx: idx,
          });

          if (data.data === "success") {
            // setChildrenState([
            //   ...childrenState,
            //   {
            //     idx: "-1",
            //     content: value,
            //     createdAt: new Date().toISOString(),
            //     fk_user_comments_id: id,
            //   },
            // ]);
            setValue("");
            update();
            toast.success("작성완료");
          }
        } else if (type === 1) {
          const data = await insertThemeChildComment({
            id: id,
            idx: boardIdx,
            content: value,
            parentIdx: idx,
          });
          if (data.data === "success") {
            // setChildrenState([
            //   ...childrenState,
            //   {
            //     idx: "-1",
            //     content: value,
            //     createdAt: new Date().toISOString(),
            //     fk_user_comments_id: id,
            //   },
            // ]);
            update();
            setValue("");
            toast.success("작성완료");
          }
        } else if (type === 2) {
          const data = await insertCourseChildComment({
            id: id,
            idx: boardIdx,
            content: value,
            parentIdx: idx,
          });
          if (data.data === "success") {
            // setChildrenState([
            //   ...childrenState,
            //   {
            //     idx: "-1",
            //     content: value,
            //     createdAt: new Date().toISOString(),
            //     fk_user_comments_id: id,
            //   },
            // ]);
            update();
            setValue("");
            toast.success("작성완료");
          }
        }
      } catch (e) {}
      // insertThemeChildComment
      // TODO recomment
    },
    [value]
  );

  return (
    <MainContainer>
      <Avatar
        alt="user"
        src={`${process.env.NEXT_PUBLIC_S3URL}/profile/${fk_user_comments_id}`}
        // src={gravatar.url(id ? id : "default", {
        //   s: "28px",
        //   d: "retro",
        // })}
        className="avatar"
      />
      <div className="content">
        <div className="replyId">{fk_user_comments_id}</div>
        <>
          {isRevise ? (
            <form className="write" onSubmit={onClickRevise}>
              <TextField
                id="replyField"
                value={value}
                onChange={onChangeValue}
                fullWidth
                multiline
              />
              <Button
                disabled={!id || !value}
                type="submit"
                className="btn"
                variant="contained"
              >
                수정
              </Button>
            </form>
          ) : (
            <div className="replyContent">{content}</div>
          )}
        </>
        <div className="replyContentFlex">
          <div className="replyDate">{dateHelper(createdAt)}</div>

          {idx != "-1" && (
            <>
              <div
                className={open ? "recomment recommentActive" : "recomment"}
                onClick={() => setOpen(!open)}
              >
                답글쓰기
              </div>
              <div className="report" onClick={onClickReport}>
                신고하기
              </div>
              {id === fk_user_comments_id && (
                <>
                  <div
                    className={isRevise ? "report recommentActive" : "report"}
                    onClick={() => setIsRevise((prev) => !prev)}
                  >
                    수정하기
                  </div>
                  <div className="report" onClick={onClickDel}>
                    삭제하기
                  </div>
                </>
              )}
            </>
          )}
        </div>
        <div>
          {childrenState.map((item, index) => (
            <ReplyChildContent
              id={id}
              childrenReply={[]}
              key={item.idx}
              boardIdx={boardIdx}
              type={type}
              update={update}
              {...item}
            />
          ))}
        </div>
        {open && (
          <form className="write" onSubmit={onSubmitValue}>
            <TextField
              id="replyField"
              value={value}
              onChange={onChangeValue}
              fullWidth
              multiline
            />
            <Button
              disabled={!id || !value}
              type="submit"
              className="btn"
              variant="contained"
            >
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
  font-family: paybooc-Light;
  // align-items: center;
  border-bottom: 1px solid #d8d8d8;
  & .avatar {
    margin-right: 1rem;
  }
  & .content {
    width: 100%;

    & .replyId {
      font-family: paybooc-Bold;
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

    & .write {
      margin-top: 1rem;
      display: flex;

      & .btn {
        height: 44px;
        margin-left: 2rem;
      }
    }
  }
`;

const ReplyContentContainer = styled.div`
  display: flex;
  background-color: #f3f3f3;
  padding: 1rem;
  margin-bottom: 1rem;
  font-family: paybooc-Light;

  & .replyContentContainerProfile {
    width: 15rem;
    // height: 4rem;
    display: flex;

    & .replyContentContainerProfileIdDate {
      display: block;
      & .replyContentContainerDate {
        color: #888888;
        font-size: 0.8rem;
      }
    }
  }
  & .replyContentContainerContent {
    // height: 4rem;
    width: 100%;
  }

  & .replyContentContainerReport {
    cursor: pointer;
    color: #888888;
    font-size: 0.8rem;
  }
`;

export default ReplyContent;
