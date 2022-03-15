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
import { VFC } from "react";
import { useRecoilState } from "recoil";
import { mapState, mapSelectedState } from "@store/map";

const ThemeCustomRightScrollTableItem: VFC<MapDataType> = ({
  url,
  title,
  content,
  lat,
  lon,
  tags,
  score,
  distance,
}) => {
  const [mapLatLonState, setMapLatLonState] = useRecoilState(mapState);
  const [mapSelectState, setMapSelectState] = useRecoilState(mapSelectedState);

  const onClick = () => {
    setMapLatLonState([lat, lon]);
    setMapSelectState([url, title, content, score, tags]);
  };

  return (
    <ThemeCustomRightScrollTableItemContainer hover={true} onClick={onClick}>
      <TableCell>
        <img
          src={url}
          alt={title}
          className="themeCustomRightScrollTableItemImg"
        />
      </TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{score}</TableCell>
    </ThemeCustomRightScrollTableItemContainer>
  );
};

const ThemeCustomRightScrollTable = () => {
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
          {mapDummyData.map((item, index) => (
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
<<<<<<< HEAD
    width: 50px;
    height: 50px;
    border-radius: 50px;
=======
    width: 200px;
    height: 200px;
>>>>>>> 77f538a6293fb8fe3edf13c864196f04c703d8e6
  }
`;

const ThemeCustomRightScrollTableContainer = styled(Table)`
  // overflow: auto;
`;

export default ThemeCustomRightScrollTable;
