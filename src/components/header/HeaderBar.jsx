import React from "react";
import {
  HeaderBarContainer,
  LeftPartContainer,
  MiddlePartContainer,
  OptionsItem,
  RightPartContainer,
} from "./header_styled";
import { SiVisualstudiocode } from "react-icons/si";

const HeaderBar = () => {
  return (
    <HeaderBarContainer>
      <LeftPartContainer>
        <SiVisualstudiocode color="#2660A4" size={18}></SiVisualstudiocode>
        <OptionsItem>File</OptionsItem>
        <OptionsItem>Edit</OptionsItem>
        <OptionsItem>Selection</OptionsItem>
        <OptionsItem>View</OptionsItem>
        <OptionsItem>Go</OptionsItem>
        <OptionsItem>Run</OptionsItem>
        <OptionsItem>Terminal</OptionsItem>
        <OptionsItem>Help</OptionsItem>
      </LeftPartContainer>

      <MiddlePartContainer></MiddlePartContainer>

      <RightPartContainer></RightPartContainer>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
