import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  Box,
  Pagination,
  TextField,
  InputAdornment,
  IconButton,
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
import useInput from "@hooks/useInput";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";

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
const PERPAGE = 10;

const UserManipluateList = () => {
  const id = useRecoilValue(idState);
  const checkList = useRecoilValue(checkedList);
  const [value, setValue, onChangeValue] = useInput("");
  const [data, setData] = useState<IUserDataType[]>([]);
  const [allData, setAllData] = useState<IUserDataType[]>([]);

  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);

  const getEnterList = async () => {
    try {
      const res = await getAllCustomer({ id: id });
      setData(res);
      setAllData(res);
    } catch (e) {
      console.log(e);
    }
  };

  const onRefreshValue = (e) => {
    e.preventDefault();
    setData(allData);
  };
  const onSubmitValue = (e) => {
    e.preventDefault();
    setData(allData.filter((item) => item.id.search(value) !== -1));
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  useEffect(() => {
    getEnterList();
  }, []);

  useEffect(() => {
    console.log(checkList);
  }, [checkList]);

  return (
    <MainContainer>
      <AdminEnableEditorChoicesFilterContainer>
        <div className="adminEnbaleEditorChoicesContainerLabel">
          모든 유저 정보
        </div>
        <div className="adminEnbaleEditorChoicesContainerFilter">
          <TextField
            label="filter"
            value={value}
            onChange={onChangeValue}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={onRefreshValue}>
                    <RefreshIcon />
                  </IconButton>
                  <IconButton onClick={onSubmitValue}>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
      </AdminEnableEditorChoicesFilterContainer>
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
      <Box>
        <Pagination
          className="pagination"
          count={size}
          page={page + 1}
          onChange={handleChangePage}
        />
      </Box>
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

  & .pagination {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }
`;

const AdminEnableEditorChoicesFilterContainer = styled(Box)`
  display: flex;
  justify-content: space-between;

  padding: 1rem 0;
`;

export default UserManipluateList;
