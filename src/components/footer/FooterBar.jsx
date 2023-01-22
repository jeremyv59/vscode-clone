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
import { VscRemote, VscSourceControl } from "react-icons/vsc";

const FooterBar = () => {
  return (
    <FooterContainer>
      <RemoteContainer>
        <VscRemote color="#ffffff" size={18}></VscRemote>
      </RemoteContainer>
      <ContainerInfos>
        <LeftInfos>
          <OneInfoContainer>
            <VscSourceControl className="icon" size={16}></VscSourceControl>
            <TextInfo>main*</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <VscSourceControl className="icon" size={16}></VscSourceControl>
            <TextInfo>main*</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <VscSourceControl className="icon" size={16}></VscSourceControl>
            <TextInfo>main*</TextInfo>
          </OneInfoContainer>
          <OneInfoContainer>
            <VscSourceControl className="icon" size={16}></VscSourceControl>
            <TextInfo>main*</TextInfo>
          </OneInfoContainer>
        </LeftInfos>
        <RightInfos></RightInfos>
      </ContainerInfos>
    </FooterContainer>
  );
};

export default FooterBar;
