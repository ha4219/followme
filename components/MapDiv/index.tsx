import ShadowTag from "@components/ShadowTag";
import { MapDataType } from "@data/MapData";
import styled from "@emotion/styled";
import { getDistance } from "@helpers/mapHelper";
import {
  mapContentSummary,
  mapTitleSummary,
  titleSummary,
} from "@helpers/programHelper";
import { Box, Button, Grid, TableRow, Typography } from "@mui/material";
import { curMapState, mapState } from "@store/map";
import { VFC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { IEnterpriseType } from "types/apiType";

// interface Props {
//   url: string;
//   title: string;
//   content: string;
//   tags: string[];
//   distance: number;
// }

const TagContainer: VFC<{ tags: string[] }> = ({ tags }) => {
  return (
    <TagDiv>
      {tags.map((item, index) => (
        <div key={index} className="tag">
          {item}
        </div>
      ))}
    </TagDiv>
  );
};

const TagDiv = styled.div`
  display: flex;
  overflow: hidden;

  & .tag {
    font-size: 11px;
    font-weight: bold;
    border: solid 1px #b69775;
    margin: 11px 5px;
    // padding: 3px 6px 6px 10px;
    padding: 3px 6px;
    border-radius: 12px;
  }

  & .tag:hover {
    color: #fff;
    background-color: #b69775;
  }
`;

const MapDiv: VFC<IEnterpriseType> = ({
  profileImage,
  name,
  content,
  tags,
  latitude,
  longitude,
}) => {
  const [mapLatLonState, setMapLatLonState] = useRecoilState(mapState);
  const curMapLatLonState = useRecoilValue(curMapState);

  const onClick = () => {
    setMapLatLonState([Number(latitude), Number(longitude)]);
  };
  return (
    <Box sx={{ height: "130px", marginBottom: "1rem", width: "100%" }}>
      <Container onClick={onClick}>
        <ImgContainer src={profileImage} alt={name} />
        <DesContainer>
          <Typography variant="body1" sx={{ overflow: "hidden" }}>
            {mapTitleSummary(name)}
          </Typography>
          <Typography className="content" variant="body2">
            {mapContentSummary(content ? content : "")}
          </Typography>

          <div className="mapDivTags">
            <TagContainer tags={tags.slice(-3)} />
          </div>
          <div className="dis">
            {getDistance(
              curMapLatLonState[0],
              curMapLatLonState[1],
              Number(latitude),
              Number(longitude)
            )}
            m
          </div>
        </DesContainer>
      </Container>
    </Box>
  );
};

const Container = styled(Button)`
  background-color: #ffffff;
  display: flex;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  justify-content: left;
  box-shadow: 0 0 6px 0 rgba(5, 16, 106, 0.12);
  text-align: left;
  padding-top: 0;
  padding-bottom: 0;
  align-items: top;
  height: 100%;
  overflow: hidden;
`;

const ImgContainer = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 10px;
`;

const DesContainer = styled.div`
  display: inline-block;
  width: auto;
  overflow: hidden;

  & .title {
    display: inline-block;
    font-weight: bold;
    padding-bottom: 7px;
  }
  & .content {
    font-weight: normal;
    font-size: 0.8rem;
  }

  & .mapDivTags {
    height: 1rem;
    overflow: hidden;
  }
  & .dis {
    color: #00a0e0;
    font-weight: bold;
  }
`;

export default MapDiv;
