export interface iPokeData {
  abilities: iPokeAbility[];
  id: number;
  moves: iPokeMoves[];
  name: string;
  sprite: string;
  types: iPokeTypes[];
  height: number;
}

export interface iPokeNewData extends iPokeData {
  newIndex: number;
}

interface iPokeAbility {
  ability: iPokeInfo;
  is_hidden: boolean;
  slot: number;
}

export interface iPokeInfo {
  name: string;
  url: string;
}

interface iPokeMoves {
  move: iPokeInfo;
  version_group_details: iPokeMovesDetails[];
}

interface iPokeMovesDetails {
  level_learned_at: number;
  move_learn_method: iPokeInfo;
  version_group: iPokeInfo;
}

interface iPokeTypes {
  slot: number;
  type: iPokeInfo;
}

export interface iPokeTeam extends iPokeData {
  atacks: iAtackStats[];
}

export interface iAtackStats {
  name: string;
  pp: string;
}

export interface iPokeEntry {
  entry_number: number;
  pokemon_species: iPokeInfo[];
}

export interface iAbilityEffect {
  effect: string;
  language: iPokeInfo;
  short_effect: string;
}

export interface iAtackEffect {
  effect: string;
  language: iPokeInfo;
  short_effect: string;
}

export interface iFormAtack {
  atack: string;
}
