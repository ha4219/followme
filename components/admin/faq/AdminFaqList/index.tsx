import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { idState } from "@store/auth";
import { delFaq, getFaq } from "api/admin";
import Link from "next/link";
import { useEffect, useState, VFC } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { IFaqType } from "types/apiType";

const AdminFaqItem: VFC<IFaqType> = ({ title, content, idx, createdAt }) => {
  const id = useRecoilValue(idState);
  const onClickDel = async () => {
    try {
      const data = await delFaq({ idx: idx, id: id });
      if (data.data === "success") {
        toast.success("삭제 성공");
        setShow(false);
      } else {
        toast.error("삭제 실패");
      }
    } catch (e) {
      toast.error("에러");
      console.log("delBanner", e);
    }
  };

  const [show, setShow] = useState(true);

  return (
    <TableRow sx={{ display: show ? "table-row" : "none" }}>
      <TableCell>{idx}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{content}</TableCell>
      {/* <TableCell>{views}</TableCell> */}
      <TableCell>{dateHelper(createdAt)}</TableCell>
      <TableCell>
        <Link href={{ pathname: `faq/revise`, query: { idx: idx } }} passHref>
          <Button variant="contained" color="primary">
            수정
          </Button>
        </Link>
      </TableCell>
      <TableCell>
        <Button onClick={onClickDel} variant="contained" color="error">
          삭제
        </Button>
      </TableCell>
    </TableRow>
  );
};

const ImgContainer = styled.img`
  width: 200px;
  hieght: 200px;
  background-size: cover;
`;

const AdminFaqList = () => {
  const [faqData, setFaqData] = useState<IFaqType[]>([]);

  const getData = async () => {
    const data = await getFaq();
    setFaqData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminBannerListContaner>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Idx</TableCell>
            <TableCell>title</TableCell>
            <TableCell>content</TableCell>
            <TableCell>createAt</TableCell>
            <TableCell>수정</TableCell>
            <TableCell>삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {faqData.map((item) => (
            <AdminFaqItem key={item.idx} {...item} />
          ))}
        </TableBody>
      </Table>
      <div className="btns">
        <Link href="/admin/faq/write">
          <Button variant="contained">add</Button>
        </Link>
      </div>
    </AdminBannerListContaner>
  );
};

const AdminBannerListContaner = styled.div`
  padding: 1rem;

  & .btns {
    margin-top: 1rem;
    display: flex;
    justify-content: right;
  }
`;

export default AdminFaqList;
