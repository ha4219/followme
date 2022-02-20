import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import { Avatar } from "@mui/material";
import gravatar from "gravatar";
import { IComment } from "types/apiType";

const ReplyContent = ({ id, content, createdAt }: IComment) => {
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
        <div className="replyId">{id}</div>
        <div className="replyContent">{content}</div>
        <div className="replyDate">{dateHelper(createdAt)}</div>
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem 0;
  // align-items: center;
  border-bottom: 1px solid #d8d8d8;
  & .avatar {
    margin-right: 1rem;
  }
  & .content {
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
  }
`;

export default ReplyContent;
