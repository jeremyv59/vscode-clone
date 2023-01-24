import styled from "styled-components";
import { GlobalTheme } from "../../theme/GlobalTheme";

export const TerminalContainer = styled.div`
  width: 100%;
  background-color: blue;
`;

export const TerminalOptionItem = styled.li`
  color: ${GlobalTheme.colors.gray};
  font-size: 12px;
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  padding-bottom: 0.25rem;

  transition: ${GlobalTheme.transition};

  &:hover {
    color: ${GlobalTheme.colors.white};
  }

  &.selected {
    color: ${GlobalTheme.colors.white};
    border-bottom: 1px solid ${GlobalTheme.colors.white};
  }
`;

export const TerminalHeader = styled.ul`
  width: 100%;
  background-color: blue;
  padding: 0.5rem 0.8rem;
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid transparent;
  background-color: green;
`;

export const TerminalContent = styled.div`
  display: flex;
`;

export const PathText = styled.p`
  color: ${GlobalTheme.colors.white};
`;
