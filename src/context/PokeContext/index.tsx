import { createContext, useEffect, useState, useContext } from "react";
import { pokeApi } from "../../services/pokeApi";
import { ModalContext } from "../ModalContext";
import { iPokeData, iPokeInfo, iPokeTeam } from "./interfaces";

interface iPokeProviderProps {
  children: React.ReactNode;
}

interface iPokeProvider {
  pokemon: iPokeInfo[];
  pokeLoading: boolean;
  pokeTeam: iPokeTeam[];
  pokeTeamSlots: number;
  getPokeData: (data: string) => Promise<iPokeData>;
  addPokeTeam: () => void;
  removePokemon: (data: number) => void;
}

export const PokeContext = createContext({} as iPokeProvider);

export const PokeProvider = ({ children }: iPokeProviderProps) => {
  const [pokemon, setPokemon] = useState([] as iPokeInfo[]);
  const [pokeLoading, setPokeLoading] = useState(true);
  const [pokeTeam, setPokeTeam] = useState([] as iPokeTeam[]);
  const [pokeTeamSlots, setPokeTeamSlots] = useState(6);
  const { atackGroup, modalData, closeModal } = useContext(ModalContext);

  useEffect(() => {
    async function getPokemon() {
      try {
        const response = await pokeApi.get("pokemon", {
          params: {
            limit: 151,
            offset: 0,
          },
        });

        setPokemon(response.data.results);
        setPokeLoading(false);
      } catch (err) {
        console.log(err);
      }
    }

    getPokemon();
  }, []);

  const getPokeData = async (data: string) => {
    let pokeData = {} as iPokeData;
    try {
      const response = await pokeApi.get(data);

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

  return (
    <PokeContext.Provider
      value={{
        pokemon,
        pokeLoading,
        pokeTeam,
        pokeTeamSlots,
        getPokeData,
        addPokeTeam,
        removePokemon,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
