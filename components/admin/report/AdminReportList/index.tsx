import styled from "@emotion/styled";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { idState } from "@store/auth";
import { getReportedComments } from "api/board";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { IReportCommentType } from "types/apiType";
import { dateHelper } from "@helpers/programHelper";
import { delComment } from "api/admin";

const AdminReportItem = ({
  idx,
  fk_user_comments_id,
  content,
  reported,
  updatedAt,
  type,
}: IReportCommentType) => {
  const id = useRecoilValue(idState);
  const [show, setShow] = useState(true);
  const onClick = async () => {
    try {
      const data = await delComment({
        type: type,
        idx: idx,
        id: fk_user_comments_id,
      });
      if (data.data === "success") {
        setShow(false);
      }
    } catch (e) {
      console.log("com del comment", e);
    }
  };
  return (
    <TableRow sx={{ display: show ? "table-row" : "none" }}>
      <TableCell>{idx}</TableCell>
      <TableCell>{fk_user_comments_id}</TableCell>
      <TableCell>{content}</TableCell>
      <TableCell>{reported}</TableCell>
      <TableCell>{dateHelper(updatedAt)}</TableCell>
      <TableCell>
        <Button variant="contained" color="error" onClick={onClick}>
          DEL
        </Button>
      </TableCell>
    </TableRow>
  );
};

const AdminReportList = () => {
  const [comments, setComments] = useState<IReportCommentType[]>([]);
  const id = useRecoilValue(idState);

  const getComments = async () => {
    const data = await getReportedComments({ id: id });
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, []);
  return (
    <AdminReportListContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>idx</TableCell>
            <TableCell>신고당한유저</TableCell>
            <TableCell width={300}>내용</TableCell>
            <TableCell>누적신고횟수</TableCell>
            <TableCell>신고당한일시</TableCell>
            <TableCell>del</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((item) => (
            <AdminReportItem key={item.idx} {...item} />
          ))}
        </TableBody>
      </Table>
    </AdminReportListContainer>
  );
};

const AdminReportListContainer = styled.div``;

export default AdminReportList;
