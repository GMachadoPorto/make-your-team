import { StyledHeader } from "./style";
import pokeball from "../../../assets/pokeball.svg";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { TypesPoke } from "../../TypesPoke";

export const HeaderModal = () => {
  const { modalData, formatName } = useContext(ModalContext);

  return (
    <StyledHeader>
      <img src={pokeball} alt="pokeball" />
      <img src={modalData.sprite} alt={modalData.name} className="pokemon" />
      <div className="info">
        <p>{formatName(modalData.name)}</p>
        <div className="types">
          {modalData.types.map((element, index) => (
            <TypesPoke key={index} name={element.type.name} />
          ))}
        </div>
      </div>
    </StyledHeader>
  );
};
