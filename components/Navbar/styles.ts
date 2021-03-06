import styled from "@emotion/styled";

export const TopNav = styled.div`
  display: block;
  color: #616161;
  font-size: 0.8rem;
  justify-content: right;
  padding-top: 0.5rem;
  margin-left: auto;

  & .topSub {
    & a {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    & span {
      cursor: pointer;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }
    & .whiteTxt {
      color: #ffffff;
    }
  }

  & .searchField {
  }
`;
