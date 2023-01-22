import { ModalContext } from "../../../context/ModalContext";
import { TypesPoke } from "../../TypesPoke";
import { types } from "../../TypesPoke/dataTypes";
import { StyledDiv } from "./style";
import { useContext, useEffect } from "react";

export const TypesModal = () => {
  const { pokeWeaks, loadingWeaks, handleWeak } = useContext(ModalContext);

  useEffect(() => {
    handleWeak();
  }, []);

  return (
    <StyledDiv>
      <p>Fraquezas</p>
      <ul>
        {!loadingWeaks &&
          types.map((element, index) => (
            <li key={index}>
              <TypesPoke name={element.name} />
              <span>x{pokeWeaks[index].multiplier}</span>
            </li>
          ))}
      </ul>
    </StyledDiv>
  );
};
