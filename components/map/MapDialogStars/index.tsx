import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const MapDialogStars = ({ score }: { score: number }) => {
  const value = Math.ceil(score);
  const fill = Array(value).fill(1);
  const noFill = Array(5 - value).fill(1);
  return (
    <MapDialogStarsContainer>
      {fill.map((item, index) => (
        <StarIcon key={index} className="mapDialogStarsContainerStar" />
      ))}
      {noFill.map((item, index) => (
        <StarOutlineIcon key={index} className="mapDialogStarsContainerStar" />
      ))}
    </MapDialogStarsContainer>
  );
};

const MapDialogStarsContainer = styled.div`
  color: #f3c221;
`;

export default MapDialogStars;
