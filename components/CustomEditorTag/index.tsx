import styled from "@emotion/styled";
import { VFC } from "react";

interface IProps {
  tag: string;
}

const CustomEditorTag: VFC<IProps> = ({ tag }) => {
  return <CustomEditorTagContainer>#{tag}</CustomEditorTagContainer>;
};

const CustomEditorTagContainer = styled.div`
  display: inline-block;
  color: #b69775;
  font-family: paybooc-Bold;
  font-size: 0.8rem;
  padding: 0.2rem;
  margin-right: 5px;
  border: 1px solid #b69775;
  border-radius: 12px;

  :hover {
    background-color: #b69775;
    color: #ffffff;
    cursor: pointer;
  }
`;

export default CustomEditorTag;
