import styled from "styled-components";
import { GlobalTheme } from "../../theme/GlobalTheme";

export const SidebarContainer = styled.div`
  background-color: ${GlobalTheme.colors.darkBlueLight};
  width: 4%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopIconsContainer = styled.div`
  height: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  transition: ${GlobalTheme.transition};
  border-left: ${(props) =>
    props.active
      ? `3px solid ${GlobalTheme.colors.white}`
      : "3px solid transparent"};

  & .topIcon {
    cursor: pointer;
    width: 100%;
    height: 50%;
    color: ${(props) =>
      props.active
        ? `${GlobalTheme.colors.white}`
        : `${GlobalTheme.colors.darkBlue}`};
  }

  & .topIcon:hover {
    color: ${GlobalTheme.colors.white};
  }
`;

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 12%;
  cursor: pointer;

  & .bottomIcon {
    color: ${GlobalTheme.colors.darkBlue};
  }

  & :hover {
    color: ${GlobalTheme.colors.white};
  }
`;
