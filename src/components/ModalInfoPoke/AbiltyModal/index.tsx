import { useContext} from "react";
import { ModalContext } from "../../../context/ModalContext";
import { StyledDiv } from "./style";

export const AbilityModal = () => {
  const { modalData, abilityDescription, handleAbility } =
    useContext(ModalContext);

  return (
    <StyledDiv>
      <select onChange={(event) => handleAbility(event.target.value)}>
        <option value="">Escolha a habilidade</option>
        {modalData.abilities.map((element, index) => (
          <option key={index} value={element.ability.name}>
            {element.ability.name}
          </option>
        ))}
      </select>
      <div className="description">{abilityDescription}</div>
    </StyledDiv>
  );
};
