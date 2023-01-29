import { useContext } from "react";
import { PokeContext } from "../../context/PokeContext";
import { StyledDiv } from "./style";

export const SearchPokeName = () => {
  const { attPokemonFilter } = useContext(PokeContext);

  return (
    <StyledDiv>
      <input
        placeholder="Pesquise o nome..."
        onChange={(event) => attPokemonFilter(event.target.value)}
      />
    </StyledDiv>
  );
};
