export interface iAbilityEffect {
  effect: string;
  language: iAbilityLanguage;
  short_effect: string;
}

interface iAbilityLanguage {
  name: string;
  url: string;
}

export interface iAtackEffect {
  effect: string;
  language: iAtackLanguage;
  short_effect: string;
}

interface iAtackLanguage {
  name: string;
  url: string;
}

export interface iFormAtack {
  atack: string;
}

export interface iAtackStats {
  name: string;
  pp: string;
}
