import React, { useRef, useState } from "react";
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

const ExplorerMenu = ({ setFileSelected }) => {
  const [projectOpened, setProjectOpened] = useState(false);

  const handleClickContainer = () => {
    setProjectOpened(!projectOpened);
  };

  return (
    <ExplorerContainer>
      <ExplorerHeader>
        <HeaderTitle>EXPLORER</HeaderTitle>
        <VscEllipsis color="#ffffff" size={20}></VscEllipsis>
      </ExplorerHeader>

      <ExplorerItemContainer onClick={handleClickContainer}>
        {projectOpened ? (
          <VscChevronDown color="#ffffff"></VscChevronDown>
        ) : (
          <VscChevronRight color="#ffffff"></VscChevronRight>
        )}
        <ExplorerItem>VSCODE-CLONE</ExplorerItem>
      </ExplorerItemContainer>
      {projectOpened ? (
        <ThreeContainer>
          <CustomThree setSelectedFile={setFileSelected()}>
            <CustomThree.Folder name="src">
              <CustomThree.Folder name="components">
                <CustomThree.File
                  selectedFileSetter={setFileSelected()}
                  name="Modal.js"
                />
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
