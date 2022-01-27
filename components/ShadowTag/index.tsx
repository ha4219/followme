import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { VFC } from "react";

interface TagProps {
  tag: string;
}

const ShadowTag: VFC<TagProps> = ({ tag }) => {
  return (
    <TagContainer py={0.3}>
      <span>#{tag}</span>
    </TagContainer>
  );
};

const TagContainer = styled(Box)`
  & :hover {
    cursor: pointer;
  }

  & span {
    padding: 0px 4px;
    background: linear-gradient(0deg, #e3e8ef 50%, white 50%);
  }
`;

export default ShadowTag;
