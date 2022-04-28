import styled from "@emotion/styled";
import Star from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";

const StarItem = () => {
  return (
    <StarContainer>
      <Star className="starGeneratorFill" />
    </StarContainer>
  );
};

const OutStarItem = () => {
  return (
    <StarContainer>
      <StarBorder />
    </StarContainer>
  );
};

const StarGenerator = ({ count }) => {
  const fill = Math.floor(count);

  const out = 5 - fill;

  return (
    <div>
      {Array(fill)
        .fill(0)
        .map((item, index) => {
          return <StarItem key={index} />;
        })}
      {Array(out)
        .fill(0)
        .map((item, index) => {
          return <OutStarItem key={index} />;
        })}
    </div>
  );
};

const StarContainer = styled.div`
  display: inline-block;

  color: #f6b400;

  // & path {
  //   color: linear-gradient(145deg, #f3c221 13%, #fff04b 88%);
  //   // -webkit-background-clip: text,
  //   // -webkit-text-fill-color: transparent,
  // }
`;

export default StarGenerator;
