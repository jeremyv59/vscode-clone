import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 3.5vh;
  background-color: gray;
  display: flex;

  & .icon {
    color: #ffffff;
    cursor: pointer;
  }

  & .space {
    margin-left: 0.3rem;
  }
`;

export const RemoteContainer = styled.div`
  background-color: green;
  height: 100%;
  width: 2.8%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInfos = styled.div`
  width: 100%;
  background-color: blue;
  padding-left: 0.5rem;
`;

export const LeftInfos = styled.div`
  height: 100%;
  display: flex;
  gap: 0.5rem;
`;

export const OneInfoContainer = styled.div`
  background-color: brown;
  height: 100%;
  padding: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

export const TextInfo = styled.p`
  font-size: 13px;
  color: #ffffff;
  background-color: brown;
  margin-left: 0.3rem;
  cursor: pointer;
`;

export const RightInfos = styled.div``;
