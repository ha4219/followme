import styled from "@emotion/styled";
import { Button } from "@mui/material";
import MainEditorContent from "../MainEditorContent";

const FAKE = [
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    region: "통영시",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 이용자에게 보여줄 수 있습니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    region: "통영시",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 이용자에게 보여줄 수 있습니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    region: "통영시",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 이용자에게 보여줄 수 있습니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    region: "통영시",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 이용자에게 보여줄 수 있습니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    region: "통영시",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 이용자에게 보여줄 수 있습니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    region: "통영시",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 이용자에게 보여줄 수 있습니다.",
    link: "https://www.naver.com/",
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    region: "통영시",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 이용자에게 보여줄 수 있습니다.",
    link: "https://www.naver.com/",
  },
];

const MainEditorPickContainer = () => {
  return (
    <MainContainer>
      <HeadContainer>
        <TitleContainer>
          <div className="sub">{"Editor's Pick"}</div>
          <div className="main">추천 여행지</div>
          <div className="content">간단한 설명이 들어갈 자리입니다.</div>
        </TitleContainer>
        {/* <BtnContainer>
          <CustomButton>{"<"}</CustomButton>
          <CustomButton>{">"}</CustomButton>
        </BtnContainer> */}
      </HeadContainer>
      <BodyContainer>
        {FAKE.map((item, index) => (
          <MainEditorContent
            key={index}
            {...item}
            src={`https://picsum.photos/id/${index}/346/472`}
          />
        ))}
      </BodyContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  background: linear-gradient(0deg, #edeef8 30%, white 30%);
`;

const BodyContainer = styled.div`
  display: -webkit-box;
  overflow-x: auto;
`;

const TitleContainer = styled.div`
  width: 200px;
  & .sub {
    color: gray;
  }
  & .main {
    font-size: 2rem;
    letter-spacing: -1.76px;
    letter-spacing: -0.66px;
  }
  & .content {
    font-size: 0.8rem;
  }
`;
const HeadContainer = styled.div`
  // display: flex;
  display: block;
  // justify-content: space-between;
  // width: 160px;
  padding: 3rem;
  padding-bottom: 2.5rem;
`;
const BtnContainer = styled.div`
  display: flex;
  padding-top: 2rem;

  & .active {
    color: #ffffff;
    background-color: #000000;
  }
`;

const CustomButton = styled(Button)`
  border: 1px solid black;
  margin-left: 5px;
`;

export default MainEditorPickContainer;
