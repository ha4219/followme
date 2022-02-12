import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";
import { useState } from "react";
import MainThemeContent from "../MainThemeContent";

const FAKE = [
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
  {
    title: "통영여행 제목이 들어갈 자리입니다.",
    tags: ["통영1박2일", "광화문갈만한곳", "서울근교", "태국", "3박4일"],
    writer: "dongha",
    content:
      "본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여 본문에 있는 내용 중, 해당 컨텐츠를 잘 설명할 수 있는 핵심 문장을 인용하여",
    heartCnt: 1100,
  },
];

const MainThemeContainer = () => {
  const [sortedType, setSortedType] = useState(0);
  return (
    <MainContainer>
      <HeadContainer>
        <TitleContainer>
          <div className="sub">Theme Tour</div>
          <div className="main">테마여행</div>
        </TitleContainer>
        <SortedContainer>
          <CustomButton
            className={sortedType === 0 ? "active" : ""}
            onClick={() => setSortedType(0)}
          >
            추천순
          </CustomButton>
          <CustomButton
            className={sortedType === 1 ? "active" : ""}
            onClick={() => setSortedType(1)}
          >
            인기순
          </CustomButton>
          <CustomButton
            className={sortedType === 2 ? "active" : ""}
            onClick={() => setSortedType(2)}
          >
            최신순
          </CustomButton>
        </SortedContainer>
      </HeadContainer>

      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {FAKE.map((item, index) => (
          <MainThemeContent
            {...item}
            key={index}
            src={`https://picsum.photos/id/${index}/327/340`}
          />
        ))}
      </Grid>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  padding: 2rem 0;
`;

const TitleContainer = styled.div`
  & .sub {
    color: gray;
  }
  & .main {
    font-size: 2rem;
    letter-spacing: -1.76px;
  }
`;
const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 2.5rem;
`;
const SortedContainer = styled.div`
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

export default MainThemeContainer;
