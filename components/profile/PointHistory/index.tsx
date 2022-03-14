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
import { VFC } from "react";
import { IPointType } from "types/apiType";

interface IProps {
  pointHistory: IPointType[];
}

const ProfilePointHistory: VFC<IProps> = ({ pointHistory }) => {
  console.log(pointHistory);

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
