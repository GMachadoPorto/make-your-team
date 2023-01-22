import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: var(--color-grey-2);

  @media (min-width: 650px) {
    height: 208px;
  }

  ul {
    width: 100%;
    height: 80px;
    overflow: auto;
    display: flex;
    align-items: center;
    gap: 8px;

    &::-webkit-scrollbar {
      height: 8px;
      width: 100%;
      border-radius: 8px;
      background-color: #ffffff;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-scroll);
      border-radius: 8px;
    }

    @media (min-width: 650px) {
      height: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);

      &::-webkit-scrollbar {
        height: 100%;
        width: 8px;
      }
    }
  }

  li {
    min-width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 650px) {
      width: 100%;
      max-width: 50px;
      margin: 0 auto;
    }

    div {
      width: 100%;
      height: 24px;
      border-radius: 4px;
    }
  }
`;
