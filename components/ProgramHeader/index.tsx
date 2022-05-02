import styled from "@emotion/styled";
import { Box } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { FC } from "react";

interface IProps {
  title: string;
}

const ProgramHeader: FC<IProps> = ({ title, children }) => {
  return (
    <div>
      <ProgramHeaderContainer>
        <Box className="editorPath" py={1}>
          <HomeOutlinedIcon />
          <span>
            홈<span className="dividor">|</span>
            {title}
          </span>
        </Box>

        <Box className="editorTitle" mb={5}>
          {title}
        </Box>
      </ProgramHeaderContainer>
      {children}
    </div>
  );
};

const ProgramHeaderContainer = styled(Box)`
  // margin-top: 2rem;
  & .editorPath {
    display: flex;
    font-size: 0.9rem;

    & .dividor {
      padding: 1rem;
    }
  }
  & .editorTitle {
    font-family: paybooc-Bold;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
  }
`;

export default ProgramHeader;
