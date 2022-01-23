import { Box } from "@mui/material";
import { FC } from "react";
import { TagConv } from "./styles";

interface TagProps {
  tag: string;
}

interface TagContainerProps {
  tags: string[];
}

const Tag: FC<TagProps> = ({ tag }) => {
  return (
    <Box>
      <span>#{tag}</span>
    </Box>
  );
};

const TagContainer: FC<TagContainerProps> = ({ tags }) => {
  if (tags.length > 3) {
    return (
      <TagConv>
        <Box>
          {tags.slice(0, 2).map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </Box>
        <Box>
          {tags.slice(2, 4).map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </Box>
      </TagConv>
    );
  } else {
    return (
      <TagConv>
        {tags.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </TagConv>
    );
  }
};

export default TagContainer;