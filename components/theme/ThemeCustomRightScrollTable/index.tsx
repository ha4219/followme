import { MapDataType, mapDummyData } from "@data/MapData";
import styled from "@emotion/styled";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState, VFC } from "react";
import { useRecoilState } from "recoil";
import { mapState, mapSelectedState } from "@store/map";
import { IEnterpriseType } from "types/apiType";
import { toBase64 } from "@helpers/programHelper";
import { getEnterprises } from "api/enterprise";
// import { editorState } from "@store/editor";

const ThemeCustomRightScrollTableItem = ({
  profileImage,
  name,
  content,
  latitude,
  longitude,
  tags,
  score,
  idx,
  id,
}: IEnterpriseType) => {
  const [, setMapLatLonState] = useRecoilState(mapState);
  const [, setMapSelectState] = useRecoilState(mapSelectedState);
  // const [editorSelectState, setEditorSelectState] = useRecoilState(editorState);

  const onClick = () => {
    setMapLatLonState([Number(latitude), Number(longitude)]);
    setMapSelectState([profileImage, name, content, score, tags, idx, id]);
  };

  return (
    <ThemeCustomRightScrollTableItemContainer hover={true} onClick={onClick}>
      <TableCell>
        <img
          src={profileImage}
          alt={name}
          className="themeCustomRightScrollTableItemImg"
        />
      </TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{score}</TableCell>
    </ThemeCustomRightScrollTableItemContainer>
  );
};

const ThemeCustomRightScrollTable = () => {
  const [data, setData] = useState<IEnterpriseType[]>([]);
  const getEnter = async () => {
    const dataTmp2 = await getEnterprises();
    const dataTmp = dataTmp2.map((item) => ({
      ...item,
      profileImage: `${toBase64(item.profileImage)}`,
    }));

    setData(dataTmp);
  };

  useEffect(() => {
    getEnter();
  }, []);

  return (
    <TableContainer sx={{ maxHeight: 440 }}>
      <ThemeCustomRightScrollTableContainer>
        <TableHead>
          <TableRow>
            <TableCell>Img</TableCell>
            <TableCell>명칭</TableCell>
            <TableCell>평점</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <ThemeCustomRightScrollTableItem key={index} {...item} />
          ))}
        </TableBody>
      </ThemeCustomRightScrollTableContainer>
    </TableContainer>
  );
};

const ThemeCustomRightScrollTableItemContainer = styled(TableRow)`
  cursor: pointer;

  & .themeCustomRightScrollTableItemImg {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;

const ThemeCustomRightScrollTableContainer = styled(Table)`
  // overflow: auto;
`;

export default ThemeCustomRightScrollTable;
