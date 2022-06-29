import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { delCustomer, getAllCustomer } from "api/admin";
import { checkedList } from "@store/admin";
import { idState } from "@store/auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { IUserDataType } from "types/apiType";
import { toast } from "react-toastify";
import { showConfirm } from "@helpers/messageHelper";

type IAdminEnterChoieType = IUserDataType;

const AdminUserItem = ({
  id,
  type,
  phoneNum,
  content,
  email,
}: IAdminEnterChoieType) => {
  const loggedInId = useRecoilValue(idState);
  const [show, setShow] = useState(true);
  const onClickDel = async () => {
    try {
      const data = await delCustomer({ id: loggedInId, userId: id });
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
  return (
    <TableRow sx={{ display: show ? "table-row" : "none" }}>
      <TableCell>{id}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>{phoneNum}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{content}</TableCell>
      <TableCell>
        <Button
          onClick={() => showConfirm(onClickDel)}
          variant="contained"
          color="error"
        >
          del
        </Button>
      </TableCell>
    </TableRow>
  );
};

const UserManipluateList = () => {
  const id = useRecoilValue(idState);
  const checkList = useRecoilValue(checkedList);
  const [data, setData] = useState<IUserDataType[]>([]);

  const getEnterList = async () => {
    try {
      const res = await getAllCustomer({ id: id });
      setData(res);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getEnterList();
  }, []);

  useEffect(() => {
    console.log(checkList);
  }, [checkList]);

  return (
    <MainContainer>
      <div className="adminEnbaleEditorChoicesContainerLabel">
        미승인 기업 아이디
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>type</TableCell>
            <TableCell>휴대폰번호</TableCell>
            <TableCell>email</TableCell>
            <TableCell>content</TableCell>
            <TableCell>checkbox</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {data.map((item) => (
            <AdminUserItem key={item.idx} {...item} />
          ))} */}
        </TableBody>
      </Table>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 1rem;
  & .adminEnbaleEditorChoicesContainerBtns {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
  & .adminEnbaleEditorChoicesContainerLabel {
    font-family: paybooc-Bold;
    margin-top: 1rem;
  }
  & .adminEnableEditorChoiceMainImg {
    width: 100px;
    height: 100px;
  }
`;

export default UserManipluateList;
