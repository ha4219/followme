import { COURSES, ICourseData } from "@data/CourseData";
import styled from "@emotion/styled";
import { tableTitleSummary } from "@helpers/programHelper";
import {
  Avatar,
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { courseTagState } from "@store/tag";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

const CourseBoard = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [size, setSize] = useState(0);
  const [courses, setCourses] = useState<ICourseData[]>([]);
  const selectedTag = useRecoilValue(courseTagState);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const getCourses = async () => {
    setCourses(COURSES);
    setSize(Math.ceil(COURSES.length / rowsPerPage));
  };

  useEffect(() => {
    let arr = [...COURSES];

    if (selectedTag !== "ALL" && selectedTag !== "") {
      arr = arr.filter((item) => item.tags.includes(selectedTag));
    }
    setSize(Math.ceil(arr.length / rowsPerPage));
    setCourses(arr);
  }, [selectedTag]);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <MainContainer maxWidth="md">
      <Table>
        <TableHead className="head">
          <TableRow className="head">
            <TableCell align="center">제목</TableCell>
            <TableCell align="center">답글</TableCell>
            <TableCell align="center">작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? courses.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : courses
          ).map((item, index) => (
            <TableRow key={index}>
              <TableCell className="title">
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
        <div className="pagination">
          <Pagination count={size} onChange={handleChangePage} />
        </div>
      </Table>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  & .head {
    border-top: 1px solid #191919;
    border-bottom: 1px solid #191919;
    text-align: center;
  }
  & .title {
    display: flex;
    align-items: center;

    & .avatar {
      margin-right: 1rem;
    }
  }

  & .pagination {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
  }
`;

export default CourseBoard;
