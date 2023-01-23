import React from "react";
import {
  ExplorerContainer,
  ExplorerHeader,
  HeaderTitle,
} from "./explorer_styled";
import { VscEllipsis } from "react-icons/vsc";

const ExplorerMenu = () => {
  return (
    <ExplorerContainer>
      <ExplorerHeader>
        <HeaderTitle>EXPLORER</HeaderTitle>
        <VscEllipsis color="#ffffff" size={20}></VscEllipsis>
      </ExplorerHeader>
    </ExplorerContainer>
  );
};

export default ExplorerMenu;
