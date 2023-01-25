import React, { useState } from "react";
import {
  ExplorerContainer,
  ExplorerHeader,
  ExplorerItem,
  HeaderTitle,
  ExplorerItemContainer,
  ThreeContainer,
} from "./explorer_styled";
import { VscEllipsis, VscChevronRight, VscChevronDown } from "react-icons/vsc";
import CustomThree from "../three/CustomThree";
import { FilesArray } from "../../data/FileData";
import { GlobalTheme } from "../../theme/GlobalTheme";

const ExplorerMenu = ({ isOpen }) => {
  const [projectOpened, setProjectOpened] = useState(false);

  const handleClickContainer = () => {
    setProjectOpened(!projectOpened);
  };

  return (
    <ExplorerContainer open={isOpen}>
      <ExplorerHeader>
        <HeaderTitle>EXPLORER</HeaderTitle>
        <VscEllipsis color={GlobalTheme.colors.white} size={20}></VscEllipsis>
      </ExplorerHeader>

      <ExplorerItemContainer
        projectOpened={projectOpened}
        onClick={handleClickContainer}
      >
        {projectOpened ? (
          <VscChevronDown color="#ffffff"></VscChevronDown>
        ) : (
          <VscChevronRight color="#ffffff"></VscChevronRight>
        )}
        <ExplorerItem>{FilesArray[0].projectName}</ExplorerItem>
      </ExplorerItemContainer>
      {projectOpened ? (
        <ThreeContainer projectOpened={projectOpened}>
          <CustomThree>
            <CustomThree.Folder name="src">
              <CustomThree.Folder name="components">
                <CustomThree.File name="Modal.js" />
                <CustomThree.File name="Modal.css" />
              </CustomThree.Folder>
              <CustomThree.File name="index.js" />
              <CustomThree.File name="index.html" />
            </CustomThree.Folder>
            <CustomThree.File name="package.json" />
          </CustomThree>
        </ThreeContainer>
      ) : null}
    </ExplorerContainer>
  );
};

export default ExplorerMenu;
