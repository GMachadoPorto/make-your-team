import { TypesPoke } from "../../TypesPoke";
import { types } from "../../TypesPoke/dataTypes";
import { StyledDiv } from "./style";

export const TypesModal = () => {
  return (
    <StyledDiv>
      <p>Fraquezas</p>
      <ul>
        {types.map((element, index) => (
          <li>
            <TypesPoke key={index} name={element.name} />
            <span>x1</span>
          </li>
        ))}
      </ul>
    </StyledDiv>
  );
};
