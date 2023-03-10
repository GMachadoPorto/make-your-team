import { StyledSection } from "./style";
import { useContext } from "react";
import { PokeContext } from "../../context/PokeContext";
import { CardPokemon } from "./CardPokemon";
import pokeball from "../../assets/pokeball.svg";
import { InfinityScroll } from "../InifnityScroll";

export const ListPokemon = () => {
  const { pokeLoading, pokemonFilter } = useContext(PokeContext);

  return (
    <StyledSection>
      <div className="container">
        {!pokeLoading ? (
          <ul>
            {pokemonFilter.map((element, index) => {
              return <CardPokemon key={index} data={element} />;
            })}
            <InfinityScroll />
          </ul>
        ) : (
          <img className="loading" src={pokeball} alt="pokeball" />
        )}
      </div>
    </StyledSection>
  );
};
