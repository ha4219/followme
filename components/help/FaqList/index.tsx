import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Pagination,
  Box,
} from "@mui/material";
import { getFaq, getNotice } from "api/admin";
import Link from "next/link";
import { useEffect, useState, VFC } from "react";
import { INoticeType } from "types/apiType";
import SearchIcon from "@mui/icons-material/Search";

const HelpFaqItem: VFC<INoticeType> = ({
  title,
  createdAt,
  idx,
  content,
  views,
  writer,
}) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <TableRow
        hover={true}
        onClick={() => setShow(!show)}
        sx={{ cursor: "pointer" }}
      >
        {/* <TableCell>{idx}</TableCell> */}
        <TableCell width={110}>
          <div className="faqQueIcon">
            <SearchIcon sx={{ width: 20, height: 20 }} />
          </div>
        </TableCell>
        {/* <TableCell>{content}</TableCell> */}
        <TableCell>{title}</TableCell>
        {/* <TableCell>
        <Button onClick={onClickDel} variant="contained" color="error">
          del
        </Button>
      </TableCell> */}
      </TableRow>
      <TableRow sx={{ display: show ? "table-row" : "none" }}>
        <TableCell width={50}>
          <div className="faqReplyContainer">
            <span>↳</span>
            <div className="faqReplyIcon">
              <SearchIcon sx={{ width: 20, height: 20 }} />
            </div>
          </div>
        </TableCell>
        {/* <TableCell>{content}</TableCell> */}
        <TableCell>{content}</TableCell>
      </TableRow>
    </>
  );
};

// <TableRow>
//   <TableRow hover={true} sx={{ cursor: "pointer" }}>
//     {/* <TableCell>{idx}</TableCell> */}
//     <TableCell>{title}</TableCell>
//     {/* <TableCell>{content}</TableCell> */}
//     <TableCell>{dateHelper(createdAt)}</TableCell>
//     {/* <TableCell>
//         <Button onClick={onClickDel} variant="contained" color="error">
//           del
//         </Button>
//       </TableCell> */}
//   </TableRow>
//   <TableRow sx={{ display: show ? "table-row" : "none" }}></TableRow>
// </TableRow>;

const HelpFaqList = () => {
  const [noticeData, setNoticeData] = useState<INoticeType[]>([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);
  const PERPAGE = 10;
  const getData = async () => {
    const data = await getFaq();

    setNoticeData(data);
    setSize(Math.ceil(data.length / PERPAGE));
  };

  useEffect(() => {
    getData();
  }, []);
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };
  return (
    <HelpFaqListContainer>
      <Table>
        <TableHead className="helpFaqListHead">
          <TableRow>
            {/* <TableCell>idx</TableCell> */}
            <TableCell width={50}>{"Q&A"}</TableCell>
            {/* <TableCell>content</TableCell> */}
            <TableCell>제목</TableCell>
            {/* <TableCell>Del</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {noticeData
            .slice(page * PERPAGE, (page + 1) * PERPAGE)
            .map((item) => (
              <HelpFaqItem key={item.idx} {...item} />
            ))}
        </TableBody>
        <TableRow>
          <TableCell
            className="helpFaqListPagination"
            colSpan={3}
            align="center"
          >
            <Pagination
              className="paginationIn"
              count={size}
              onChange={handleChangePage}
            />
          </TableCell>
        </TableRow>
      </Table>
    </HelpFaqListContainer>
  );
};

const HelpFaqListContainer = styled.div`
  padding: 1rem;

  & .helpFaqListHead {
    & tr {
      border-top: 1px solid #191919;
      border-bottom: 1px solid #191919;
    }

    & th {
      border-top: 1px solid #191919;
      border-bottom: 1px solid #191919;
    }
  }
  & .helpFaqListPagination {
    // display: flex;
    // justify-content: center;
    & ul {
      justify-content: center;
    }
    border: 0;
  }

  & .faqQueIcon {
    background-color: #dcdce6;
    width: 30px;
    height: 30px;
    padding-top: 5px;
    border-radius: 30px;
    color: #ffffff;
    text-align: center;
  }

  & .faqReplyContainer {
    display: flex;

    & span {
      padding: 0 1rem;
    }
    & .faqReplyIcon {
      width: 30px;
      text-align: center;
      padding-top: 5px;

      height: 30px;
      color: #ffffff;
      border-radius: 30px;
      background-color: #3386ff;
    }
  }
`;

export default HelpFaqList;
