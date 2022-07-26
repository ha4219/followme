import styled from "@emotion/styled";
import { toBase64 } from "@helpers/programHelper";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { editorState } from "@store/editor";
import { getEditorPickEnalbleList, updateEditorPick } from "api/admin";
import { getEditorAllBoard } from "api/board";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { ICourse } from "types/apiType";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import useInput from "@hooks/useInput";

const AdminEnableEditorChoice = ({
  idx,
  type,
  title,
  mainImg,
  shortContent,
}: ICourse) => {
  const [editorIdxs, setEditorIdxs] = useRecoilState(editorState);

  const onClick = () => {
    const arr = [...editorIdxs];
    arr.push(idx);

    setEditorIdxs(Array.from(new Set(arr)));
  };

  return (
    <TableRow>
      <TableCell>{idx}</TableCell>
      <TableCell>{type ? "theme" : "recommend"}</TableCell>
      <TableCell>
        <img
          className="adminEnableEditorChoiceMainImg"
          src={`${toBase64(mainImg)}`}
        />
      </TableCell>
      <TableCell>
        <Link href={`/${type ? "theme" : "recommend"}/${idx}`}>{title}</Link>
      </TableCell>
      <TableCell>{shortContent}</TableCell>
      <TableCell>
        <Button variant="contained" color="success" onClick={onClick}>
          ADD
        </Button>
      </TableCell>
    </TableRow>
  );
};

const AdminSelectedEditorChoice = ({
  idx,
  type,
  title,
  mainImg,
  shortContent,
}: ICourse) => {
  const [editorIdxs, setEditorIdxs] = useRecoilState(editorState);

  const onClick = () => {
    const tmp = new Set(editorIdxs);
    tmp.delete(idx);
    setEditorIdxs(Array.from(tmp));
  };

  return (
    <TableRow>
      <TableCell>{idx}</TableCell>
      <TableCell>{type ? "theme" : "recommend"}</TableCell>
      <TableCell>
        <img
          className="adminEnableEditorChoiceMainImg"
          src={`${toBase64(mainImg)}`}
        />
      </TableCell>
      <TableCell>
        <Link href={`/${type ? "theme" : "recommend"}/${idx}`}>{title}</Link>
      </TableCell>
      <TableCell>{shortContent}</TableCell>
      <TableCell>
        <Button variant="contained" color="error" onClick={onClick}>
          Del
        </Button>
      </TableCell>
    </TableRow>
  );
};

const PERPAGE = 10;

const AdminEnbaleEditorChoices = () => {
  const [enablPicks, setEnablePicks] = useState<ICourse[]>([]);
  const [editorPicks, setEditorPicks] = useState<ICourse[]>([]);
  const [value, setValue, onChangeValue] = useInput("");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(1);

  const [allCurEnablPicks, setAllCurEnablePicks] = useState<ICourse[]>([]);
  const [curEnablPicks, setCurEnablePicks] = useState<ICourse[]>([]);
  const [curEditorPicks, setCurEditorPicks] = useState<ICourse[]>([]);
  const [editorIdxs, setEditorIdxs] = useRecoilState(editorState);

  useEffect(() => {
    const arrTrue: ICourse[] = [];
    const arrFalse: ICourse[] = [];
    const tmpSet = new Set(editorIdxs);
    enablPicks.forEach((item) => {
      if (tmpSet.has(item.idx)) {
        arrTrue.push(item);
      } else {
        arrFalse.push(item);
      }
    });
    setAllCurEnablePicks(arrFalse);
    setCurEnablePicks(arrFalse);
    setCurEditorPicks(arrTrue);
  }, [editorIdxs, enablPicks]);
  const getEnbaleEditorPicks = async () => {
    const data = await getEditorPickEnalbleList({});
    setEnablePicks(data);
  };

  const getEditorPicks = async () => {
    const data = await getEditorAllBoard({});
    const arr: number[] = [];
    data.recommend.forEach((item) => {
      arr.push(item.idx);
    });
    data.theme.forEach((item) => {
      arr.push(item.idx);
    });

    setEditorIdxs(arr);
    setEditorPicks([...data.recommend, ...data.theme]);
  };

  const onSubmit = async () => {
    try {
      const theme: number[] = [];
      const recommend: number[] = [];
      const tmpSet = new Set(editorIdxs);

      enablPicks.forEach((item) => {
        if (tmpSet.has(item.idx)) {
          if (item.type === 0) {
            recommend.push(item.idx);
          } else {
            theme.push(item.idx);
          }
        }
      });
      console.log(theme, recommend);

      const data = await updateEditorPick({
        theme: theme,
        recommend: recommend,
      });
      if (data.data === "success") {
        toast.success("update");
      }
    } catch (e) {
      console.log(e);
      toast.error("update error");
    }
  };
  const onRefreshValue = (e) => {
    e.preventDefault();
    setCurEnablePicks(allCurEnablPicks);
  };
  const onSubmitValue = (e) => {
    e.preventDefault();
    setCurEnablePicks(
      allCurEnablPicks.filter((item) => item.title.search(value) !== -1)
    );
  };

  useEffect(() => {
    getEnbaleEditorPicks();
    getEditorPicks();
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  useEffect(() => {
    setSize(Math.ceil(curEnablPicks.length / PERPAGE));
  }, [curEnablPicks]);

  return (
    <AdminEnbaleEditorChoicesContainer>
      <div className="adminEnbaleEditorChoicesContainerLabel">
        선택된 editor pick
      </div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Idx</TableCell>
            <TableCell>type</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>title</TableCell>
            <TableCell>shortContent</TableCell>
            <TableCell>del</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {curEditorPicks.map((item) => (
            <AdminSelectedEditorChoice key={item.idx} {...item} />
          ))}
        </TableBody>
      </Table>
      <Box py={2}>
        <AdminEnableEditorChoicesFilterContainer>
          <div className="adminEnbaleEditorChoicesContainerLabel">
            선택 가능한 editor pick
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
              <TableCell>Idx</TableCell>
              <TableCell>type</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>title</TableCell>
              <TableCell>shortContent</TableCell>
              <TableCell>pick</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {curEnablPicks
              .slice(page * PERPAGE, (page + 1) * PERPAGE)
              .map((item) => (
                <AdminEnableEditorChoice key={item.idx} {...item} />
              ))}
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
      </Box>
      <div className="adminEnbaleEditorChoicesContainerBtns">
        <Button onClick={onSubmit} variant="contained">
          save
        </Button>
      </div>
    </AdminEnbaleEditorChoicesContainer>
  );
};

const AdminEnbaleEditorChoicesContainer = styled.div`
  padding: 1rem;
  & .adminEnbaleEditorChoicesContainerBtns {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }
  & .adminEnbaleEditorChoicesContainerLabel {
    font-family: paybooc-Bold;
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

export default AdminEnbaleEditorChoices;
