import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { courseTagState } from "@store/tag";
import { useCallback, VFC } from "react";
import { useRecoilState } from "recoil";

interface IProps {
  tags: string[];
}

const Tag: VFC<{ tag: string }> = ({ tag }) => {
  const [selectedTag, setSelectedTag] = useRecoilState(courseTagState);

  const onClick = useCallback(() => {
    setSelectedTag(tag);
  }, []);

  return (
    <Box>
      <span onClick={onClick} className={selectedTag === tag ? "active" : ""}>
        #{tag}
      </span>
    </Box>
  );
};

const TagContainerVertical: VFC<IProps> = ({ tags }) => {
  return (
    <MainContainer>
      <div className="title">코스를 부탁해</div>
      {tags.map((item, index) => (
        <Tag tag={item} key={index} />
      ))}
    </MainContainer>
  );
};

const MainContainer = styled(Box)`
  padding: 1rem 0;
  width: 100%;
  font-weight: bold;

  & .title {
    margin: 1rem 5px;
    font-size: 1.2rem;
  }
  & span {
    display: inline-block;
    border: 1px solid #b69775;
    border-radius: 1rem;
    margin: 5px;
    padding: 0.25rem 0.7rem;
    font-size: 0.8rem;
    text-align: center;
    vertical-align: center;
    color: #b69775;
  }

  & span:hover {
    background-color: #b69775;
    color: #ffffff;
    cursor: pointer;
  }

  & .active {
    background-color: #b69775;
    color: #ffffff;
  }
`;

export default TagContainerVertical;
