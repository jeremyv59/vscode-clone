import styled from "styled-components";
import { GlobalTheme } from "../../theme/GlobalTheme";

export const StyledFileThree = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 5px;
  }
`;

export const StyledFileName = styled.span`
  color: ${GlobalTheme.colors.white};
  font-size: 15px;
`;
