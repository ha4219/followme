import { Avatar, Box, Grid, IconButton, stepperClasses } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useState, VFC } from "react";
import gravatar from "gravatar";

import { PhotoContainer, DesContainer, ContentContainer } from "./styles";
import { contentSummary, titleSummary } from "@helpers/programHelper";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TagContainer from "@components/TagContainer";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  idx: number;
  src: any;
  user: string;
  title: string;
  shortContent: string;
  tags: string[];
}

interface TagProps {
  tag: string;
}

const Program: VFC<Props> = ({ idx, src, user, title, tags, shortContent }) => {
  const [like, setLike] = useState(false);
  const router = useRouter();

  const onClickLike = useCallback(
    (e) => {
      e.stopPropagation();
      setLike(!like);
    },
    [like]
  );

  const onClickUser = useCallback(() => {
    router.push(`/users/${user}`);
  }, []);

  const onClickProgram = useCallback((id) => {
    router.push(`/editor/${id}`);
  }, []);

  const toBase64 = (arr) => {
    return Buffer.from(arr);
  };

  return (
    <Grid item lg={4}>
      <Box
        onClick={() => {
          onClickProgram(idx);
        }}
        sx={{
          alignItems: "stretch",
          borderRadius: "0 0 10px 10px",
          border: "1px solid #d8d8d8",
          borderTop: 0,
          paddingBottom: "2rem",
          cursor: "pointer",
        }}
      >
        <PhotoContainer src={`data:image/png;base64,${toBase64(src)}`}>
          <div className="topContainer">
            <IconButton
              onClick={onClickLike}
              sx={{ padding: 0, marginRight: 2, display: "flex" }}
            >
              <div className="haertContainer">
                {like ? (
                  <FavoriteIcon
                    className="fillHeart"
                    sx={{
                      width: 28,
                      height: 28,
                      alignItems: "center",
                      verticalAlign: "center",
                    }}
                  />
                ) : (
                  <FavoriteBorderIcon
                    className="heart"
                    sx={{ width: 28, height: 28 }}
                  />
                )}
              </div>
            </IconButton>
          </div>
        </PhotoContainer>
        <Box sx={{ padding: "0 1rem" }}>
          <TagContainer tags={tags} />
        </Box>
        <ContentContainer>
          <IconButton onClick={onClickUser}>
            <Avatar
              alt="user"
              src={gravatar.url(user, { s: "28px", d: "retro" })}
              className="avatar"
            />
          </IconButton>
          <DesContainer className="description">
            <div className="title">{titleSummary(title)}</div>
            <div className="content">{contentSummary(shortContent)}</div>
          </DesContainer>
        </ContentContainer>
      </Box>
    </Grid>
  );
};

export default Program;
