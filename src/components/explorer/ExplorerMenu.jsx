import React from "react";
import {
  ExplorerContainer,
  ExplorerHeader,
  ExplorerList,
  ExplorerListItem,
  HeaderTitle,
  ExplorerItemContainer,
} from "./explorer_styled";
import { VscEllipsis, VscChevronRight } from "react-icons/vsc";

const ExplorerMenu = () => {
  return (
    <ExplorerContainer>
      <ExplorerHeader>
        <HeaderTitle>EXPLORER</HeaderTitle>
        <VscEllipsis color="#ffffff" size={20}></VscEllipsis>
      </ExplorerHeader>

      <ExplorerItemContainer>
        <VscChevronRight color="#ffffff"></VscChevronRight>
        <ExplorerListItem>OPEN EDITORS</ExplorerListItem>
      </ExplorerItemContainer>
    </ExplorerContainer>
  );
};

export default ExplorerMenu;
