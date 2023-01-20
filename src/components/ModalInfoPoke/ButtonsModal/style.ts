import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (min-width: 650px) {
    width: 300px;
  }

  button {
    width: 40%;
    max-width: 200px;
    height: 28px;
    border-radius: 8px;
    text-align: center;
    background-color: green;
    color: #ffffff;
  }
  .cancel {
    background-color: red;
  }
`;
