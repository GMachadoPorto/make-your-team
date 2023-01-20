import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .filters {
    width: 100%;
    padding: 0 8px;

    > div {
      display: flex;
      flex-direction: column;
      gap: 20px;

      @media (min-width: 400px) {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;
