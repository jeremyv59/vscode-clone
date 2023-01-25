import styled from "styled-components";
import { GlobalTheme } from "../../theme/GlobalTheme";

export const TerminalContainer = styled.div`
  width: 100%;
  background-color: ${GlobalTheme.colors.darkBlue};
  overflow: hidden;
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
  background-color: ${GlobalTheme.colors.darkBlue};
  padding: 0.9rem 1rem;
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid transparent;
`;

export const TerminalContent = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const PathText = styled.p`
  color: ${GlobalTheme.colors.white};
`;

export const TextAreaContainer = styled.div`
  background: ${GlobalTheme.colors.darkBlue};
  width: 100%;
  height: 100%;
  display: flex;
  padding: 1.2rem;
`;

export const TerminalTextArea = styled.textarea`
  color: ${GlobalTheme.colors.white};
  background: ${GlobalTheme.colors.darkBlue};
  width: 88%;
  display: flex;
  border: none;
  outline: none;
  text-align: justify;
  resize: none;
  height: 50px;
  font-size: 16px;
  line-height: 1.1;
`;
