import styled from "styled-components";

export const HeaderBarContainer = styled.div`
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0rem 0.8rem;
  height: 4.5vh;
`;

export const LeftPartContainer = styled.div`
  display: flex;
  width: 30%;
  gap: 1.2rem;
`;

export const OptionsItem = styled.p`
  color: dark;
  font-size: 15px;
`;

export const MiddlePartContainer = styled.div`
  width: 40%;
  text-align: center;
`;

export const HeaderMidTitle = styled.p`
  font-size: 14px;
`;

export const RightPartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 30%;

  & .displayIcon {
    margin-right: 0.1rem;
  }

  & .actionBtn {
    margin-left: 1.4rem;
    background-color: purple;
  }
`;
