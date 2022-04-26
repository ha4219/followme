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
        <Container sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link href="/help/introduce">회사소개</Link>
            <span className="dividor">|</span>
            <Link href="/help/course">찾아오시는 길</Link>
            <span className="dividor">|</span>

            <Link href="/help/privacy">개인정보처리방침</Link>
            <span className="dividor">|</span>

            <Link href="/help/use">이용약관</Link>
          </div>
          <div>
            <Link href={""} passHref>
              <img
                className="footerNavIcon"
                src="icons/icon.kakao.png"
                alt="kakaoIcon"
              />
            </Link>
            <Link href={""} passHref>
              <img
                className="footerNavIcon"
                src="icons/icon.naverBand.png"
                alt="bandIcon"
              />
            </Link>
          </div>
        </Container>
      </div>
      <div className="help-des">
        <Container>
          <div className="help-des-between">
            <div>
              대표 : 임우리&emsp;|&emsp;사업자등록번호 :
              636-87-00912&emsp;|&emsp;(우) 03176 서울시 종로구 경희궁1길 18 2F
            </div>
            <div>
              <b>고객지원</b>:1670-9010
            </div>
          </div>
          <div className="help-des-between">
            <div>Fax:02-2088-1673&emsp;|&emsp;EMAIL: insurance@bis.co.kr</div>
            <div>
              <b>평일</b>09:00am ~ 18:00 pm(주말 및 공휴일 휴무)
            </div>
          </div>
          <div className="any">
            &copy; 2018 (주)팔로미. ALL RIGHTS RESERVED.
          </div>
        </Container>
      </div>
    </ContainerFooter>
  );
};

export default Footer;
