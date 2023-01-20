import { HeaderModal } from "./HeaderModal";
import { AbilityModal } from "./AbiltyModal";
import { TypesModal } from "./TypesModal";
import { AtackModal } from "./AtacksModal";
import { ButtonsModal } from "./ButtonsModal";
import { StyledModal } from "./style";

import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export const ModalInfoPoke = () => {
  const { closeModal } = useContext(ModalContext);

  return (
    <StyledModal>
      <div className="modalBody">
        <HeaderModal />
        <button className="close" onClick={closeModal}>
          X
        </button>
        <main>
          <section className="firstSec">
            <AbilityModal />
            <TypesModal />
          </section>

          <AtackModal />
        </main>
        <ButtonsModal />
      </div>
    </StyledModal>
  );
};
