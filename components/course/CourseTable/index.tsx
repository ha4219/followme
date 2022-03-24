import { COURSES, ICourseData } from "@data/CourseData";
import styled from "@emotion/styled";
import { dateHelper, tableTitleSummary } from "@helpers/programHelper";
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { getCourseCommentsLength } from "api/board";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IProps {
  idx: string;
  title: string;
  replyCnt: number;
  writer: string;
  createdAt: string;
}

const CourseTable = ({ courses }) => {
  const router = useRouter();
  const [curCourses, setCurCourses] = useState<IProps[]>([]);

  // const onClickRow = (id: number) => {
  //   router.push(`/course/${id}`);
  // };

  const mergeCourses = async () => {
    const arr = await Promise.all(
      courses.map(async (item) => {
        const cs = await getCourseCommentsLength({ idx: item.idx });
        return { replyCnt: cs, ...item };
      })
    );
    return arr;
  };

  const getCurCourses = async () => {
    const arr = await mergeCourses();
    setCurCourses(arr);
  };

  useEffect(() => {
    getCurCourses();
  }, [courses]);

  return (
    <MainContainer maxWidth="md" sx={{ padding: 0 }}>
      <Table>
        <TableHead className="head">
          <TableRow className="head">
            <TableCell align="center">제목</TableCell>
            <TableCell align="center" width={100}>
              답글
            </TableCell>
            <TableCell align="center" width={150}>
              작성일
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {curCourses.map((item, index) => (
            <TableRow
              key={item.idx}
              // onClick={() => onClickRow(item.idx - 1)}
              className="cursor"
            >
              <TableCell className="cellTitle">
                <Avatar
                  alt="user"
                  src={`${process.env.NEXT_PUBLIC_S3URL}/profile/${item.writer}`}
                  // src={gravatar.url(user, { s: "28px", d: "retro" })}
                  className="avatar"
                />
                {tableTitleSummary(item.title)}
              </TableCell>
              <TableCell align="center">{item.replyCnt}</TableCell>
              <TableCell align="center">{dateHelper(item.createdAt)}</TableCell>
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
      margin-right: 2rem;
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
