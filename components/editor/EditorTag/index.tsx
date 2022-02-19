import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { tagState } from "@store/tag";
import { VFC } from "react";
import { useRecoilState } from "recoil";

interface IProps {
  tag: string;
}

const EditorTag: VFC<IProps> = ({ tag }) => {
  const [selectedTag, setSelectedTag] = useRecoilState(tagState);

  const onClick = () => {
    if (selectedTag === tag) {
      setSelectedTag("");
    } else {
      setSelectedTag(tag);
    }
  };
  return (
    <MainContainer
      onClick={onClick}
      sx={
        selectedTag === tag
          ? { color: "#ffffff", backgroundColor: "#b69775" }
          : { color: "#b69775" }
      }
    >{`#${tag}`}</MainContainer>
  );
};

const MainContainer = styled(Box)`
  display: inline-block;
  padding: 0.25rem 0.7rem;
  margin-top: 5px;
  margin-right: 5px;
  border: 1px solid #b69775;
  border-radius: 1rem;
  :hover {
    cursor: pointer;
    color: #ffffff;
    background-color: #b69775;
  }
`;

export default EditorTag;
