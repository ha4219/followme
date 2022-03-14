import { COURSES, ICourseData } from "@data/CourseData";
import styled from "@emotion/styled";
import { tableTitleSummary } from "@helpers/programHelper";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRouter } from "next/router";
import { VFC } from "react";

interface IProps {
  courses: ICourseData[];
}

const CourseTable: VFC<IProps> = ({ courses }) => {
  const router = useRouter();

  // const onClickRow = (id: number) => {
  //   router.push(`/course/${id}`);
  // };

  return (
    <MainContainer maxWidth="md" sx={{ padding: 0 }}>
      <Table>
        <TableHead className="head">
          <TableRow className="head">
            <TableCell align="center">제목</TableCell>
            <TableCell align="center">답글</TableCell>
            <TableCell align="center">작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((item, index) => (
            <TableRow
              key={item.idx}
              // onClick={() => onClickRow(item.idx - 1)}
              className="cursor"
            >
              <TableCell className="cellTitle">
                <Avatar
                  alt="user"
                  // src={gravatar.url(user, { s: "28px", d: "retro" })}
                  className="avatar"
                />
                {tableTitleSummary(item.title)}
              </TableCell>
              <TableCell align="center">{item.replyCnt}</TableCell>
              <TableCell align="center">{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MainContainer>
  );
};

const MainContainer = styled(Box)`
  padding: 0;
  margin: 0;
  & .head {
    border-top: 1px solid #191919;
    border-bottom: 1px solid #191919;
    text-align: center;
  }
  & .cellTitle {
    display: flex;
    align-items: center;

    & .avatar {
      margin-right: 1rem;
    }
  }

  & .cursor {
    cursor: pointer;
  }

  & .rightButton {
    text-align: right;

    & td {
      border: none;
    }
  }
  & .pagination {
    margin-top: 2rem;
    border: none;
    // display: flex;
    // justify-content: center;
  }

  & .paginationIn {
    margin: auto;

    & ul {
      justify-content: center;
    }
  }
`;

export default CourseTable;
