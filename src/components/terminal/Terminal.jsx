import React, { useState } from "react";
import {
  PathText,
  TerminalContainer,
  TerminalContent,
  TerminalHeader,
  TerminalOptionItem,
  TerminalTextArea,
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
        <PathText>C:\DevPerso\vscode-clone{">"}</PathText>
        <TerminalTextArea></TerminalTextArea>
      </TerminalContent>
    </TerminalContainer>
  );
};

export default Terminal;
