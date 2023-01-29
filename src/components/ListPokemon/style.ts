import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100%;
  padding: 0 8px;

  > div {
    width: 100%;
    height: 45vh;
    background-color: var(--color-grey-2);
    display: flex;
    align-items: center;
  }

  ul {
    width: 100%;
    height: 100%;
    padding: 12px 0;
    overflow-y: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    @media (min-width: 420px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (min-width: 552px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (min-width: 684px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (min-width: 816px) {
      grid-template-columns: repeat(6, 1fr);
    }

    @media (min-width: 948px) {
      grid-template-columns: repeat(7, 1fr);
    }

    @media (min-width: 1080px) {
      grid-template-columns: repeat(8, 1fr);
    }

    &::-webkit-scrollbar {
      height: 100%;
      width: 8px;
      border-radius: 8px;
      background-color: var(--color-grey-1);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--color-scroll);
      border-radius: 8px;
    }
  }

  .loading {
    height: 200px;
    width: 200px;
    margin: 0 auto;
    animation: pokeLoading 2s infinite;

    @keyframes pokeLoading {
      to {
        transform: rotate(1turn);
      }
    }
  }
`;
