import styled from "styled-components";

interface iProps {
  background: string;
}

export const StyledSpan = styled.span`
  width: 50px;
  padding-top: 2px;
  background-color: ${(props: iProps) => props.background};
  border: 1px solid var(--color-shadow-3);
  border-radius: 4px;
  text-align: center;

  svg {
    width: 20px;
    height: 20px;
    color: #ffffff;
  }
`;
