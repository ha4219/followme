import { Avatar, Box, Grid, IconButton, stepperClasses } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useState, VFC } from "react";
import gravatar from "gravatar";

import {
  PhotoContainer,
  DesContainer,
  ContentContainer,
  TopContainer,
  MainContainer,
} from "./styles";
import { contentSummary, titleSummary, toBase64 } from "@helpers/programHelper";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import TagContainer from "@components/TagContainer";
import { useRouter } from "next/router";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { idState } from "@store/auth";
import { ICourse } from "types/apiType";
import { API } from "@src/API";
import { doRecommendLike } from "api/theme";
import { likeRecommendBoard } from "api/board";

const ThemeProgram: VFC<ICourse> = ({
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
  const [like, setLike] = useState<number>(likeClicked ? likeClicked : 0);
  const [likeCnt, setLikeCnt] = useState(likeCnts ? likeCnts : 0);
  const id = useRecoilValue(idState);
  const router = useRouter();

  const onClickLike = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (id) {
        likeRecommendBoard({ idx, id });
        if (like) {
          setLikeCnt(likeCnt - 1);
        } else {
          setLikeCnt(likeCnt + 1);
        }
        setLike(like ^ 1);
      }
    },
    [like, likeCnt]
  );

  const onClickProgram = useCallback((id) => {
    router.push(`/recommend/${id}`);
  }, []);

  return (
    <Grid item lg={4} xs={6} md={4} sm={6}>
      <MainContainer
        onClick={() => {
          onClickProgram(idx);
        }}
        sx={{
          paddingBottom: "2rem",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <TopContainer>
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
        </TopContainer>
        <Box
          sx={{
            border: "1px solid #d8d8d8",
            borderTop: 0,
            cursor: "pointer",
            alignItems: "stretch",
            borderRadius: "10px",
          }}
        >
          <PhotoContainer src={`${toBase64(mainImg)}`}>
            <div className="hoverImg" />
          </PhotoContainer>
          <Box sx={{ padding: "0 1rem" }}>
            <TagContainer tags={tags} />
          </Box>
          <ContentContainer>
            <IconButton>
              <Avatar
                alt="user"
                src={`${process.env.NEXT_PUBLIC_S3URL}/profile/${writer}`}
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
      </MainContainer>
    </Grid>
  );
};

export default ThemeProgram;
