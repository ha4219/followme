import styled from "@emotion/styled";
import { Avatar } from "@mui/material";
import gravatar from "gravatar";

const ReplyContent = ({ writer, content }) => {
  return (
    <MainContainer>
      <Avatar
        alt="user"
        src={gravatar.url(writer ? writer : "default", {
          s: "28px",
          d: "retro",
        })}
        className="avatar"
      />
      <div className="content">{content}</div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  margin: 1rem;
  align-items: center;

  & .avatar {
    margin-right: 2rem;
  }
  & .content {
    position: relative;
    background-color: #f1f3f7;
    border-radius: 20px;
    padding: 1rem;

    :after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      width: 0;
      height: 0;
      border: 24px solid transparent;
      border-right-color: #f1f3f7;
      border-left: 0;
      margin-top: -24px;
      margin-left: -24px;
    }
  }
`;

export default ReplyContent;
