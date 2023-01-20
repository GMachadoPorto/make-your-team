import { useContext, useEffect, useState } from "react";
import { ModalContext } from "../../../context/ModalContext";
import pokeball from "../../../assets/pokeball.svg";
import { TypesPoke } from "../../TypesPoke";
import { iPokeData } from "../../../context/PokeContext/interfaces";
import { pokeApi } from "../../../services/pokeApi";
import { StyledLi } from "./style";

interface iCardPokemon {
  url: string;
}

export const CardPokemon = ({ url }: iCardPokemon) => {
  const { openModal } = useContext(ModalContext);
  const [pokeDataStatus, setPokeDataStatus] = useState(false);
  const [pokeData, setPokeData] = useState({} as iPokeData);

  useEffect(() => {
    const getPokeData = async (data: string) => {
      try {
        const response = await pokeApi.get(data);

        let newData = {
          abilities: response.data.abilities,
          id: response.data.id,
          moves: response.data.moves,
          name: response.data.name,
          sprite: response.data.sprites.front_default,
          types: response.data.types,
          height: response.data.height,
        };
        setPokeData(newData);
        setPokeDataStatus(true);
      } catch (err) {
        console.log(err);
      }
    };
    getPokeData(url);
  }, []);

  const formatName = (name: string) => {
    let newName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return newName;
  };

  return (
    <StyledLi height={pokeData.height} onClick={() => openModal(pokeData)}>
      <img src={pokeball} alt="pokeball" />
      {pokeDataStatus && (
        <>
          <img src={pokeData.sprite} alt={pokeData.name} className="pokemon" />
          <p>{formatName(pokeData.name)}</p>
          <div>
            {pokeData.types.map((element, index) => (
              <TypesPoke key={index} name={element.type.name} />
            ))}
          </div>
        </>
      )}
    </StyledLi>
  );
};
