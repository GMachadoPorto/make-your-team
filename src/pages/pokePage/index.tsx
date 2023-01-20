import { Header } from "../../components/Header";
import { ListPokemon } from "../../components/ListPokemon";
import { ModalInfoPoke } from "../../components/ModalInfoPoke";
import { PokeTeam } from "../../components/PokeTeam";
import { SearchPokeName } from "../../components/SearchPokeName";
import { SelectRegion } from "../../components/SelectRegion";
import { StyledDiv } from "./style";

import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";

export const PokePage = () => {
  const { modalStatus } = useContext(ModalContext);

  return (
    <>
      {modalStatus && <ModalInfoPoke />}
      <StyledDiv>
        <Header />
        <PokeTeam />
        <section className="filters">
          <div className="container">
            <SelectRegion />
            <SearchPokeName />
          </div>
        </section>
        <ListPokemon />
      </StyledDiv>
    </>
  );
};
