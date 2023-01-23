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
import { SiVisualstudiocode } from "react-icons/si";
import {
  TbSquareToggle,
  TbSquareToggleHorizontal,
  TbDeviceMobile,
} from "react-icons/tb";
import { MdOutlineHistoryToggleOff, MdClose } from "react-icons/md";
import { BiWindows } from "react-icons/bi";
import { RxBadge } from "react-icons/rx";

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
        <TbSquareToggleHorizontal
          size={24}
          className="displayIcon"
        ></TbSquareToggleHorizontal>
        <TbSquareToggle size={24} className="displayIcon"></TbSquareToggle>
        <TbDeviceMobile size={24} className="displayIcon"></TbDeviceMobile>
        <MdOutlineHistoryToggleOff
          size={24}
          className="displayIcon"
        ></MdOutlineHistoryToggleOff>

        <RxBadge className="actionBtn" size={20}></RxBadge>
        <BiWindows className="actionBtn" size={20}></BiWindows>
        <MdClose className="actionBtn" size={20}></MdClose>
      </RightPartContainer>
    </HeaderBarContainer>
  );
};

export default HeaderBar;
