import React from "react";
import FileThree from "../fileThree/FileThree";
import FolderThree from "../folderThree/FolderThree";
import { StyledThree } from "./custom_three_styled";

const threeStructure = [
  {
    type: "folder",
    name: "src",
    childrens: [
      {
        type: "folder",
        name: "Components",
        childrens: [
          { type: "file", name: "Modal.js" },
          { type: "file", name: "Modal.css" },
        ],
      },
      { type: "file", name: "index.js" },
      { type: "file", name: "index.html" },
    ],
  },
  { type: "file", name: "package.json" },
];

const CustomThree = ({ children }) => {
  return <StyledThree>{children}</StyledThree>;
};

CustomThree.File = FileThree;
CustomThree.Folder = FolderThree;

export default CustomThree;
