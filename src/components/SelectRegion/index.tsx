import { useContext } from "react";
import { PokeContext } from "../../context/PokeContext";
import { StyledSelect } from "./style";

export const SelectRegion = () => {
  const { newPokedex } = useContext(PokeContext);

  return (
    <StyledSelect onChange={(event) => newPokedex(event.target.value)}>
      <option value={"2"}>Kanto</option>
      <option value={"7"}>Johto</option>
      <option value={"15"}>Hoenn</option>
      <option value={"6"}>Sinnoh</option>
      <option value={"9"}>Unova</option>
      <option value={"12"}>Central Kalos</option>
      <option value={"13"}>Coast Kalos</option>
      <option value={"14"}>Mountain Kalos</option>
      <option value={"21"}>Alola</option>
    </StyledSelect>
  );
};
