import { StyledSpan } from "./style";
import { types } from "./dataTypes";
import { IconType } from "react-icons";

interface iType {
  name: string;
}

interface iTypeInfo {
  name: string;
  icon: IconType;
  color: string;
}

export const TypesPoke = ({ name }: iType) => {
  const type: iTypeInfo | undefined = types.find(
    (element) => element.name === name
  );

  if (type !== undefined) {
    return (
      <StyledSpan background={type.color}>
        <type.icon />
      </StyledSpan>
    );
  }

  return null;
};
