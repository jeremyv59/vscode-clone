import styled from "styled-components";
import { GlobalTheme } from "../../theme/GlobalTheme";

export const FooterContainer = styled.div`
  height: 3.5vh;
  display: flex;
  background-color: ${GlobalTheme.colors.skyBlue};

  & .icon {
    color: #ffffff;
    cursor: pointer;
  }
`;

export const RemoteContainer = styled.div`
  background-color: green;
  height: 100%;
  width: 2.8%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LeftInfos = styled.div`
  height: 100%;
  display: flex;
  gap: 0.5rem;
  padding-left: 0.1rem;
`;

export const TextInfo = styled.p`
  font-size: 13px;
  color: #ffffff;
  cursor: pointer;
`;

export const OneInfoContainer = styled.div`
  // background-color: green;
  height: 100%;
  padding: 0rem 0.4rem;
  gap: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${GlobalTheme.colors.skyBlueLight};
  }
`;

export const RightInfos = styled.div`
  display: flex;
  gap: 0.25rem;
  padding-right: 0.1rem;
`;
