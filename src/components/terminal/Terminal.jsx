import React, { useState } from "react";
import {
  TerminalContainer,
  TerminalContent,
  TerminalHeader,
  TerminalOptionItem,
} from "./terminal_styled";

const terminalOptions = [
  "PROBLEMS",
  "OUTPUT",
  "DEBUG CONSOLE",
  "TERMINAL",
  "GITLENS",
];

const Terminal = () => {
  const [selectedOptionName, setSelectedOptionName] = useState("TERMINAL");

  const handleSelectOption = (optionName) => {
    setSelectedOptionName(optionName);
  };

  return (
    <TerminalContainer>
      <TerminalHeader>
        {terminalOptions.map((option, index) => {
          return (
            <TerminalOptionItem
              onClick={() => handleSelectOption(option)}
              className={selectedOptionName === option ? "selected" : ""}
              key={index}
            >
              {option}
            </TerminalOptionItem>
          );
        })}
      </TerminalHeader>
      <TerminalContent>
        <p>C:\DevPerso\vscode-clone</p>
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal;
