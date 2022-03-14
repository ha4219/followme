import styled from "@emotion/styled";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Link,
} from "@mui/material";
import { API } from "@src/API";
import Image from "next/image";
import { useEffect, useState, VFC } from "react";
import { IBannerType } from "types/apiType";

const AdminBannerItem: VFC<IBannerType> = ({ idx, imgURL, urlTo, endDate }) => {
  const onClickDel = () => {
    // TODO
  };
  return (
    <TableRow>
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
        <Button onClick={onClickDel} variant="contained">
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
            <TableCell>Del</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bannerData.map((item) => (
            <AdminBannerItem key={item.idx} {...item} />
          ))}
        </TableBody>
      </Table>
      <div className="btns">
        <Link href="banner/write">
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
