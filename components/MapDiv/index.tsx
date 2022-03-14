import ShadowTag from "@components/ShadowTag";
import { MapDataType } from "@data/MapData";
import styled from "@emotion/styled";
import {
  mapContentSummary,
  mapTitleSummary,
  titleSummary,
} from "@helpers/programHelper";
import { Button } from "@mui/material";
import { mapState } from "@store/map";
import { VFC } from "react";
import { useRecoilState } from "recoil";

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
    padding: 3px 6px 6px 10px;
    border-radius: 12px;
  }

  & .tag:hover {
    color: #fff;
    background-color: #b69775;
  }
`;

const MapDiv: VFC<MapDataType> = ({
  url,
  title,
  content,
  tags,
  distance,
  lat,
  lon,
}) => {
  const [mapLatLonState, setMapLatLonState] = useRecoilState(mapState);

  const onClick = () => {
    setMapLatLonState([lat, lon]);
  };
  return (
    <Container onClick={onClick}>
      <ImgContainer src={url} alt={title} />
      <DesContainer>
        <div className="title">{mapTitleSummary(title)}</div>
        <div className="content">{mapContentSummary(content)}</div>
        <TagContainer tags={tags.slice(-3)} />
        <div className="dis">{distance}m</div>
      </DesContainer>
    </Container>
  );
};

const Container = styled(Button)`
  background-color: #ffffff;
  display: flex;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 6px 0 rgba(5, 16, 106, 0.12);
  text-align: left;
  padding-top: 0;
  padding-bottom: 0;
  align-items: top;

  margin-bottom: 5px;
`;

const ImgContainer = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  margin-right: 10px;
`;

const DesContainer = styled.div`
  display: inline-block;
  width: 230px;

  & .title {
    font-weight: bold;
    padding-bottom: 7px;
  }
  & .content {
    font-size: 0.8rem;
  }
  & .dis {
    color: #00a0e0;
    font-weight: bold;
  }
`;

export default MapDiv;
