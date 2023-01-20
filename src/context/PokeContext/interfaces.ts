import { iAtackStats } from "../ModalContext/interfaces";

export interface iPokeData {
  abilities: iPokeAbility[];
  id: number;
  moves: iPokeMoves[];
  name: string;
  sprite: string;
  types: iPokeTypes[];
  height: number;
}

interface iPokeAbility {
  ability: iPokeAbalitityInfo;
  is_hidden: boolean;
  slot: number;
}

interface iPokeAbalitityInfo {
  name: string;
  url: string;
}

interface iPokeMoves {
  move: iPokeMovesData;
  version_group_details: iPokeMovesDetails[];
}

interface iPokeMovesData {
  name: string;
  url: string;
}

interface iPokeMovesDetails {
  level_learned_at: number;
  move_learn_method: iPokeMoveDetailsLearn;
  version_group: iPokeMoveDetailsGroup;
}

interface iPokeMoveDetailsLearn {
  name: string;
  url: string;
}

interface iPokeMoveDetailsGroup {
  name: string;
  url: string;
}

interface iPokeTypes {
  slot: number;
  type: iPokeTypeData;
}

interface iPokeTypeData {
  name: string;
  url: string;
}

export interface iPokeInfo {
  name: string;
  url: string;
}

export interface iPokeTeam {
  atacks: iAtackStats[];
  abilities: iPokeAbility[];
  id: number;
  moves: iPokeMoves[];
  name: string;
  sprite: string;
  types: iPokeTypes[];
  height: number;
}
