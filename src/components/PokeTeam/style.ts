import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 200px;
  padding: 0 8px;

  > div {
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: #d9d9d9;
  }

  ul {
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;

    &::-webkit-scrollbar {
      height: 8px;
      width: 100%;
      padding: 2px;
      border-radius: 8px;
      background-color: #ffffff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #9d0b0b;
      border-radius: 8px;
    }
  }
`;
