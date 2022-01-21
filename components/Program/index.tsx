import { Avatar, Box, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import React, { VFC } from "react";
import gravatar from "gravatar";

import { PhotoContainer, TagContainer } from "./styles";
import { titleSummary } from "@helpers/programHelper";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface Props {
  src: string;
  user: string;
  title: string;
  tags: string[];
}

interface TagProps {
  tag: string;
}

const Tag: VFC<TagProps> = ({ tag }) => {
  return (
    <Box>
      <span>#{tag}</span>
    </Box>
  );
};

const Program: VFC<Props> = ({ src, user, title, tags }) => {
  return (
    <Grid item md={4} xs={4}>
      <PhotoContainer>
        <div className="topContainer">
          <div>
            <Avatar
              alt="user"
              src={gravatar.url(user, { s: "28px", d: "retro" })}
              className="avatar"
            />
          </div>
          <div>
            <FavoriteBorderIcon
              className="heart"
              sx={{ width: 28, height: 28 }}
            />
          </div>
        </div>
        <div>
          <Image
            alt={title}
            src={"/back.jpeg"}
            objectFit="cover"
            // layout="fill"
            width={1000}
            height={1000}
            // height={Math.random() * 500 + 500}
          />
        </div>
        <div className="description">
          <span className="title">{titleSummary(title)}</span>
          {tags.length > 3 ? (
            <TagContainer>
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
            </TagContainer>
          ) : (
            <TagContainer>
              {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </TagContainer>
          )}
        </div>
      </PhotoContainer>
    </Grid>
  );
};

export default Program;
