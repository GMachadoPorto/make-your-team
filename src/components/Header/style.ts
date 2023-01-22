import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px 0px var(--color-shadow-1);

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
