import React from "react";
import {
  ContainerInfos,
  FooterContainer,
  LeftInfos,
  OneInfoContainer,
  RemoteContainer,
  RightInfos,
  TextInfo,
} from "./footer_styled";
import {
  VscRemote,
  VscSourceControl,
  VscLiveShare,
  VscRefresh,
  VscArrowDown,
  VscArrowUp,
  VscGitMerge,
  VscError,
  VscWarning,
} from "react-icons/vsc";

const infos = [
  {
    icon: [<VscSourceControl className="icon" size={16}></VscSourceControl>],
    text: ["main*"],
  },
  {
    icon: [
      <VscRefresh className="icon" size={16}></VscRefresh>,
      <VscArrowDown className="icon" size={14}></VscArrowDown>,
      <VscArrowUp className="icon" size={14}></VscArrowUp>,
    ],
    text: ["0", "2"],
  },

  {
    icon: [<VscGitMerge className="icon" size={16}></VscGitMerge>],
    text: [],
  },
  {
    icon: [
      <VscError className="icon" size={16}></VscError>,
      <VscWarning size={16} className="icon space"></VscWarning>,
    ],
    text: ["0", "0"],
  },
  {
    icon: [<VscLiveShare className="icon" size={16}></VscLiveShare>],
    text: ["Live Share"],
  },
];

const FooterBar = () => {
  return (
    <FooterContainer>
      <RemoteContainer>
        <VscRemote color="#ffffff" size={18}></VscRemote>
      </RemoteContainer>
      <ContainerInfos>
        <LeftInfos>
          {infos.map((info) => {
            return (
              <OneInfoContainer>
                {info.icon.map((icon, index) => {
                  return (
                    <React.Fragment>
                      {icon}
                      {info.text.length > 0 ? (
                        <TextInfo>{info.text[index]}</TextInfo>
                      ) : null}
                    </React.Fragment>
                  );
                })}
              </OneInfoContainer>
            );
          })}
        </LeftInfos>
        <RightInfos></RightInfos>
      </ContainerInfos>
    </FooterContainer>
  );
};

export default FooterBar;
