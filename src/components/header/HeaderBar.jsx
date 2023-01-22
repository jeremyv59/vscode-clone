import React from "react";
import {
  HeaderBarContainer,
  HeaderMidTitle,
  LeftPartContainer,
  MiddlePartContainer,
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

const HeaderBar = () => {
  return (
    <HeaderBarContainer>
      <LeftPartContainer>
        <SiVisualstudiocode color="#2660A4" size={20}></SiVisualstudiocode>
        <OptionsItem>File</OptionsItem>
        <OptionsItem>Edit</OptionsItem>
        <OptionsItem>Selection</OptionsItem>
        <OptionsItem>View</OptionsItem>
        <OptionsItem>Go</OptionsItem>
        <OptionsItem>Run</OptionsItem>
        <OptionsItem>Terminal</OptionsItem>
        <OptionsItem>Help</OptionsItem>
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
