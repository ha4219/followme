import styled from "@emotion/styled";
import {
  IconButton,
  Checkbox,
  Box,
  Divider,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import Link from "next/link";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "@components/Logo";
import { use } from "@data/use";
import { useState } from "react";
import { privacy } from "@data/privacy";
import { useRouter } from "next/router";

const SingupUserTypeBtns = () => {
  const router = useRouter();
  const [checked, setChecked] = useState([true, true, true]);
  const [typeChecked, setTypeChecked] = useState("person");

  const handleFormat = (
    event: React.MouseEvent<HTMLElement>,
    newFormats: string
  ) => {
    setTypeChecked(newFormats);
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1], checked[2]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[2]]);
  };

  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], checked[1], event.target.checked]);
  };

  const onClick = () => {
    if (typeChecked === "person") {
      router.push("/signup");
    } else {
      router.push("enter");
    }
  };

  return (
    <SignupUserTypeBtnsContainer>
      <ToggleButtonGroup
        exclusive={true}
        value={typeChecked}
        onChange={handleFormat}
        className="signupUserTypeBtnsContainerBtns"
      >
        <ToggleButton
          sx={{
            "&.MuiToggleButtonGroup-grouped": {
              border: "1px solid #000000 !important",
              borderRadius: "10px !important",
            },
          }}
          value="person"
          className="signupUserTypeBtnsContainerUser signupUserTypeBtnsContainerBtn"
        >
          <PersonIcon />
          <div className="signupUserTypeBtnsContainerTxt">
            개인
            <br /> 회원가입
          </div>
        </ToggleButton>

        <ToggleButton
          sx={{
            "&.MuiToggleButtonGroup-grouped": {
              border: "1px solid #000000 !important",
              borderRadius: "10px !important",
            },
          }}
          value="enter"
          className="signupUserTypeBtnsContainerUser signupUserTypeBtnsContainerBtn"
        >
          <MeetingRoomIcon />
          <div className="signupUserTypeBtnsContainerTxt">
            기업
            <br /> 회원가입
          </div>
        </ToggleButton>
      </ToggleButtonGroup>
      <Box py={4} className="signupCenterBoxCenterR">
        <Box px={2} pb={2}>
          <div>
            <div>
              <div className="signupUserTypeBtnsContainerLabel">- 이용약관</div>

              <div className="signupUserTypeBtnsContainerDetail">{use}</div>
            </div>
            <Checkbox checked={checked[0]} onChange={handleChange2} />
            <span>회원약관 (필수)</span>
          </div>
          <div>
            <div>
              <div className="signupUserTypeBtnsContainerLabel">
                - 개인정보 처리방침 (필수)
              </div>

              <div className="signupUserTypeBtnsContainerDetail">{privacy}</div>
            </div>
            <Checkbox checked={checked[1]} onChange={handleChange3} />
            <span>개인정보 처리방침 (필수)</span>
          </div>
          <div>
            <Checkbox checked={checked[2]} onChange={handleChange4} />
            <span>개인정보 제 3자 이용동의 (필수)</span>
          </div>
        </Box>
        <Divider sx={{ borderWidth: 1, borderColor: "#dcdce6" }} />
        <Box mt={2}>
          <Checkbox
            checked={checked[0] && checked[1] && checked[2]}
            // indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
          <span>모든 약관에 동의합니다</span>
        </Box>
      </Box>
      <Box className="signupUserTypeBtnsContainerBtnCenter">
        <Button
          onClick={onClick}
          variant="contained"
          disabled={!(checked[0] && checked[1] && checked[2])}
        >
          다음
        </Button>
      </Box>
    </SignupUserTypeBtnsContainer>
  );
};

const SignupUserTypeBtnsContainer = styled.div`
  display: block;
  padding: 2rem;

  & .signupUserTypeBtnsContainerBtnCenter {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  & .signupUserTypeBtnsContainerLabel {
    margin-bottom: 1rem;
  }
  & .signupUserTypeBtnsContainerDetail {
    overflow: auto;
    height: 200px;
    font-family: paybooc-Medium;
    border: 1px solid black;
    white-space: pre-wrap;
  }
  & .signupUserTypeBtnsContainerBtns {
    display: flex;
    padding: 1rem;
    justify-content: center;

    & .signupUserTypeBtnsContainerBtn {
      display: inline-block;
      height: 7rem;
      width: 10rem;

      border: 1px solid #000000;
      border-radius: 10px;

      margin-right: 1rem;
    }
    & .signupUserTypeBtnsContainerUser {
    }
    & .signupUserTypeBtnsContainerEnti {
    }
  }
`;

export default SingupUserTypeBtns;
