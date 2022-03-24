import TagContainer from "@components/TagContainer";
import { COURSETAGS } from "@data/CourseData";
import styled from "@emotion/styled";
import { Box, Button, TextField } from "@mui/material";
import { tagState } from "@store/tag";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { MainPageSubText, MainPageText1, MainPageText2 } from "@data/mainData";

const MainSearchContaier = () => {
  const router = useRouter();
  const [selectedTag, setSelectedTag] = useRecoilState(tagState);
  const [value, setValue] = useState("");
  const onChangeValue = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );
  const [date, setDate] = useState();
  const onChangeDate = (newValue) => {
    setDate(newValue);
  };

  const onSubmitValue = useCallback(() => {
    // setSelectedTag(value);
    router.push({ pathname: "/search", query: { value: value } });
  }, [value]);

  const onClickTag = useCallback((tag) => {
    // setSelectedTag(tag);
    router.push({ pathname: "/search", query: { value: tag } });
  }, []);

  return (
    <MainContainer>
      <Box className="mainText">
        <div className="mainSubText">
          <div className="mainTxt">{MainPageText1}</div>
          <div className="mainTxt">{MainPageText2}</div>
          <div className="subTxt">{MainPageSubText}</div>
        </div>
      </Box>
      <Box className="sub" sx={{ display: { xs: "none", md: "inline-block" } }}>
        <div className="des">팔로미 여행지 검색</div>
        <div className="inputContainer">
          <div className="input">
            <TextField
              fullWidth
              placeholder="검색어를 입력해주세요."
              value={value}
              onChange={onChangeValue}
            />
          </div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="subContainer">
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={onChangeDate}
                label="여행시작일 선택"
                renderInput={(params) => (
                  <TextField {...params} placeholder="여행도착일 선택" />
                )}
              />
            </div>
            <div className="subContainer">
              <DesktopDatePicker
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={onChangeDate}
                label="여행도착일 선택"
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
          </LocalizationProvider>
          <Button className="btn" onClick={onSubmitValue}>
            검색
          </Button>
        </div>
        <div className="tags">
          <div className="label">#추천 키워드</div>
          {COURSETAGS.map((item, index) => (
            <div key={index} className="tag" onClick={() => onClickTag(item)}>
              #{item}
            </div>
          ))}
        </div>
      </Box>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin-top: 140px;
  min-width: 50%;
  padding-bottom: 5rem;
  text-align: center;

  & .mainText {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    padding-bottom: 2rem;
    color: #ffffff;

    & .mainSubText {
      margin-left: 15%;
      margin-right: auto;
      & .mainTxt {
        font-size: 2.3rem;
        font-weight: bold;
      }

      & .subTxt {
        font-size: 1.3rem;
      }
    }
  }
  & .subContainer {
    margin-left: 0.5rem;
  }

  & .sub {
    padding: 3rem;
    text-align: left;
    background-color: #ffffff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
    border-radius: 20px;
    opacity: 0.95;

    margin-left: auto;
    margin-right: auto;

    & .des {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
    & .inputContainer {
      display: flex;

      & .input {
        width: 560px;
      }
      & .btn {
        color: #ffffff;
        border-radius: 5px;
        margin-left: 1rem;
        background-color: #000000;
      }
    }

    & .tags {
      display: flex;

      padding: 1rem 0;

      & .label {
        // background-color: #000000;
        color: #ffffff;
        padding: 0.2rem 1.5rem;
        border-radius: 0.3rem;
        border-bottom-right-radius: -80px;
        background-image: radial-gradient(
          circle at 160px 28px,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0) 40px,
          #000000 40px
        );
      }

      & .tag {
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        border-radius: 1rem;
        border: 1px solid #000000;
        margin-left: 0.5rem;
        padding: 0.2rem 1rem;

        :hover {
          color: #ffffff;
          background-color: #000000;
          cursor: pointer;
        }
      }
    }
  }
`;

export default MainSearchContaier;
