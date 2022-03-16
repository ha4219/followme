import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Pagination,
} from "@mui/material";
import { getNotice } from "api/admin";
import Link from "next/link";
import { useEffect, useState, VFC } from "react";
import { INoticeType } from "types/apiType";

const HelpNoticeItem: VFC<INoticeType> = ({
  title,
  createdAt,
  idx,
  content,
  views,
  writer,
}) => {
  // const id = useRecoilValue(idState);
  // const onClickDel = async () => {
  //   try {
  //     const data = await delNotice({ idx: idx, id: id });
  //     if (data.data === "success") {
  //       toast.success("삭제 성공");
  //       setShow(false);
  //     } else {
  //       toast.error("삭제 실패");
  //     }
  //   } catch (e) {
  //     toast.error("에러");
  //     console.log("delBanner", e);
  //   }
  // };

  // const [show, setShow] = useState(true);

  return (
    <Link href={`/help/notice/${idx}`}>
      <TableRow hover={true} sx={{ cursor: "pointer" }}>
        {/* <TableCell>{idx}</TableCell> */}
        <TableCell>{title}</TableCell>
        {/* <TableCell>{content}</TableCell> */}
        <TableCell>{views}</TableCell>
        <TableCell>{dateHelper(createdAt)}</TableCell>
        {/* <TableCell>
        <Button onClick={onClickDel} variant="contained" color="error">
          del
        </Button>
      </TableCell> */}
      </TableRow>
    </Link>
  );
};

const HelpNoticeList = () => {
  const [noticeData, setNoticeData] = useState<INoticeType[]>([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);
  const PERPAGE = 10;
  const getData = async () => {
    const data = await getNotice();

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
    <HelpNoticeListContainer>
      <Table>
        <TableHead className="helpNoticeListHead">
          <TableRow>
            {/* <TableCell>idx</TableCell> */}
            <TableCell>제목</TableCell>
            {/* <TableCell>content</TableCell> */}
            <TableCell>조회수</TableCell>
            <TableCell>작성일</TableCell>
            {/* <TableCell>Del</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {noticeData.map((item) => (
            <HelpNoticeItem key={item.idx} {...item} />
          ))}
        </TableBody>
        <TableRow>
          <TableCell
            className="helpNoticeListPagination"
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
    </HelpNoticeListContainer>
  );
};

const HelpNoticeListContainer = styled.div`
  padding: 1rem;

  & .helpNoticeListHead {
    & tr {
      border-top: 1px solid #191919;
      border-bottom: 1px solid #191919;
    }

    & th {
      border-top: 1px solid #191919;
      border-bottom: 1px solid #191919;
    }
  }
  & .helpNoticeListPagination {
    // display: flex;
    // justify-content: center;
    & ul {
      justify-content: center;
    }
    border: 0;
  }
`;

export default HelpNoticeList;
