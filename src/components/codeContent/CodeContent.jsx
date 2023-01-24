import React, { useContext } from "react";
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
import Highlight from "react-highlight";
import Terminal from "../terminal/Terminal.jsx";

const CodeContent = () => {
  const context = useContext(FileContext);

  const { selectedFile } = context;

  return (
    <CodeContentContainer>
      <Splitter flexDirectionValue={"column"} directionValue={"vertical"}>
        <ContentContainer>
          {selectedFile ? (
            FilesArray.map((file) => {
              return file.fileName === context.selectedFile ? (
                <p key={file.id}>
                  <Highlight language={file.language}>{file.content}</Highlight>
                </p>
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
                  height: "50%",
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
