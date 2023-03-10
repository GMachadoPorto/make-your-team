import pokeball from "../../../assets/pokeball.svg";
import { PokeContext } from "../../../context/PokeContext";
import { TypesPoke } from "../../TypesPoke";
import { StyledLi } from "./style";
import { useContext } from "react";
import { iPokeTeam } from "../../../services/interfaces";
import { ModalContext } from "../../../context/ModalContext";

interface iCardPokeTeam {
  data: iPokeTeam;
  position: number;
}

export const CardPokeTeam = ({ data, position }: iCardPokeTeam) => {
  const { removePokemon } = useContext(PokeContext);
  const { formatName } = useContext(ModalContext);

  return (
    <StyledLi height={data.height}>
      <img src={pokeball} alt="pokebola" />
      <img src={data.sprite} alt={data.name} className="pokemon" />
      <p>{formatName(data.name)}</p>
      <div>
        {data.types.map((element, index) => (
          <TypesPoke key={index} name={element.type.name} />
        ))}
      </div>
      <button
        onClick={() => {
          removePokemon(position);
        }}
      >
        X
      </button>
    </StyledLi>
  );
};
