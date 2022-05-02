import styled from "@emotion/styled";

export const SignupContainer = styled("div")`
  display: flex;
  padding: 1rem;
  // width: 100%;

  & .label {
    font-family: paybooc-Bold;
    font-size: 1rem;
    align-self: center;
    // width: 200px;
    @media screen and (max-width: 900px) {
      width: 130px;
    }
    @media screen and (min-width: 900px) {
      width: 200px;
    }
  }

  & .textInput {
    // width: 400px;
    @media screen and (max-width: 900px) {
      width: 240px;
    }
    @media screen and (min-width: 900px) {
      width: 400px;
    }
    height: 40px;
  }

  & .btn {
    margin-left: 1rem;
    color: #ffffff;
  }
`;
