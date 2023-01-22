import React from "react";
import Splitter from "../splitter/Splitter.jsx";
import { CodeContentContainer } from "./code_content.jsx";

const CodeContent = () => {
  return (
    <CodeContentContainer>
      <Splitter flexDirectionValue={"column"} directionValue={"vertical"}>
        <div style={{ backgroundColor: "green", width: "100%" }}>
          <p>Salut le vieux</p>
        </div>
        <div style={{ backgroundColor: "purple", width: "100%" }}>
          <p>Oui je parle de toi</p>
        </div>
      </Splitter>
    </CodeContentContainer>
  );
};

export default CodeContent;
