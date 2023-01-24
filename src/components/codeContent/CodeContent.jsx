import React, { useContext } from "react";
import { FileContext } from "../../context/FileContext.jsx";
import { FilesArray } from "../../data/FileData.jsx";
import Splitter from "../splitter/Splitter.jsx";
import { CodeContentContainer } from "./code_content.jsx";
import Highlight from "react-highlight";

var hljs = require("highlight.js");

const CodeContent = () => {
  const context = useContext(FileContext);

  return (
    <CodeContentContainer>
      <Splitter flexDirectionValue={"column"} directionValue={"vertical"}>
        <div style={{ backgroundColor: "green", maxHeight: "100%" }}>
          {FilesArray.map((file) => {
            return file.fileName === context.selectedFile ? (
              <p key={file.id}>
                <Highlight language={file.language}>{file.content}</Highlight>
              </p>
            ) : (
              ""
            );
          })}
        </div>
        <div style={{ backgroundColor: "purple", width: "100%" }}>
          <p>Terminal Div</p>
        </div>
      </Splitter>
    </CodeContentContainer>
  );
};

export default CodeContent;
