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
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { ICourse } from "types/apiType";
import { API } from "@src/API";

const Program: VFC<ICourse> = ({
  idx,
  mainImg,
  writer,
  title,
  shortContent,
  tags,
  likeCnts,
  views,
  createdAt,
  isLocal,
  likeClicked,
  region,
  schedule,
  season,
  updatedAt,
}) => {
  const [like, setLike] = useState(likeClicked === 1);
  const loggedInId = useRecoilValue(idState);

  const router = useRouter();

  const onClickLike = useCallback(
    async (e) => {
      e.stopPropagation();
      API.post(`/main/postLike/${idx}`, {
        id: loggedInId,
      })
        .then(({ data }) => {
          console.log(data);
          setLike(!like);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [like]
  );

  const onClickProgram = useCallback((id) => {
    router.push(`/editor/${id}`);
  }, []);

  const toBase64 = (arr) => {
    return Buffer.from(arr);
  };

  return (
    <Grid item lg={4} xs={4} md={4}>
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
          overflow: "hidden",
        }}
      >
        <PhotoContainer src={`${toBase64(mainImg.data)}`}>
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
          <IconButton>
            <Avatar
              alt="user"
              // src={gravatar.url(user, { s: "28px", d: "retro" })}
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
