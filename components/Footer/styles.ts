import styled from "@emotion/styled";

export const ContainerFooter = styled.div`
  display: block;
  flex: 1;
  padding: 1rem 0rem;
  padding-bottom: 4rem;
  // background-color: #f8f8fa;
  color: #616161;
  margin-top: 2rem;

  & .nav {
    font-family: paybooc-Bold;
    display: flex;
    align-items: center;
    border-top: 1px solid #e1e2eb;
    border-bottom: 1px solid #e1e2eb;
    padding: 1rem;
    margin-bottom: 1rem;
    & a {
      font-size: 0.9rem;
      // padding-right: 2rem;
    }

    & .dividor {
      padding: 1rem;
    }
  }

  & .help-des {
    display: block;
    font-size: 0.85rem;
    line-height: 2rem;
    font-family: paybooc-Medium;
    & .help-des-between {
      display: flex;
      justify-content: space-between;

      & b {
        font-family: paybooc-Bold;
      }
    }
    & div {
      display: block;
      justify-content: center;
      align-items: center;
    }
  }

  & .any {
    padding-top: 1rem;
    color: #9a9a9a;
  }
`;

export const ItemL = styled.div`
  color: #616161;
  font-size: 0.8rem;

  & .nav {
    & a {
      margin-right: 1rem;
    }
  }

  & .intro-logo {
    vertical-align: top;
    padding: 1rem;
  }

  & .intro {
    & .intro-des {
      padding: 1rem;
      & div {
        display: flex;
        margin: 0.3rem 0;
      }
    }
  }
`;

export const ItemR = styled.div`
  color: #616161;
  font-size: 0.8rem;

  & .help-name {
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
  }

  & .help-number {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }

  & .help-des {
    & .help-des-between {
      display: flex;
      justify-content: space-between;

      & b {
        font-family: paybooc-Bold;
      }
    }
  }

  & .help-icons {
    margin-top: 1rem;
  }
`;
