import { Avatar, Box, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useState, VFC } from "react";
import gravatar from "gravatar";

import { PhotoContainer, DesContainer } from "./styles";
import { titleSummary } from "@helpers/programHelper";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TagContainer from "@components/TagContainer";
import { useRouter } from "next/router";

interface Props {
  src: string;
  user: string;
  title: string;
  tags: string[];
}

interface TagProps {
  tag: string;
}

const Program: VFC<Props> = ({ src, user, title, tags }) => {
  const [like, setLike] = useState(false);
  const router = useRouter();

  const onClickLike = useCallback(() => {
    setLike(!like);
  }, [like]);

  const onClickUser = useCallback(() => {
    router.push(`/users/${user}`);
  }, []);

  return (
    <Grid item md={4} xs={4} sx={{ alignItems: "stretch" }}>
      <PhotoContainer src={src}>
        <div className="topContainer">
          <IconButton onClick={onClickUser}>
            <Avatar
              alt="user"
              src={gravatar.url(user, { s: "28px", d: "retro" })}
              className="avatar"
            />
          </IconButton>
          <IconButton onClick={onClickLike}>
            {like ? (
              <FavoriteIcon
                className="fillHeart"
                sx={{ width: 28, height: 28 }}
              />
            ) : (
              <FavoriteBorderIcon
                className="heart"
                sx={{ width: 28, height: 28 }}
              />
            )}
          </IconButton>
        </div>
      </PhotoContainer>
      <DesContainer className="description">
        <span className="title">{titleSummary(title)}</span>
        <TagContainer tags={tags} />
      </DesContainer>
    </Grid>
  );
};

export default Program;
