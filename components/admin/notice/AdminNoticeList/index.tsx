import styled from "@emotion/styled";
import { dateHelper } from "@helpers/programHelper";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
} from "@mui/material";
import { idState } from "@store/auth";
import { delNotice, getNotice } from "api/admin";
import { useEffect, useState, VFC } from "react";
import { toast } from "react-toastify";
import { useRecoilValue } from "recoil";
import { IBannerType, INoticeType } from "types/apiType";

const AdminNoticeItem: VFC<INoticeType> = ({
  title,
  createdAt,
  idx,
  content,
  views,
  writer,
}) => {
  const id = useRecoilValue(idState);
  const onClickDel = async () => {
    try {
      const data = await delNotice({ idx: idx, id: id });
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
      <TableCell>{views}</TableCell>
      <TableCell>{dateHelper(createdAt)}</TableCell>
      <TableCell>
        <Button onClick={onClickDel} variant="contained" color="error">
          del
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

const AdminNoticeList = () => {
  const [noticeData, setNoticeData] = useState<INoticeType[]>([]);

  const getData = async () => {
    const data = await getNotice();

    setNoticeData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AdminBannerListContaner>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>idx</TableCell>
            <TableCell>title</TableCell>
            <TableCell>content</TableCell>
            <TableCell>views</TableCell>
            <TableCell>createAt</TableCell>
            <TableCell>Del</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {noticeData.map((item) => (
            <AdminNoticeItem key={item.idx} {...item} />
          ))}
        </TableBody>
      </Table>
      <div className="btns">
        <Link href="/admin/notice/write">
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

export default AdminNoticeList;
