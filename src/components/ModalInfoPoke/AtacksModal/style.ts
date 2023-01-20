import styled from "styled-components";

export const StyledSection = styled.section`
  .atackSelect {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    select {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 8px;
      outline: none;
      background-color: #d9d9d9;
    }

    button {
      width: max-content;
      height: 100%;
      padding: 0 16px;
      border-radius: 8px;
      background-color: #d9d9d9;
    }
  }

  .description {
    width: 100%;
    height: 160px;
    padding: 12px;
    border-radius: 8px;
    background-color: #d9d9d9;
    overflow-y: auto;
  }

  ul {
    width: 100%;
    height: 208px;
    padding: 12px 8px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: #d9d9d9;
  }

  li {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;

    div {
      width: 100%;
      height: 100%;
      padding: 0 8px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #ffffff;
    }
  }
`;
