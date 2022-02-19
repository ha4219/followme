import LeftLayout from "@components/LeftLayout";
import Program from "@components/Program";
import styled from "@emotion/styled";
import { Box, Button, Grid } from "@mui/material";
import { API } from "@src/API";
import {
  domesticState,
  overseasState,
  seasonState,
  tagState,
} from "@store/tag";
import { useEffect, useState, VFC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

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
  shortContent: string;
  tags: string[];
  likeCnts: number;
  views: number;
  createdAt: string;
  region: string;
  sortData: number;
  season: string;
  isLocal: boolean;
}
const RECOMMANDKEYWORD = ["test", "통영", "해돋이", "123"];

const ProgramList: VFC<{ layout?: boolean }> = ({ layout }) => {
  // const [courses, setCourses] = useState<Programs>();
  const [sortedType, setSortedType] = useState(2);
  const [travels, setTravels] = useState<Program[]>([]);
  const [courses, setCourses] = useState<Program[]>([]);
  const selectedTag = useRecoilValue(tagState);
  const selectedSeason = useRecoilValue(seasonState);
  const selectedDomestic = useRecoilValue(domesticState);
  const selectedOverseas = useRecoilValue(overseasState);

  const getTravel = async () => {
    const { data } = await API.get<Program[]>("/main/travelBoards", {
      data: JSON.stringify({
        id: "admin",
      }),
    });
    setTravels(
      data.sort((l, r) => {
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

  if (layout) {
    return (
      <Box sx={{ paddingY: 2 }}>
        <LeftLayout editorTags={RECOMMANDKEYWORD}>
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
            {courses?.map((item, index) => (
              <Program
                key={index}
                idx={item.idx}
                src={item.mainImg.data}
                user={item.writer}
                title={item.title}
                tags={item.tags}
                shortContent={item.shortContent}
              />
            ))}
          </Grid>
          {/* </Grid>
      </Grid> */}
        </LeftLayout>
      </Box>
    );
  }

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
        {courses?.map((item, index) => (
          <Program
            key={index}
            idx={item.idx}
            src={item.mainImg.data}
            user={item.writer}
            title={item.title}
            tags={item.tags}
            shortContent={item.shortContent}
          />
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
