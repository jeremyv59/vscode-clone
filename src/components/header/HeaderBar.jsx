import React from "react";
import {
  HeaderBarContainer,
  HeaderMidTitle,
  LeftPartContainer,
  MiddlePartContainer,
  OptionItemContainer,
  OptionsItem,
  RightPartContainer,
} from "./header_styled";
import {
  VscChromeMaximize,
  VscChromeMinimize,
  VscClose,
  VscSplitHorizontal,
  VscSplitVertical,
} from "react-icons/vsc";
import { SiVisualstudiocode } from "react-icons/si";
import { TbDeviceMobile } from "react-icons/tb";
import { MdOutlineHistoryToggleOff } from "react-icons/md";

const options = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

const HeaderBar = () => {
  return (
    <HeaderBarContainer>
      <LeftPartContainer>
        <SiVisualstudiocode color="#2660A4" size={20}></SiVisualstudiocode>
        {options.map((option) => {
          return (
            <OptionItemContainer>
              <OptionsItem>{option}</OptionsItem>
            </OptionItemContainer>
          );
        })}
      </LeftPartContainer>

      <MiddlePartContainer>
        <HeaderMidTitle>
          HeaderBar.jsx - vscode-clone - Visual Studio Code
        </HeaderMidTitle>
      </MiddlePartContainer>

      <RightPartContainer>
        <VscSplitHorizontal
          size={24}
          className="displayIcon"
        ></VscSplitHorizontal>
        <VscSplitVertical size={24} className="displayIcon"></VscSplitVertical>
        <TbDeviceMobile size={24} className="displayIcon"></TbDeviceMobile>
        <MdOutlineHistoryToggleOff
          size={24}
          className="displayIcon"
        ></MdOutlineHistoryToggleOff>

        <VscChromeMinimize className="actionBtn" size={20}></VscChromeMinimize>
        <VscChromeMaximize className="actionBtn" size={20}></VscChromeMaximize>
        <VscClose className="actionBtn" size={20}></VscClose>
      </RightPartContainer>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
