import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 100%;
  max-height: 80px;
  display: flex;
  align-items: center;
  position: relative;
  gap: 12px;

  img {
    width: 80px;
    height: 100%;
  }

  .pokemon {
    transform: scale(1.2);
    position: absolute;
    top: 8px;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .types {
    width: 100%;
    display: flex;
    gap: 20px;
  }
`;
