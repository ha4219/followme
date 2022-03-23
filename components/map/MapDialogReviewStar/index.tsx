import styled from "@emotion/styled";
import StarIcon from "@mui/icons-material/Star";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const MapDialogStars = ({
  score,
  setScore,
}: {
  score: number;
  setScore: any;
}) => {
  const fill = Array(score).fill(1);
  const noFill = Array(5 - score).fill(1);

  const onClick = (value) => {
    setScore(value);
  };

  return (
    <MapDialogStarsContainer>
      {fill.map((item, index) => (
        <StarIcon
          key={index}
          onClick={() => onClick(index + 1)}
          className="mapDialogStarsContainerStar"
        />
      ))}
      {noFill.map((item, index) => (
        <StarOutlineIcon
          key={index}
          onClick={() => onClick(score + index + 1)}
          className="mapDialogStarsContainerStar"
        />
      ))}
    </MapDialogStarsContainer>
  );
};

const MapDialogStarsContainer = styled.div`
  color: #f3c221;
  text-align: center;

  & .mapDialogStarsContainerStar {
    width: 4rem;
    height: 4rem;
  }
`;

export default MapDialogStars;
