import React, { useState } from "react";
import { Collapsible, StyledFolder } from "./folder_three_styled";
import { AiOutlineFolder } from "react-icons/ai";

const FolderThree = ({ name, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <StyledFolder>
      <div className="folder--label" onClick={handleToggle}>
        <AiOutlineFolder />
        <span>{name}</span>
      </div>
      <Collapsible isOpen={isOpen}>{children}</Collapsible>
    </StyledFolder>
  );
};

export default FolderThree;
