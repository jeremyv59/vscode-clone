import React, { useContext, useEffect, useState } from "react";
import { AiOutlineFile } from "react-icons/ai";
import { FileContext } from "../../context/FileContext";
import FILE_ICONS from "../../utils/FileIcons";
import { StyledFileName, StyledFileThree } from "./file_three_styled";

const FileThree = ({ name }) => {
  let ext = name.split(".")[1];

  const context = useContext(FileContext);

  const updateFileSelected = (fileName) => {
    context.setSelectedFile(fileName);
  };

  return (
    <StyledFileThree onClick={() => updateFileSelected(name)}>
      {FILE_ICONS[ext] || <AiOutlineFile />}
      <StyledFileName>{name}</StyledFileName>
    </StyledFileThree>
  );
};

export default FileThree;
