import React from "react";
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

const Sidebar = () => {
  return (
    <SidebarContainer>
      <TopIconsContainer>
        <IconContainer>
          <VscCopy className="topIcon" size={30}></VscCopy>
        </IconContainer>
        <IconContainer>
          <VscSearch className="topIcon" size={30}></VscSearch>
        </IconContainer>
        <IconContainer>
          <VscSourceControl className="topIcon" size={30}></VscSourceControl>
        </IconContainer>
        <IconContainer>
          <VscRemoteExplorer className="topIcon" size={30}></VscRemoteExplorer>
        </IconContainer>
        <IconContainer>
          <VscDebugAlt className="topIcon" size={30}></VscDebugAlt>
        </IconContainer>
        <IconContainer>
          <VscExtensions className="topIcon" size={30}></VscExtensions>
        </IconContainer>
        <IconContainer>
          <VscLiveShare className="topIcon" size={30}></VscLiveShare>
        </IconContainer>
        <IconContainer>
          <VscGithubAlt className="topIcon" size={30}></VscGithubAlt>
        </IconContainer>
      </TopIconsContainer>
      <BottomIconsContainer>
        <VscAccount size={30}></VscAccount>
        <VscSettingsGear size={30}></VscSettingsGear>
      </BottomIconsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
