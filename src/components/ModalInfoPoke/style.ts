import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 8px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: #00000075;

  .modalBody {
    width: 100%;
    max-width: 650px;
    max-height: 100%;
    margin: 0 auto;
    padding: 12px;
    border-radius: 8px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    position: relative;
    background-color: #ffffff;
    animation-name: modalSlider;
    animation-duration: 1s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;

    @media (min-width: 650px) {
      align-items: flex-end;
    }
  }

  @keyframes modalSlider {
    from {
      transform: translateY(-25px);
      opacity: 0;
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  .close {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 650px) {
      flex-direction: row;
      gap: 4px;
      justify-content: space-between;
    }
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (min-width: 650px) {
      max-width: 300px;
    }
  }
`;
