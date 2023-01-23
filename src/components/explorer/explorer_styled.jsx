import styled from "styled-components";

export const ExplorerContainer = styled.div`
  background-color: brown;
`;

export const ExplorerHeader = styled.div`
  background-color: blue;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  justify-content: space-between;
`;

export const HeaderTitle = styled.p`
  font-size: 12px;
  color: #ffffff;
`;

export const ExplorerItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid black;

  &:active {
    border-bottom: 1px solid blue;
    background-color: blue;
  }
`;

export const ExplorerItem = styled.p`
  background-color: green;
  padding: 0.3rem;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
`;

export const ThreeContainer = styled.div`
  background-color: yellow;
`;
