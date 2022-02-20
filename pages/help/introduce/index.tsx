import { Container } from "@mui/material";
import HelpLeftLayout from "@components/help/HelpLeftLayout";
import styled from "@emotion/styled";

const HelpIntroduce = () => {
  return (
    <Container maxWidth="lg">
      <HelpLeftLayout>
        <MainContainer className="content">
          <div className="content_head">
            <h2 className="page_title">네이버 예시 소개</h2>
            <p className="page_info">
              네이버는 미래 기술을 누구나 손쉽게 사용할 수 있도록
              기술플랫폼으로서의 변화를 추구하며,
              <br />
              수많은 개인과 다양한 파트너들이 성공이라는 꽃을 피울 수 있도록
              경쟁력을 키우며 다가올 미래를 준비하겠습니다.
            </p>
          </div>
          <div className="spot summary">
            <img src="/back.jpeg" alt="네이버 소개 이미지" />
          </div>
          <div className="content_container">
            <div className="content_box">
              <dl>
                <dt className="content_box_left">NAVER</dt>
                <dd className="content_box_right">
                  <p className="content_box_text">
                    네이버(주)는 글로벌 ICT 기업으로서 한국 최대 검색포털
                    네이버를 서비스하고 있고, 그 계열사에서 모바일 메신저 라인,
                    동영상 카메라 스노우, 디지털 만화 서비스 네이버웹툰,
                    메타버스 서비스 제페토 등을 서비스하고 있습니다. 또한,
                    네이버(주)는 인공지능, 로보틱스, 모빌리티 등 미래 기술에
                    대한 지속적인 연구개발을 통해 기술 플랫폼의 변화와 혁신을
                    추구하며 세계 각국의 수많은 이용자와 다양한 파트너들이 함께
                    성장할 수 있도록 노력하고 있습니다.
                  </p>
                </dd>
              </dl>
            </div>
            <div className="content_box">
              <dl>
                <dt className="content_box_left">
                  COMPANY
                  <br />
                  PROFILE
                </dt>
                <dd className="content_box_right">
                  <table className="table">
                    <caption>COMPANY PROFILE 설명</caption>
                    <tbody>
                      <tr>
                        <th scope="row">설립연도</th>
                        <td>1999년 6월</td>
                      </tr>
                      <tr>
                        <th scope="row">본사 위치</th>
                        <td>경기도 성남시 분당구</td>
                      </tr>
                      <tr>
                        <th scope="row">주요서비스</th>
                        <td>온라인 검색포털, 모바일 메신저 플랫폼</td>
                      </tr>
                      <tr>
                        <th scope="row">주요사업</th>
                        <td>온라인 광고 및 콘텐츠 사업</td>
                      </tr>
                      <tr>
                        <th scope="row">해외 계열 법인</th>
                        <td>
                          일본, 미국, 프랑스, 중국, 베트남, 대만, 태국,
                          인도네시아 외
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">매출액</th>
                        <td>5조 304억 원 (2020년)</td>
                      </tr>
                      <tr>
                        <th scope="row">전체인력</th>
                        <td>4,103명 (본사 기준, 2020년 기준)</td>
                      </tr>
                    </tbody>
                  </table>
                </dd>
              </dl>
            </div>
          </div>
        </MainContainer>
      </HelpLeftLayout>
    </Container>
  );
};

