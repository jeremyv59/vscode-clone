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

const infos = [
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
        <RightInfos>
          <OneInfoContainer>
            <TextInfo>Ln 77, Col 31</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <TextInfo>Spaces: 2</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <TextInfo>UTF-8</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <TextInfo>CRLF</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <VscJson size={16}></VscJson>
          </OneInfoContainer>
          <OneInfoContainer>
            <TextInfo>JavaScript React</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <VscBroadcast size={16}></VscBroadcast>
            <TextInfo>Go Live</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <VscCheck size={16}></VscCheck>
            <TextInfo>Prettier</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <VscFeedback size={16}></VscFeedback>
          </OneInfoContainer>
          <OneInfoContainer>
            <VscBell size={16}></VscBell>
          </OneInfoContainer>
        </RightInfos>
      </ContainerInfos>
    </FooterContainer>
  );
};

export default FooterBar;
