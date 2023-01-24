import React, { useState } from "react";
import { AiOutlineFile } from "react-icons/ai";
import FILE_ICONS from "../../utils/FileIcons";
import { StyledFileThree } from "./file_three_styled";

const FileThree = ({ name, selectedFileSetter }) => {
  let ext = name.split(".")[1];

  console.log("selectedFileSetter", selectedFileSetter);

  return (
    <StyledFileThree onClick={() => selectedFileSetter(name)}>
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <span>{name}</span>
    </StyledFileThree>
  );
};

export default FileThree;
