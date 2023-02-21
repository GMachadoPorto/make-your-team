import styled from "styled-components";

interface iLiProps {
  height: number;
}

export const StyledLi = styled.li`
  cursor: pointer;
  width: 120px;
  height: 140px;
  padding: 4px;
  margin: 0 auto;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0px var(--color-shadow-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: var(--color-grey-1);
  animation-name: pokeShow;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;

  img {
    width: 80px;
    height: 80px;
  }

  .pokemon {
    position: absolute;
    top: 8px;
    transform: scale(${(props: iLiProps) => (props.height < 15 ? 1.2 : 1.0)});
    animation-name: pokeShow;
    animation-duration: 2s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }

  @keyframes pokeShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
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
`;
