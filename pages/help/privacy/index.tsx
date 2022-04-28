import HelpLeftLayout from "@components/help/HelpLeftLayout";
import styled from "@emotion/styled";
import { Box, Container, Paper } from "@mui/material";
import Image from "next/image";

const HelpPrivacy = () => {
  return (
    <MainContainer maxWidth="lg">
      <Box className="editorPath" py={1}>
        <div className="MainContainerPathIcon">
          <Image
            src="/icons/icon.home.png"
            width="18px"
            height="18px"
            alt="homeIcon"
          />
        </div>
        <span>
          <span className="MainContainerPathColor">홈</span>
          <span className="dividor">|</span>
          {"개인정보처리방침"}
        </span>
      </Box>

      <Box className="editorTitle">{"개인정보처리방침"}</Box>
      <HelpLeftLayout>
        <MainBContainer>
          네이버 개인정보처리방침 예시입니다.
          <li id="policy1" className="list_box">
            <h4>1. 처리하는 개인정보 항목</h4>
            <p>
              첫째, 회사는 입사지원, 입사와 관련된 문의 응답, 취업보호 대상자의
              확인을 위해 아래와 같은 개인정보를 수집하고 있습니다.
              <br />- 성명, 확인용 비밀번호, 이메일 주소, 전화번호, 생년월일,
              성별, 국적, 학력사항(학교명, 입학/졸업년월, 전공, 세부전공, 성적,
              졸업구분), 경력사항(회사명, 직무, 직위, 부서명, 재직기간/해당하는
              경우), 병역사항(해당하는 경우), 보훈사항(대상인 경우),
              장애사항(대상인 경우), 코딩테스트 결과(대상인 경우), 면접
              결과(대상인 경우), 인성검사 결과(대상인 경우), 자격/어학사항(자격
              종류, 등급, 점수, 취득일/해당하는 경우), 추가 제출자료(해당하는
              경우)
            </p>
            <p>
              둘째, 회사는 제휴제안 접수를 위하여 아래와 같은 개인정보를
              수집하고 있습니다.
              <br />- 회사명, 제안자명, 전화번호, 이메일 주소, 홈페이지
              주소(제안에 필요한 경우), 팩스번호(제안에 필요한 경우)
            </p>
            <p>
              셋째, 회사는 기업윤리상담센터 상담/신고하기 접수를 위하여 아래와
              같은 개인정보를 수집하고 있습니다.
              <br />- 성명, 연락처, 이메일 주소, 처리결과 확인용 비밀번호 (익명
              접수 시에는 비밀번호만 수집합니다.)
            </p>
            <p>
              넷째, 회사는 파트너스 라인 작성 및 분쟁조정 신청을 위하여 아래와
              같은 개인정보를 수집하고 있습니다.
              <br />- 제안자명, 파트너(업체)명, 연락처, 이메일 주소
            </p>
            <p>
              다섯째, 회사는 IR 미팅 접수를 위하여 아래와 같은 개인정보를
              수집하고 있습니다.
              <br />- 신청인 및 방문자(동행인)의 회사명, 이름, 직책, 이메일,
              연락처
            </p>
            <p>
              그리고 서비스 이용과정이나 사업처리 과정에서 아래와 같은 정보들이
              자동으로 생성되어 수집될 수 있습니다.
              <br />- 이용자의 브라우저 종류 및 OS, 방문 기록(IP Address,
              접속시간), 쿠키
            </p>
            <p>
              회사는 홈페이지(
              <a
                href="http://www.navercorp.com"
                className="policy_link"
                target="_blank"
                rel="noreferrer"
              >
                http://www.navercorp.com
              </a>
              ) 웹문서를 통한 사용자 입력 방법으로 개인정보를 수집하며, 경우에
              따라 출력된 형태의 종이문서 혹은 이메일로 일부 정보를 수집할 수도
              있습니다.
            </p>
          </li>
        </MainBContainer>
      </HelpLeftLayout>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  & .searchContainer {
    border-radius: 27px;
  }

  & .MainContainerPathIcon {
    height: 21px;
    margin-right: 6px;
  }
  & .editorPath {
    display: flex;
    font-size: 0.9rem;
    font-family: paybooc-Medium;

    & .MainContainerPathColor {
      color: #888888;
    }
    & .dividor {
      padding: 1rem;
    }
  }
  & .editorTitle {
    font-family: paybooc-Bold;
    font-size: 2rem;
    text-align: center;
    padding-bottom: 2rem;
    border-bottom: 1px solid #000000;
  }
`;

const MainBContainer = styled(Paper)`
  margin: 3rem 0;
`;

export default HelpPrivacy;
