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

interface Program {
  idx: number;
  src: any;
  mainImg: any;
  image: any;
  writer: string;
  title: string;
  content: string;
  tags: string[];
  heartCnt: number;
  views: number;
  sortData: number;
}

interface Programs {
  programs: Program[];
}

const ProgramList: VFC<Programs> = ({ programs }) => {
  // const [courses, setCourses] = useState<Programs>();
  const [sortedType, setSortedType] = useState(0);

  // useEffect(() => {
  //   // const { data } = await API.get("/main/travelBoards", {});
  //   // setCourses(
  //   //   data.map((item) => ({ ...item, sortDate: new Date(item.date).getTime() }))
  //   // );
  //   setCourses(programs);
  // }, []);

  // const doSortedProgram = async () => {
  //   let arr = await [...courses];

  //   if (sortedType === 0) {
  //     arr = await arr.sort((a, b) => b.heartCnt - a.heartCnt);
  //   } else if (sortedType === 1) {
  //     arr = await arr.sort((a, b) => b.views - a.views);
  //   } else {
  //     arr = await arr.sort((a, b) => b.sortDate - a.sortDate);
  //   }

  //   setCourses(arr);
  // }

  // useEffect(() => {
  //   doSortedProgram;();
  // }, [sortedType]);

  return (
    <Box sx={{ paddingY: 2 }}>
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
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {programs?.map((item, index) => (
          <Program
            key={index}
            idx={item.idx}
            src={item.mainImg.data}
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
