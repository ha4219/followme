import Program from "@components/Program";
import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import { API } from "@src/API";
import { useEffect, useState, VFC } from "react";

interface Props {
  src: string;
  user: string;
  title: string;
  tags: string[];
}

const PROGRAMS: Props[] = [
  { user: "a", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  { user: "a", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
  { user: "a", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  {
    user: "b",
    title: "제주도 여행",
    tags: ["제주도", "바다", "시원", "aasdfasfdsafdafs", "b", "c", "d", "r"],
    src: "",
  },
  {
    user: "a",
    title:
      "긴 이름입니다.긴 이름입니다.긴 이름입니다.긴 이름입니다.긴 이름입니다.긴 이름입니다.",
    tags: ["남해안", "낭만"],
    src: "",
  },
  { user: "c", title: "", tags: ["제주도", "바다"], src: "" },
  { user: "d", title: "시험", tags: ["남해안", "낭만"], src: "" },
  { user: "e", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
  { user: "f", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  { user: "g", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
  { user: "q", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  { user: "q", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
  { user: "q", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  { user: "w", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
  { user: "w", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  { user: "w", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
  { user: "r", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  { user: "t", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
  { user: "z", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  { user: "c", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
  { user: "c", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
];

const ProgramList: VFC = ({}) => {
  const [courses, setCourses] = useState([]);
  const [sortedType, setSortedType] = useState(0);

  useEffect(async () => {
    const { data } = await API.get("/main/travelBoards", {});
    setCourses(data);
  }, []);

  useEffect(async () => {
    let arr = await [...courses];
    if (sortedType === 0) {
      arr = await arr.sort((a, b) => b.heartCnt - a.heartCnt);
    } else if (sortedType === 1) {
      arr = await arr.sort((a, b) => b.views - a.views);
    } else {
      arr = await arr.sort((a, b) => b.date - a.date);
    }
    console.log(arr);

    setCourses(arr);
  }, [sortedType]);

  return (
    <Box minWidth="xs">
      <HeadContainer>
        <TitleContainer>
          <div className="sub">Recommend Course</div>
          <div className="main">Ulife 추천코스</div>
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
      {/* <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid item xs> */}
      <Grid container spacing={2} minWidth={"md"} sx={{ flexGrow: 1 }}>
        {courses?.map((item, index) => (
          <Program
            key={index}
            src={item.image}
            user={item.writer}
            title={item.title}
            tags={item.tags}
            content={item.content}
          />
        ))}
      </Grid>
      {/* </Grid>
      </Grid> */}
    </Box>
  );
};

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

export async function getServerSideProps() {
  // TODO fetch data
  const programs: Props[] = [];

  return {
    props: {
      programs,
    },
  };
}

export default ProgramList;
