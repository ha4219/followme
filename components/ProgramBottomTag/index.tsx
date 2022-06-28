import React from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const ProgramBottomTag = ({ tag }) => {
  const router = useRouter();
  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push({
      pathname: "/search",
      query: { value: tag },
    });
  };
  return <BottomTagContainer onClick={onClick}>{tag}</BottomTagContainer>;
};

const BottomTagContainer = styled.span`
  display: inline-block;
  curosr: pointer;
  font-size: 0.8rem;
  line-height: 0.92;
  padding-right: 8px;
`;

export default ProgramBottomTag;
