import styled from "styled-components";
import { GlobalTheme } from "../../theme/GlobalTheme";
import { SiVisualstudiocode } from "react-icons/si";

export const CodeContentContainer = styled.div`
  background-color: ${(props) =>
    props.selectedFile ? "#4e495a" : GlobalTheme.colors.darkBlueLight};
  min-width: 25%;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  height: 100%;
  display: ${(props) => (props.selectedFile ? "block" : "flex")};
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  overflow-y: scroll;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`;

export const ContainerOptionText = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`;

export const ContainerKeyboardItem = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
`;

export const OptionText = styled.p`
  color: ${GlobalTheme.colors.darkBlue};
  font-size: 13px;
  margin-right: 1rem;
`;

export const KeyboardItem = styled.p`
color:${GlobalTheme.colors.white};
font-size 13px;
padding : 0.2rem 0.4rem;
border-radius : 4px;
border-bottom : 1px solid black;
background : ${GlobalTheme.colors.gray}
`;

export const PlusSign = styled.p`
  color: ${GlobalTheme.colors.white};
  margin: 0rem 0.3rem;
`;
