import styled from "styled-components";
import { GlobalTheme } from "../../theme/GlobalTheme";

export const HeaderBarContainer = styled.div`
  background-color: ${GlobalTheme.colors.darkBlue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0rem 0.6rem;
  width: 100%;
  height: 4.5vh;
`;

export const LeftPartContainer = styled.div`
  display: flex;
  width: 33%;
  gap: 0.3rem;
`;

export const OptionsItem = styled.p`
  color: ${GlobalTheme.colors.white};
  font-size: 15px;
`;

export const OptionItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0rem 0.3rem;
  border-radius 8px;
  cursor : default;

  transition : ${GlobalTheme.transition};

  &:hover {
    background-color: ${GlobalTheme.colors.lightGray};
    border-radius 8px;

    ${OptionsItem} {
      color : ${GlobalTheme.colors.darkBlue};
    }
  }
`;

export const MiddlePartContainer = styled.div`
  width: 34%;
  text-align: center;
`;

export const HeaderMidTitle = styled.p`
  font-size: 14px;
  color: ${GlobalTheme.colors.white};
`;

export const RightPartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 33%;

  & .displayIcon {
    margin-right: 0.1rem;
    color: ${GlobalTheme.colors.white};
    display : flex;
    justify-content:center;

    &:hover {
      background-color: ${GlobalTheme.colors.lightGray};
      color : ${GlobalTheme.colors.darkBlue};
      border-radius : 4px;
    }
  }

  & .actionBtn {
    margin-left: 1.4rem;
    color: ${GlobalTheme.colors.white};

    &:hover {
      background-color: ${GlobalTheme.colors.lightGray};
      color : ${GlobalTheme.colors.darkBlue};
      border-radius 8px;
    }
  }
`;
