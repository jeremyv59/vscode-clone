import styled from "styled-components";

export const StyledFolder = styled.div`
  padding-left: 1rem;

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
