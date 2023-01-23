import Split from "react-split";
import styled from "styled-components";

export const CustomSplit = styled(Split)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${(props) => props.flexDirValue};

  & .gutter:hover {
    cursor: ${(props) =>
      props.flexDirValue === "row" ? "col-resize" : "row-resize"};
  }
`;
