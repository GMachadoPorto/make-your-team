import { createContext, useEffect, useState, useContext } from "react";
import { getRegionPokedex } from "../../services/getRegionPokedex";
import {
  iPokeTeam,
  iPokeData,
  iPokeInfo,
  iPokeNewData,
} from "../../services/interfaces";
import { pokeApi } from "../../services/pokeApi";
import { ModalContext } from "../ModalContext";

interface iPokeProviderProps {
  children: React.ReactNode;
}

interface iPokeProvider {
  pokemon: iPokeNewData[];
  pokeLoading: boolean;
  pokeTeam: iPokeTeam[];
  pokeTeamSlots: number;
  pokemonFilter: iPokeNewData[];
  newPokedex: (data: string) => void;
  addPokeTeam: () => void;
  removePokemon: (data: number) => void;
  attPokemonFilter: (data: string) => void;
}

export const PokeContext = createContext({} as iPokeProvider);

export const PokeProvider = ({ children }: iPokeProviderProps) => {
  const [pokedexIndex, setPokedexIndex] = useState("2");
  const [pokemon, setPokemon] = useState([] as iPokeNewData[]);
  const [pokeLoading, setPokeLoading] = useState(true);
  const [pokeTeam, setPokeTeam] = useState([] as iPokeTeam[]);
  const [pokeTeamSlots, setPokeTeamSlots] = useState(6);
  const { atackGroup, modalData, closeModal } = useContext(ModalContext);
  const [pokemonFilter, setPokemonFilter] = useState([] as iPokeNewData[]);

  useEffect(() => {
    async function getPokemon() {
      setPokemon([]);
      setPokeLoading(true);
      setPokemonFilter([]);

      try {
        const pokedex: iPokeInfo[] | undefined = await getRegionPokedex(
          pokedexIndex
        );

        if (pokedex) {
          const allPokeData: iPokeNewData[] = [];

          for (let i = 0; i < pokedex.length; i++) {
            const urlIndexPokemon: string = pokedex[i].url.slice(42);

            const pokeData: iPokeData = await getPokeData(urlIndexPokemon);

            const newPokeData: iPokeNewData = { ...pokeData, newIndex: i };

            allPokeData.push(newPokeData);
          }

          let allPokemon: iPokeNewData[] = allPokeData.sort((x, y) =>
            x.newIndex < y.newIndex ? -1 : 0
          );

          setPokemon(allPokemon);
          setPokemonFilter(allPokemon);
          setPokeLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getPokemon();
  }, [pokedexIndex]);

  const newPokedex = (index: string) => {
    setPokedexIndex(index);
  };

  const getPokeData = async (urlIndex: string) => {
    let pokeData = {} as iPokeData;

    try {
      const response = await pokeApi.get(`pokemon/${urlIndex}`);

      pokeData = {
        abilities: response.data.abilities,
        id: response.data.id,
        moves: response.data.moves,
        name: response.data.name,
        sprite: response.data.sprites.front_default,
        types: response.data.types,
        height: response.data.height,
      };
    } catch (err) {
      console.log(err);
    } finally {
      return pokeData;
    }
  };

  const addPokeTeam = () => {
    let newPoke = {
      ...modalData,
      atacks: [...atackGroup],
    };

    if (pokeTeam.length < 6) {
      setPokeTeam([...pokeTeam, newPoke]);
      setPokeTeamSlots(pokeTeamSlots - 1);
      closeModal();
    }
  };

  const removePokemon = (position: number) => {
    let newArray = [...pokeTeam];

    newArray.splice(position, 1);

    setPokeTeam(newArray);
    setPokeTeamSlots(pokeTeamSlots + 1);
  };

  const attPokemonFilter = (name: string) => {
    let newPoke: iPokeNewData[];

    if (name !== "") {
      newPoke = pokemon.filter((element) =>
        element.name.includes(name.toLowerCase())
      );
    } else {
      newPoke = pokemon;
    }

    setPokemonFilter(newPoke);
  };

  return (
    <PokeContext.Provider
      value={{
        pokemon,
        pokeLoading,
        pokeTeam,
        pokeTeamSlots,
        pokemonFilter,
        newPokedex,
        addPokeTeam,
        removePokemon,
        attPokemonFilter,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
