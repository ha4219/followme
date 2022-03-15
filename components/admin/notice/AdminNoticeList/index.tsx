import styled from "@emotion/styled";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Link,
} from "@mui/material";
import { API } from "@src/API";
import { delBanner } from "api/admin";
import { useEffect, useState, VFC } from "react";
import { toast } from "react-toastify";
import { IBannerType } from "types/apiType";

const AdminNoticeItem: VFC<IBannerType> = ({ idx, imgURL, urlTo, endDate }) => {
  const onClickDel = async () => {
    try {
      const data = await delBanner({ idx: idx });
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
      <TableCell>
        <ImgContainer src={imgURL} alt={urlTo} />
      </TableCell>
      <TableCell>
        <Link href={urlTo}>
          <a>{urlTo}</a>
        </Link>
      </TableCell>
      <TableCell>{endDate}</TableCell>
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
  const [bannerData, setBannerData] = useState<IBannerType[]>([]);

  const getData = async () => {
    const { data } = await API.get("/main/swipers");
    setBannerData(data);
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
            <TableCell>Del</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bannerData.map((item) => (
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
