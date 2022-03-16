import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import { VFC } from "react";
import { INoticeType } from "types/apiType";

const NoticeDetail: VFC<INoticeType> = ({
  title,
  createdAt,
  writer,
  content,
  idx,
}) => {
  return (
    <NoticeDetailContainer>
      <div>{title}</div>
      <div>{writer}</div>
      <div>{dateHelper(createdAt)}</div>
      <div>{content}</div>
    </NoticeDetailContainer>
  );
};

const NoticeDetailContainer = styled.div`
  padding: 1rem;
`;

export default NoticeDetail;
