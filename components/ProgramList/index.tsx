import Program from "@components/Program";
import { Grid } from "@mui/material";
import React from "react";

const programs = [
  { user: "a", title: "통영 여행", tags: ["남해안", "낭만"] },
  { user: "a", title: "제주도 여행", tags: ["제주도", "바다"] },
  { user: "a", title: "통영 여행", tags: ["남해안", "낭만"] },
  {
    user: "b",
    title: "제주도 여행",
    tags: ["제주도", "바다", "시원", "a", "b", "c", "d", "r"],
  },
  {
    user: "a",
    title:
      "긴 이름입니다.긴 이름입니다.긴 이름입니다.긴 이름입니다.긴 이름입니다.긴 이름입니다.",
    tags: ["남해안", "낭만"],
  },
  { user: "c", title: "", tags: ["제주도", "바다"] },
  { user: "d", title: "시험", tags: ["남해안", "낭만"] },
  { user: "e", title: "제주도 여행", tags: ["제주도", "바다"] },
  { user: "f", title: "통영 여행", tags: ["남해안", "낭만"] },
  { user: "g", title: "제주도 여행", tags: ["제주도", "바다"] },
  { user: "q", title: "통영 여행", tags: ["남해안", "낭만"] },
  { user: "q", title: "제주도 여행", tags: ["제주도", "바다"] },
  { user: "q", title: "통영 여행", tags: ["남해안", "낭만"] },
  { user: "w", title: "제주도 여행", tags: ["제주도", "바다"] },
  { user: "w", title: "통영 여행", tags: ["남해안", "낭만"] },
  { user: "w", title: "제주도 여행", tags: ["제주도", "바다"] },
  { user: "r", title: "통영 여행", tags: ["남해안", "낭만"] },
  { user: "t", title: "제주도 여행", tags: ["제주도", "바다"] },
  { user: "z", title: "통영 여행", tags: ["남해안", "낭만"] },
  { user: "c", title: "제주도 여행", tags: ["제주도", "바다"] },
];

const ProgramList = () => {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid justifyContent={"center"} container spacing={1} md={12}>
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

export default ProgramList;
