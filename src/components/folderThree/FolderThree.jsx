import React, { useState } from "react";
import {
  Collapsible,
  StyledFolder,
  StyledFolderName,
} from "./folder_three_styled";
import { VscChevronRight, VscChevronDown } from "react-icons/vsc";
import { GlobalTheme } from "../../theme/GlobalTheme";

const FolderThree = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        {isOpen ? (
          <VscChevronDown color={GlobalTheme.colors.white}></VscChevronDown>
        ) : (
          <VscChevronRight color={GlobalTheme.colors.white}></VscChevronRight>
        )}
        <StyledFolderName>{name}</StyledFolderName>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

export default FolderThree;
