import { StyledSection } from "./style";

import { useContext } from "react";

import { PokeContext } from "../../context/PokeContext";
import { CardPokemon } from "./CardPokemon";

export const ListPokemon = () => {
  const { pokemon, pokeLoading } = useContext(PokeContext);

  if (pokeLoading) {
    return null;
  }

  return (
    <StyledSection>
      <div className="container">
        <ul>
          {pokemon.map((element, index) => {
            return <CardPokemon key={index} url={element.url.slice(26)} />;
          })}
        </ul>
      </div>
    </StyledSection>
  );
};
