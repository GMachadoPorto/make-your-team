import styled from "styled-components";

interface iLiProps {
  height: number;
}

export const StyledLi = styled.li`
  width: 140px;
  height: 95%;
  padding: 4px;
  margin: 0 auto;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  position: relative;
  background-color: #b9b9b9;

  img {
    width: 90px;
    height: 90px;
  }

  .pokemon {
    position: absolute;
    top: 8px;
    transform: scale(${(props: iLiProps) => (props.height < 15 ? 1.2 : 1.0)});
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  button {
    width: 16px;
    height: 16px;
    border: 2px solid #9d0b0b;
    border-radius: 50%;
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 12px;
    background-color: #ffffff;
  }
`;
