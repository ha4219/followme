import React from "react";
import styles from "@styles/Home.module.css";
import Image from "next/image";
import { ContainerFooter, ItemR, ItemL } from "./styles";
import Link from "next/link";
import { Box, Container, Grid, Typography } from "@mui/material";
import MusicVideoIcon from "@mui/icons-material/MusicVideo";
import HealingIcon from "@mui/icons-material/Healing";

const Footer = () => {
  return (
    <ContainerFooter>
      <div className="nav">
        <Container>
          <Link href="/help/introduce">회사소개</Link>
          <span className="dividor">|</span>
          <Link href="/help/course">찾아오시는 길</Link>
          <span className="dividor">|</span>

          <Link href="/help/privacy">개인정보처리방침</Link>
          <span className="dividor">|</span>

          <Link href="/help/use">이용약관</Link>
        </Container>
      </div>
      <div className="help-des">
        <Container>
          <div>
            대표 : 임우리&emsp;|&emsp;사업자등록번호 :
            636-87-00912&emsp;|&emsp;(우) 03176 서울시 종로구 경희궁1길 18 2F
          </div>
          <div>Fax:02-2088-1673&emsp;|&emsp;EMAIL: insurance@bis.co.kr</div>
          <div className="any">
            &copy; 2018 (주)팔로미. ALL RIGHTS RESERVED.
          </div>
        </Container>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
