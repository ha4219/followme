import { COURSES, ICourseData } from "@data/CourseData";
import styled from "@emotion/styled";
import { dateHelper, tableTitleSummary } from "@helpers/programHelper";
import {
  Avatar,
  Button,
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { API } from "@src/API";
import { idState } from "@store/auth";
import { courseTagState } from "@store/tag";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { ICourse } from "types/apiType";

const CourseBoard = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [size, setSize] = useState(0);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const selectedTag = useRecoilValue(courseTagState);
  const loggedInId = useRecoilValue(idState);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const getCourses = async () => {
    // setCourses(COURSES);
    API.get("/course/courseBoards", {})
      .then(({ data }) => {
        setCourses(data);
        setSize(Math.ceil(data.length / rowsPerPage));
      })
      .catch((e) => {
        console.log("course 받아오기 에러", e);
      });
  };

  const onClickRow = (id: number) => {
    router.push(`/course/${id}`);
  };

  // useEffect(() => {
  //   let arr = [...COURSES];

  //   if (selectedTag !== "ALL" && selectedTag !== "") {
  //     arr = arr.filter((item) => item.tags.includes(selectedTag));
  //   }
  //   setSize(Math.ceil(arr.length / rowsPerPage));
  //   setCourses(arr);
  // }, [selectedTag]);

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
            <TableRow
              key={item.idx}
              onClick={() => onClickRow(item.idx)}
              className="cursor"
            >
              <TableCell className="title">
                <Avatar
                  alt="user"
                  // src={gravatar.url(user, { s: "28px", d: "retro" })}
                  className="avatar"
                />
                {tableTitleSummary(item.title)}
              </TableCell>
              <TableCell align="center">
                {/* {item?.comments ? item.comments.length : 0} */}
                {item.likeCnts}
              </TableCell>
              <TableCell align="center">{dateHelper(item.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableRow className="rightButton">
          {/* <TableCell></TableCell>
          <TableCell></TableCell> */}
          <TableCell align="right" colSpan={3}>
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                if (loggedInId.length) {
                  router.push("/course/write");
                } else {
                  toast.error("로그인 후 이용해주세요.");
                }
              }}
            >
              글쓰기
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="pagination" colSpan={3} align="center">
            <Pagination
              className="paginationIn"
              count={size}
              onChange={handleChangePage}
            />
          </TableCell>
        </TableRow>
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

export default CourseBoard;
