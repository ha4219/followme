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
      <div className="nav">
        <Link href="/intro">회사소개</Link>
        <Link href="/intro">찾아오시는 길</Link>
        <Link href="/intro">개인정보처리방침</Link>
        <Link href="/intro">이용약관</Link>
      </div>
      <div className="help-icons">
        <MusicVideoIcon />
        <HealingIcon />
      </div>
      <div className="help-des">
        <div>
          대표 : 임우리&emsp;|&emsp;사업자등록번호 :
          636-87-000912&emsp;|&emsp;(우) 03176 서울시 종로구 경희궁1길 18 2F
        </div>
        <div>
          고객지원 : 1670-9010&emsp;|&emsp;Fax:02-2088-1673&emsp;|&emsp;EMAIL:
          insurance@bis.co.kr
        </div>
        <div>평일 09:00 am ~ 18:00 pm&emsp;|&emsp;주말 및 공휴일 휴무</div>
        <br />
        <div className="any">
          &copy; 2018 (주)팔로미&emsp;|&emsp;ALL RIGHTS RESERVED.
        </div>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
