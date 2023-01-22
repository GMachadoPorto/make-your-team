import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  max-width: 400px;
  height: 40px;
  display: flex;
  gap: 12px;

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

  button {
    width: max-content;
    height: 40px;
    padding: 0 8px;
    background-color: var(--color-grey-2);
    border-radius: 8px;

    &:hover {
      background-color: #343434;
      color: #ffffff;
    }
  }
`;
