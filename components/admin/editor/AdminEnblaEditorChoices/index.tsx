import styled from "@emotion/styled";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { getEditorPickEnalbleList } from "api/admin";
import { useEffect, useState } from "react";
import { ICourse } from "types/apiType";

const AdminEnableEditorChoice = ({
  idx,
  type,
  title,
  mainImg,
  shortContent,
}: ICourse) => {
  const toBase64 = (arr) => {
    return Buffer.from(arr);
  };
  const [show, setShow] = useState(true);

  return (
    <TableRow sx={{ display: show ? "table-row" : "none" }}>
      <TableCell>{idx}</TableCell>
      <TableCell>{type ? "theme" : "recommend"}</TableCell>
      <TableCell>
        <img
          className="adminEnableEditorChoiceMainImg"
          src={`${toBase64(mainImg.data)}`}
        />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{shortContent}</TableCell>
      <TableCell>
        <Button variant="contained" onClick={() => setShow(false)}>
          Pick
        </Button>
      </TableCell>
    </TableRow>
  );
};

const AdminEnbaleEditorChoices = () => {
  const [enablPicks, setEnablePicks] = useState<ICourse[]>([]);

  const getEnbaleEditorPicks = async () => {
    const data = await getEditorPickEnalbleList({});
    setEnablePicks(data);
  };

  useEffect(() => {
    getEnbaleEditorPicks();
  }, []);

  return (
    <AdminEnbaleEditorChoicesContainer>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {enablPicks.map((item) => (
            <AdminEnableEditorChoice key={item.idx} {...item} />
          ))}
        </TableBody>
      </Table>
    </AdminEnbaleEditorChoicesContainer>
  );
};

const AdminEnbaleEditorChoicesContainer = styled.div`
  padding: 1rem;
  & .adminEnbaleEditorChoicesContainerLabel {
    font-family: paybooc-Bold;
  }
  & .adminEnableEditorChoiceMainImg {
    width: 100px;
    height: 100px;
  }
`;

export default AdminEnbaleEditorChoices;