const MainContainer = styled.div`
  margin: 3rem 0;
  & img {
    width: 100%;
  }
  @charset "UTF-8";
  @font-face {
    font-family: "NanumBarunGothic";
    src: local(NanumBarunGothic);
    src: url("../../font/NanumBarunGothic.eot");
    src: url("../../font/NanumBarunGothic.woff") format("woff"),
      url("../../font/NanumBarunGothic.otf") format("opentype");
  }

  @font-face {
    font-family: "NanumSquare-L";
    src: local(NanumSquareOTFLight);
    src: url("../../font/NanumSquareOTFLight.eot");
    src: url("../../font/NanumSquareOTFLight.woff") format("woff"),
      url("../../font/NanumSquareOTFLight.otf") format("opentype");
  }

  @font-face {
    font-family: "NanumSquare";
    src: local(NanumSquareOTFRegular);
    src: url("../../font/NanumSquareOTFRegular.eot");
    src: url("../../font/NanumSquareOTFRegular.woff") format("woff"),
      url("../../font/NanumSquareOTFRegular.otf") format("opentype");
  }

  @font-face {
    font-family: "NanumSquare-B";
    src: local(NanumSquareOTFBold);
    src: url("../../font/NanumSquareOTFBold.eot");
    src: url("../../font/NanumSquareOTFBold.woff") format("woff"),
      url("../../font/NanumSquareOTFBold.otf") format("opentype");
  }

  @font-face {
    font-family: "NanumSquare-EB";
    src: local(NanumSquareOTFExtraBold);
    src: url("../../font/NanumSquareOTFExtraBold.eot");
    src: url("../../font/NanumSquareOTFExtraBold.woff") format("woff"),
      url("../../font/NanumSquareOTFExtraBold.otf") format("opentype");
  }

  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  a,
  body,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  li,
  dl,
  dt,
  dd,
  table,
  th,
  td,
  form,
  fieldset,
  legend,
  input,
  textarea,
  button,
  select {
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: none;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 14px;
  }

  fieldset,
  img {
    border: 0;
  }

  img {
    vertical-align: top;
  }

  li,
  ol,
  ul {
    list-style: none;
  }

  address,
  em,
  i {
    font-style: normal;
  }

  a {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
  th,
  b,
  em {
    font-weight: normal;
  }

  .blind {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  .ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .chinese {
    font-family: "NanumBarunGothic", "나눔바른고딕", "Dotum", "돋움",
      "Helvetica", "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .text_line {
    display: block;
    margin: 0;
    word-break: keep-all;
  }

  button {
    border: 0;
    background: none;
    -webkit-appearance: none;
  }

  button:hover {
    cursor: pointer;
  }

  input {
    border: 0;
    background: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: 0;
  }

  caption {
    text-indent: -9999px;
    font-size: 0;
  }

  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    font-family: "NanumSquare" !important;
    color: #333 !important;
  }

  input::-moz-placeholder {
    /* Firefox 19+ */
    font-family: "NanumSquare" !important;
    color: #333 !important;
  }

  input:-moz-placeholder {
    /* Firefox 18- */
    font-family: "NanumSquare" !important;
    color: #333 !important;
  }

  input:-ms-input-placeholder {
    /* IE 10+ */
    font-family: "NanumSquare" !important;
    color: #333 !important;
  }

  textarea::-moz-placeholder {
    font-family: "NanumSquare" !important;
    color: #333 !important;
  }

  textarea:-moz-placeholder {
    font-family: "NanumSquare" !important;
    color: #333 !important;
  }

  textarea:-ms-input-placeholder {
    font-family: "NanumSquare" !important;
    color: #333 !important;
  }

  input::-ms-clear {
    display: none;
  }

  body,
  html {
    height: 100%;
    font-style: normal;
    line-height: 1.4;
    -webkit-text-size-adjust: none;
  }

  #wrap {
    position: relative;
    min-width: 1120px;
    min-height: 100%;
  }

  header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9998;
    min-width: 1100px;
    background-color: rgba(255, 255, 255, 0.97);
    -webkit-transition: top 0.4s ease-in-out;
    transition: top 0.4s ease-in-out;
  }

  header:hover {
    background-color: white;
  }

  .header_up {
    top: -180px;
  }

  .header_wrap {
    max-width: 1600px;
    margin: 0 auto;
    text-align: center;
  }

  .header_wrap:after {
    content: "";
    display: block;
    clear: both;
  }

  .header_wrap .header_logo {
    float: left;
    width: 87px;
    height: 17px;
    margin: 32px 0 0 30px;
    background: url(../../img/ko/header_logo.png);
    -webkit-background-size: 87px 17px;
    background-size: 87px 17px;
  }

  .header_wrap .header_logo a {
    display: block;
    width: 100%;
    height: 100%;
  }

  nav {
    display: inline-block;
  }

  .gnb_menu {
    font-size: 0;
    text-align: center;
  }

  .gnb_menu .gnb_menu_list,
  .gnb_menu .gnb_menu_list_recruit {
    display: inline-block;
  }

  .gnb_menu .gnb_menu_list .gnb_menu_item:before,
  .gnb_menu .gnb_menu_list_recruit .gnb_menu_item:before {
    content: "";
    position: absolute;
    left: -1px;
    bottom: 20px;
    width: calc(100% + 2px);
    height: 2px;
    background-color: #1ec545;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .gnb_menu .gnb_menu_list:hover .gnb_menu_item:before,
  .gnb_menu .gnb_menu_list .gnb_menu_item:focus:before,
  .gnb_menu .gnb_menu_list_recruit:hover .gnb_menu_item:before,
  .gnb_menu .gnb_menu_list_recruit .gnb_menu_item:focus:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .gnb_menu .gnb_menu_list.on .gnb_menu_item:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .gnb_menu .gnb_menu_list_recruit:hover .gnb_menu_item.recruit:after,
  .gnb_menu .gnb_menu_list_recruit .gnb_menu_item:focus:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 31px;
    width: 18px;
    height: 18px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -59px 0;
  }

  .gnb_menu .gnb_menu_item {
    display: block;
    position: relative;
    margin: 0 32px;
    padding: 29px 0 30px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
  }

  .gnb_menu .gnb_menu_item.recruit {
    padding-right: 25px;
  }

  .gnb_menu .gnb_dropMenu_wrap {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    z-index: 999;
    min-width: 1100px;
    height: 341px;
    background-color: #1ec545;
    font-size: 0;
    text-align: center;
  }

  .gnb_menu .gnb_dropMenu_wrap > li {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: 190px;
    height: 341px;
    padding: 28px 0 0;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .gnb_menu .gnb_dropMenu_wrap > li:before,
  .gnb_menu .gnb_dropMenu_wrap > li:last-child:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: #4bd16a;
  }

  .gnb_menu .gnb_dropMenu_wrap > li:last-child:after {
    left: auto;
    right: 0;
  }

  .gnb_menu .gnb_dropMenu_wrap > li:hover {
    background-color: #0fb93c;
  }

  .gnb_menu .gnb_dropMenu_wrap > li:hover:before,
  .gnb_menu .gnb_dropMenu_wrap > li:hover + li:before,
  .gnb_menu .gnb_dropMenu_wrap > li:last-child:hover:after {
    display: none;
  }

  .gnb_menu .gnb_dropMenu > li {
    margin: 0 0 7px;
    font-size: 14px;
    text-align: left;
  }

  .gnb_menu .gnb_dropMenu > li.depth_blank {
    margin-bottom: 14px;
  }

  .gnb_menu .gnb_dropMenu > li + .classify {
    margin-top: 20px;
  }

  .gnb_menu .gnb_dropMenu > li:last-child {
    margin-bottom: 0;
  }

  .gnb_menu .gnb_dropMenu .classify {
    margin-bottom: 20px;
    padding-top: 20px;
    border-top: 1px solid #4bd16a;
    font-size: 15px;
  }

  .gnb_menu .gnb_dropMenu .classify:first-child {
    padding-top: 0;
    border-top: 0;
  }

  .gnb_menu .gnb_dropMenu .classify.depth_4 {
    font-size: 14px;
  }

  .gnb_menu .gnb_dropMenu .classify.depth_4 .gnb_dropMenu_item strong span {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .gnb_menu .gnb_dropMenu .depth_4 .gnb_dropMenu_item .depth {
    font-size: 12px;
  }

  .gnb_menu .gnb_dropMenu .depth_4 .gnb_dropMenu_item strong span {
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item {
    display: block;
    padding: 0 0 0 28px;
    color: #fff;
    line-height: 1.2;
  }

  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item.btn_link:hover {
    text-decoration: none;
  }

  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item.btn_link:after {
    right: 74px;
    top: 17px;
    background-position: -81px 0;
  }

  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item .depth {
    position: relative;
    display: inline-block;
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 14px;
    opacity: 0.8;
    filter: alpha(opacity=80);
  }

  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item span:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 1px;
    background-color: #fff;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item:hover span:before,
  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item:focus span:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item strong span {
    position: relative;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item:hover .depth,
  .gnb_menu .gnb_dropMenu .gnb_dropMenu_item:focus .depth {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .header_util {
    float: right;
    width: 144px;
    margin: 29px 25px 0 0;
    font-size: 0;
  }

  .header_util:after {
    content: "";
    display: block;
    clear: both;
  }

  .header_util .header_lang {
    display: inline-block;
    vertical-align: middle;
    margin: 0 41px 0 0;
    font-size: 12px;
  }

  .header_util .header_lang a {
    position: relative;
    color: #333;
  }

  .header_util .header_lang a[aria-selected="false"] {
    opacity: 0.6;
  }

  .header_util .header_lang a:first-child {
    margin: 0 21px 0 0;
  }

  .header_util .header_lang a:first-child:after {
    content: "";
    display: block;
    position: absolute;
    right: -12px;
    top: 2px;
    width: 1px;
    height: 9px;
    background-color: #333;
    opacity: 0.6;
    filter: alpha(opacity=60);
  }

  .header_util .sitemap_box {
    display: inline-block;
    vertical-align: middle;
    width: 24px;
    height: 23px;
  }

  .header_util .btn_sitemap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .header_util .btn_sitemap .btn_line {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    left: 0;
    background-color: #333;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .header_util .btn_sitemap .btn_line:nth-child(2) {
    top: 4px;
  }

  .header_util .btn_sitemap .btn_line:nth-child(3) {
    top: 10px;
  }

  .header_util .btn_sitemap .btn_line:nth-child(4) {
    bottom: 5px;
  }

  .header_util .btn_sitemap:hover .btn_line {
    background-color: #00c73c;
  }

  .sitemap,
  .sitemap_dimmed {
    display: none;
  }

  header.active {
    height: 80px;
    background-color: #0fb93c;
  }

  header.active .header_logo {
    background: url(../../img/ko/header_logo_v2.png);
  }

  header.active .gnb_menu {
    display: none;
  }

  header.active .header_lang a {
    color: #fff;
  }

  header.active .header_lang a:first-child:after {
    background-color: #fff;
    opacity: 0.3;
    filter: alpha(opacity=30);
  }

  header.active .btn_sitemap .btn_line {
    background-color: #fff;
  }

  header.active .btn_sitemap .btn_line:nth-child(2) {
    top: -10px;
    -webkit-transform: translateY(20px) rotate(-45deg);
    transform: translateY(20px) rotate(-45deg);
  }

  header.active .btn_sitemap .btn_line:nth-child(3) {
    opacity: 0;
    filter: alpha(opacity=0);
  }

  header.active .btn_sitemap .btn_line:nth-child(4) {
    bottom: -9px;
    -webkit-transform: translateY(-20px) rotate(45deg);
    transform: translateY(-20px) rotate(45deg);
  }

  header.active .btn_sitemap:hover .btn_line {
    background-color: #fff;
  }

  header.active .sitemap {
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 80px;
    z-index: 200;
    min-width: 1100px;
    background-color: #0fb93c;
  }

  header.active + .sitemap_dimmed {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(58, 62, 80, 0.97);
  }

  .sitemap_container {
    width: 1280px;
    margin: 0 auto;
    padding: 35px 35px 70px;
  }

  .sitemap_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .sitemap_list {
    float: left;
    width: 160px;
    margin: 0 0 0 50px;
    color: #fff;
  }

  .sitemap_list:after {
    content: "";
    display: block;
    clear: both;
  }

  .sitemap_list:first-child {
    margin: 0;
  }

  .sitemap_list .menu_title {
    display: block;
    padding-bottom: 31px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    position: relative;
  }

  .sitemap_list .menu_title:before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 10px;
    height: 2px;
    background-color: #fff;
  }

  .sitemap_list .menu_container {
    padding: 30px 0 0;
  }

  .sitemap_list .menu_container:first-of-type {
    padding-top: 25px;
  }

  .sitemap_list .menu_container.depth_4 {
    padding-top: 6px;
  }

  .sitemap_list .menu_container.depth_4 .menu_list {
    margin-top: 4px;
  }

  .sitemap_list .menu_container.depth_4 .menu_list.depth_title {
    margin-top: 0;
    padding-bottom: 5px;
  }

  .sitemap_list .menu_container.depth_4 .menu_list strong span {
    font-size: 14px;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .sitemap_list .menu_container.depth_4 .menu_list .depth {
    font-size: 12px;
  }

  .sitemap_list .menu_container.depth_4 + .depth_4 {
    padding-top: 20px;
  }

  .sitemap_list .menu_list {
    margin: 7px 0 0;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    line-height: 1.2;
  }

  .sitemap_list .menu_list.depth_title {
    padding-bottom: 9px;
  }

  .sitemap_list .menu_list:first-child {
    margin: 0;
  }

  .sitemap_list .menu_list a {
    color: #fff;
  }

  .sitemap_list .menu_list strong span {
    display: inline-block;
    position: relative;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
  }

  .sitemap_list .menu_list .depth {
    display: inline-block;
    position: relative;
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 14px;
    opacity: 0.8;
    filter: alpha(opacity=80);
  }

  .sitemap_list .menu_list a span:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0px;
    width: 100%;
    height: 1px;
    background-color: #fff;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .sitemap_list .menu_list a:hover span:before,
  .sitemap_list .menu_list a:focus span:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .sitemap_list .menu_list a:hover .depth,
  .sitemap_list .menu_list a:focus .depth {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .sitemap_list .menu_list .btn_link:after {
    top: -1px;
    background-position: -81px 0;
  }

  .container {
    padding: 80px 0 160px;
  }

  .location {
    max-width: 1600px;
    margin: 0 auto;
    padding: 0 0 36px 30px;
  }

  .location:after {
    content: "";
    display: block;
    clear: both;
  }

  .location li {
    float: left;
    position: relative;
    margin-top: -2px;
    padding: 0 25px 0 0;
  }

  .location li:after {
    content: "";
    display: block;
    position: absolute;
    right: 10px;
    top: 5px;
    width: 5px;
    height: 7px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -103px 0;
  }

  .location li:last-child {
    padding: 0;
  }

  .location li:last-child:after {
    display: none;
  }

  .location li:last-child .location_list {
    color: #212121;
  }

  .location li:last-child .location_list:hover {
    text-decoration: none;
  }

  .location .location_list {
    font-size: 12px;
    color: #878890;
  }

  .location .location_list:hover {
    text-decoration: underline;
  }

  .content_head {
    text-align: center;
  }

  .content_head .page_title {
    padding: 0 0 30px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 42px;
    color: #212121;
    letter-spacing: -2.5px;
  }

  .content_head .page_info {
    padding: 0 0 25px;
    font-size: 20px;
    color: #333;
    line-height: 32px;
    letter-spacing: -0.2px;
  }

  .content_head .page_info.state {
    position: relative;
    padding-bottom: 0;
    font-size: 0;
  }

  .content_head .page_info.state .icon_state {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 92px;
    height: 92px;
    margin: 0 30px 0 0;
    border: 1px solid #00c73c;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }

  .content_head .page_info.state .icon_state:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 46px;
    height: 46px;
    margin: -23px 0 0 -23px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -78px -317px;
  }

  .content_head .page_info.state .state_info {
    display: inline-block;
    vertical-align: middle;
  }

  .content_head .page_info.state .state_info_list {
    margin: 4px 0 0 3px;
    text-align: left;
    line-height: 1.4;
  }

  .content_head .page_info.state .state_info_list:first-child {
    margin-top: 0;
  }

  .content_head .page_info.state strong {
    display: block;
    margin: 0 0 9px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 26px;
    color: #00b843;
    letter-spacing: -1px;
  }

  .content_head .page_info.state dl {
    font-size: 0;
  }

  .content_head .page_info.state dt,
  .content_head .page_info.state dd {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    letter-spacing: -0.1px;
  }

  .content_head .page_info.state dt {
    width: 103px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .content_head .page_info.state dd {
    width: auto;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #606167;
  }

  .spot img {
    width: 100%;
  }

  .spot.summary,
  .spot.history,
  .spot.affiliate,
  .spot.business,
  .spot.creators,
  .spot.developers,
  .spot.standard,
  .spot.cs,
  .spot.accessibility,
  .spot.report,
  .spot.privacy,
  .spot.accreditation,
  .spot.idc,
  .spot.happybean,
  .spot.culture,
  .spot.connect,
  .spot.development,
  .spot.communication,
  .spot.organization,
  .spot.disclosure,
  .spot.stock,
  .spot.finances,
  .spot.schedule,
  .spot.reference,
  .spot.settlement,
  .spot.notice,
  .spot.greenfactory,
  .spot.flower,
  .spot.library,
  .spot.sustainable,
  .spot.initiatives,
  .spot.green_connect,
  .spot.crisis,
  .spot.respect,
  .spot.ai_ethics {
    overflow: hidden;
    position: relative;
    padding-top: 21.545%;
  }

  .content_container {
    max-width: 1120px;
    margin: 74px auto 120px;
  }

  .content_box {
    margin: 75px 0 0;
    font-size: 0;
  }

  .content_box:after {
    content: "";
    display: block;
    clear: both;
  }

  .content_box:first-child {
    margin: 0;
  }

  .content_box ul:after,
  .content_box dl:after {
    content: "";
    display: block;
    clear: both;
  }

  .content_box .content_box_left {
    display: inline-block;
    vertical-align: top;
    width: 23.5%;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #333;
    line-height: 28px;
    letter-spacing: -0.6px;
    padding-right: 20px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  .content_box .content_box_left > li:first-child {
    margin: 0 0 10px;
  }

  .content_box .content_box_left .select_box.small {
    margin-top: 16px;
  }

  .content_box .content_box_left .count {
    font-size: 14px;
  }

  .content_box .content_box_left .small_num {
    display: block;
    font-size: 12px;
    line-height: 24px;
  }

  .content_box .content_box_right {
    display: inline-block;
    width: 76.5%;
    font-size: 15px;
    color: #606167;
  }

  .content_box .content_box_right dl:after {
    content: "";
    display: block;
    clear: both;
  }

  .content_box .content_box_right .order_info_text {
    position: relative;
    padding: 0 0 0 28px;
    line-height: 1.8;
  }

  .content_box .content_box_right .order_info_text:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 7px;
    width: 2px;
    height: 10px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -122px -45px;
  }

  .content_box .content_box_button {
    padding: 30px 0;
    border-bottom: 1px solid #212121;
    text-align: right;
    font-size: 0;
  }

  .content_box .content_box_button .btn_link_large {
    margin-left: 4px;
  }

  .content_box .content_box_button .btn_text {
    white-space: nowrap;
  }

  .content_box .content_box_text {
    margin: 15px 0 0;
    line-height: 1.8;
    letter-spacing: -0.2px;
  }

  .content_box .content_box_text:first-child {
    margin-top: 0;
  }

  .content_box .content_box_text ~ .btn_link {
    line-height: 1.8;
  }

  .content_box .content_box_img {
    margin: 24px 0 0;
  }

  .content_box .agree_box {
    margin: 17px 0 0 23.5%;
  }

  .content_box .content_box_inner {
    padding-top: 27px;
    line-height: 26px;
    word-break: keep-all;
  }

  .content_outer_text {
    line-height: 1.8;
    letter-spacing: -0.2px;
    font-size: 15px;
    color: #606167;
  }

  .table {
    width: 100%;
    table-layout: fixed;
  }

  .table tr:first-child {
    border-top: 2px solid #333;
  }

  .table th {
    height: 56px;
    border-bottom: 1px solid #efefef;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
    text-align: left;
  }

  .table td {
    height: 56px;
    border-bottom: 1px solid #efefef;
    font-size: 15px;
    color: #606167;
    letter-spacing: -0.1px;
  }

  .table .input_text {
    display: block;
    position: relative;
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #dce0e6;
    font-size: 15px;
    color: #333;
    line-height: 55px;
  }

  .table .require {
    margin: 0 0 0 4px;
  }

  .table .complete_message {
    padding: 20px 0;
    word-break: keep-all;
    word-wrap: normal;
  }

  .table .complete_message p {
    margin: 13px 0 0;
    font-size: 15px;
    line-height: 1.8;
  }

  .table .complete_message p:first-child {
    margin-top: 10px;
  }

  .table .complete_message p:last-child {
    margin-bottom: 52px;
  }

  .table .complete_message.check {
    line-height: 1.6;
  }

  .table .text_right {
    text-align: right;
  }

  .table .pl16 {
    padding-left: 16px;
  }

  .table .pr16 {
    padding-right: 16px;
  }

  .table .br {
    border-right: 1px solid #e4e4e4;
  }

  .table .blue {
    color: #2495e4;
  }

  .table .red {
    color: #e84747;
  }

  .btn_area {
    margin: 100px 0 0;
    font-size: 0;
    text-align: center;
  }

  .btn_rect {
    display: inline-block;
    min-width: 160px;
    margin: 0 0 0 20px;
    padding: 24px 35px 22px;
    border: 1px solid #dce0e6;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 16px;
    color: #606167;
    text-align: center;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  .btn_rect.color {
    border-color: #b0eabd;
    color: #00b843;
  }

  .btn_rect:first-child {
    margin: 0;
  }

  .btn_rect:hover {
    border-color: #f1f3f5;
    background-color: #f1f3f5;
  }

  .btn_rect.color:hover {
    border-color: #00c73c;
    background-color: #00c73c;
    color: #fff;
  }

  .btn_rect.v2 {
    min-width: 145px;
    padding: 15px 22px 17px;
    border: 1px solid #dce0e6;
    color: #333;
  }

  .btn_rect.v2.small {
    min-width: 103px;
    padding: 17px 21px 15px;
    font-size: 15px;
  }

  .btn_rect.v2.text_small {
    font-size: 15px;
  }

  .btn_rect.v2:hover {
    border-color: #333;
    background-color: #fff;
  }

  .summary .content_container,
  .service .content_container {
    margin-top: 54px;
  }

  .history_box {
    padding: 35px 0;
    border-top: 1px solid #efefef;
  }

  .history_box:first-child {
    padding-top: 0;
    border-top: 0;
  }

  .history_box:last-child {
    padding-bottom: 0;
  }

  .history_box > dl {
    font-size: 0;
  }

  .history_box > dl:after {
    content: "";
    display: block;
    clear: both;
  }

  .history_box .history_year {
    float: left;
    width: 16.34%;
    margin: -3px 0 0;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #333;
  }

  .history_box .history_explain {
    overflow: hidden;
    margin: 3px 0 0;
    font-size: 18px;
    color: #606167;
  }

  .history_box .history_explain > dl {
    margin: 12px 0 0;
  }

  .history_box .history_explain > dl:after {
    content: "";
    display: block;
    clear: both;
  }

  .history_box .history_explain > dl:first-child {
    margin: 0;
  }

  .history_box .history_month {
    float: left;
    width: 50px;
    margin: 3px 0 0;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
  }

  .history_box .history_text {
    overflow: hidden;
    margin: -4px 0 0;
    font-size: 15px;
  }

  .history_box .history_text p {
    margin: 8px 0 0;
    line-height: 1.8;
  }

  .history_box .history_text > p:first-child {
    margin: 0;
  }

  .page_tab {
    padding: 0 0 27px;
    font-size: 0;
    text-align: center;
  }

  .page_tab li {
    display: inline-block;
    position: relative;
    padding: 0 30px 0;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
  }

  .page_tab li:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 5px;
    width: 1px;
    height: 18px;
    background-color: #dce0e6;
  }

  .page_tab li:first-child:before {
    display: none;
  }

  .page_tab .page_tab_item {
    position: relative;
    color: #bac2cd;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }

  .page_tab .page_tab_item:after {
    content: "";
    display: block;
    position: absolute;
    left: 1px;
    bottom: 1px;
    width: calc(100% - 2px);
    height: 2px;
    background-color: #00c73c;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .page_tab .page_tab_item:hover,
  .page_tab .page_tab_item:focus,
  .page_tab .page_tab_item[aria-selected="true"] {
    color: #333;
  }

  .page_tab .page_tab_item:hover:after,
  .page_tab .page_tab_item:focus:after,
  .page_tab .page_tab_item[aria-selected="true"]:after {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .page_tab .page_tab_item[aria-selected="true"]:after {
    content: "";
    display: block;
    position: absolute;
    left: 1px;
    bottom: 1px;
    width: calc(100% - 2px);
    height: 2px;
    background-color: #00c73c;
  }

  .page_subTab_item,
  .quick_menu_item {
    position: relative;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #bac2cd;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
  }

  .page_subTab_item:after,
  .quick_menu_item:after {
    content: "";
    display: block;
    position: absolute;
    left: 1px;
    bottom: 1px;
    width: calc(100% - 2px);
    height: 2px;
    background-color: #00c73c;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .page_subTab_item:hover,
  .page_subTab_item:focus,
  .page_subTab_item[aria-selected="true"],
  .quick_menu_item:hover,
  .quick_menu_item:focus,
  .quick_menu_item[aria-selected="true"] {
    color: #333;
  }

  .page_subTab_item:hover:after,
  .page_subTab_item:focus:after,
  .page_subTab_item[aria-selected="true"]:after,
  .quick_menu_item:hover:after,
  .quick_menu_item:focus:after,
  .quick_menu_item[aria-selected="true"]:after {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .page_subTab_item[aria-selected="true"]:after,
  .quick_menu_item[aria-selected="true"]:after {
    content: "";
    display: block;
    position: absolute;
    left: 1px;
    bottom: 1px;
    width: calc(100% - 2px);
    height: 2px;
    background-color: #00c73c;
  }

  .affiliate .content_box_left {
    position: relative;
    padding: 0 0 42px;
  }

  .affiliate .content_box_right {
    margin: -4px 0 0;
  }

  .affiliate .content_box_text {
    display: inline;
    margin: 0 11px 0 0;
  }

  .affiliate .content_box_img {
    width: 100%;
    height: 320px;
    background: no-repeat 50%;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .affiliate .content_box .content_box_left .logo {
    display: block;
    margin-top: 8px;
    height: 18px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .affiliate .content_box.line .content_box_left .logo {
    margin-left: 2px;
    width: 52px;
    background-position: 0 -28px;
  }

  .affiliate .content_box.line .content_box_img {
    background-image: url(../../img/ko/naver/img_affiliate_line.jpg);
  }

  .affiliate .content_box.labs .content_box_left .logo {
    margin-left: 2px;
    width: 173px;
    height: 18px;
    background-position: 0 -1270px;
  }

  .affiliate .content_box.labs .content_box_img {
    background-image: url(../../img/ko/naver/img_affiliate_naver_labs.jpg);
  }

  .affiliate .content_box.naver_cloud .content_box_left .logo {
    width: 174px;
    height: 20px;
    background-position: 0 -1292px;
  }

  .affiliate .content_box.naver_cloud .content_box_img {
    background-image: url(../../img/ko/naver/img_affiliate_nbp.png);
  }

  .affiliate .content_box.snow .content_box_left .logo {
    width: 74px;
    background-position: 0 -68px;
  }

  .affiliate .content_box.snow .content_box_img {
    background-image: url(../../img/ko/naver/img_affiliate_snow.jpg);
  }

  .affiliate .content_box.webtoon .content_box_left .logo {
    width: 95px;
    height: 91px;
    background-position: -340px -1060px;
  }

  .affiliate .content_box.webtoon .content_box_img {
    background-image: url(../../img/ko/naver/img_affiliate_webtoon.jpg);
  }

  .affiliate .content_box.works .content_box_left .logo {
    width: 198px;
    height: 19px;
    background-position: 0 -779px;
  }

  .affiliate .content_box.works .content_box_img {
    background-image: url(../../img/ko/naver/img_affiliate_works.jpg);
  }

  .btn_link {
    display: inline-block;
    position: relative;
    padding: 0 26px 0 0;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
    word-break: keep-all;
  }

  .btn_link:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 4.5px;
    width: 18px;
    height: 18px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -59px 0;
  }

  .btn_link:hover {
    text-decoration: underline;
  }

  .btn_link:hover:after {
    background-position: -104px -68px;
  }

  .proposition .content_container.check_complete {
    margin-top: 0;
  }

  .proposition .content_container.check_complete ul .content_box:first-child {
    margin-top: 40px;
  }

  .proposition .content_box {
    margin: 80px 0 0;
  }

  .proposition .content_box_left span {
    display: block;
    font-size: 12px;
    line-height: 27px;
  }

  .proposition .content_box_right {
    padding: 25px 0 0;
    border-top: 2px solid #333;
  }

  .proposition .guide_list_box {
    margin: 41px 0 0;
  }

  .proposition .table tr {
    border: 0;
  }

  .proposition.write td {
    padding-top: 10px;
  }

  .proposition.write .table tr:first-child th {
    padding-top: 16px;
  }

  .proposition.write .table_form .table th {
    padding-top: 26px;
  }

  .proposition.write .table tr:first-child td {
    padding-top: 0;
  }

  .service_area {
    width: 100%;
    background-color: #f5f7f8;
  }

  .service_container {
    position: relative;
    max-width: 1120px;
    min-width: 1120px;
    margin: 0 auto;
    text-align: left;
  }

  .service_container .service_title {
    padding: 27px 0;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #333;
    line-height: 32px;
    letter-spacing: -0.2px;
  }

  .btn_expanded {
    position: absolute;
    right: 0;
    top: 20px;
    width: 46px;
    height: 46px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    background-color: #f5f7f8;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }

  .btn_expanded:after {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -4px 0 0 -10px;
    width: 20px;
    height: 10px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -121px -13px;
  }

  .btn_expanded.on:after {
    margin-top: -6px;
    background-position: -121px 0;
  }

  .btn_expanded:hover {
    background-color: #00c73c;
  }

  .btn_expanded:hover:after {
    background-position: -145px -13px;
  }

  .btn_expanded.on:hover:after {
    background-position: -145px 0;
  }

  .service_menu {
    padding: 0 0 54px;
    margin-top: -2px;
  }

  .service_menu[aria-expanded="true"] {
    display: block;
  }

  .service_menu[aria-expanded="false"] {
    display: none;
  }

  .service_menu:after {
    content: "";
    display: block;
    clear: both;
  }

  .service_menu > li {
    overflow: hidden;
    float: left;
    position: relative;
    width: 216px;
    height: 142px;
    margin-top: 10px;
    border-radius: 3px;
    background-color: #fff;
  }

  .service_menu > li:first-child,
  .service_menu > li:nth-child(2),
  .service_menu > li:nth-child(3),
  .service_menu > li:nth-child(4),
  .service_menu > li:nth-child(5) {
    margin-top: 0;
  }

  .service_menu > li:nth-child(6n) {
    margin-left: 0;
  }

  .service_menu > li + li {
    margin-left: 10px;
  }

  .service_menu > li:first-child {
    border-left: 0;
  }

  .service_menu > li:first-child .service_item {
    margin-left: 0;
  }

  .service_menu > li:last-child .service_item {
    margin-right: 0;
  }

  .service_menu > li:hover .service_item.ad {
    top: -77px;
  }

  .service_menu > li:hover .service_item.ad > p:after,
  .service_menu > li:hover .service_item.ad:before {
    opacity: 0;
    filter: alpha(opacity=0);
  }

  .service_menu > li:hover .service_item.ad > ul {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .service_menu .service_item {
    display: block;
    position: relative;
    height: 100%;
    padding: 30px 0 0;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #606167;
    text-align: center;
  }

  .service_menu .service_item p {
    position: absolute;
    bottom: 23px;
    left: 0;
    right: 0;
  }

  .service_menu .service_item p span {
    margin: 0 4px;
  }

  .service_menu .service_item .text_line {
    margin: 0;
    word-break: break-all;
  }

  .service_menu .service_item:before {
    content: "";
    display: inline-block;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .service_menu .service_item.news:before {
    width: 56px;
    height: 46px;
    margin-top: 5px;
    background-position: 0 -153px;
  }

  .service_menu .service_item.ad:before {
    width: 56px;
    height: 46px;
    margin-top: 5px;
    opacity: 1;
    filter: alpha(opacity=100);
    background-position: -61px -153px;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  .service_menu .service_item.webtoon:before {
    width: 56px;
    height: 54px;
    background-position: 0 -1360px;
  }

  .service_menu .service_item.vlive:before {
    width: 56px;
    height: 51px;
    background-position: -61px -203px;
  }

  .service_menu .service_item.audioclip:before {
    width: 62px;
    height: 59px;
    background-position: -412px -976px;
  }

  .service_menu .service_item.line:before {
    width: 56px;
    height: 51px;
    background-position: 0 -254px;
  }

  .service_menu .service_item.financial:before {
    width: 83px;
    height: 23px;
    margin-top: 14px;
    background-position: -364px -1155px;
  }

  .service_menu .service_item.media:before {
    width: 80px;
    height: 27px;
    margin-top: 13px;
    background-position: -60px -1360px;
  }

  .service_menu .service_item.clova:before {
    width: 100px;
    height: 14px;
    margin-top: 22px;
    background-position: -364px -1188px;
  }

  .service_menu .service_item.cs:before {
    width: 61px;
    height: 51px;
    background-position: -61px -257px;
  }

  .service_menu .service_item.ad {
    position: relative;
    top: 0;
    -webkit-transition: top 0.5s;
    transition: top 0.5s;
  }

  .service_menu .service_item.commerce_solution:before {
    margin-top: -3px;
    width: 50px;
    height: 56px;
    background-position: -201px -737px;
  }

  .service_menu .service_item.ad > p:after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 7px;
    margin: 8px 0 0 6px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -103px -10px;
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
    vertical-align: top;
  }

  .service_menu .service_item.ad > ul {
    margin: 44px 0 0;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }

  .service_menu .service_item .ad_sort_list {
    margin: 0 0 2px;
    padding-left: 28px;
    text-align: left;
  }

  .service_menu .service_item .ad_sort {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 12px;
    color: #606167;
  }

  .service_menu .service_item .ad_sort:hover {
    text-decoration: underline;
  }

  .service_menu .service_item:hover > p {
    text-decoration: underline;
  }

  .service_menu .service_item.ad:hover > p {
    text-decoration: none;
  }

  .order_box {
    margin: 48px 0 0;
    font-size: 0;
    text-align: center;
  }

  .order_list {
    display: inline-block;
    position: relative;
    width: 180px;
    height: 180px;
    margin: 0 20px;
    text-align: center;
  }

  .order_list:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    border: 1px solid #333;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }

  .order_list:after {
    content: "";
    display: block;
    position: absolute;
    right: -31px;
    top: 50%;
    width: 21px;
    height: 13px;
    margin: -6px 0 0;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -120px -26px;
  }

  .order_list:last-child:after {
    display: none;
  }

  .order_list .order_text {
    padding: 45px 0 0;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #212121;
  }

  .order_list .order_num {
    display: block;
    margin: 0 0 12px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 12px;
  }

  .guide_list {
    position: relative;
    padding: 0 0 0 12px;
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #606167;
    line-height: 1.8;
  }

  .guide_list:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 7px;
    width: 2px;
    height: 10px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -122px -45px;
  }

  .guide_list strong {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .require {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-weight: normal;
    color: #00b843;
  }

  .guide_message {
    margin: 5px 0 0;
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 14px;
    color: #878890;
  }

  .content_box_right.table_form {
    padding-top: 14px;
  }

  .content_box_right.table_form .table th,
  .content_box_right.table_form .table td {
    border-bottom: 0;
  }

  .content_box_right.table_form .table th {
    vertical-align: top;
    padding: 16px 0;
  }

  .content_box_right.table_form .table th label {
    font-size: 15px;
  }

  .content_box_right.table_form.border_type {
    padding-top: 0;
  }

  .content_box_right.table_form.border_type th,
  .content_box_right.table_form.border_type td {
    border-bottom: 1px solid #efefef;
  }

  .content_box_right.table_form.border_type td {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .content_box_right.table_form.border_type td.complete_message {
    text-overflow: inherit;
    overflow: inherit;
    white-space: normal;
  }

  .content_box_right.table_form.border_type .regist_num_title {
    font-size: 15px;
  }

  .content_box_right.table_form.border_type .regist_num {
    padding: 3px 0 0;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 24px;
    color: #00b843;
  }

  .content_box_right.table_form.border_type th:nth-child(3) {
    padding-left: 20px;
    border-left: 1px solid #efefef;
  }

  .select_box {
    position: relative;
  }

  .select_box:after {
    content: "";
    display: block;
    clear: both;
  }

  .select_box .btn_select[aria-expanded="true"] ~ .select_menu {
    display: block;
  }

  .select_box.half {
    float: left;
    width: calc(50% - 20px);
  }

  .select_box.half:last-child {
    float: right;
  }

  .select_box.small {
    width: 155px;
  }

  .select_box.wide {
    width: 230px;
  }

  .btn_select {
    position: relative;
    width: 100%;
    height: 56px;
    border-bottom: 1px solid #dce0e6;
    font-size: 15px;
    color: #333;
    text-align: left;
    line-height: 55px;
  }

  .btn_select:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    width: 16px;
    height: 7px;
    margin: -5px 0 0 0;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -169px -39px;
  }

  .select_menu {
    display: none;
    overflow: hidden;
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    max-height: 194px;
    border: 1px solid #00c73c;
    background-color: #fff;
  }

  .select_menu .select_item {
    padding: 0 20px;
    width: 100%;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #606167;
    text-align: left;
    line-height: 48px;
  }

  .select_menu .select_item:hover {
    background-color: #f8f9fa;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #00b843;
  }

  .table_form .table tr:first-child .select_menu {
    top: 0;
  }

  .text_box {
    display: block;
    width: 100%;
    height: 186px;
    padding: 16px 0 0;
    border: 0;
    border-bottom: 1px solid #dce0e6;
    font-size: 15px;
    color: #333;
    line-height: 1.6;
    outline: none;
  }

  .text_box + .guide_message {
    margin-bottom: 10px;
  }

  .file_box {
    position: relative;
    width: 100%;
    padding-right: 100px;
    font-size: 0;
  }

  .input_text.file {
    display: inline-block;
    vertical-align: middle;
    width: calc(100% - 103px);
    padding: 0 20px 0;
    border: 0;
    background-color: #f8f9fa;
    color: #d1d1d1;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .regist_file_text {
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 23px;
    line-height: 54px;
    cursor: pointer;
  }

  .btn_file,
  .btn_down {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    max-width: 107px;
    height: 55px;
    border: 1px solid #dce0e6;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
    text-align: center;
    line-height: 52px;
    -webkit-transition: border-color 0.3s;
    transition: border-color 0.3s;
  }

  .btn_file:hover,
  .btn_down:hover {
    border-color: #333;
  }

  .btn_del {
    position: absolute;
    right: 0;
    margin: 0 0 0 20px;
    padding: 0 26px 0 0;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
    line-height: 55px;
    word-break: keep-all;
    text-decoration: none;
  }

  .btn_del:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    width: 18px;
    height: 18px;
    margin: -10px 0 0;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -80px -68px;
  }

  .btn_del:hover {
    text-decoration: underline;
  }

  .api_wrap {
    display: none;
  }

  .api_wrap .file_box {
    font-size: 0;
  }

  .api_wrap .input_text.file {
    width: calc(100% - 287px);
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .api_wrap .btn_down {
    max-width: 175px;
    margin-right: 10px;
  }

  .api_wrap .btn_down button {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
    cursor: pointer;
  }

  .table.type2 .file_wrap {
    display: none;
  }

  .table.type2 .api_wrap {
    display: table-row;
  }

  .radio_box {
    font-size: 0;
  }

  .radio_list {
    display: inline-block;
    position: relative;
    margin: 0 30px 0 0;
    font-size: 15px;
  }

  .radio_list label {
    position: relative;
    padding: 0 0 0 36px;
    color: #333;
    cursor: pointer;
  }

  .radio_list label:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -4px;
    width: 26px;
    height: 26px;
    border: 2px solid #dce0e6;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .radio_list label:hover {
    color: #333;
  }

  .radio_list label:hover:before {
    border: 1px solid #333;
  }

  .radio_list input:checked + label {
    color: #333;
  }

  .radio_list input:checked + label:before {
    border-color: #00c73c;
  }

  .radio_list input:checked + label:after {
    content: "";
    display: block;
    position: absolute;
    left: 7px;
    top: 3px;
    width: 12px;
    height: 12px;
    background-color: #00c73c;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }

  .radio_list.tip {
    padding-right: 9px;
  }

  .radio_list.tip:before {
    content: "";
    display: block;
    position: absolute;
    left: 36px;
    bottom: -1px;
    width: 59px;
    height: 1px;
    background-color: #333;
  }

  .radio_list.tip:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    top: 3px;
    width: 2px;
    height: 10px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -118px -45px;
  }

  .radio_list.tip:hover .tooltip_box {
    display: block;
  }

  .tooltip_box {
    display: none;
    width: 303px;
    position: absolute;
    left: 50%;
    top: -121px;
    z-index: 1;
    margin: 0 0 0 -139px;
    padding: 17px 20px;
    border: 1px solid #dfe0e1;
    background-color: #fff;
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
    letter-spacing: -0.5px;
    -moz-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.03);
    -webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.03);
    -ms-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.03);
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.03);
  }

  .tooltip_box:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    bottom: -7px;
    z-index: 2;
    width: 10px;
    height: 10px;
    margin: 0 0 0 -4px;
    border: 1px solid #dfe0e1;
    border-left: 0;
    border-top: 0;
    background-color: #fff;
    -moz-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    -moz-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.03);
    -webkit-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.03);
    -ms-box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.03);
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.03);
  }

  .table td:after {
    content: "";
    display: block;
    clear: both;
  }

  #proposition_email {
    margin: 0 0 20px;
  }

  .content_box_right.guide_box {
    padding: 0 0 15px;
    border: 0;
    border-bottom: 1px solid #dce0e6;
    font-size: 14px;
    color: #878890;
    line-height: 1.6;
  }

  .content_box_right.guide_box.scroll {
    overflow: hidden;
    overflow-y: auto;
    height: 166px;
    padding: 0;
  }

  .content_box_right.guide_box strong {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 18px;
    color: #333;
  }

  .agree_box label {
    position: relative;
    padding: 0 0 0 34px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
    cursor: pointer;
  }

  .agree_box label:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: -3px;
    width: 20px;
    height: 20px;
    border: 2px solid #dce0e6;
  }

  .agree_box label:hover:before {
    border: 1px solid #333;
  }

  .agree_box input:checked + label:before {
    border: 1px solid #00c73c;
    background-color: #00c73c;
  }

  .agree_box input:checked + label:after {
    content: "";
    display: block;
    position: absolute;
    left: 5px;
    top: 4px;
    width: 12px;
    height: 8px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -169px -26px;
  }

  .pop {
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 99999;
    padding: 60px;
    background-color: #fff;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    text-align: center;
  }

  .pop .pop_title {
    margin: 0 0 29px;
    font-size: 32px;
    color: #212121;
  }

  .pop dl {
    margin: 0 0 33px;
  }

  .pop .regist_num_title {
    margin: 0 0 7px;
    font-size: 14px;
    color: #333;
  }

  .pop .regist_num {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 24px;
    color: #00b843;
    border-bottom: 1px solid #dce0e6;
  }

  .pop .pop_text {
    margin: 0 0 55px;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #606167;
    text-align: left;
    line-height: 1.6;
  }

  .pop .pop_text strong {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .pop .btn_rect {
    margin: 0;
  }

  .pop .btn_close {
    position: absolute;
    right: 14px;
    top: 14px;
    width: 46px;
    height: 46px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }

  .pop .btn_close:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 15px;
    height: 12px;
    margin: -6px 0 0 -7px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -148px -26px;
  }

  .pop .btn_close:hover {
    background-color: #f1f3f5;
  }

  .pop .pop_content {
    width: 450px;
    margin-bottom: 54px;
  }

  .pop .inquire_info {
    margin-bottom: 18px;
    border-top: 2px solid #333;
  }

  .pop .inquire_info > li {
    border-bottom: 1px solid #efefef;
  }

  .pop .inquire_info > li > dl {
    margin-bottom: 0;
    padding: 20px 0;
    font-size: 15px;
    text-align: left;
  }

  .pop .inquire_info > li > dl:after {
    content: "";
    display: block;
    clear: both;
  }

  .pop .inquire_info .info_title {
    float: left;
    width: 106px;
    padding-right: 50px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #212121;
  }

  .pop .inquire_info .info_text {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #606167;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .pop .inquire_info.meeting:after {
    content: "";
    display: block;
    clear: both;
  }

  .pop .inquire_info.meeting > li {
    float: left;
    width: 50%;
  }

  .pop .inquire_info.meeting .info_title {
    width: 75px;
    padding-right: 20px;
  }

  .pop .inquire_guide {
    position: relative;
    padding-left: 12px;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #878890;
    text-align: left;
  }

  .pop .inquire_guide:before {
    content: "";
    position: absolute;
    left: 0;
    top: 3px;
    width: 2px;
    height: 10px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -122px -45px;
  }

  .pop.v2 {
    padding-top: 70px;
  }

  .pop.v2 .pop_text {
    width: 340px;
    margin-bottom: 30px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 18px;
    color: #333;
    text-align: center;
    line-height: 1.5;
  }

  .pop.v3 {
    width: 63.021vw;
    max-width: 1210px;
    min-width: 703px;
    height: 89.018vh;
    max-height: 843px;
    min-height: 714px;
  }

  .pop.v3 .pop_slide_wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .pop.v3 .pop_slide {
    overflow: hidden;
    height: 84.786%;
    margin-bottom: 30px;
    background-color: #fff;
  }

  .pop.v3 .pop_slide_container {
    width: 400%;
    height: 100%;
  }

  .pop.v3 .pop_slide_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .pop.v3 .pop_slide_item {
    float: left;
    width: 25%;
    height: 100%;
  }

  .pop.v3 .pop_slide_info {
    position: relative;
  }

  .pop.v3 .pop_slide_info h3 {
    width: 70.092%;
    max-width: 764px;
    margin: 0 auto;
    height: 66px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    text-align: center;
    line-height: 1.8;
    letter-spacing: -0.5px;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    word-break: break-all;
    -webkit-line-clamp: 2;
  }

  .pop.v3 .btn_prev,
  .pop.v3 .btn_next {
    position: absolute;
    top: 0;
  }

  .pop.v3 .btn_prev {
    left: 0;
  }

  .pop.v3 .btn_next {
    right: 0;
  }

  .dimmed {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background-color: #3a3e50;
    opacity: 0.5;
  }

  .contact .page_title {
    padding: 0 0 70px;
  }

  .contact .content_container {
    margin: 0 auto;
  }

  .contact .content_container:last-child {
    margin: 80px auto 120px;
  }

  .contact .content_box_right dt {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .contact .content_box_right .content_box_text {
    margin: 3px 0 0;
  }

  .contact .content_box_right .address + .content_box_text {
    margin: 3px 0 21px;
  }

  .contact .content_box_right .tel,
  .contact .content_box_right .tel + .content_box_text {
    display: inline-block;
  }

  .contact .util_list .btn_link {
    font-size: 15px;
  }

  .contact .util_list .btn_link:after {
    top: -1px;
  }

  .util_list {
    float: left;
    width: 33.333%;
  }

  .util_list .btn_link {
    margin: 0 0 3px;
    padding: 0 30px 0 0;
    font-size: 15px;
    color: #333;
  }

  .util_list .btn_link:after {
    top: 1px;
  }

  .util_list:hover .btn_link {
    text-decoration: underline;
  }

  .util_list:hover .btn_link:after {
    background-position: -104px -68px;
  }

  .util_list .content_box_text {
    color: #606167;
  }

  .map {
    width: 100%;
    margin: 30px auto 0;
  }

  .map img {
    width: 100%;
    height: 100%;
  }

  .service .content_container.util {
    margin-top: 80px;
  }

  .service .content_container.util .content_box {
    margin-top: 80px;
  }

  .service .content_container.util .content_box_text {
    line-height: 1.6;
  }

  .service .content_box_left {
    margin-top: -3px;
  }

  .service .content_box_right {
    border-top: 2px solid #333;
  }

  .service .content_box_right .content_box_text {
    margin: 3px 0 0;
  }

  .service .content_box_right.type2 {
    margin-top: -7px;
    margin-bottom: 17px;
    border-top: 0;
  }

  .service .content_box_right.type2 .content_box_text {
    display: inline;
    margin-right: 11px;
    word-break: keep-all;
  }

  .service .util_container {
    padding: 30px 0 12px;
  }

  .service .util_list {
    position: relative;
    width: 50%;
    margin: 50px 0 0;
  }

  .service .util_list .btn_link {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    letter-spacing: -0.1px;
  }

  .service .util_list .util_list_box {
    display: block;
    position: relative;
    width: 100%;
    padding-left: 90px;
  }

  .service .util_list .util_list_box:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    width: 66px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .service .util_list:nth-child(1),
  .service .util_list:nth-child(2) {
    margin-top: 0;
  }

  .service .util_list:nth-child(odd) {
    padding-right: 30px;
  }

  .service .util_list:nth-child(2n) {
    padding-left: 30px;
  }

  .service .util_list.pay .util_list_box:before {
    height: 51px;
    background-position: 0 -344px;
  }

  .service .util_list.smartstore .util_list_box:before {
    left: 5px;
    height: 53px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -85px 0;
  }

  .service .util_list.smartplace .util_list_box:before {
    left: 3px;
    width: 61px;
    height: 72px;
    background-position: 0 -450px;
  }

  .service .util_list.reservation .util_list_box:before {
    left: 4px;
    width: 58px;
    height: 62px;
    background-position: -68px -365px;
  }

  .service .util_list.talk .util_list_box:before {
    left: 6px;
    width: 55px;
    height: 56px;
    background-position: -68px -432px;
  }

  .service .util_list.cloud .util_list_box:before {
    width: 69px;
    height: 34px;
    background-position: -129px -406px;
  }

  .service .util_list.login .util_list_box:before {
    width: 60px;
    height: 60px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -85px -58px;
  }

  .service .util_list.modoo .util_list_box:before {
    left: 6px;
    width: 55px;
    height: 62px;
    background-position: -202px -409px;
  }

  .service .util_list.analytics .util_list_box:before {
    height: 55px;
    background-position: -264px -409px;
  }

  .service .util_list.works .util_list_box:before {
    left: 6px;
    width: 60px;
    height: 60px;
    background-position: -331px -804px;
  }

  .service .util_list.shopping .util_list_box:before {
    left: 2px;
    width: 58px;
    height: 60px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -85px -122px;
  }

  .service .util_list.search .util_list_box:before {
    height: 41px;
    background-position: -395px -324px;
  }

  .service .util_list.ad .util_list_box:before {
    left: 2px;
    width: 62px;
    height: 51px;
    background-position: -395px -369px;
  }

  .service .util_list.shoppingbox .util_list_box:before {
    left: 5px;
    width: 62px;
    height: 51px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -85px -187px;
  }

  .service .util_list.square .util_list_box:before {
    width: 66px;
    height: 66px;
    background-position: -126px -805px;
  }

  .service .util_list.commerce .util_list_box:before {
    left: 2px;
    width: 63px;
    height: 20px;
    background: url(../../img/ko/service/sp_business.png) no-repeat;
    -webkit-background-size: 100px 200px;
    background-size: 100px 200px;
    background-position: 0 0;
  }

  .service .util_list.webtoon .util_list_box:before {
    height: 65px;
    background-position: -284px -472px;
  }

  .service .util_list.grafolio .util_list_box:before {
    left: 2px;
    width: 65px;
    height: 36px;
    background-position: -355px -481px;
  }

  .service .util_list.webnovel .util_list_box:before {
    left: 8px;
    width: 51px;
    height: 60px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: 0 -663px;
  }

  .service .util_list.post .util_list_box:before {
    left: 2px;
    width: 62px;
    height: 60px;
    background-position: 0 -527px;
  }

  .service .util_list.blog .util_list_box:before {
    height: 55px;
    background-position: -64px -612px;
  }

  .service .util_list.tv .util_list_box:before {
    left: 6px;
    width: 54px;
    height: 63px;
    background-position: -135px -602px;
  }

  .service .util_list.audio .util_list_box:before {
    left: 3px;
    height: 48px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -85px -243px;
  }

  .service .util_list.vibe .util_list_box:before {
    top: 31px;
    left: 3px;
    width: 63px;
    height: 53px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: 0 -864px;
  }

  .service .util_list.series .util_list_box:before {
    left: 8px;
    width: 56px;
    height: 56px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: 0 -728px;
  }

  .service .util_list.d2factory .util_list_box:before {
    width: 74px;
    height: 20px;
    background-position: -205px -514px;
  }

  .service .util_list.d2 .util_list_box:before {
    left: 4px;
    width: 58px;
    height: 47px;
    background-position: -70px -562px;
  }

  .service .util_list.deview .util_list_box:before {
    left: 4px;
    width: 58px;
    height: 37px;
    background-position: -141px -559px;
  }

  .service .util_list.opensource .util_list_box:before {
    left: 3px;
    width: 60px;
    height: 60px;
    background-position: -206px -544px;
  }

  .service .util_list.clova_api .util_list_box:before {
    width: 60px;
    height: 60px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -91px -576px;
  }

  .service .util_list.papago_api .util_list_box:before {
    left: 4px;
    width: 49px;
    height: 63px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -86px -486px;
  }

  .service .util_list.map_api .util_list_box:before {
    left: 5px;
    height: 57px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -85px -423px;
  }

  .service .util_list.creator_advisor .util_list_box:before {
    left: 5px;
    width: 64px;
    height: 64px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: 0 -790px;
  }

  .service .util_list.premium_content .util_list_box:before {
    top: 21px;
    left: 1px;
    width: 66px;
    height: 33px;
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: 0 -928px;
  }

  .service .util_list.square.gwangju,
  .service .util_list.smartplace,
  .service .util_list.talk,
  .service .util_list.webnovel {
    clear: both;
  }

  .content_box.left_wide {
    margin-top: 0;
    padding: 20px 0 35px;
    border-bottom: 1px solid #efefef;
  }

  .content_box.left_wide:after {
    content: "";
    display: block;
    clear: both;
  }

  .content_box.left_wide:first-child {
    padding-top: 0;
  }

  .content_box.left_wide:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .content_box.left_wide .content_box_left {
    float: left;
    width: calc(100% - 400px);
    padding: 0 39px 0 0;
  }

  .content_box.left_wide .content_box_right {
    width: 400px;
    border-top: 0;
  }

  .content_box.left_wide .content_box_title {
    margin: 34px 0 20px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 26px;
    line-height: 34px;
    letter-spacing: -0.2px;
  }

  .content_box.left_wide .content_box_title strong {
    display: block;
    color: #00b843;
  }

  .content_box.left_wide .content_box_info:after {
    content: "";
    display: block;
    clear: both;
  }

  .content_box.left_wide .info_icon {
    float: left;
    position: relative;
    width: 80px;
    height: 80px;
    margin: 6px 28px 0 0;
  }

  .content_box.left_wide .info_icon:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80px;
    height: 80px;
    margin: -40px 0 0 -40px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .content_box.left_wide .info_icon.naver:before {
    background-position: -127px -153px;
  }

  .content_box.left_wide .info_icon.line:before {
    background-position: -215px -153px;
  }

  .content_box.left_wide .info_icon.clova:before {
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -71px -747px;
  }

  .content_box.left_wide .info_icon.papago:before {
    width: 44px;
    height: 57px;
    margin: -30px 0 0 -26px;
    background-position: -411px -164px;
  }

  .content_box.left_wide .info_icon.whale:before {
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    background-position: -402px -249px;
  }

  .content_box.left_wide .info_icon.navermap:before {
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: 0 -85px;
  }

  .content_box.left_wide .info_icon.vlive:before {
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: 0 -170px;
  }

  .content_box.left_wide .info_icon.webtoon:before {
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: 0 -255px;
  }

  .content_box.left_wide .info_icon.snow:before {
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: 0 -578px;
  }

  .content_box.left_wide .info_icon.band:before {
    background-position: -215px -324px;
  }

  .content_box.left_wide .info_icon.audio:before {
    width: 56px;
    height: 70px;
    margin: -35px 0 0 -28px;
    background-position: -315px -327px;
  }

  .content_box.left_wide .info_icon.series:before {
    background: url(../../img/ko/service/sp_service.png) no-repeat;
    -webkit-background-size: 151px 962px;
    background-size: 151px 962px;
    background-position: -71px -664px;
  }

  .content_box.left_wide .info_text {
    margin: 0 0 25px;
    font-size: 15px;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #606167;
    line-height: 1.8;
    letter-spacing: -0.1px;
  }

  .service_link_box:after {
    content: "";
    display: block;
    clear: both;
  }

  .service_link_item {
    float: left;
    display: block;
    margin: 0 30px 0 0;
    height: 23px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .service_link_item.item1 {
    width: 20px;
    background-position: -110px -102px;
  }

  .service_link_item.item1:hover {
    background-position: -197px -103px;
  }

  .service_link_item.item2 {
    width: 24px;
    background-position: -136px -102px;
  }

  .service_link_item.item2:hover {
    background-position: -224px -103px;
  }

  .service_link_item.item3 {
    width: 25px;
    height: 22px;
    background-position: -166px -103px;
  }

  .service_link_item.item3:hover {
    background-position: -255px -104px;
  }

  .service_link_item.item4 {
    width: 22px;
    height: 22px;
    background-position: -149px -129px;
  }

  .service_link_item.item4:hover {
    background-position: -174px -129px;
  }

  .slide_area {
    position: relative;
    width: 100%;
    height: 428px;
    padding: 0 46px;
  }

  .slide_area .slide_container {
    width: 100%;
  }

  .slide_area .slide_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .slide_area .slide_list {
    position: absolute;
    left: 105px;
    top: 36px;
    z-index: 100;
    box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  .slide_area .slide_list.first {
    z-index: 120;
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: translate(-36px, -36px);
    transform: translate(-36px, -36px);
    transition: -webkit-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
  }

  .slide_area .slide_list.second {
    z-index: 110;
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transition: all 0.5s 0.5s ease;
    transition: all 0.5s 0.5s ease;
  }

  .promotion .content_container {
    margin-top: 0;
    margin-bottom: 90px;
  }

  .promotion .content_container.tv {
    max-width: 1160px;
  }

  .promotion .content_container.media {
    max-width: 1000px;
  }

  .promotion .btn_area {
    margin-top: 0;
    padding: 0 0 30px;
  }

  .search_wrap {
    padding: 10px 0 40px;
    text-align: center;
    font-size: 0;
  }

  .search_wrap .select_box {
    display: inline-block;
    vertical-align: top;
    min-width: 151px;
  }

  .search_wrap .select_menu {
    top: 0;
  }

  .search {
    display: inline-block;
    position: relative;
    width: 249px;
    height: 56px;
  }

  .search input {
    width: 100%;
    height: 56px;
    padding: 0 66px 0 0;
    border-bottom: 1px solid #dce0e6;
    font-size: 16px;
    color: #333;
    line-height: 55px;
  }

  .search .btn_search {
    position: absolute;
    right: 0;
    top: 4px;
    width: 46px;
    height: 46px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }

  .search .btn_search:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    margin: -10px 0 0 -10px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -169px 0;
  }

  .search .btn_search:hover {
    background-color: #00c73c;
  }

  .search .btn_search:hover:before {
    background-position: -124px -65px;
  }

  .report_container {
    font-size: 0;
  }

  .report_container.ad .report_list > a:hover .report_img_box:before,
  .report_container.ad .report_list > a:hover .report_img_box:after {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .report_container.ad .report_list > a:hover .report_img_box:after {
    top: 50%;
    margin-top: -23px;
  }

  .report_container.ad .report_list:hover .report_info_title {
    text-decoration: none;
  }

  .report_container.ad .report_img_box {
    padding-top: 62%;
  }

  .report_container.ad .report_img_box:before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(58, 62, 80, 0.5);
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }

  .report_container.ad .report_img_box:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    width: 46px;
    height: 46px;
    margin: 0 0 0 -23px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -146px -50px;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: all 0.4s;
    transition: all 0.4s;
  }

  .report_container.ad .report_info_title {
    margin-bottom: 12px;
  }

  .report_list {
    display: inline-block;
    vertical-align: top;
    width: 33.333%;
    margin: 0 0 60px 0;
  }

  .report_list:nth-child(3n) {
    margin-right: 0;
  }

  .report_list a {
    display: block;
    width: calc(100% - 40px);
    height: 100%;
    margin: 0 auto;
  }

  .report_list .report_img_box {
    overflow: hidden;
    position: relative;
    width: 100%;
    margin: 0 0 19px;
    padding-top: 56.1%;
    background: no-repeat 50%;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .report_list .report_info_box {
    position: relative;
  }

  .report_list .report_info_title {
    max-width: 100%;
    max-height: 56px;
    margin: 0 0 5px;
    padding: 0 10px 0 0;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 18px;
    color: #212121;
    line-height: 1.6;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    word-break: break-all;
    -webkit-line-clamp: 2;
  }

  .report_list .report_info_text {
    height: 70px;
    margin: 0 0 9px;
    font-size: 15px;
    color: #606167;
    line-height: 1.6;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    word-break: break-all;
    -webkit-line-clamp: 3;
  }

  .report_list .report_info_date {
    font-size: 12px;
    color: #878890;
  }

  .report_list:hover .report_info_title {
    text-decoration: underline;
  }

  .icon_now {
    display: none;
    position: absolute;
    left: 0;
    top: -9px;
    width: 7px;
    height: 7px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -138px -45px;
  }

  .report_list.now .icon_now,
  .news_list.now .icon_now,
  .policy_list.now .icon_now {
    display: block;
  }

  .news_list {
    position: relative;
    padding: 50px 0 30px;
    border-bottom: 1px solid #efefef;
  }

  .news_list > a:hover .news_list_title {
    text-decoration: underline;
  }

  .news_list:last-child {
    margin-bottom: 60px;
  }

  .news_list .news_list_title {
    margin-bottom: 2px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 22px;
    color: #212121;
    line-height: 36px;
  }

  .news_list .news_list_text {
    height: 51px;
    margin-bottom: 5px;
    font-size: 15px;
    color: #606167;
    line-height: 1.6;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    word-break: break-all;
    -webkit-line-clamp: 2;
  }

  .news_list .news_regist_info {
    font-size: 12px;
    color: #878890;
  }

  .news_list .news_regist_info .news_regist_name {
    position: relative;
    padding-right: 17px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .news_list .news_regist_info .news_regist_name:after {
    content: "";
    position: absolute;
    right: 2px;
    bottom: 2px;
    width: 8px;
    height: 1px;
    background-color: #878890;
  }

  .news_list .icon_now {
    top: 33px;
  }

  .channel_container {
    padding: 75px 0 30px;
    font-size: 0;
  }

  .channel_list {
    display: inline-block;
    vertical-align: top;
    width: 33.333%;
    height: 100%;
    margin: 60px 0px 0;
  }

  .channel_list:nth-child(1),
  .channel_list:nth-child(2),
  .channel_list:nth-child(3) {
    margin-top: 0;
  }

  .channel_list .util_list_box {
    display: block;
    padding: 0 40px;
  }

  .channel_list h4 {
    display: inline;
    margin-bottom: 4px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
    line-height: 1.8;
    letter-spacing: -0.1px;
  }

  .channel_list p {
    margin-bottom: 9px;
    font-size: 15px;
    color: #606167;
    line-height: 1.8;
  }

  .channel_list .btn_link {
    padding-right: 27px;
  }

  .channel_list .btn_link:after {
    top: 0;
  }

  .channel_list:hover .btn_link {
    text-decoration: underline;
  }

  .channel_list:hover .btn_link:after {
    background-position: -104px -68px;
  }

  .channel_container.icon {
    max-width: 1120px;
    margin: 0 auto;
    padding: 38px 0 68px;
  }

  .channel_container.icon .channel_list {
    position: relative;
    width: 50%;
  }

  .channel_container.icon .channel_list:last-child:before {
    content: "";
    position: absolute;
    left: 0;
    top: 3px;
    width: 1px;
    height: 93.47%;
    background-color: #efefef;
  }

  .channel_container.icon .channel_list .util_list_box {
    width: 100%;
    padding: 0 160px 0 40px;
  }

  .channel_container.icon .channel_list .util_list_box:before {
    content: "";
    position: absolute;
    top: 0px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .channel_container.icon .channel_list .util_list_box:hover .icon_link {
    background-position: -104px -68px;
  }

  .channel_container.icon .channel_list.diary .util_list_box:before {
    right: 60px;
    width: 100px;
    height: 100px;
    background-position: 0 -671px;
  }

  .channel_container.icon .channel_list.search .util_list_box:before {
    right: 40px;
    width: 102px;
    height: 100px;
    background-position: -104px -671px;
  }

  .channel_container.icon .channel_list.search .util_list_box {
    padding: 0 142px 0 60px;
  }

  .channel_container.icon .channel_list h3 {
    margin-bottom: 11px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #333;
    line-height: 30px;
    letter-spacing: -0.5px;
  }

  .channel_container.icon .channel_list h3 strong {
    color: #00b843;
  }

  .channel_container.icon .channel_list .btn_link {
    padding-right: 0;
  }

  .channel_container.icon .channel_list .btn_link:after {
    display: none;
  }

  .channel_container.icon .channel_list .icon_link {
    display: inline-block;
    vertical-align: middle;
    width: 18px;
    height: 18px;
    margin: -3px 0 0 9px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -59px 0;
  }

  .btn_more {
    position: relative;
    width: 46px;
    height: 46px;
    background-color: #bac2cd;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }

  .btn_more:before {
    content: "";
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 14px;
    height: 16px;
    margin: -8px 0 0 -7px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -194px 0;
  }

  .btn_more:hover,
  .btn_more:focus {
    background-color: #00c73c;
  }

  .btn_more.type2 {
    position: absolute;
    left: 50%;
    bottom: 14px;
    margin-left: -23px;
    background-color: #fff;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
  }

  .btn_more.type2:before {
    width: 16px;
    height: 7px;
    margin: -3px 0 0 -8px;
    background-position: -204px -26px;
  }

  .btn_more.type2:hover,
  .btn_more.type2:focus {
    background-color: #f1f3f5;
  }

  .btn_more.type2:hover:before,
  .btn_more.type2:focus:before {
    background-position: -169px -39px;
  }

  .btn_more.type2[aria-expanded="true"]:before {
    margin-top: -4px;
    background-position: -187px -26px;
  }

  .btn_more.type2[aria-expanded="true"]:hover:before {
    background-position: -186px -39px;
  }

  .none_box {
    height: 100%;
    margin: 57px 0;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 22px;
    color: #d1d1d1;
    text-align: center;
  }

  .report_wrap_title {
    margin-bottom: 74px;
    border-bottom: 1px solid #000;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #212121;
    text-align: center;
  }

  .report_wrap_title .news_date {
    display: block;
    margin: 4px 0 5px;
    font-size: 14px;
  }

  .report_wrap_title h3 {
    margin-bottom: 20px;
    font-size: 26px;
    letter-spacing: -0.2px;
  }

  .report_view_container {
    max-width: 100%;
    margin: 0 auto 60px;
    padding: 0 160px;
    font-size: 15px;
    line-height: 1.8;
  }

  .report_view_container .util_box.research {
    margin: -52px 0 26px;
  }

  .report_view_container .util_box.research .util_item {
    float: right;
  }

  .report_view_container .util_box.research .util_item a {
    padding-right: 0;
    padding-left: 25px;
  }

  .report_view_container .util_box.research .util_item a:before {
    left: 0;
  }

  .report_view_container .util_box.research .btn_area {
    text-align: right;
  }

  .report_view_container strong {
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .report_view_container .report_content_img img {
    width: 100%;
  }

  .report_desc {
    overflow: hidden;
    margin-bottom: 53px;
    color: #333;
  }

  .report_desc li {
    color: #333;
  }

  .report_desc li:before {
    content: "-";
    display: inline-block;
  }

  .report_content {
    margin-bottom: 150px;
    font-size: 15px;
    color: #606167;
    line-height: 1.8;
  }

  .report_content .report_content_img {
    margin-bottom: 54px;
  }

  .report_btn_area {
    padding: 20px 0 30px;
    border-top: 1px solid #eee;
  }

  .report_btn_area:after {
    content: "";
    display: block;
    clear: both;
  }

  .report_btn_area .btn_list_view {
    float: right;
  }

  .report_btn_area .btn_prev:after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    margin: 0 2px 0 22px;
    background-color: #e5e5e5;
    vertical-align: middle;
  }

  .btn_prev,
  .btn_next,
  .btn_list_view,
  .btn_link_large {
    display: inline-block;
    vertical-align: top;
  }

  .btn_link_large {
    margin-left: 16px;
  }

  .btn_text {
    display: inline-block;
    margin-left: 16px;
    font-size: 15px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #212121;
    line-height: 46px;
  }

  .btn_wrap {
    float: left;
    margin-right: 10px;
  }

  .btn_prev:hover .icon_prev,
  .btn_next:hover .icon_next,
  .btn_list_view:hover .icon_list,
  .btn_link_large:hover .icon_next,
  .btn_link_large:hover .icon_down,
  .btn_link_large:hover .icon_vod,
  .btn_prev:focus .icon_prev,
  .btn_next:focus .icon_next,
  .btn_list_view:focus .icon_list,
  .btn_link_large:focus .icon_next,
  .btn_link_large:focus .icon_down,
  .btn_link_large:focus .icon_vod {
    background-color: #00c73c;
  }

  .btn_next .btn_text,
  .btn_link_large .btn_text {
    margin-right: 16px;
    font-size: 15px;
  }

  .btn_list_view .btn_text {
    margin-right: 15px;
    font-size: 15px;
  }

  .btn_list_view_area {
    float: right;
  }

  .icon_prev,
  .icon_next,
  .icon_list,
  .icon_down,
  .icon_vod {
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 46px;
    height: 46px;
    background-color: #bac2cd;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    -webkit-transition: background-color 0.3s;
    transition: background-color 0.3s;
  }

  .icon_prev:before,
  .icon_next:before,
  .icon_list:before,
  .icon_down:before,
  .icon_vod:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .icon_prev:before {
    width: 15px;
    height: 14px;
    margin: -7px 0 0 -8px;
    background-position: -211px 0;
  }

  .icon_next:before {
    width: 15px;
    height: 14px;
    margin: -7px 0 0 -8px;
    background-position: -230px 0;
  }

  .icon_list:before {
    width: 14px;
    height: 12px;
    margin: -6px 0 0 -7px;
    background-position: -249px 0;
  }

  .icon_down:before {
    width: 18px;
    height: 19px;
    margin: -9px 0 0 -9px;
    background-position: -266px 0;
  }

  .icon_vod:before {
    width: 18px;
    height: 18px;
    margin: -9px 0 0 -9px;
    background-position: -366px 0;
  }

  .value .spot_container {
    position: relative;
  }

  .value .content_container {
    margin-top: 100px;
  }

  .value .content_container.idc .content_box {
    margin-top: 100px;
  }

  .value .content_container.idc .content_box_right.type2 .content_box_text {
    margin-right: 0;
    word-break: keep-all;
  }

  .value .content_container.idc .btn_area {
    margin-top: 100px;
  }

  .value .content_container.idc .btn_area .btn_text {
    white-space: nowrap;
  }

  .value .content_container.accessibility .info_list {
    padding: 23px 0 23px 0;
  }

  .value .content_container.accessibility .info_list:before {
    display: none;
  }

  .value .content_container.accessibility .info_list > dl {
    padding-right: 0;
  }

  .value .content_container.accessibility .info_list > dl:after {
    content: "";
    display: block;
    clear: both;
  }

  .value .content_container.accessibility .info_list .info_list_title {
    float: left;
    width: 130px;
  }

  .value .content_container.accessibility .info_list .info_list_text {
    overflow: hidden;
  }

  .value .content_container.accessibility .btn_area {
    margin-top: 80px;
  }

  .value .content_container.accessibility .btn_area .btn_text {
    white-space: nowrap;
  }

  .value .content_container.cs .btn_link,
  .value .content_container.privacy .btn_link,
  .value .content_container.accreditation .btn_link,
  .value .content_container.library .btn_link {
    white-space: nowrap;
  }

  .value .content_container.culture .info_img_box {
    width: 499px;
    margin-top: 59px;
    margin-bottom: 80px;
  }

  .value .content_container.culture .btn_link:after {
    top: 1.5px;
  }

  .value .content_container.flower .btn_area {
    margin-top: 24px;
  }

  .value .content_container.flower .info_img_box {
    max-width: 1094px;
  }

  .value .content_container .content_box_logo {
    float: right;
    margin: 7px 0 0 30px;
  }

  .value .content_container.sustainable {
    margin-top: 94px;
  }

  .value .content_container.sustainable .info_img_box {
    max-width: 100%;
  }

  .value .content_container.initiatives {
    margin-top: 94px;
  }

  .value .content_container.library .content_box {
    margin-top: 92px;
  }

  .value .content_box {
    margin-top: 80px;
  }

  .value .content_box.effort .content_box_img {
    background-image: url(../../img/ko/value/img_value_idc1.jpg);
  }

  .value .content_box.pue .content_box_img {
    background-image: url(../../img/ko/value/img_value_idc2.jpg);
  }

  .value .content_box.nature .content_box_img {
    background-image: url(../../img/ko/value/img_value_idc3.jpg);
  }

  .value .content_box.building .content_box_img {
    background-image: url(../../img/ko/value/img_build1.jpg);
  }

  .value .content_box_img {
    width: 100%;
    height: 320px;
    background: no-repeat 50%;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .value .content_box_left {
    margin-top: -3px;
  }

  .value .content_box_right.type2 {
    margin-top: -7px;
    border-top: 0;
  }

  .value .content_box_right.type2 .content_box_text {
    display: inline;
    margin-right: 11px;
    letter-spacing: 0;
  }

  .value .content_box_right {
    border-top: 2px solid #333;
  }

  .value .content_box_right.alone {
    float: right;
    margin-top: 52px;
  }

  .value .content_container.cs {
    margin-top: 0;
  }

  .value .content_container.cs > ul .content_box:first-child {
    margin-top: 100px;
    padding-bottom: 12px;
  }

  .value .content_container.report .info_list > dl {
    padding-right: 143px;
  }

  .value .content_container.privacy .info_list > dl {
    padding-right: 0;
  }

  .value .content_container.privacy .info_list_text {
    word-break: keep-all;
  }

  .value .content_container.development .content_box {
    margin-top: 68px;
  }

  .value .content_container.development .btn_text {
    white-space: nowrap;
  }

  .value .btn_area {
    margin-top: 68px;
    text-align: right;
  }

  .value .content_box_list .content_box {
    margin-top: 0;
  }

  .value .content_box_list .content_box_right {
    border-top: 0;
  }

  .content_box_list {
    margin-top: 80px;
  }

  .content_box_list .content_box_left {
    margin-top: 32px;
  }

  .content_box_list .content_box_right {
    border-top: 0;
  }

  .content_box_list .content_box:first-child .content_box_left {
    margin-top: 6px;
  }

  .content_box_list .content_box:first-child .definition_box {
    padding-top: 30px;
    border-top: 2px solid #212121;
  }

  .content_box_list .definition_box {
    padding: 54px 0 32px;
    border-bottom: 1px solid #efefef;
  }

  .initiatives .info_list {
    padding: 43px 0 44px 100px;
  }

  .initiatives .info_list:before {
    background: url(../../img/ko/value/sp_value_icon_v3.png) no-repeat;
    -webkit-background-size: 176px 130px;
    background-size: 176px 130px;
    height: 70px;
  }

  .initiatives .info_list.energy:before {
    width: 56px;
    background-position: 0 0;
  }

  .initiatives .info_list.excavation:before {
    width: 55px;
    background-position: -58px 0;
  }

  .initiatives .info_list.carbon:before {
    width: 58px;
    background-position: -116px -2px;
  }

  .initiatives .info_list > dl {
    padding-right: 0;
  }

  .initiatives .info_list .info_list_title {
    letter-spacing: -0.3px;
  }

  .initiatives .info_list .info_list_text {
    line-height: 27px;
  }

  .initiatives .info_img_box {
    max-width: 1119px;
  }

  .value_item .content_box:first-child {
    padding-top: 18px;
  }

  .value_item .content_box .content_box_text + .content_box_text {
    margin-top: 27px;
  }

  .value_item .content_box .content_box_img {
    width: 100%;
    height: 320px;
    margin-top: 32px;
    background: no-repeat 50%;
    -webkit-background-size: cover;
    background-size: cover;
  }

  .value_item .content_box.gak .content_box_img {
    height: 286px;
    background-image: url(../../img/ko/value/img_green_connect_gak.jpg);
  }

  .value_item .content_box.naver_cloud .content_box_img {
    background-image: url(../../img/ko/value/img_green_connect_smart_farm.jpg);
  }

  .value_item .content_box.market .content_box_img {
    background-image: url(../../img/ko/value/img_green_connect_market.jpg);
  }

  .value_item .content_box.eco .content_box_img {
    background-image: url(../../img/ko/value/img_green_connect_eco.jpg);
  }

  .value_item .content_box.happybean .content_box_img {
    background-image: url(../../img/ko/value/img_green_connect_happybean.jpg);
  }

  .value_item .content_box.cooperation .content_box_img {
    background-image: url(../../img/ko/value/img_crisis_cooperation.jpg);
  }

  .value_item .content_box.offer {
    padding-top: 5px;
  }

  .value_item .content_box.offer .content_box_img {
    background-image: url(../../img/ko/value/img_crisis_offer.jpg);
  }

  .value_item .content_box.effort {
    padding-top: 5px;
  }

  .value_item .content_box.effort .content_box_img {
    background-image: url(../../img/ko/value/img_crisis_effort.jpg);
  }

  .value_item .content_box.safety_effort {
    padding-top: 5px;
  }

  .value_item .content_box.safety_effort .content_box_img {
    background-image: url(../../img/ko/value/img_crisis_safety_effort.jpg);
  }

  .respect .info_list_text + .info_list_text {
    margin-top: 30px;
  }

  .respect .info_list_text:first-of-type {
    margin-top: 16px;
  }

  .respect .info_list {
    padding-top: 31px;
    padding-bottom: 32px;
    line-height: 27px;
    letter-spacing: -0.3px;
  }

  .respect .info_list:last-child {
    border-bottom: none;
  }

  .respect .info_list:before {
    background: url(../../img/ko/value/sp_value_icon_v3.png) no-repeat;
    -webkit-background-size: 176px 130px;
    background-size: 176px 130px;
    -webkit-transform: none;
    transform: none;
    width: 58px;
    height: 48px;
  }

  .respect .info_list > dl {
    padding-right: 0;
  }

  .respect .share:before {
    top: 41px;
    background-position: 0 -72px;
  }

  .respect .non_discrimination:before {
    top: 39px;
    background-position: -58px -74px;
  }

  .respect .organization:before {
    top: 42px;
    background-position: -117px -74px;
  }

  .respect .info_text_link {
    text-decoration: underline;
    color: #4e77ee;
  }

  .respect .btn_link_large .btn_text {
    font-size: 16px;
  }

  .respect .content_box {
    margin-top: 60px;
  }

  .respect .content_box .content_box_left.table_box {
    margin-top: -10px;
  }

  .btn_link_wrap {
    margin-top: 33px;
    text-align: right;
  }

  .btn_link_wrap:after {
    content: "";
    display: block;
    clear: both;
  }

  .btn_link_wrap .btn_link {
    margin-left: 20px;
  }

  .btn_link_wrap .btn_link:after {
    top: 1.5px;
  }

  .definition_box {
    margin-top: 32px;
  }

  .definition_box:first-child {
    margin-top: 0;
  }

  .definition_box .content_term {
    margin-top: 32px;
    font-size: 15px;
    letter-spacing: -0.45px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #212121;
  }

  .definition_box .content_term:first-child {
    margin-top: 0;
  }

  .definition_box .content_box_text {
    margin-top: 12px;
  }

  .content_container.ethics .info_list {
    padding-left: 92px;
  }

  .content_container.ethics .info_list.employees:before {
    width: 71px;
    height: 70px;
    background-position: -99px -875px;
  }

  .content_container.ethics .info_list.partner:before {
    height: 62px;
    background-position: -174px -873px;
  }

  .content_container.ethics .info_list.society:before {
    width: 65px;
    height: 57px;
    background-position: -241px -875px;
  }

  .content_container.ethics .info_list.client:before {
    width: 63px;
    height: 55px;
    background-position: -309px -877px;
  }

  .content_container.ethics .info_list.stockholder:before {
    width: 56px;
    height: 60px;
    background-position: -397px -805px;
  }

  .content_container.ethics .info_list:last-child {
    border-bottom: 0;
  }

  .content_container.ethics .info_list > dl {
    padding-right: 0;
  }

  .content_container.ethics .content_box {
    margin-top: 64px;
  }

  .slide_item {
    float: left;
    width: 25%;
  }

  .standard_container {
    width: 960px;
    margin: 0 auto;
  }

  .standard_list {
    position: relative;
    padding: 10px 0;
    font-size: 0;
  }

  .standard_list:before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 879px;
    height: 1px;
    background-color: #efefef;
  }

  .standard_list:after {
    content: "";
    display: block;
    clear: both;
  }

  .standard_list:first-child {
    padding-top: 0;
  }

  .standard_list:first-child:before {
    display: none;
  }

  .standard_list:last-child {
    padding-bottom: 0;
  }

  .standard_list .guide_title {
    display: inline-block;
    vertical-align: middle;
    width: 180px;
    height: 180px;
    border: 1px solid #555c6a;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    text-align: center;
  }

  .standard_list .guide_title h3 {
    padding-top: 76px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 24px;
    color: #212121;
    letter-spacing: -0.7px;
  }

  .standard_list .guide_list_box {
    display: inline-block;
    vertical-align: middle;
    width: 81.25%;
    padding: 20px 0 20px 90px;
  }

  .standard_list .guide_list_box .guide_list {
    padding-left: 29px;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    line-height: 32px;
  }

  .standard_list .guide_list_box .guide_list:before {
    top: 9px;
  }

  .info_list {
    position: relative;
    padding: 28px 0 26px 100px;
    border-bottom: 1px solid #efefef;
  }

  .info_list:after {
    content: "";
    display: block;
    clear: both;
  }

  .info_list > dl {
    padding-right: 185px;
    font-size: 0;
  }

  .info_list.post > dl {
    padding-right: 0;
  }

  .info_list.web {
    padding-right: 348px;
  }

  .info_list.web .btn_rect:first-of-type {
    right: 165px;
  }

  .info_list .info_list_title {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
    line-height: 26px;
  }

  .info_list .info_list_text {
    font-size: 15px;
    color: #606167;
    line-height: 26px;
  }

  .info_list .info_inner_list {
    margin-left: 10px;
  }

  .info_list .btn_rect {
    position: absolute;
    right: 0;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .info_list:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 66px;
    height: 54px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .info_list.web:before {
    background-position: -259px -609px;
  }

  .info_list.email:before {
    background-position: -399px -683px;
  }

  .info_list.post:before {
    height: 46px;
    background-position: -254px -745px;
  }

  .info_list.report:before {
    background-position: -327px -745px;
  }

  .info_list.privacy:before {
    width: 53px;
    height: 61px;
    background-position: -400px -739px;
  }

  .info_list.whitepaper:before {
    width: 51px;
    height: 64px;
    background-position: 0 -805px;
  }

  .info_list.environment:before {
    width: 65px;
    height: 69px;
    background-position: -402px -609px;
  }

  .info_list.transparency:before {
    height: 62px;
    background-position: -331px -609px;
  }

  .info_list.communication:before {
    height: 53px;
    background-position: -254px -679px;
  }

  .info_list.research:before {
    height: 61px;
    background-position: -324px -679px;
  }

  .info_list .info_list_detail {
    font-size: 15px;
    line-height: 26px;
  }

  .info_list .info_list_detail dl:after {
    content: "";
    display: block;
    clear: both;
  }

  .info_list .info_list_detail dt {
    float: left;
  }

  .accreditation .info_list {
    padding-left: 0;
    padding-right: 180px;
  }

  .accreditation .info_list > dl {
    padding: 0;
  }

  .accreditation .info_list:before {
    left: auto;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }

  .accreditation .info_list.accreditation1:before {
    right: 23px;
    width: 114px;
    height: 105px;
    background: url(../../img/ko/value/img_accreditation1.jpg) no-repeat 50%;
    -webkit-background-size: 114px 105px;
    background-size: 114px 105px;
  }

  .accreditation .info_list.accreditation2:before {
    right: 26px;
    width: 108px;
    height: 108px;
    background: url(../../img/ko/value/img_accreditation2.jpg) no-repeat 50%;
    -webkit-background-size: 108px 108px;
    background-size: 108px 108px;
  }

  .accreditation .info_list.accreditation3:before {
    right: 26px;
    width: 108px;
    height: 109px;
    background: url(../../img/ko/value/img_accreditation3.jpg) no-repeat 50%;
    -webkit-background-size: 108px 109px;
    background-size: 108px 109px;
  }

  .accreditation .info_list.accreditation4:before {
    right: 4px;
    width: 153px;
    height: 85px;
    background: url(../../img/ko/value/img_accreditation4.jpg) no-repeat 50%;
    -webkit-background-size: 153px 85px;
    background-size: 153px 85px;
  }

  .accreditation .info_list.accreditation5:before {
    right: 25px;
    width: 109px;
    height: 73px;
    background: url(../../img/ko/value/img_accreditation5.png) no-repeat 50%;
    -webkit-background-size: 109px 73px;
    background-size: 109px 73px;
  }

  .idc_info_container {
    position: relative;
  }

  .idc_info_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .idc_info_list {
    float: left;
    margin-left: 16%;
  }

  .idc_info_list .idc_info_img {
    position: relative;
    width: 100%;
    height: 185px;
    margin-bottom: 19px;
  }

  .idc_info_list .idc_info_img:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .idc_info_list:nth-child(1) {
    width: 21%;
    margin-left: 0;
  }

  .idc_info_list:nth-child(2) {
    width: 22%;
  }

  .idc_info_list:nth-child(3) {
    width: 21.5%;
  }

  .idc_info_list:nth-child(1) .idc_info_img:before {
    width: 220px;
    height: 220px;
    background: url(../../img/ko/value/img_value_icon_idc1.gif) no-repeat 50%;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .idc_info_list:nth-child(2) .idc_info_img:before {
    width: 234px;
    height: 210px;
    background: url(../../img/ko/value/img_value_icon_idc2.gif) no-repeat 50%;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .idc_info_list:nth-child(3) .idc_info_img:before {
    width: 225px;
    height: 210px;
    background: url(../../img/ko/value/img_value_icon_idc3.gif) no-repeat 50%;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .idc_info_list .idc_info_text {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
    text-align: center;
    line-height: 24px;
  }

  .spot_container {
    position: absolute;
    left: 50%;
    top: 0;
    z-index: 999;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100%;
    max-width: 1120px;
    height: 100%;
  }

  .spot_container .spot_logo {
    position: absolute;
    left: 0;
    bottom: 30px;
  }

  .spot_container .project_container {
    position: absolute;
    right: 0;
    bottom: 30px;
    font-size: 0;
  }

  .spot_container .project_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .spot_container .project_container.connect_container {
    bottom: 15px;
  }

  .spot.happybean .spot_logo {
    width: 106px;
    height: 36px;
    background: url(../../img/ko/value/sp_value.png) no-repeat;
    -webkit-background-size: 300px 244px;
    background-size: 300px 244px;
    background-position: 0 0;
  }

  .spot.culture .spot_logo {
    width: 105px;
    height: 53px;
    background: url(../../img/ko/value/sp_culture_logo.png) no-repeat 0 0;
    -webkit-background-size: 110px 150px;
    background-size: 110px 150px;
  }

  .spot.culture .project_list {
    margin-left: 17px;
    background: url(../../img/ko/value/sp_culture_logo.png) no-repeat;
    -webkit-background-size: 110px 150px;
    background-size: 110px 150px;
  }

  .spot.culture .project_list.onstage {
    width: 93px;
    height: 21px;
    background-position: 0 -55px;
  }

  .spot.culture .project_list.lecture {
    width: 70px;
    height: 24px;
    background-position: 0 -78px;
  }

  .spot.culture .project_list.hangeul {
    width: 90px;
    height: 32px;
    background-position: 0 -104px;
  }

  .spot.connect .spot_logo {
    width: 258px;
    height: 21px;
    background: url(../../img/ko/value/sp_logo.png) no-repeat;
    -webkit-background-size: 298px 323px;
    background-size: 298px 323px;
    background-position: -20px -130px;
  }

  .project_list {
    display: inline-block;
    vertical-align: middle;
    margin-left: 20px;
    background: url(../../img/ko/value/sp_value.png) no-repeat;
    -webkit-background-size: 300px 244px;
    background-size: 300px 244px;
  }

  .project_list:first-child {
    margin-left: 0;
  }

  .project_list.artist {
    width: 103px;
    height: 14px;
    background-position: 0 -113px;
  }

  .project_list.software {
    width: 106px;
    height: 34px;
    background: url(../../img/ko/value/sp_logo.png) no-repeat;
    -webkit-background-size: 298px 323px;
    background-size: 298px 323px;
    background-position: -20px -191px;
    vertical-align: top;
  }

  .project_list.entry {
    width: 86px;
    height: 16px;
    background: url(../../img/ko/value/sp_logo.png) no-repeat;
    -webkit-background-size: 298px 323px;
    background-size: 298px 323px;
    background-position: -20px -74px;
    vertical-align: top;
  }

  .project_list.boostcamp {
    width: 98px;
    height: 38px;
    background: url(../../img/ko/value/sp_logo.png) no-repeat;
    -webkit-background-size: 298px 323px;
    background-size: 298px 323px;
    background-position: -20px -265px;
    vertical-align: top;
    margin-top: -21px;
  }

  .project_list.edwith {
    width: 59px;
    height: 14px;
    background: url(../../img/ko/value/sp_logo.png) no-repeat;
    -webkit-background-size: 298px 323px;
    background-size: 298px 323px;
    background-position: -20px -20px;
    vertical-align: top;
  }

  .col_box:after {
    content: "";
    display: block;
    clear: both;
  }

  .col_box .col:first-child {
    padding-right: 30px;
  }

  .col_box .col:last-child {
    padding-left: 30px;
  }

  .col {
    float: left;
    width: 50%;
    font-size: 15px;
    line-height: 1.8;
    color: #606167;
  }

  .col:after {
    content: "";
    display: block;
    clear: both;
  }

  .col .btn_link_large {
    float: right;
    margin-top: 24px;
  }

  .text_section {
    line-height: 27px;
    letter-spacing: -0.2px;
  }

  .text_section + .text_section {
    margin-top: 27px;
  }

  .info_img_box {
    max-width: 880px;
    margin: 80px auto 136px;
  }

  .info_img_box img {
    width: 100%;
  }

  .foundation_service h4 {
    margin-bottom: 6px;
    padding-bottom: 17px;
    border-bottom: 2px solid #333;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #212121;
    line-height: 32px;
    letter-spacing: -0.7px;
  }

  .foundation_service.type2 {
    border-top: 2px solid #333;
  }

  .foundation_service.type2 h4 {
    border-bottom: 0;
  }

  .foundation_service.type2 .foundation_service_list {
    margin-top: 34px;
  }

  .foundation_service.type2 .foundation_service_list:nth-child(2) a:before {
    display: none;
  }

  .foundation_service.type2 .foundation_service_list:last-child a {
    padding-right: 0;
  }

  .foundation_service_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .foundation_service_list {
    float: left;
    position: relative;
    width: 25%;
    margin-top: 26px;
  }

  .foundation_service_list:first-child > a {
    padding-left: 0;
  }

  .foundation_service_list:first-child > a:before {
    display: none;
  }

  .foundation_service_list > a {
    display: block;
    position: relative;
    width: 100%;
    padding: 0 24px 0 25px;
  }

  .foundation_service_list > a:before {
    content: "";
    position: absolute;
    left: 0;
    top: 7px;
    width: 1px;
    height: 91%;
    background-color: #efefef;
  }

  .foundation_service_list h5 {
    margin-bottom: 8px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
    line-height: 32px;
  }

  .foundation_service_list p {
    margin-bottom: 9px;
    font-size: 15px;
    line-height: 1.8;
    color: #606167;
  }

  .foundation_service_list:hover .btn_link {
    text-decoration: underline;
  }

  .foundation_service_list:hover .btn_link:after {
    background-position: -104px -68px;
  }

  .connect_service_list {
    float: left;
    position: relative;
    width: 33.333%;
    padding: 0 30px;
  }

  .connect_service_list:first-child {
    padding-left: 0;
  }

  .connect_service_list:first-child:before {
    display: none;
  }

  .connect_service_list:before {
    content: "";
    position: absolute;
    left: 0;
    top: 33px;
    width: 1px;
    height: 65%;
    background-color: #efefef;
  }

  .connect_service_list h5 {
    margin: 30px 0 17px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
    line-height: 1.6;
  }

  .connect_service_list .btn_link {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #606167;
  }

  .connect_service_list .btn_link:nth-child(2) {
    margin-right: 20px;
  }

  .connect_service_list .btn_link.keep {
    white-space: nowrap;
  }

  .connect_service_list span {
    color: #606167;
  }

  .list_type {
    position: relative;
    float: left;
    padding: 0 30px;
    color: #212121;
    font-family: "NanumSquare-B";
    font-size: 15px;
    letter-spacing: -0.5px;
  }

  .list_type:first-child {
    width: 17%;
    padding-left: 0;
  }

  .list_type:nth-child(2) {
    width: 21%;
  }

  .list_type:nth-child(3) {
    width: 23%;
  }

  .list_type:nth-child(4) {
    width: 24.5%;
  }

  .list_type:last-child {
    width: 14.5%;
    padding-right: 0;
  }

  .list_type:not(:first-child):before {
    content: "";
    position: absolute;
    left: 0;
    top: 38px;
    bottom: 0;
    width: 1px;
    background-color: #efefef;
  }

  .list_type dt {
    display: block;
    margin: 37px 0 14px;
    line-height: 1.6;
  }

  .list_type dd {
    margin-bottom: 3px;
  }

  .list_type dd:last-of-type {
    margin-bottom: 0;
    color: #606167;
    font-family: NanumSquare;
    line-height: 1.7;
  }

  .underline:before,
  .underline:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .underline.bt_24:before,
  .underline.bt_24:after {
    bottom: 24px;
  }

  .underline.bt_20:before,
  .underline.bt_20:after {
    bottom: 20px;
  }

  .underline.bt_30:before,
  .underline.bt_30:after {
    bottom: 24px;
  }

  .underline:before {
    background-color: #333;
  }

  .underline:after {
    background-color: #00c73c;
  }

  .line_box {
    position: relative;
  }

  .line_box .input_text:hover + .underline:before,
  .line_box .text_box:hover + .underline:before,
  .line_box .btn_select:hover + .underline:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .line_box .input_text:focus + .underline:after,
  .line_box .text_box:focus + .underline:after {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .error_box {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    -webkit-transform: translate(-50%, -100%);
    transform: translate(-50%, -100%);
    text-align: center;
  }

  .error_box .icon_error {
    display: block;
    width: 95px;
    height: 77px;
    margin: 0 auto 36px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: 0 -875px;
  }

  .error_box .error_text {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 18px;
    color: #212121;
    line-height: 1.6;
  }

  .investment .spot {
    position: relative;
  }

  .investment .content_container {
    margin-top: 80px;
  }

  .investment .content_container.detail {
    margin-top: 60px;
    margin-bottom: 90px;
  }

  .investment .content_box {
    position: relative;
    margin-top: 70px;
  }

  .investment .btn_area {
    margin-top: 55px;
  }

  .investment .btn_area.align_right {
    margin-top: 24px;
  }

  .investment .btn_area.align_right:after {
    content: "";
    display: block;
    clear: both;
  }

  .investment .btn_area.align_right .btn_link_large {
    float: right;
  }

  .investment .ir_register .btn_area {
    margin-top: 100px;
  }

  .investment .ir_register .subscript {
    position: absolute;
    right: 0;
    top: -12px;
    font-size: 15px;
    color: #606167;
  }

  .investment .ir_register .subscript p:before {
    top: 4px;
  }

  .investment .report_wrap {
    position: relative;
  }

  .investment .report_wrap .util_box {
    position: absolute;
    right: 0;
    top: 94px;
  }

  .investment .report_wrap .util_item a {
    padding-right: 0;
    padding-left: 25px;
  }

  .investment .report_wrap .util_item a:before {
    right: auto;
    left: 0;
  }

  .investment .report_wrap_title {
    border-bottom: 2px solid #333;
  }

  .table_title {
    font-size: 20px;
  }

  .unit {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 14px;
    color: #333;
  }

  .text_right {
    text-align: right;
  }

  .total {
    font-size: 20px;
  }

  .investors_table {
    width: 100%;
    table-layout: fixed;
    text-align: left;
    line-height: 1.8;
  }

  .investors_table tbody tr:first-child td,
  .investors_table tbody tr:first-child .body_hd {
    border-color: #333;
  }

  .investors_table th {
    padding: 14px 0;
    border-top: 2px solid #333;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
    text-align: left;
  }

  .investors_table th.text_right {
    text-align: right;
  }

  .investors_table td {
    padding: 14px 0;
    border-top: 1px solid #e8e8e8;
  }

  .investors_table .body_hd {
    border-top: 1px solid #e8e8e8;
    letter-spacing: -0.45px;
  }

  .investors_table tfoot td {
    border-top: 1px solid #333;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .investors_table .unit {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 11px;
  }

  .investors_table.bt0 th {
    border-top: 0;
  }

  .investors_table .util_box .util_item a {
    display: inline-block;
    padding-right: 0;
    padding-left: 25px;
  }

  .investors_table .util_box .util_item a:before {
    right: auto;
    left: 0;
    top: 4px;
  }

  .investors_table.mt20 {
    margin-top: 20px;
  }

  .investors_table .one_character {
    padding-right: 8px;
  }

  .investors_table.type2 .th_pl8,
  .investors_table.type2 .td_pl8 {
    padding-left: 8px;
  }

  .investors_table.type2 .name {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .investors_table.type2 .name,
  .investors_table.type2 .position {
    vertical-align: top;
  }

  .investors_table.type2 tbody tr:last-child th,
  .investors_table.type2 tbody tr:last-child td {
    border-bottom: 1px solid #e8e8e8;
  }

  .investors_table.type2 .title {
    display: block;
    color: #212121;
  }

  .investors_table.type2 .date {
    font-size: 14px;
  }

  .investors_table.type2 .bg_blue {
    background-color: #f8f9fa;
  }

  .investors_table.type2 .pl30 {
    padding-left: 30px;
  }

  .investors_table.type2 .pl37 {
    padding-left: 37px;
  }

  .investors_table.type2 .pl50 {
    padding-left: 50px;
  }

  .investors_table.type2 .pl66 {
    padding-left: 66px;
  }

  .investors_table.type2 .pr20 {
    padding-right: 20px;
  }

  .investors_table.type2 .pr30 {
    padding-right: 30px;
  }

  .investors_table.type2 .pr40 {
    padding-right: 40px;
  }

  .career_list {
    position: relative;
    padding-left: 8px;
  }

  .career_list:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 2px;
    height: 2px;
    margin-top: -2px;
    background-color: #00c73c;
  }

  .career_list strong {
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .content_box_left.quick {
    position: absolute;
    width: auto;
  }

  .content_box_left.quick.fixed {
    position: fixed;
    top: 150px;
  }

  .charter .content_box {
    position: relative;
  }

  .charter .content_box .content_box_left > li {
    margin-bottom: 21px;
  }

  .charter .content_box_right {
    margin-left: 23.5%;
  }

  .charter .btn_area {
    margin-top: 0;
  }

  .charter .subscript {
    margin-top: 0;
    margin-bottom: 12px;
  }

  .article {
    position: relative;
    padding: 30px 0 74px;
    border-top: 1px solid #e8e8e8;
  }

  .article:first-child {
    border-top: 2px solid #333;
  }

  .article .article_container {
    overflow: hidden;
  }

  .article.s1 .article_container {
    height: 480px;
  }

  .article.s2 .article_container {
    height: 495px;
  }

  .article.s3 .article_container {
    height: 425px;
  }

  .article.s4 .article_container {
    height: 475px;
  }

  .article.s5 .article_container {
    height: 545px;
  }

  .article.s6 .article_container {
    height: 475px;
  }

  .article.s7 {
    border-bottom: 1px solid #e8e8e8;
  }

  .article.s7 .article_container {
    height: 495px;
  }

  .article_list {
    margin-bottom: 23px;
  }

  .article_list:after {
    content: "";
    display: block;
    clear: both;
  }

  .article_list:last-child {
    margin-bottom: 7px;
  }

  .article_list.dual_writing {
    color: #999;
  }

  .article_list.dual_writing dt {
    color: #999;
  }

  .article_list dt,
  .article_list dd {
    line-height: 1.8;
  }

  .article_list dt {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .detail_box {
    padding-left: 30px;
  }

  .detail_list:after {
    content: "";
    display: block;
    clear: both;
  }

  .detail_list .num {
    float: left;
    width: 22px;
    margin: 0 20px 0 0;
    text-align: right;
  }

  .detail_list .text {
    overflow: hidden;
  }

  .additional_list dt,
  .additional_list dd {
    line-height: 1.8;
  }

  .additional_list dt {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .affiliate_box {
    position: absolute;
    right: 30px;
    top: 74px;
  }

  .affiliate_box .btn_affiliate {
    position: relative;
    padding-right: 26px;
  }

  .affiliate_box .btn_affiliate:before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 16px;
    height: 16px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -222px -26px;
  }

  .btn_more.type2[aria-expanded="true"] ~ .article_container {
    height: auto;
  }

  .affiliate_list {
    display: none;
    position: absolute;
    left: -81px;
    bottom: 0;
    width: 200px;
    padding: 27px 0 25px;
    border: 1px solid #dfe0e1;
    background-color: #fff;
    text-align: left;
  }

  .affiliate_item {
    margin-top: 13px;
  }

  .affiliate_item:first-child {
    margin-top: 0;
  }

  .affiliate_item > a {
    display: block;
    width: 100%;
    padding: 0 24px;
    color: #878890;
  }

  .affiliate_item > a span {
    position: relative;
  }

  .affiliate_item > a span:before {
    display: none;
    content: "";
    position: absolute;
    right: -24px;
    top: -2px;
    width: 18px;
    height: 18px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -104px -68px;
  }

  .affiliate_item > a:hover,
  .affiliate_item > a:focus {
    color: #00b843;
  }

  .affiliate_item > a:hover span:before,
  .affiliate_item > a:focus span:before {
    display: block;
  }

  .btn_affiliate[aria-expanded="true"] ~ .affiliate_list {
    display: block;
  }

  .subscript {
    margin-top: 12px;
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 14px;
    color: #878890;
    text-align: right;
  }

  .subscript p {
    display: inline-block;
    position: relative;
    padding-left: 10px;
  }

  .subscript p:before {
    content: "";
    position: absolute;
    left: 0;
    top: 3px;
    width: 2px;
    height: 10px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -122px -45px;
  }

  .subscript p span:first-child {
    position: relative;
    padding-right: 20px;
  }

  .subscript p span:first-child:before {
    content: "";
    position: absolute;
    right: 9px;
    top: 3px;
    width: 1px;
    height: 10px;
    background-color: #dfe0e1;
  }

  .subscript.info {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .subscript.info:before {
    right: 191px;
  }

  .subscript.info a {
    color: #878890;
  }

  .subscript.info a:hover,
  .subscript.info a:focus {
    color: #00c73c;
    text-decoration: underline;
  }

  .subscript.pdf {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .util_wrap {
    position: absolute;
    right: 0;
    top: -30px;
  }

  .util_box:after {
    content: "";
    display: block;
    clear: both;
  }

  .util_box .util_item {
    float: left;
    margin-left: 26px;
  }

  .util_box .util_item:first-child {
    margin-left: 0;
  }

  .util_box .util_item a {
    position: relative;
    padding-right: 25px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #212121;
  }

  .util_box .util_item a:before {
    content: "";
    position: absolute;
    right: 0;
    top: -1px;
    width: 18px;
    height: 18px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .util_box .util_item.link a:before {
    background-position: -59px 0;
  }

  .util_box .util_item.download a:before {
    background-position: -242px -26px;
  }

  .util_box .util_item a:hover,
  .util_box .util_item a:focus {
    text-decoration: underline;
  }

  .util_box .util_item.link a:hover:before,
  .util_box .util_item.link a:focus:before {
    background-position: -104px -68px;
  }

  .util_box .util_item.download a:hover:before,
  .util_box .util_item.download a:focus:before {
    background-position: -264px -26px;
  }

  .util_box .util_item.only_icon {
    float: none;
  }

  .util_box .util_item.only_icon a {
    width: 100%;
    height: 27px;
    padding-left: 0;
    vertical-align: middle;
  }

  .util_box.type2 .util_item a:first-child {
    margin-right: 16px;
  }

  .figure {
    position: relative;
    padding-left: 18px;
  }

  .figure:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 8px;
    height: 5px;
    margin-top: -3px;
  }

  .figure.type2:before {
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -287px -27px;
  }

  .figure.type5:before {
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -287px -38px;
  }

  .figure.type1:before,
  .figure.type4:before {
    width: 8px;
    height: 10px;
    margin-top: -5px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .figure.type1:before {
    background-position: -331px -22px;
  }

  .figure.type4:before {
    background-position: -331px -38px;
  }

  .pagination {
    margin-top: 20px;
    font-size: 0;
    text-align: center;
  }

  .pagination:after {
    content: "";
    display: block;
    clear: both;
  }

  .pagination .paging_num {
    display: inline-block;
    vertical-align: middle;
    margin: 0 10px 0;
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 14px;
    color: #878890;
  }

  .pagination .paging_num:hover,
  .pagination .paging_num:focus {
    color: #64656b;
  }

  .pagination strong.paging_num {
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #64656b;
  }

  .pagination .pagination_prev,
  .pagination .pagination_next {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 38px;
    height: 38px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .pagination .pagination_prev {
    margin-left: 10px;
    margin-right: 25px;
    background-position: -48px -1162px;
  }

  .pagination .pagination_prev.first {
    margin-left: 0;
    margin-right: 0;
    background-position: 0 -1162px;
  }

  .pagination .pagination_next {
    margin-left: 25px;
    margin-right: 10px;
    background-position: -96px -1162px;
  }

  .pagination .pagination_next.last {
    margin-left: 0;
    margin-right: 0;
    background-position: -144px -1162px;
  }

  .table_wrap.scroll {
    overflow: hidden;
    overflow-x: auto;
  }

  .table_wrap.scroll table {
    min-width: 76.5%;
  }

  .graph_container {
    margin-bottom: 60px;
    border-top: 2px solid #333;
  }

  .graph_container img {
    width: 100%;
  }

  .stock_info {
    overflow-x: auto;
  }

  .stock_info_container {
    min-width: 857px;
  }

  .stock_info_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .stock_info_top {
    padding: 30px 0;
    border-top: 2px solid #333;
    border-bottom: 2px solid #333;
  }

  .stock_info_top:after {
    content: "";
    display: block;
    clear: both;
  }

  .stock_info_top .top_left {
    float: left;
    width: 50%;
  }

  .stock_info_top .top_left:after {
    content: "";
    display: block;
    clear: both;
  }

  .stock_info_top .top_left .price {
    float: left;
    width: 204px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 36px;
    color: #212121;
  }

  .stock_info_top .top_left .price .figure {
    padding: 0 26px 0 0;
  }

  .stock_info_top .top_left .price .figure:before {
    left: auto;
    right: 0;
    width: 15px;
    height: 9px;
  }

  .stock_info_top .top_left .price .figure.type2:before {
    background-position: -299px -23px;
  }

  .stock_info_top .top_left .price .figure.type5:before {
    background-position: -299px -38px;
  }

  .stock_info_top .top_left .price .figure.type1:before,
  .stock_info_top .top_left .price .figure.type4:before {
    width: 13px;
    height: 17px;
    margin-top: -8px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .stock_info_top .top_left .price .figure.type1:before {
    background-position: -342px -22px;
  }

  .stock_info_top .top_left .price .figure.type4:before {
    background-position: -358px -22px;
  }

  .stock_info_top .top_left .detail {
    float: left;
    position: relative;
    padding-left: 24px;
  }

  .stock_info_top .top_left .detail:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: #e4e4e4;
  }

  .stock_info_top .top_left .detail dl:first-child {
    margin-bottom: 16px;
  }

  .stock_info_top .top_left .detail dl:first-child dt {
    padding-right: 16px;
  }

  .stock_info_top .top_left dt,
  .stock_info_top .top_left dd {
    display: table-cell;
    line-height: 15px;
  }

  .stock_info_top .top_left dt {
    padding-right: 30px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .stock_info_top .top_right {
    float: left;
    width: 50%;
  }

  .stock_info_top .top_right:after {
    content: "";
    display: block;
    clear: both;
  }

  .stock_info_top .top_right .top_right_container {
    float: right;
    width: 100%;
  }

  .stock_info_top .top_right .top_right_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .stock_info_top .top_right dl {
    float: left;
    width: 25%;
    line-height: 15px;
    text-align: right;
  }

  .stock_info_top .top_right dt {
    margin-bottom: 16px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #212121;
    text-align: right;
  }

  .stock_info_top .top_right dd {
    color: #606167;
  }

  .stock_info_left {
    float: left;
    width: calc(50% - 25px);
  }

  .stock_info_right {
    float: right;
    width: calc(50% - 25px);
  }

  .stock_info_right:after {
    content: "";
    display: block;
    clear: both;
  }

  .stock_info_right .table.half {
    float: left;
    width: 50%;
  }

  .table.stock thead tr {
    border-top: 0;
    border-bottom: 1px solid #333;
  }

  .table.stock thead th,
  .table.stock thead td {
    border-bottom: 1px solid #333;
  }

  .table.stock tbody tr {
    border-top: 0;
  }

  .table.stock tbody th {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #606167;
  }

  .table.stock tfoot tr {
    border-top: 0;
  }

  .table.stock tfoot td {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .table.stock .bb {
    border-bottom: 1px solid #333;
  }

  .investment.quarter .content_container,
  .investment.year .content_container {
    margin-top: 20px;
  }

  .investment.quarter .content_container .content_box:first-child,
  .investment.year .content_container .content_box:first-child {
    margin-top: 40px;
  }

  .content_container.finances {
    position: relative;
  }

  .content_container.finances .unit {
    color: #878890;
  }

  .content_container.finances .br {
    border-right: 1px solid #e4e4e4;
  }

  .content_container.finances .investors_table tbody tr:first-child th {
    border-top: 1px solid #333;
  }

  .content_container.finances .investors_table tbody th {
    border-top: 0;
    border-bottom: 1px solid #e8e8e8;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #606167;
  }

  .content_container.finances .investors_table tfoot th {
    border-top: 1px solid #333;
  }

  .content_container.finances
    .investors_table.table_total
    tbody
    tr:last-child
    th,
  .content_container.finances
    .investors_table.table_total
    tbody
    tr:last-child
    td {
    border-bottom: 1px solid #333;
  }

  .content_container.finances .line_box .select_box {
    margin: 0 auto;
  }

  .down_pdf {
    display: inline-block;
    position: relative;
    padding-left: 23px;
    font-size: 14px;
    color: #333;
    text-decoration: underline;
  }

  .down_pdf:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -227px -129px;
  }

  .ir_guide {
    margin-bottom: 15px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #333;
  }

  .ir_guide_container {
    padding: 30px 0;
    border-top: 2px solid #333;
    text-align: center;
  }

  .ir_guide_list {
    display: inline-block;
    position: relative;
    padding-right: 100px;
    padding-left: 68px;
    font-size: 15px;
    color: #333;
    text-align: left;
    line-height: 1.6;
  }

  .ir_guide_list:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 46px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .ir_guide_list.calendar:before {
    background-position: -375px -877px;
  }

  .ir_guide_list.register:before {
    background-position: -426px -877px;
  }

  .ir_guide_list.company:before {
    width: 52px;
    background-position: -422px -926px;
  }

  .ir_guide_list.calendar:after,
  .ir_guide_list.register:after {
    content: "";
    position: absolute;
    right: 20px;
    top: 17px;
    width: 21px;
    height: 13px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -120px -26px;
  }

  .ir_guide_list.company {
    padding-right: 0;
    padding-left: 70px;
  }

  .ir_guide_list .num {
    display: block;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .content_box.meeting_calendar {
    margin-top: 40px;
  }

  .content_box.meeting_calendar:after {
    content: "";
    display: block;
    clear: both;
  }

  .content_box.meeting_calendar .btn_link {
    float: right;
    margin-top: 14px;
  }

  .content_box.meeting_calendar .btn_link:after {
    top: 1px;
  }

  .month {
    padding: 14px 0;
  }

  .month:after {
    content: "";
    display: block;
    clear: both;
  }

  .month p {
    float: left;
    margin-top: 10px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #333;
  }

  .month .btn_wrap {
    float: right;
    margin-right: 0;
  }

  .month .prev,
  .month .next {
    float: left;
    display: block;
    position: relative;
    width: 46px;
    height: 46px;
    background-color: #fff;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    -webkit-transition: background-color 0.2s;
    transition: background-color 0.2s;
  }

  .month .prev:hover,
  .month .prev:focus,
  .month .next:hover,
  .month .next:focus {
    background-color: #f1f3f5;
  }

  .month .prev:before,
  .month .next:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 16px;
    height: 14px;
    margin: -7px 0 0 -8px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .month .prev {
    margin-right: 18px;
  }

  .month .prev:before {
    background-position: -328px 0;
  }

  .month .next:before {
    background-position: -347px 0;
  }

  .calendar_table .table th {
    font-size: 14px;
  }

  .calendar_table .table tbody tr:first-child {
    border-top: 0;
  }

  .calendar_table .holiday {
    color: #f65846;
  }

  .calendar_cell {
    position: relative;
    height: 145px;
    padding: 45px 0 12px;
  }

  .calendar_cell .day {
    position: absolute;
    left: 0;
    top: 16px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 12px;
    color: #606167;
  }

  .calendar_cell .day.holiday {
    color: #f65846;
  }

  .state_list {
    margin-bottom: 1px;
  }

  .state_list .state {
    font-size: 14px;
    color: #333;
  }

  .state_list .state.disable {
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #878890;
  }

  .state_list .state.disable span {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    border-color: #cfcfd3;
  }

  .state_list .state span {
    display: inline-block;
    width: 34px;
    height: 18px;
    margin-right: 4px;
    padding-top: 1px;
    border: 1px solid #858585;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    font-size: 12px;
    text-align: center;
  }

  .state_list .state a {
    color: #333;
  }

  .state_list .state a:hover,
  .state_list .state afocus {
    text-decoration: underline;
  }

  .calendar_guide {
    float: left;
    position: relative;
    margin-top: 14px;
    padding-left: 15px;
  }

  .calendar_guide:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 10px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -122px -45px;
  }

  .calendar_guide:after {
    content: "";
    display: block;
    clear: both;
  }

  .calendar_guide .state_list {
    float: left;
    margin-left: 20px;
  }

  .calendar_guide .state_list:first-child {
    margin-left: 0;
  }

  .calendar_guide .state {
    color: #606167;
  }

  .calendar_guide .state span {
    color: #333;
  }

  .register_wrap {
    position: relative;
  }

  .register_wrap h4 {
    display: inline-block;
    position: relative;
    margin-bottom: 15px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #333;
    line-height: 27px;
    letter-spacing: -0.2px;
  }

  .register_wrap h4 button {
    padding-right: 27px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
  }

  .register_wrap h4 button:before {
    content: "";
    position: absolute;
    right: 0;
    top: 3px;
    width: 18px;
    height: 18px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -246px -129px;
  }

  .register_wrap .agree_box {
    position: absolute;
    right: 0;
    top: 2px;
    margin: 0;
  }

  .register_table tbody .register_td {
    padding-top: 20px;
  }

  .register_table tbody tr:first-child .register_td {
    padding-top: 0;
  }

  .register_box,
  .register_table {
    width: 100%;
    padding-top: 14px;
    border-top: 2px solid #333;
  }

  .register_box:after,
  .register_table:after {
    content: "";
    display: block;
    clear: both;
  }

  .register_box .input_text,
  .register_table .input_text {
    display: block;
    position: relative;
    width: 100%;
    height: 55px;
    border-bottom: 1px solid #dce0e6;
    font-size: 15px;
    color: #333;
    line-height: 55px;
  }

  .register_box .btn_select,
  .register_table .btn_select {
    line-height: 57px;
  }

  .register_box .btn_del:after,
  .register_table .btn_del:after {
    margin-top: 0px;
    margin-right: 10px;
    background-position: -267px -129px;
  }

  .register_group {
    float: left;
    display: block;
    position: relative;
  }

  .register_group.date {
    float: none;
    display: block;
    width: 30.7%;
  }

  .register_group.time {
    width: 30.7%;
    margin-top: 10px;
  }

  .register_group.company {
    width: 30.7%;
  }

  .register_group.name {
    width: calc(33.3% - 30px);
    margin-top: 10px;
    margin-left: 30px;
  }

  .register_group.name .register_input {
    padding-left: 102px;
  }

  .register_group.position {
    width: calc(33.3% - 30px);
    margin-top: 10px;
    margin-left: 30px;
  }

  .register_group.position .register_input {
    padding-left: 98px;
  }

  .register_group.email {
    width: calc(64% + 30px);
  }

  .register_group.email .line_box {
    margin-right: 30px;
  }

  .register_group.tel {
    width: calc(33.3% - 30px);
  }

  .register_group.tel .register_input {
    padding-left: 98px;
  }

  .register_group.type {
    width: calc(33.3% - 30px);
    margin-top: 10px;
    margin-left: 30px;
  }

  .register_group.type .register_input {
    padding-left: 102px;
  }

  .register_group.type.detail {
    width: calc(33.3% - 30px);
    margin-top: 10px;
    margin-left: 30px;
  }

  .register_group.type.detail .register_input {
    padding-left: 98px;
  }

  .register_group.company2 {
    width: 45.4%;
  }

  .register_group.company2 .register_input {
    padding-left: 125px;
  }

  .register_group.nation {
    width: calc(25.9% - 40px);
    margin-left: 40px;
  }

  .register_group.nation .register_input {
    padding-left: 45px;
  }

  .register_group.company,
  .register_group.name,
  .register_group.position,
  .register_group.email,
  .register_group.tel {
    margin-top: 10px;
  }

  .register_title {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-51%);
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
  }

  .register_input {
    width: 100%;
    padding-left: 63px;
  }

  .register_input:after {
    content: "";
    display: block;
    clear: both;
  }

  .register_input .line_box:after {
    content: "";
    display: block;
    clear: both;
  }

  .register_th {
    height: 56px;
    padding-right: 25px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
    text-align: left;
  }

  .register_th:nth-child(6) {
    padding-right: 0;
  }

  .register_td {
    padding-right: 25px;
    text-align: left;
  }

  .register_td:nth-child(6) {
    padding-right: 0;
  }

  .register_td .input_text {
    height: 56px;
  }

  .ir_register .input_text,
  .ir_register .btn_select,
  .ir_register .select_menu .select_item {
    font-size: 12px;
  }

  .content_box.accompany {
    margin-top: 0;
  }

  .content_box.accompany .content_box_right {
    float: right;
  }

  .content_box.accompany .visitor_info {
    margin-top: 0;
    border-top: 0;
  }

  .content_box.accompany .register_group.name {
    width: 24.7%;
  }

  .content_box.accompany .register_group.company2 {
    width: calc(45.4% - 45px);
    margin-left: 40px;
  }

  .content_box.accompany .register_group.position {
    width: calc(29.9% - 35px);
  }

  .content_box.accompany .register_group.tel {
    width: 42.4%;
    margin-left: 0;
  }

  .content_box.accompany .register_group.email {
    width: calc(57.6% - 40px);
  }

  .content_box.accompany .btn_del:after {
    margin-top: -37px;
  }

  .btn_add {
    display: inline-block;
    position: relative;
    margin-top: 20px;
    padding-left: 34px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
  }

  .btn_add:before {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    width: 18px;
    height: 18px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -246px -129px;
  }

  .latest_area {
    padding-top: 17px;
    border-top: 2px solid #333;
  }

  .latest_area:after {
    content: "";
    display: block;
    clear: both;
  }

  .latest_area .latest_title {
    float: left;
    margin-top: 9px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    color: #00b843;
  }

  .latest_area .btn_area {
    float: right;
    margin-top: 0;
  }

  .latest_area .btn_link_large {
    margin-left: 14px;
  }

  .latest_area .btn_link_large:first-child,
  .latest_area .btn_link_large:first-child .btn_text {
    margin-left: 0;
  }

  .latest_area .btn_link_large .btn_text {
    font-size: 16px;
  }

  .faq_area {
    border-top: 2px solid #333;
    border-bottom: 1px solid #333;
  }

  .faq_list {
    padding: 24px 0 23px;
    border-top: 1px solid #e8e8e8;
  }

  .faq_list:first-child {
    border-top: 0;
  }

  .faq_title {
    margin-bottom: 12px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 18px;
    color: #212121;
  }

  .faq_title:after {
    content: "";
    display: block;
    clear: both;
  }

  .faq_title .icon_q {
    float: left;
    margin: -3px 15px 0 0;
    font-size: 20px;
    color: #00c73c;
  }

  .faq_title p {
    overflow: hidden;
  }

  .faq_text {
    padding-left: 35px;
    line-height: 1.8;
  }

  .faq_text .text_line {
    word-break: normal;
  }

  .content_container.settlement .line_box .select_box {
    margin: 0 auto;
  }

  .content_container.settlement .unit {
    color: #878890;
  }

  .content_container.settlement .investors_table tbody tr:first-child th {
    border-top: 1px solid #333;
  }

  .content_container.settlement .investors_table tbody th {
    border-top: 0;
    border-bottom: 1px solid #e8e8e8;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #606167;
  }

  .content_container.settlement .investors_table .dark {
    color: #333;
  }

  .investors_table.type2.half .col2,
  .investors_table.type2.half .col4 {
    text-align: right;
  }

  .investors_table.type2.half .col2 {
    padding-right: 30px;
    border-right: 1px solid #e8e8e8;
  }

  .investors_table.type2.half .col3 {
    border-left: 1px solid #e8e8e8;
  }

  .investors_table.type2.half .total,
  .investors_table.type2.half .total_num {
    color: #333;
  }

  .investors_table.type2.half .total {
    font-size: 20px;
  }

  .investors_table.type2.half .total_num {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
    line-height: 30px;
  }

  .investors_table.type2.half .th_title {
    border-bottom: 1px solid #333;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .investors_table.type2.half .bt0 {
    border-top: 0;
  }

  .investors_table.type2.half .bb0 {
    border-bottom: 0;
  }

  .investors_table.type2.half .bb1 {
    border-bottom: 1px solid #333;
  }

  .table_notice {
    padding: 10px 0 25px;
  }

  .table_notice .notice_text {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 14px;
    color: #878890;
    text-align: left;
  }

  .table_notice .notice_text strong {
    display: block;
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #333;
  }

  .table_notice p {
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    text-align: right;
    line-height: 1.6;
  }

  .table_notice p strong {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .table_notice .date {
    display: block;
    margin-top: 14px;
  }

  .table_notice.type2 {
    padding-bottom: 0;
    border-top: 1px solid #333;
  }

  .main_slide {
    overflow: hidden;
    position: relative;
  }

  .main_slide .slide {
    width: 500%;
  }

  .main_slide .slide:after {
    content: "";
    display: block;
    clear: both;
  }

  .main_slide .slide .slide_item {
    width: 20%;
  }

  .main_slide .slide .slide_item img {
    width: 100%;
  }

  .main_slide .slide .slide_item .slide_video {
    position: relative;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .main_slide .slide_info_container {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .main_slide .slide_info_box {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
  }

  .main_slide .slide_logo {
    position: absolute;
    right: 160px;
    width: 190px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .main_slide .slide_logo.smartlens {
    bottom: 78px;
    height: 36px;
    background-position: 0 -1063px;
  }

  .main_slide .slide_logo.flower {
    bottom: 60px;
    height: 53px;
    background-position: -143px -1101px;
  }

  .main_slide .slide_logo.spacegreen {
    bottom: 70px;
    width: 134px;
    height: 50px;
    background-position: 0 -1104px;
  }

  .main_slide .slide_logo.labs {
    bottom: 70px;
    width: 194px;
    height: 20px;
    background-position: 0px -1240px;
  }

  .main_slide .slide_logo.cloudplatform {
    bottom: 103px;
    width: 345px;
    height: 29px;
    background-position: 0 -1204px;
  }

  .main_slide .slide_logo.gak {
    bottom: 76px;
    width: 228px;
    height: 38px;
    background-position: -208px -1239px;
  }

  .main_slide .slide_logo.clova {
    bottom: 78px;
    width: 239px;
    height: 33px;
    background-position: -209px -1282px;
  }

  .main_slide .slide_logo.naver {
    bottom: 75px;
    width: 136px;
    height: 25px;
    background-position: -202px -1064px;
  }

  .main_slide .slide_logo.clova_dubbing {
    bottom: 78px;
    width: 251px;
    height: 32px;
    background-position: 0 -1318px;
  }

  .main_slide .slide_text_box {
    position: absolute;
    left: 160px;
    bottom: 157px;
  }

  .main_slide .slide_title {
    margin-bottom: 32px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 36px;
    line-height: 46px;
  }

  .main_slide .slide_title strong {
    display: table-cell;
    vertical-align: middle;
    height: 92px;
    font-size: 36px;
    line-height: 46px;
    letter-spacing: -1px;
  }

  .main_slide .slide_text {
    font-size: 15px;
    line-height: 1.6;
  }

  .main_slide .slide_text span {
    display: table-cell;
    vertical-align: middle;
    height: 48px;
  }

  .main_slide .slide_text span em {
    display: inline-block;
    vertical-align: top;
    margin: 0 3px;
  }

  .main_slide .slide_progressbar {
    position: absolute;
    left: 160px;
    bottom: 221px;
    width: calc(100% - 320px);
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
  }

  .main_slide .slide_progressbar .fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 1px;
    background-color: #fff;
    -webkit-transition: width 0.3s;
    transition: width 0.3s;
  }

  .main_slide .slide_paging {
    position: absolute;
    left: 160px;
    bottom: 114px;
    font-size: 12px;
    color: #fff;
  }

  .main_slide .slide_paging:after {
    content: "";
    display: block;
    clear: both;
  }

  .main_slide .slide_paging .current {
    float: left;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .main_slide .slide_paging .total {
    float: left;
    position: relative;
    padding-left: 14px;
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 12px;
  }

  .main_slide .slide_paging .total:before {
    content: "";
    position: absolute;
    left: 7px;
    top: 50%;
    width: 1px;
    height: 8px;
    margin-top: -5px;
    background-color: #d6d6d5;
  }

  .main_slide .btn_prev,
  .main_slide .btn_next {
    position: absolute;
    bottom: 198px;
    width: 46px;
    height: 46px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    opacity: 0.8;
    filter: alpha(opacity=80);
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .main_slide .btn_prev:hover,
  .main_slide .btn_prev:focus,
  .main_slide .btn_next:hover,
  .main_slide .btn_next:focus {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .main_slide .btn_prev {
    left: 85px;
    background-position: -296px -99px;
  }

  .main_slide .btn_next {
    right: 85px;
    background-position: -346px -99px;
  }

  .main_content {
    max-width: 100%;
    padding: 0 150px 120px;
  }

  .content_summary {
    margin-top: 69px;
  }

  .content_summary:after {
    content: "";
    display: block;
    clear: both;
  }

  .summary_container {
    float: left;
    width: 26.6%;
    padding-left: 50px;
    padding-right: 50px;
  }

  .summary_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .summary_container:first-child {
    padding-left: 0;
  }

  .summary_container:nth-child(4) {
    width: 20.2%;
    padding-right: 0;
  }

  .summary_title {
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 14px;
    color: #212121;
  }

  .news_box {
    width: 100%;
    height: 76px;
    margin: 31px 0 30px;
  }

  .news_box a:hover .news_title,
  .news_box a:focus .news_title {
    text-decoration: underline;
  }

  .news_title {
    display: block;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 16px;
    color: #333;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .news_text {
    height: 44px;
    margin-top: 10px;
    font-size: 15px;
    color: #878890;
    line-height: 1.6;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    word-break: break-all;
    -webkit-line-clamp: 2;
  }

  .career_text {
    height: 76px;
    margin: 31px 0 30px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 18px;
    color: #333;
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    word-break: break-all;
    -webkit-line-clamp: 3;
  }

  .summary_link {
    position: relative;
    padding-right: 32px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #333;
  }

  .summary_link .icon_arrow {
    display: block;
    position: absolute;
    right: 0;
    top: -1px;
    width: 18px;
    height: 18px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
  }

  .summary_link .icon_arrow:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 5px;
    height: 8px;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -102px -50px;
  }

  .summary_link:hover,
  .summary_link:focus {
    text-decoration: underline;
  }

  .summary_link:hover .icon_arrow,
  .summary_link:focus .icon_arrow {
    background-color: #00c73c;
  }

  .summary_link:hover .icon_arrow:before,
  .summary_link:focus .icon_arrow:before {
    width: 6px;
    height: 10px;
    margin-left: 1px;
    background-position: -108px -49px;
  }

  .summary_container {
    position: relative;
  }

  .summary_container:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: #efefef;
  }

  .summary_container:first-child:before {
    display: none;
  }

  .summary_stock .stock_info_box {
    height: 76px;
    margin: 23px 0 38px;
    color: #333;
  }

  .summary_stock .stock_info_box .stock_price_box {
    position: relative;
    padding-bottom: 7px;
  }

  .summary_stock .stock_info_box .stock_price_box:after {
    content: "";
    display: block;
    clear: both;
  }

  .summary_stock .stock_info_box .stock_price_box:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #333;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1),
      -webkit-transform 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .summary_stock .stock_info_box .stock_price_box.on:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .summary_stock .stock_info_box .price {
    float: left;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 36px;
    letter-spacing: -1.7px;
  }

  .summary_stock .stock_info_box .unit {
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 12px;
  }

  .summary_stock .stock_info_box .figure {
    float: right;
    margin-top: 23px;
  }

  .summary_stock .stock_info_box .figure.type2:before,
  .summary_stock .stock_info_box .figure.type5:before {
    width: 10px;
    height: 6px;
  }

  .summary_stock .stock_info_box .figure.type2:before {
    background-position: -318px -26px;
  }

  .summary_stock .stock_info_box .figure.type5:before {
    background-position: -318px -38px;
  }

  .summary_stock .stock_info_box .figure.type1:before,
  .summary_stock .stock_info_box .figure.type4:before {
    width: 8px;
    height: 10px;
    margin-top: -6px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .summary_stock .stock_info_box .figure.type1:before {
    background-position: -331px -22px;
  }

  .summary_stock .stock_info_box .figure.type4:before {
    background-position: -331px -38px;
  }

  .summary_stock .stock_info_box .date {
    margin-top: 12px;
    font-family: "NanumSquare-L", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 12px;
    color: #878890;
    text-align: right;
  }

  .content_service {
    margin-top: 98px;
  }

  .service_list_container {
    font-size: 0;
  }

  .service_thumbnail_box {
    overflow: hidden;
    display: inline-block;
    position: relative;
    width: 33.4%;
    padding-top: 25%;
    background: no-repeat 50%;
    -webkit-background-size: cover;
    background-size: cover;
    cursor: pointer;
  }

  .service_thumbnail_box:hover .thumbnail_dimmed {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .service_thumbnail_box:hover .thumbnail_dimmed dl {
    bottom: 30px;
  }

  .service_thumbnail_box:nth-child(2),
  .service_thumbnail_box:nth-child(5),
  .service_thumbnail_box:nth-child(8) {
    width: 33.2%;
  }

  .thumbnail_dimmed {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(58, 62, 80, 0.5);
    font-size: 15px;
    opacity: 0;
    filter: alpha(opacity=0);
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }

  .thumbnail_dimmed dl {
    position: absolute;
    left: 0px;
    bottom: -103px;
    width: 100%;
    padding-top: 50px;
    padding-left: 30px;
    color: #fff;
    -webkit-transition: bottom 0.3s;
    transition: bottom 0.3s;
  }

  .thumbnail_dimmed dl:before {
    content: "";
    position: absolute;
    left: 30px;
    top: 0;
    width: 23px;
    height: 23px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -199px -129px;
  }

  .thumbnail_dimmed dl dt {
    margin-bottom: 2px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 22px;
  }

  .thumbnail_dimmed dl dd {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .thumbnail_dimmed:focus {
    opacity: 1;
    filter: alpha(opacity=100);
  }

  .thumbnail_dimmed:focus dl {
    bottom: 30px;
  }

  .content_support {
    margin-top: 112px;
    text-align: center;
  }

  .support_title {
    margin-bottom: 17px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 32px;
    color: #212121;
  }

  .support_text {
    margin-bottom: 134px;
    font-size: 18px;
    color: #333;
    line-height: 1.6;
  }

  .support_list_container {
    max-width: 1360px;
    margin: 0 auto;
  }

  .support_list_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .support_list_box {
    float: left;
    position: relative;
    width: 25%;
  }

  .support_list_box:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 215px;
    background-color: #efefef;
  }

  .support_list_box:first-child:before {
    display: none;
  }

  .support_list_box a {
    display: block;
    position: relative;
    width: 100%;
    padding: 135px 10px 0;
  }

  .support_list_box a:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    height: 100px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
  }

  .support_list_box a.creators:before {
    width: 87px;
    background-position: 0 -957px;
  }

  .support_list_box a.business:before {
    width: 101px;
    background-position: -92px -957px;
  }

  .support_list_box a.developers:before {
    width: 110px;
    height: 95px;
    background-position: -199px -957px;
  }

  .support_list_box a.flower:before {
    width: 93px;
    background-position: -316px -957px;
  }

  .support_list_box a:hover dt,
  .support_list_box a:focus dt {
    text-decoration: underline;
  }

  .support_list_box dt {
    margin-bottom: 10px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 16px;
    color: #00b843;
  }

  .support_list_box dd {
    font-size: 15px;
    color: #878890;
    line-height: 1.6;
  }

  .content_container.policy {
    max-width: 1000px;
    margin-top: 0;
  }

  .policy_info_area {
    background-color: #f8f9fa;
  }

  .policy_info_container {
    max-width: 1120px;
    margin: 0 auto;
    padding: 28px 0;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
  }

  .policy_info_container:after {
    content: "";
    display: block;
    clear: both;
  }

  .policy_info_container p {
    float: left;
    position: relative;
    padding-left: 20px;
    color: #606167;
  }

  .policy_info_container .icon_now {
    display: none;
    position: absolute;
    left: 0;
    top: 6px;
    width: 7px;
    height: 7px;
    background: url(../../img/ko/sprite.png) no-repeat;
    -webkit-background-size: 474px 1500px;
    background-size: 474px 1500px;
    background-position: -138px -45px;
  }

  .policy_info_container a {
    float: right;
    position: relative;
    padding-right: 30px;
    color: #bac2cd;
  }

  .policy_info_container a .btn_line {
    display: block;
    position: absolute;
    right: 2px;
    top: 9px;
    width: 16px;
    height: 2px;
    background-color: #bac2cd;
  }

  .policy_info_container a .btn_line:before,
  .policy_info_container a .btn_line:after {
    content: "";
    position: absolute;
    right: 0;
    top: -5px;
    width: 16px;
    height: 2px;
    background-color: #bac2cd;
  }

  .policy_info_container a .btn_line:after {
    top: 5px;
  }

  .policy_info_top {
    padding-bottom: 76px;
    border-bottom: 1px solid #333;
    font-size: 15px;
    color: #212121;
  }

  .policy_info_top:after {
    content: "";
    display: block;
    clear: both;
  }

  .policy_info_top .prev {
    float: right;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    color: #212121;
  }

  .policy_info_top .prev:hover,
  .policy_info_top .prev:focus {
    text-decoration: underline;
  }

  .policy_info_top .policy_text {
    margin-bottom: 48px;
    color: #333;
    clear: both;
  }

  .policy_info_top.video .contents_group {
    width: 45%;
  }

  .policy_title {
    float: left;
    margin-bottom: 21px;
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 20px;
  }

  .policy_title .version {
    font-family: "NanumSquare", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 12px;
    color: #878890;
  }

  .contents_group {
    float: left;
    width: 33.333%;
  }

  .contents_list {
    margin-top: 10px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
  }

  .contents_list:first-child {
    margin-top: 0;
  }

  .contents_list .list {
    color: #212121;
  }

  .contents_list .list:hover,
  .contents_list .list:focus {
    text-decoration: underline;
  }

  .list_box {
    padding-top: 38px;
    padding-bottom: 33px;
    border-bottom: 1px solid #dce0e6;
  }

  .list_box:first-child {
    padding-top: 28px;
  }

  .list_box h4 {
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
  }

  .list_box p {
    margin-top: 21px;
    font-size: 15px;
    color: #606167;
    line-height: 1.7;
  }

  .list_box .policy_link {
    color: #606167;
  }

  .list_box .policy_link:hover,
  .list_box .policy_link:focus {
    text-decoration: underline;
  }

  .list_box .depth {
    padding-left: 60px;
  }

  .list_box .depth strong {
    display: block;
    color: #212121;
  }

  .policy_table_wrap {
    width: 100%;
    margin-top: 32px;
    padding: 0 60px;
  }

  .policy_table {
    width: 100%;
  }

  .policy_table th {
    padding: 15px 0;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    border-left: 1px solid #d3d3d3;
    background-color: #f6f6f6;
    font-size: 15px;
    color: #212121;
  }

  .policy_table th:first-child {
    padding-left: 60px;
    border-left: 0;
  }

  .policy_table th:nth-child(2) {
    padding-left: 50px;
  }

  .policy_table th:nth-child(3) {
    padding-left: 53px;
  }

  .policy_table td {
    padding: 20px 0;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    border-left: 1px solid #d3d3d3;
    background-color: #fcfcfc;
    color: #606167;
  }

  .policy_table td:first-child {
    padding-left: 60px;
    border-left: 0;
  }

  .policy_table td:nth-child(2) {
    padding-left: 50px;
  }

  .policy_table td:nth-child(3) {
    padding-left: 53px;
  }

  .policy_table td dl {
    margin-top: 3px;
    font-size: 0;
  }

  .policy_table td dl:first-child {
    margin-top: 0;
  }

  .policy_table td dt,
  .policy_table td dd {
    display: inline-block;
    font-size: 15px;
  }

  .policy_table td dt {
    margin-right: 20px;
    color: #212121;
  }

  .policy_table td dd {
    color: #606167;
  }

  .policy_table td dd a {
    color: #606167;
  }

  .policy_table td dd a:hover,
  .policy_table td dd a:focus {
    text-decoration: underline;
  }

  .policy_table.type2 th,
  .policy_table.type2 td {
    padding-left: 60px;
  }

  .policy_list {
    position: relative;
    padding: 66px 70px 30px 0;
    border-bottom: 1px solid #efefef;
  }

  .policy_list > a:hover .policy_list_title {
    text-decoration: underline;
  }

  .policy_list:last-child {
    margin-bottom: 60px;
  }

  .policy_list .policy_list_title {
    margin-bottom: 2px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 22px;
    color: #212121;
    line-height: 36px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .policy_list .policy_regist_info {
    position: absolute;
    right: 0;
    top: 76px;
    font-size: 12px;
    color: #878890;
  }

  .policy_list .icon_now {
    top: 48px;
  }

  .content_container.detail {
    margin-top: 0;
  }

  .content_container.detail .policy_info_top {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .content_container.detail .policy_info_top .policy_text {
    line-height: 1.7;
  }

  .content_container.detail .list_box {
    border-bottom: 0;
  }

  .content_container.detail .list_box h5 {
    font-family: "NanumSquare-EB", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
  }

  .content_container.detail .list_box p {
    color: #878890;
  }

  .content_container.detail .list_box p strong,
  .content_container.detail .list_box p em {
    color: #212121;
  }

  .content_container.detail .list_box:first-child {
    padding-top: 0;
  }

  .content_container.detail .list_box:last-child {
    padding-bottom: 95px;
  }

  .content_container.detail .policy_table_wrap {
    padding: 0;
  }

  .content_container.detail .policy_table th,
  .content_container.detail .policy_table td {
    vertical-align: top;
    padding: 15px 35px;
  }

  .content_container.detail .policy_table th {
    padding-left: 60px;
  }

  .content_container.detail .policy_table td {
    padding-bottom: 0;
  }

  .content_container.detail .policy_table td p {
    margin-top: 0;
    margin-bottom: 15px;
  }

  .content_container.detail .policy_table td dt,
  .content_container.detail .policy_table td dd {
    display: block;
  }

  .content_container.detail .policy_link {
    display: inline-block;
    margin-top: 45px;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 15px;
    color: #212121;
  }

  .content_container.detail .policy_table .table_depth th,
  .content_container.detail .policy_table .table_depth td {
    vertical-align: middle;
    padding: 15px 25px;
  }

  .content_container.detail .change_title,
  .content_container.detail .change_text,
  .content_container.detail .manager_box {
    padding-left: 25px;
  }

  .content_container.detail .manager_box {
    margin-bottom: 25px;
  }

  .content_container.detail .manager_box .change_title {
    margin-bottom: 10px;
    padding-top: 10px;
    padding-left: 0;
  }

  .content_container.detail .manager_box dt,
  .content_container.detail .manager_box dd {
    line-height: 1.6;
  }

  .content_container.detail .manager_box dd {
    color: #878890;
  }

  .content_container.detail .manager_box dd strong {
    color: #3c3c3c;
  }

  .content_container.detail .del {
    color: #ff001e;
  }

  .content_container.detail .del.type2 {
    text-decoration: line-through;
  }

  .content_container.detail .add {
    color: #0e00ff;
  }

  .content_container.detail .add.type2 {
    text-decoration: underline;
  }

  .policy_detail_title {
    margin-bottom: 73px;
    padding-bottom: 20px;
    border-bottom: 2px solid #333;
    font-family: "NanumSquare-B", "나눔고딕", "Dotum", "돋움", "Helvetica",
      "Arial", "AppleSDGothicNeo", sans-serif;
    font-size: 26px;
    color: #212121;
    text-align: center;
  }

  .policy_detail_title .date {
    font-size: 14px;
  }

  .table_depth {
    width: 100%;
    margin-bottom: 10px;
  }

  .table_depth th,
  .table_depth td {
    padding-bottom: 20px;
    border: 1px solid #d3d3d3;
    background-color: #fff;
  }

  .table_depth th:first-child,
  .table_depth td:first-child {
    padding-left: 20px;
    border-left: 1px solid #d3d3d3;
  }

  .table_depth th:nth-child(2),
  .table_depth td:nth-child(2) {
    padding-left: 20px;
  }

  .table_depth th {
    color: #3c3c3c;
  }

  .table_depth td {
    padding: 20px 0;
    color: #878890;
  }

  footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #f8f9fa;
  }

  .footer_wrap {
    position: relative;
    max-width: 1600px;
    margin: 0 auto;
    padding: 74px 0 70px;
    text-align: center;
  }

  .footer_wrap:after {
    content: "";
    display: block;
    clear: both;
  }

  .footer_wrap .footer_copy {
    margin: 0 auto;
    width: 337px;
    height: 16px;
    font-size: 0;
    line-height: 0;
    text-indent: -999px;
    background: url(../../img/ko/footer_copy.png) no-repeat;
    overflow: hidden;
  }

  .footer_wrap .footer_logo {
    position: absolute;
    left: 30px;
    top: 76px;
    width: 63px;
    height: 13px;
    margin: 0 auto;
    background: url(../../img/ko/footer_logo.png) no-repeat;
    -webkit-background-size: 63px 13px;
    background-size: 63px 13px;
  }

  .footer_menu {
    position: absolute;
    left: 105px;
    top: 74px;
    font-size: 0;
  }

  .footer_menu > li {
    display: inline-block;
    position: relative;
    margin: 0 10px;
    font-size: 14px;
  }

  .footer_menu > li:before {
    content: "";
    position: absolute;
    left: -10px;
    top: 3px;
    width: 1px;
    height: 12px;
    background-color: #dfe0e1;
  }

  .footer_menu > li:first-child:before {
    display: none;
  }

  .footer_menu .footer_menu_item {
    color: #878890;
  }

  @media only screen and (max-width: 1600px) {
    .summary_container {
      padding-left: 20px;
      padding-right: 20px;
    }
    .summary_container .break {
      display: none;
    }
    .channel_container.icon,
    .promotion .content_container.tv {
      max-width: 100%;
      padding: 0 160px;
    }
    .channel_container.icon {
      padding-top: 38px;
      padding-bottom: 55px;
    }
    .pop.v3 .pop_slide_info h3 {
      max-width: 500px;
    }
    .spot_container {
      max-width: 100%;
      padding: 0 160px;
    }
    .spot_container .spot_logo {
      left: 160px;
    }
    .spot_container .project_container {
      right: 160px;
    }
    .spot_slide .btn_prev {
      right: 226px;
    }
    .spot_slide .btn_next {
      right: 160px;
    }
    .slide_info .slide_info_text {
      padding-right: 312px;
    }
    .content_container.library .content_box_left {
      word-break: keep-all;
    }
  }

  @media only screen and (max-width: 1440px) {
    .summary_stock .stock_info_box .price {
      font-size: 28px;
    }
    .summary_stock .stock_info_box .figure {
      margin-top: 15px;
    }
    .service .util_list.login,
    .service .util_list.deview {
      clear: both;
    }
    .service .util_list.login.clear {
      clear: none;
    }
    .report_list:nth-child(3n) {
      margin-right: 0;
    }
    .pop.v3 .pop_slide_info h3 {
      max-width: 395px;
    }
    .text_line {
      display: inline;
    }
    .value
      .content_container.privacy
      .content_box_right.type2
      .content_box_text,
    .value
      .content_container.accreditation
      .content_box_right.type2
      .content_box_text {
      display: inline;
    }
  }

  @media only screen and (max-width: 1438px) {
    .service_item_line {
      display: none;
    }
  }

  @media only screen and (max-width: 1372px) {
    .underline.bt_30:before,
    .underline.bt_30:after {
      bottom: 44px;
    }
  }

  @media only screen and (max-width: 1280px) {
    .value .content_container.flower .info_img_box {
      width: 100%;
    }
    .value .content_container.flower .info_img_box img {
      width: 100%;
    }
    .file_box .guide_message {
      white-space: normal;
    }
    .service .util_list.talk {
      clear: both;
    }
    .pop.v3 .pop_slide_info h3 {
      max-width: 320px;
    }
    .break {
      display: none;
    }
  }

  @media only screen and (max-width: 1186px) {
    .table_br {
      display: none;
    }
  }

  @media only screen and (max-width: 1200px) {
    .footer_wrap .footer_copy {
      margin-left: 423px;
    }
  }

  @media only screen and (max-height: 930px) {
    .header_up {
      top: -280px;
    }
  }

  @media only screen and (max-height: 800px) {
    .header_up {
      top: -380px;
    }
  }

  /*# sourceMappingURL=maps/navercorp.css.map */
`;

export default HelpIntroduce;
