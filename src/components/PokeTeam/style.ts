import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  height: 200px;
  padding: 0 8px;

  > div {
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: var(--color-grey-2);
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
      background-color: var(--color-grey-1);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-scroll);
      border-radius: 8px;
    }
  }

  .emptyBall {
    width: 140px;
    height: 170px;
    padding: 4px;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 2px 2px 4px 0px var(--color-shadow-1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    position: relative;
    background-color: var(--color-grey-1);

    img {
      width: 90px;
      height: 90px;
      position: absolute;
      top: 8px;
    }
  }
`;
