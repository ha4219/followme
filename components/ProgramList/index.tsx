import Program from "@components/Program";
import { Grid } from "@mui/material";
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

const ProgramList: VFC<Props> = ({}) => {
  const [programs, setPrograms] = useState<Props[]>([]);
  useEffect(() => {
    const arr: Props[] = [];
    PROGRAMS.forEach((program) => {
      arr.push({
        ...program,
        tags: program.tags.length > 4 ? program.tags.slice(0, 4) : program.tags,
      });
    });
    setPrograms(arr);
  }, []);
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid item xs>
        <Grid justifyContent={"center"} container spacing={1} minWidth={"md"}>
          {programs?.map((item, index) => (
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
  // TODO fetch data
  const programs: Props[] = [];

  return {
    props: {
      programs,
    },
  };
}

export default ProgramList;
