import { iPokeEntry, iPokeInfo } from "./interfaces";
import { pokeApi } from "./pokeApi";

export const getRegionPokedex = async (index: string) => {
  try {
    const { data } = await pokeApi.get(`pokedex/${index}`);

    const pokedex: iPokeInfo[] = data.pokemon_entries.map(
      (element: iPokeEntry) => element.pokemon_species
    );

    return pokedex;
  } catch (err) {
    console.log(err);
  }
};
