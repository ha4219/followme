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
import { getAllEnterWaitList, setAllEnterWaitList } from "api/admin";
import { checkedList } from "@store/admin";
import { idState } from "@store/auth";
import { useRecoilState, useRecoilValue } from "recoil";
import { IUserDataType } from "types/apiType";
import { toast } from "react-toastify";

type IAdminEnterChoieType = IUserDataType;

const AdminEnterChoice = ({
  id,
  type,
  phoneNum,
  content,
  email,
}: IAdminEnterChoieType) => {
  const [check, setCheck] = useRecoilState(checkedList);

  const onChange = (e) => {
    if (e.target.checked) {
      const tmp = new Set<string>(check);
      tmp.add(id);
      setCheck(Array.from(tmp));
    } else {
      const tmp = new Set<string>(check);
      tmp.delete(id);
      setCheck(Array.from(tmp));
    }
  };

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{type}</TableCell>
      <TableCell>{phoneNum}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{content}</TableCell>
      <TableCell>
        <Checkbox onChange={onChange} />
      </TableCell>
    </TableRow>
  );
};

const AdminEnterChoices = () => {
  const id = useRecoilValue(idState);
  const checkList = useRecoilValue(checkedList);
  const [data, setData] = useState<IUserDataType[]>([]);

  const getEnterList = async () => {
    try {
      const res = await getAllEnterWaitList({ id: id });
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

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await setAllEnterWaitList({ id: id, enterprises: checkList });
      if (res.data === "fail") {
        toast.error("요청이 실패했습니다.");
      } else {
        toast.success("요청 성공");
      }
    } catch (e) {
      console.log("onSubmit enter wait id", e);
    } finally {
      getEnterList();
    }
  };

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
          {data.map((item) => (
            <AdminEnterChoice key={item.idx} {...item} />
          ))}
        </TableBody>
      </Table>
      <div className="adminEnbaleEditorChoicesContainerBtns">
        <Button onClick={onSubmit} variant="contained">
          승인
        </Button>
      </div>
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

export default AdminEnterChoices;
