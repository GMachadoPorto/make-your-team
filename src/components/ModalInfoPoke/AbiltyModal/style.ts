import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;

  select {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: none;
    outline: none;
    background-color: var(--color-grey-2);
  }

  .description {
    width: 100%;
    height: 160px;
    padding: 12px;
    border-radius: 8px;
    background-color: var(--color-grey-2);
    overflow-y: auto;
  }
`;
