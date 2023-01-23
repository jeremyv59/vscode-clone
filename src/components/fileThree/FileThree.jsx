import React from "react";
import { AiOutlineFile } from "react-icons/ai";
import FILE_ICONS from "../../utils/FileIcons";
import { StyledFileThree } from "./file_three_styled";

const FileThree = ({ name }) => {
  let ext = name.split(".")[1];
  return (
    <StyledFileThree>
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </StyledFileThree>
  );
};

export default FileThree;
