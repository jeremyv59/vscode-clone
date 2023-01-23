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
  VscJson,
  VscBroadcast,
  VscCheck,
  VscFeedback,
  VscBell,
} from "react-icons/vsc";

const leftInfos = [
  {
    icon: [<VscSourceControl className="icon" size={16}></VscSourceControl>],
    text: ["main*"],
  },
  {
    icon: [<VscRefresh className="icon" size={16}></VscRefresh>],
    text: [],
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

const rightInfos = [
  {
    icon: [],
    text: ["Ln 58, Col 20"],
  },
  {
    icon: [],
    text: ["Spaces: 2"],
  },
  {
    icon: [],
    text: ["UTF-8"],
  },
  {
    icon: [],
    text: ["CRLF"],
  },
  {
    icon: [<VscJson className="icon" size={16}></VscJson>],
    text: [],
  },
  {
    icon: [],
    text: ["JavaScript React"],
  },
  {
    icon: [<VscBroadcast className="icon" size={16}></VscBroadcast>],
    text: ["Go Live"],
  },
  {
    icon: [<VscCheck className="icon" size={16}></VscCheck>],
    text: ["Prettier"],
  },
  {
    icon: [<VscFeedback className="icon" size={16}></VscFeedback>],
    text: [],
  },
  {
    icon: [<VscBell className="icon" size={16}></VscBell>],
    text: [],
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
          {leftInfos.map((info) => {
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
        <RightInfos>
          {rightInfos.map((info) => {
            return (
              <OneInfoContainer>
                {info.icon.length > 0
                  ? info.icon.map((icon, index) => {
                      return (
                        <React.Fragment>
                          {icon}
                          <TextInfo>{info.text[index]}</TextInfo>
                        </React.Fragment>
                      );
                    })
                  : info.text.map((text) => {
                      return <TextInfo>{text}</TextInfo>;
                    })}
              </OneInfoContainer>
            );
          })}
        </RightInfos>
      </ContainerInfos>
    </FooterContainer>
  );
};

export default FooterBar;
