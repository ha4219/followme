import LeftLayout from "@components/LeftLayout";
import styled from "@emotion/styled";
import { Box, Button, Grid, MenuItem, Pagination, Select } from "@mui/material";
import { idState } from "@store/auth";
import {
  domesticState,
  overseasState,
  seasonState,
  tagState,
} from "@store/tag";
import { getEditorAllBoardById } from "api/board";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState, VFC } from "react";
import { useRecoilValue } from "recoil";
import { ICourse, IMergeCourse } from "types/apiType";
import EditorProgram from "../EditorProgram";

const SORT = [
  { name: "추천순", value: 0 },
  { name: "인기순", value: 1 },
  { name: "최신순", value: 2 },
];

const PAGESIZE = [24, 36, 48];

const EditorProgramList: VFC = () => {
  // const [courses, setCourses] = useState<Programs>();
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(0);
  const [sortedType, setSortedType] = useState(2);
  const [travels, setTravels] = useState<ICourse[]>([]);
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [perPageSize, setPerPageSize] = useState(24);
  const selectedTag = useRecoilValue(tagState);
  const selectedSeason = useRecoilValue(seasonState);
  const selectedDomestic = useRecoilValue(domesticState);
  const selectedOverseas = useRecoilValue(overseasState);
  const loggedInId = useRecoilValue(idState);

  const getTravel = async () => {
    // const { data } = await API.post<ICourse[]>("/theme/themeBoards", {
    //   id: loggedInId,
    // });
    try {
      const tmp: IMergeCourse = await getEditorAllBoardById({
        id: loggedInId,
      });
      const data = [...tmp.recommend, ...tmp.theme];

      setSize(Math.ceil(data.length / perPageSize));
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
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeSortedType = useCallback(
    (e) => {
      setSortedType(e.target.value);
    },
    [sortedType]
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage - 1);
  };

  useEffect(() => {
    setSize(Math.ceil(courses.length / perPageSize));
  }, [perPageSize, courses]);

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

    if (selectedTag !== "ALL" && selectedTag !== "") {
      // arr = arr.filter((item) => item.tags.includes(selectedTag));
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
  }, [
    selectedTag,
    selectedSeason,
    selectedOverseas,
    selectedDomestic,
    travels,
  ]);

  useEffect(() => {
    getTravel();
  }, []);

  return (
    <Box sx={{ paddingY: 2 }}>
      <LeftLayout>
        <HeadContainer>
          <TitleContainer>
            <div className="sub">
              {"Editor's Pick"}
              <span className="orange">{courses.length}</span>개
            </div>
          </TitleContainer>
          <SortedContainer>
            <Select
              disableUnderline
              variant="standard"
              className="editorProgramListSelect"
              value={sortedType}
              onChange={onChangeSortedType}
            >
              {SORT.map((item, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
            <div className="editorProgramListPerPage">
              {PAGESIZE.map((item, index) => (
                <div
                  key={index}
                  className={
                    item === perPageSize
                      ? "editorProgramListPerPageItem active"
                      : "editorProgramListPerPageItem"
                  }
                  onClick={() => setPerPageSize(item)}
                >
                  {item}
                </div>
              ))}
            </div>
            {/* <CustomButton
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
            </CustomButton> */}
          </SortedContainer>
        </HeadContainer>
        <Grid container spacing={2} sx={{ flexGrow: 1 }}>
          {courses
            .slice(page * perPageSize, (page + 1) * perPageSize)
            .map((item, index) => {
              return <EditorProgram key={index} {...item} />;
            })}
        </Grid>
        {/* <RightButton>
          <Button
            variant="contained"
            onClick={() => {
              router.push("/editor/write");
            }}
          >
            글쓰기
          </Button>
        </RightButton> */}
        <EditorProgramListPagination
          className="editorProgramListPagination"
          count={size}
          onChange={handleChangePage}
        />
      </LeftLayout>
    </Box>
  );
};

const TitleContainer = styled.div`
  margin-top: 1rem;
  font-family: paybooc-Light;
  & .sub {
    font-size: 0.8rem;
    color: #000000;
  }
  & .main {
    font-size: 2rem;
    letter-spacing: -1.76px;
  }

  & .orange {
    font-family: paybooc-Bold;
    margin-left: 1rem;
    color: #ff9016;
    font-weight: 300;
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
  font-family: paybooc-Bold;

  & .editorProgramListSelect {
    height: 20px;
    font-size: 0.8rem;
    border: 0;
    padding: 0;
    margin-right: 1rem;

    & div {
      border: 0;
    }
  }

  & .editorProgramListPerPage {
    display: flex;
    font-size: 0.8rem;

    & .editorProgramListPerPageItem {
      margin: 0 0.5rem;
      cursor: pointer;
    }
    & .active {
      border-bottom: 1px solid #000000;
    }
  }
`;

const EditorProgramListPagination = styled(Pagination)`
  & ul {
    justify-content: center;
  }
`;

export default EditorProgramList;
