import { StyledDiv } from "./style";

import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { PokeContext } from "../../../context/PokeContext";

export const ButtonsModal = () => {
  const { closeModal } = useContext(ModalContext);
  const { addPokeTeam } = useContext(PokeContext);

  return (
    <StyledDiv>
      <button className="cancel" onClick={closeModal}>
        Fechar
      </button>
      <button onClick={addPokeTeam}>Adicionar</button>
    </StyledDiv>
  );
};
