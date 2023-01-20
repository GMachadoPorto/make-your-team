import { StyledSpan } from "./style";
import { types } from "./dataTypes";

interface iType {
  name: string;
}

export const TypesPoke = ({ name }: iType) => {
  let type = types.find((element) => element.name === name);

  if (type !== undefined) {
    return (
      <StyledSpan background={type.color}>
        <type.icon />
      </StyledSpan>
    );
  }

  return null;
};
