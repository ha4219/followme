import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { Box } from "@mui/system";
import { idState } from "@store/auth";
import { getUserPointHistory } from "api/profile";
import { useEffect, useState, VFC } from "react";
import { useRecoilValue } from "recoil";
import { IPointType } from "types/apiType";

interface IProps {
  length?: number;
  pagination: boolean;
}

const ProfilePointHistory: VFC<IProps> = ({ length, pagination }) => {
  const [pointHistory, setPointHistory] = useState<IPointType[]>([]);

  // const router = useRouter();
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);
  const [size, setSize] = useState(0);
  const loggedInId = useRecoilValue(idState);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  const getPointHistory = async () => {
    // setCourses(COURSES);
    try {
      const data = await getUserPointHistory(loggedInId);
      setPointHistory(length ? data.slice(0, length) : data);
      setSize(Math.ceil(data.length / rowsPerPage));
    } catch (e) {
      console.log("pointHistory 받아오기 에러", e);
    }
  };

  useEffect(() => {
    getPointHistory();
  }, []);

  return (
    <ProfilePointHistoryContainer>
      <Table>
        <TableHead className="head">
          <TableRow className="head">
            <TableCell align="center">내역</TableCell>
            <TableCell align="center">포인트</TableCell>
            <TableCell align="center">적립일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pointHistory.map((item, index) => (
            <TableRow
              key={index}
              // onClick={() => onClickRow(item.idx - 1)}
              className="cursor"
            >
              <TableCell className="cellTitle">{item.content}</TableCell>
              <TableCell align="center">
                {item.type === "add" ? "+" : "-"}
                {item.point}
              </TableCell>
              <TableCell align="center">{dateHelper(item.createdAt)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ProfilePointHistoryContainer>
  );
};

const ProfilePointHistoryContainer = styled(Box)`
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

export default ProfilePointHistory;
