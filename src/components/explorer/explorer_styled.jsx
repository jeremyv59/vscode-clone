import styled from "styled-components";
import { GlobalTheme } from "../../theme/GlobalTheme";

export const ExplorerContainer = styled.div`
  background-color: ${GlobalTheme.colors.darkBlueLight};
`;

export const ExplorerHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.4rem;
  justify-content: space-between;
`;

export const HeaderTitle = styled.p`
  font-size: 12px;
  color: ${GlobalTheme.colors.white};
`;

export const ExplorerItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-left: 0.2rem;
  border-bottom: ${(props) =>
    props.projectOpened ? "none" : `1px solid ${GlobalTheme.colors.gray}`};
`;

export const ExplorerItem = styled.p`
  padding: 0.3rem;
  font-size: 12px;
  font-weight: bold;
  color: ${GlobalTheme.colors.white};
`;

export const ThreeContainer = styled.div`
  padding-bottom: 0.5rem;
  border-bottom: ${(props) =>
    props.projectOpened ? `1px solid ${GlobalTheme.colors.gray}` : "none"};
`;
