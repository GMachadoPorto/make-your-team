import { StyledSection } from "./style";
import pokeball from "../../assets/pokeball.svg";
import { CardPokeTeam } from "./CardPokeTeam";
import { PokeContext } from "../../context/PokeContext";
import { useContext } from "react";
export const PokeTeam = () => {
  const { pokeTeam, pokeTeamSlots } = useContext(PokeContext);

  const emptySlots = () => {
    let slots = [];
    for (let i = 0; i < pokeTeamSlots; i++) {
      slots.push(
        <li className="emptyBall" key={i}>
          <img src={pokeball} alt="pokebola" />
        </li>
      );
    }
    return slots;
  };

  let slots = emptySlots();

  return (
    <StyledSection>
      <div className="container">
        <ul>
          {pokeTeam.length > 0 &&
            pokeTeam.map((element, index) => (
              <CardPokeTeam key={index} data={element} position={index} />
            ))}
          {pokeTeamSlots > 0 && slots.map((element) => element)}
        </ul>
      </div>
    </StyledSection>
  );
};
