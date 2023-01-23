import React, { useState } from "react";
import { Collapsible, StyledFolder } from "./folder_three_styled";
import { AiOutlineFolder } from "react-icons/ai";
import { VscEllipsis, VscChevronRight, VscChevronDown } from "react-icons/vsc";

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
          <VscChevronDown color="black"></VscChevronDown>
        ) : (
          <VscChevronRight></VscChevronRight>
        )}
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

export default FolderThree;
