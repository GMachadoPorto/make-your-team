import styled from "styled-components";

interface iLiProps {
  height: number;
}

export const StyledLi = styled.li`
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
  }

  .pokemon {
    position: absolute;
    top: 8px;
    transform: scale(${(props: iLiProps) => (props.height < 15 ? 1.2 : 1.0)});
    animation-name: pokeShow;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;

    @keyframes pokeShow {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  p {
    width: 100%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 12px;
    background-color: var(--color-grey-2);
  }
`;
