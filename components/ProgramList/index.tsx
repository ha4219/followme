import Program from "@components/Program";
import RecommendProgram from "@components/recommend/RecommendProgram";
import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import { API } from "@src/API";
import { idState } from "@store/auth";
import {
  domesticState,
  overseasState,
  seasonState,
  tagState,
} from "@store/tag";
import { getRecommendAllBoard } from "api/board";
import { useEffect, useState, VFC } from "react";
import { useRecoilValue } from "recoil";
import { ICourse } from "types/apiType";

const ProgramList: VFC = () => {
  // const [courses, setCourses] = useState<Programs>();
  const [sortedType, setSortedType] = useState(2);
  const [travels, setTravels] = useState<ICourse[]>([]);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const selectedTag = useRecoilValue(tagState);
  const selectedSeason = useRecoilValue(seasonState);
  const selectedDomestic = useRecoilValue(domesticState);
  const selectedOverseas = useRecoilValue(overseasState);
  const loggedInId = useRecoilValue(idState);

  const getTravel = async () => {
    // const { data } = await API.post<ICourse[]>(
    //   "/recommend/recommendBoards",
    //   loggedInId !== "" ? { id: loggedInId } : {}
    // );
    const data = await getRecommendAllBoard({
      id: loggedInId,
    });
    setTravels(
      data.slice(-9).sort((l, r) => {
        if (r.createdAt > l.createdAt) {
          return 1;
        }
        return -1;
      })
    );
    setCourses(
      data.sort((l, r) => {
        if (r.createdAt > l.createdAt) {
          return 1;
        }
        return -1;
      })
    );
  };

  useEffect(() => {
    const arr = [...courses];

    if (sortedType === 0) {
      arr.sort((l, r) => {
        return r.likeCnts - l.likeCnts;
      });
    } else if (sortedType === 1) {
      arr.sort((l, r) => {
        return r.views - l.views;
      });
    } else {
      arr.sort((l, r) => {
        if (r.createdAt > l.createdAt) {
          return 1;
        }
        return -1;
      });
    }

    setCourses(arr);
  }, [sortedType]);

  useEffect(() => {
    let arr = [...travels];

    if (selectedTag !== "") {
      arr = arr.filter((item) => item.tags.includes(selectedTag));
    }
    if (selectedSeason.length) {
      arr = arr.filter((item) => selectedSeason.includes(item.season));
    }
    if (selectedDomestic.length) {
      arr = arr.filter(
        (item) => item.isLocal && selectedDomestic.includes(item.region)
      );
    } else if (selectedOverseas.length) {
      arr = arr.filter(
        (item) => !item.isLocal && selectedOverseas.includes(item.region)
      );
    }
    setCourses(arr);
  }, [selectedTag, selectedSeason, selectedOverseas, selectedDomestic]);

  useEffect(() => {
    getTravel();
  }, []);

  return (
    <Box sx={{ paddingY: 2 }}>
      <HeadContainer>
        <TitleContainer>
          <div className="sub">Recommend Course</div>
          <div className="main">Ulife 추천코스</div>
        </TitleContainer>
        <SortedContainer>
          <CustomButton
            size="small"
            className={sortedType === 0 ? "active" : ""}
            onClick={() => setSortedType(0)}
          >
            추천순
          </CustomButton>
          <CustomButton
            size="small"
            className={sortedType === 1 ? "active" : ""}
            onClick={() => setSortedType(1)}
          >
            인기순
          </CustomButton>
          <CustomButton
            size="small"
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
        {courses?.map((item, index) => (
          <RecommendProgram {...item} key={item.idx} />
        ))}
      </Grid>
    </Box>
  );
};

const TitleContainer = styled.div`
  & .sub {
    color: gray;
  }
  & .main {
    font-family: paybooc-ExtraBold;
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
  height: 30px;
`;

export default ProgramList;
