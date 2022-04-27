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
import { getCourseAllBoard, getCourseCommentsLength } from "api/board";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { ICourse } from "types/apiType";

const PAGESIZE = [24, 36, 48];

const CourseBoard = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [curCourses, setCurCourses] = useState<any[]>([]);
  const selectedTag = useRecoilValue(courseTagState);
  const loggedInId = useRecoilValue(idState);
  const [perPageSize, setPerPageSize] = useState(24);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const mergeCourses = async (courses) => {
    const arr = await Promise.all(
      courses.map(async (item) => {
        const cs = await getCourseCommentsLength({ idx: item.idx });
        return { replyCnt: cs, ...item };
      })
    );
    return arr;
  };

  const getCurCourses = async (courses) => {
    const arr = await mergeCourses(courses);
    setCurCourses(arr);
  };

  const getCourses = async () => {
    try {
      const data = await getCourseAllBoard({
        id: loggedInId,
      });
      // setCourses(data);
      getCurCourses(data);
      setSize(Math.ceil(data.length / perPageSize));
    } catch (e) {
      console.log("course 받아오기 에러", e);
    }
  };

  const onClickRow = (id: number) => {
    router.push(`/course/${id}`);
  };

  useEffect(() => {
    setSize(Math.ceil(courses.length / perPageSize));
  }, [perPageSize, courses]);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <MainContainer maxWidth="md">
      <HeadContainer>
        <TitleContainer>
          <div className="sub">
            {"Editor's Pick"}
            <span className="orange">{courses.length}</span>개
          </div>
        </TitleContainer>
        <SortedContainer>
          <div className="editorProgramListPerPage">
            {PAGESIZE.map((item, index) => (
              <div
                key={index}
                className={
                  item === perPageSize
                    ? "editorProgramListPerPageItem active"
                    : "editorProgramListPerPageItem"
                }
                onClick={() => setPerPageSize(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </SortedContainer>
      </HeadContainer>
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
          {(perPageSize > 0
            ? curCourses.slice(
                page * perPageSize,
                page * perPageSize + perPageSize
              )
            : curCourses
          ).map((item, index) => (
            <TableRow
              key={item.idx}
              onClick={() => onClickRow(item.idx)}
              className="cursor"
            >
              <TableCell className="title">
                <Avatar
                  alt="user"
                  src={`${process.env.NEXT_PUBLIC_S3URL}/profile/${item.writer}`}
                  // src={gravatar.url(user, { s: "28px", d: "retro" })}
                  className="avatar"
                />
                {tableTitleSummary(item.title)}
              </TableCell>
              <TableCell align="center">
                {/* {item?.comments ? item.comments.length : 0} */}
                {item.replyCnt}
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

const TitleContainer = styled.div`
  margin-top: 1rem;
  font-family: paybooc-Light;
  & .sub {
    font-size: 0.8rem;
    color: #000000;
  }
  & .main {
    font-size: 2rem;
    letter-spacing: -1.76px;
  }

  & .orange {
    font-family: paybooc-Bold;
    margin-left: 1rem;
    color: #ff9016;
    font-weight: 300;
  }
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5rem;
`;

const SortedContainer = styled.div`
  display: flex;
  padding-top: 2rem;
  font-family: paybooc-Bold;

  & .editorProgramListSelect {
    height: 20px;
    font-size: 0.8rem;
    border: 0;
    padding: 0;
    margin-right: 1rem;

    & div {
      border: 0;
    }
  }

  & .editorProgramListPerPage {
    display: flex;
    font-size: 0.8rem;

    & .editorProgramListPerPageItem {
      margin: 0 0.5rem;
      cursor: pointer;
    }
    & .active {
      border-bottom: 1px solid #000000;
    }
  }
`;

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
