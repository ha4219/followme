import styled from "@emotion/styled";
import { toBase64 } from "@helpers/programHelper";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { editorState } from "@store/editor";
import { getEditorPickEnalbleList, updateEditorPick } from "api/admin";
import { getEditorAllBoard } from "api/board";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { ICourse } from "types/apiType";

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
      <TableCell>{title}</TableCell>
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
      <TableCell>{title}</TableCell>
      <TableCell>{shortContent}</TableCell>
      <TableCell>
        <Button variant="contained" color="error" onClick={onClick}>
          Del
        </Button>
      </TableCell>
    </TableRow>
  );
};

const AdminEnbaleEditorChoices = () => {
  const [enablPicks, setEnablePicks] = useState<ICourse[]>([]);
  const [editorPicks, setEditorPicks] = useState<ICourse[]>([]);

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

  useEffect(() => {
    getEnbaleEditorPicks();
    getEditorPicks();
  }, []);

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
      <div className="adminEnbaleEditorChoicesContainerLabel">
        선택 가능한 editor pick
      </div>
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
          {curEnablPicks.map((item) => (
            <AdminEnableEditorChoice key={item.idx} {...item} />
          ))}
        </TableBody>
      </Table>
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
    margin-top: 1rem;
  }
  & .adminEnableEditorChoiceMainImg {
    width: 100px;
    height: 100px;
  }
`;

export default AdminEnbaleEditorChoices;
