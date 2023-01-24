import React, { useContext, useEffect } from "react";
import { FileContext } from "../../context/FileContext.jsx";
import { FilesArray } from "../../data/FileData.jsx";
import { SiVisualstudiocode } from "react-icons/si";
import Splitter from "../splitter/Splitter.jsx";
import {
  CodeContentContainer,
  ContainerKeyboardItem,
  ContainerOptionText,
  ContentContainer,
  KeyboardItem,
  OptionContainer,
  OptionText,
  PlusSign,
} from "./code_content.jsx";
import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";
import Markdown from "marked-react";
import Lowlight from "react-lowlight";
import "highlight.js/styles/github.css";
import Terminal from "../terminal/Terminal.jsx";

Lowlight.registerLanguage("js", javascript);
Lowlight.registerLanguage("css", css);

const CodeContent = () => {
  const context = useContext(FileContext);

  const { selectedFile } = context;

  return (
    <CodeContentContainer>
      <Splitter
        minSizes={[10, 0]}
        flexDirectionValue={"column"}
        directionValue={"vertical"}
      >
        <ContentContainer>
          {selectedFile ? (
            FilesArray.map((file) => {
              return file.fileName === context.selectedFile ? (
                <Lowlight key={file.id} value={file.content}></Lowlight>
              ) : (
                ""
              );
            })
          ) : (
            <React.Fragment>
              <SiVisualstudiocode
                style={{
                  color: "yellow",
                  width: "100%",
                  height: "40%",
                  marginBottom: "2rem",
                }}
              ></SiVisualstudiocode>
              <OptionContainer>
                <ContainerOptionText>
                  <OptionText>Show All Commands</OptionText>
                </ContainerOptionText>
                <ContainerKeyboardItem>
                  <KeyboardItem>Ctrl</KeyboardItem>
                  <PlusSign>+</PlusSign>
                  <KeyboardItem>Shift</KeyboardItem>
                  <PlusSign>+</PlusSign>
                  <KeyboardItem>Ctrl</KeyboardItem>
                </ContainerKeyboardItem>
              </OptionContainer>

              <OptionContainer>
                <ContainerOptionText>
                  <OptionText>Go to file</OptionText>
                </ContainerOptionText>
                <ContainerKeyboardItem>
                  <KeyboardItem>Ctrl</KeyboardItem>
                  <PlusSign>+</PlusSign>
                  <KeyboardItem>P</KeyboardItem>
                </ContainerKeyboardItem>
              </OptionContainer>

              <OptionContainer>
                <ContainerOptionText>
                  <OptionText>Find in files</OptionText>
                </ContainerOptionText>
                <ContainerKeyboardItem>
                  <KeyboardItem>Ctrl</KeyboardItem>
                  <PlusSign>+</PlusSign>
                  <KeyboardItem>Shift</KeyboardItem>
                  <PlusSign>+</PlusSign>
                  <KeyboardItem>Ctrl</KeyboardItem>
                </ContainerKeyboardItem>
              </OptionContainer>

              <OptionContainer>
                <ContainerOptionText>
                  <OptionText>Start debugging</OptionText>
                </ContainerOptionText>
                <ContainerKeyboardItem>
                  <KeyboardItem>F5</KeyboardItem>
                </ContainerKeyboardItem>
              </OptionContainer>

              <OptionContainer>
                <ContainerOptionText>
                  <OptionText>Toggle terminal</OptionText>
                </ContainerOptionText>
                <ContainerKeyboardItem>
                  <KeyboardItem>Ctrl</KeyboardItem>
                  <PlusSign>+</PlusSign>
                  <KeyboardItem>ù</KeyboardItem>
                </ContainerKeyboardItem>
              </OptionContainer>
            </React.Fragment>
          )}
        </ContentContainer>
        <Terminal></Terminal>
      </Splitter>
    </CodeContentContainer>
  );
};

export default CodeContent;
