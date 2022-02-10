import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const TagConv = styled(Box)`
  padding: 1rem 0;
  width: 100%;
  display: inline-block;
  float: left;
  color: #b69775;
  font-weight: bold;

  & span {
    border: 1px solid #b69775;
    border-radius: 1rem;
    margin: 5px;
    float: left;
    padding: 0.25rem 0.7rem;
    font-size: 0.8rem;
    text-align: center;
    vertical-align: center;
  }

  & span:hover {
    background-color: #b69775;
    color: #ffffff;
  }
`;
