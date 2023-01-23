import React from "react";
import FileThree from "../fileThree/FileThree";
import FolderThree from "../folderThree/FolderThree";
import { StyledThree } from "./custom_three_styled";

const CustomThree = ({ children }) => {
  return <StyledThree>{children}</StyledThree>;
};

CustomThree.File = FileThree;
CustomThree.Folder = FolderThree;

export default CustomThree;
