import styled from "styled-components";

export const SidebarContainer = styled.div`
  background-color: purple;
  width: 4%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopIconsContainer = styled.div`
  background-color: green;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  background-color: purple;
  border-left: 2px solid black;

  & .topIcon {
    background-color: red;
    width: 100%;
    height: 60%;
  }
`;

export const BottomIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 15%;

  background-color: blue;
`;
