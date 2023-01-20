import { StyledSection } from "./style";

import { CardPokeTeam } from "./CardPokeTeam";
import { PokeContext } from "../../context/PokeContext";
import { useContext } from "react";
export const PokeTeam = () => {
  const { pokeTeam } = useContext(PokeContext);

  return (
    <StyledSection>
      <div className="container">
        <ul>
          {pokeTeam.length > 0 ? (
            pokeTeam.map((element, index) => (
              <CardPokeTeam key={index} data={element} position={index} />
            ))
          ) : (
            <p>Adicione Pokemon</p>
          )}
        </ul>
      </div>
    </StyledSection>
  );
};
