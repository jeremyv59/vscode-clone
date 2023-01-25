import styled from "styled-components";
import { GlobalTheme } from "../../theme/GlobalTheme";

export const StyledFolder = styled.div`
  padding-left: 1rem;
  cursor: pointer;

  .folder--label {
    display: flex;
    align-items: center;
    span {
      margin-left: 0.1rem;
    }
  }
`;
export const Collapsible = styled.div`
  height: ${(p) => (p.isOpen ? "auto" : "0")};
  overflow: hidden;
`;

export const StyledFolderName = styled.span`
  color: ${GlobalTheme.colors.white};
  font-size: 16px;
`;
