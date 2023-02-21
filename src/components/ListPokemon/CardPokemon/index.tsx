import { useContext } from "react";
import { ModalContext } from "../../../context/ModalContext";
import pokeball from "../../../assets/pokeball.svg";
import { TypesPoke } from "../../TypesPoke";
import { StyledLi } from "./style";
import { iPokeNewData } from "../../../services/interfaces";

interface iCardPokemon {
  data: iPokeNewData;
}

export const CardPokemon = ({ data }: iCardPokemon) => {
  const { openModal, formatName } = useContext(ModalContext);

  return (
    <StyledLi height={data.height} onClick={() => openModal(data)}>
      <img src={pokeball} alt="pokeball" />
      <img src={data.sprite} alt={data.name} className="pokemon" />
      <p>
        {formatName(data.name)} {data.newIndex}
      </p>
      <div>
        {data.types.map((element, index) => (
          <TypesPoke key={index} name={element.type.name} />
        ))}
      </div>
    </StyledLi>
  );
};
