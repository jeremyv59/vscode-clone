import React, { useState } from "react";
import {
  BottomIconsContainer,
  IconContainer,
  SidebarContainer,
  TopIconsContainer,
} from "./sidebar_styled";
import {
  VscCopy,
  VscSearch,
  VscSourceControl,
  VscRemoteExplorer,
  VscDebugAlt,
  VscExtensions,
  VscLiveShare,
  VscGithubAlt,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import { GlobalTheme } from "../../theme/GlobalTheme";

const sidebarIcons = [
  <VscCopy className="topIcon" size={30}></VscCopy>,
  <VscSearch className="topIcon" size={30}></VscSearch>,
  <VscSourceControl className="topIcon" size={30}></VscSourceControl>,
  <VscRemoteExplorer className="topIcon" size={30}></VscRemoteExplorer>,
  <VscDebugAlt className="topIcon" size={30}></VscDebugAlt>,
  <VscExtensions className="topIcon" size={30}></VscExtensions>,
  <VscLiveShare className="topIcon" size={30}></VscLiveShare>,
  <VscGithubAlt className="topIcon" size={30}></VscGithubAlt>,
];

const Sidebar = ({ open, setOpen }) => {
  const [selectedIconId, setSelectedIconId] = useState();

  const handleSelectIcon = (idValue) => {
    setSelectedIconId(idValue);
    setOpen(!open);
  };

  return (
    <SidebarContainer>
      <TopIconsContainer>
        {sidebarIcons.map((icon, index) => {
          return (
            <IconContainer
              key={index}
              id={index}
              onClick={() => handleSelectIcon(index)}
              active={Number(selectedIconId) === index ? true : false}
            >
              {icon}
            </IconContainer>
          );
        })}
      </TopIconsContainer>
      <BottomIconsContainer>
        <VscAccount className="bottomIcon" size={30}></VscAccount>
        <VscSettingsGear className="bottomIcon" size={30}></VscSettingsGear>
      </BottomIconsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
