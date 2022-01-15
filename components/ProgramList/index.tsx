import Program from "@components/Program";
import { Grid } from "@mui/material";
import React, { VFC } from "react";

interface Props {
  src: string;
  user: string;
  title: string;
  tags: string[];
}
const programs = [
  { user: "a", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  { user: "a", title: "제주도 여행", tags: ["제주도", "바다"], src: "" },
  { user: "a", title: "통영 여행", tags: ["남해안", "낭만"], src: "" },
  {
    user: "b",
    title: "제주도 여행",
    tags: ["제주도", "바다", "시원", "a", "b", "c", "d", "r"],
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
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid item xs>
        <Grid
          justifyContent={"center"}
          container
          spacing={1}
          sx={{ flexGrow: 1, alignItems: "stretch" }}
        >
          {programs.map((item, index) => (
            <Program
              key={index}
              src="a"
              user={item.user}
              title={item.title}
              tags={item.tags}
            />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export async function getServerSideProps() {
  const programList: Props[][] = [[], [], []];
  console.warn("start", programList);

  programs.forEach((item, index) => {
    programList[index % 3].push(item);
  });

  return {
    props: {
      programList,
    },
  };
}

export default ProgramList;
