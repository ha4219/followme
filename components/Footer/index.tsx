import React from "react";
import styles from "@styles/Home.module.css";
import Image from "next/image";
import { ContainerFooter, ItemR, ItemL } from "./styles";
import Link from "next/link";
import { Box, Grid, Typography } from "@mui/material";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import HealingIcon from "@mui/icons-material/Healing";

const Footer = () => {
  return (
    <ContainerFooter>
      <Grid container spacing={2} sx={{ justifyContent: "center" }}>
        <Grid item xs={7}>
          <ItemL>
            <div className="nav">
              <Link href="/intro">회사소개</Link>
              <Link href="/intro">찾아오시는 길</Link>
              <Link href="/intro">개인정보처리방침</Link>
              <Link href="/intro">이용약관</Link>
            </div>
            <table className="intro">
              <tbody>
                <tr>
                  <td className="intro-logo">
                    <Typography
                      variant="h6"
                      noWrap
                      component={"div"}
                      sx={{
                        my: 2,
                        color: "black",
                        display: "block",
                      }}
                    >
                      LOGOLOGO
                    </Typography>
                  </td>
                  <td>
                    <div className="intro-des">
                      <div>(주) 팔로미 | 대표 : 임우리</div>
                      <div>사업자 등록번호 : 636-87000912</div>
                      <div>주소 : 서울시 종로구 경희궁1길 18 2F (우)03176</div>
                      <div>Fax:02-208801673 | Email: insurance@bis.co.kr</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </ItemL>
        </Grid>
        <Grid item xs={3}>
          <ItemR className="right">
            <div className="help-name">고객지원</div>
            <div className="help-number">1670-9010</div>
            <div className="help-des">평일 09:00 am ~ 18:00 pm</div>
            <div className="help-des">주말 및 공휴일 휴무</div>
            <div className="help-icons">
              <MusicVideoIcon />
              <HealingIcon />
            </div>
          </ItemR>
        </Grid>
      </Grid>
    </ContainerFooter>
  );
};

export default Footer;
