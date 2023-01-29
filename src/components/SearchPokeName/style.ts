import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 400px;
  height: 40px;

  input {
    width: 100%;
    height: 40px;
    padding: 0 8px;
    border: 1px solid transparent;
    border-radius: 8px;
    outline: none;
    border: none;
    background-color: var(--color-grey-2);

    &:focus {
      border: 1px solid #343434;
      background-color: #ffffff;
    }
  }
`;
