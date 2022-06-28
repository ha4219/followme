import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import { VFC } from "react";

interface TagProps {
  tag: string;
}

const ShadowTag: VFC<TagProps> = ({ tag }) => {
  const router = useRouter();

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push({
      pathname: "/search",
      query: { value: tag },
    });
  };

  return (
    <TagContainer py={0.3} onClick={onClick}>
      <span>#{tag}</span>
    </TagContainer>
  );
};

const TagContainer = styled(Box)`
  cursor: pointer;
  margin-right: 0.5rem;
  & :hover {
    cursor: pointer;
  }

  & span {
    padding: 0px 4px;
    background: linear-gradient(0deg, #e3e8ef 50%, white 50%);
  }
`;

export default ShadowTag;
