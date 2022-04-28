import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import Link from "next/link";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "@components/Logo";

const SingupUserTypeBtns = () => {
  return (
    <SignupUserTypeBtnsContainer>
      <div className="logoBox">
        <Logo />
      </div>
      <div className="signupUserTypeBtnsContainerBtns">
        <Link href={{ pathname: "/signup" }} passHref>
          <IconButton className="signupUserTypeBtnsContainerUser signupUserTypeBtnsContainerBtn">
            <PersonIcon />
            <div className="signupUserTypeBtnsContainerTxt">
              개인
              <br /> 회원가입
            </div>
          </IconButton>
        </Link>
        <Link href={{ pathname: "/signup/enter" }} passHref>
          <IconButton className="signupUserTypeBtnsContainerEnti signupUserTypeBtnsContainerBtn">
            <MeetingRoomIcon />
            <div className="signupUserTypeBtnsContainerTxt">
              기업
              <br /> 회원가입
            </div>
          </IconButton>
        </Link>
      </div>
    </SignupUserTypeBtnsContainer>
  );
};

const SignupUserTypeBtnsContainer = styled.div`
  display: block;
  padding: 2rem;
  & .logoBox {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  & .signupUserTypeBtnsContainerBtns {
    display: flex;
    padding: 1rem;
    justify-content: center;

    & .signupUserTypeBtnsContainerBtn {
      display: inline-block;
      height: 10rem;
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
