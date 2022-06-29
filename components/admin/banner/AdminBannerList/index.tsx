import styled from "@emotion/styled";
import { showConfirm } from "@helpers/messageHelper";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { API } from "@src/API";
import { delBanner } from "api/admin";
import Link from "next/link";
import { useEffect, useState, VFC } from "react";
import { toast } from "react-toastify";
import { IBannerType } from "types/apiType";

const AdminBannerItem: VFC<IBannerType> = ({ idx, imgURL, urlTo, endDate }) => {
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
        <Link
          href={{
            pathname: "/admin/banner/revise",
            query: {
              idx: idx,
              imgURL: imgURL,
              urlTo: urlTo,
              endDate: endDate,
            },
          }}
          passHref
        >
          <Button variant="contained">수정</Button>
        </Link>
      </TableCell>
      <TableCell>
        <Button
          onClick={() => showConfirm(onClickDel)}
          variant="contained"
          color="error"
        >
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

const AdminBannerList = () => {
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
            <TableCell>Image</TableCell>
            <TableCell>UrlTo</TableCell>
            <TableCell>EndDate</TableCell>
            <TableCell>수정</TableCell>
            <TableCell>삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bannerData.map((item) => (
            <AdminBannerItem key={item.idx} {...item} />
          ))}
        </TableBody>
      </Table>
      <div className="btns">
        <Link href="/admin/banner/write">
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

export default AdminBannerList;
