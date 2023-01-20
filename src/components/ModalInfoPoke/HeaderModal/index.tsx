import { StyledHeader } from "./style";
import pokeball from "../../../assets/pokeball.svg";
import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import { TypesPoke } from "../../TypesPoke";

export const HeaderModal = () => {
  const { modalData } = useContext(ModalContext);

  const formatName = (name: string) => {
    let newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return newName;
  };

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
