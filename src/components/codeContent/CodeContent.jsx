import React from "react";
import Splitter from "../splitter/Splitter.jsx";
import { CodeContentContainer } from "./code_content.jsx";

const CodeContent = () => {
  return (
    <CodeContentContainer>
      <Splitter flexDirectionValue={"column"} directionValue={"vertical"}>
        <div style={{ backgroundColor: "green", width: "100%" }}>
          <p>File Content Div</p>
        </div>
        <div style={{ backgroundColor: "purple", width: "100%" }}>
          <p>Terminal Div</p>
        </div>
      </Splitter>
    </CodeContentContainer>
  );
};

export default CodeContent;
