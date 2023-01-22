export interface iWeak {
  name: string;
  multiplier: number;
}

export const findWeak = (typeName: string, arrayBase: iWeak[]) => {
  let typeInfo = typesWeaks.find((element) => element.name === typeName);

  if (typeInfo === undefined) {
    return arrayBase;
  }

  typeInfo.weaks.map((element) => {
    let index = arrayBase.findIndex(
      (elementArray) => elementArray.name === element.name
    );

    if (index === -1) {
      return arrayBase;
    }

    arrayBase[index].multiplier *= element.multiplier;
  });

  return arrayBase;
};

const typesWeaks = [
  {
    name: "normal",
    weaks: [
      {
        name: "fighting",
        multiplier: 2,
      },
      {
        name: "ghost",
        multiplier: 0,
      },
    ],
  },
  {
    name: "fire",
    weaks: [
      {
        name: "fire",
        multiplier: 0.5,
      },
      {
        name: "water",
        multiplier: 2,
      },
      {
        name: "grass",
        multiplier: 0.5,
      },
      {
        name: "ice",
        multiplier: 0.5,
      },
      {
        name: "ground",
        multiplier: 2,
      },
      {
        name: "bug",
        multiplier: 0.5,
      },
      {
        name: "rock",
        multiplier: 2,
      },
      {
        name: "steel",
        multiplier: 0.5,
      },
      {
        name: "fairy",
        multiplier: 0.5,
      },
    ],
  },
  {
    name: "water",
    weaks: [
      {
        name: "fire",
        multiplier: 0.5,
      },
      {
        name: "water",
        multiplier: 0.5,
      },
      {
        name: "electric",
        multiplier: 2,
      },
      {
        name: "grass",
        multiplier: 2,
      },
      {
        name: "ice",
        multiplier: 0.5,
      },
      {
        name: "steel",
        multiplier: 0.5,
      },
    ],
  },
  {
    name: "grass",
    weaks: [
      {
        name: "fire",
        multiplier: 2,
      },
      {
        name: "water",
        multiplier: 0.5,
      },
      {
        name: "grass",
        multiplier: 0.5,
      },
      {
        name: "electric",
        multiplier: 0.5,
      },
      {
        name: "ice",
        multiplier: 2,
      },
      {
        name: "poison",
        multiplier: 2,
      },
      {
        name: "ground",
        multiplier: 0.5,
      },
      {
        name: "flying",
        multiplier: 2,
      },
      {
        name: "bug",
        multiplier: 2,
      },
    ],
  },
  {
    name: "electric",
    weaks: [
      {
        name: "electric",
        multiplier: 0.5,
      },
      {
        name: "ground",
        multiplier: 2,
      },
      {
        name: "flying",
        multiplier: 0.5,
      },
      {
        name: "steel",
        multiplier: 0.5,
      },
    ],
  },
  {
    name: "rock",
    weaks: [
      {
        name: "normal",
        multiplier: 0.5,
      },
      {
        name: "fire",
        multiplier: 0.5,
      },
      {
        name: "water",
        multiplier: 2,
      },
      {
        name: "grass",
        multiplier: 2,
      },
      {
        name: "fighting",
        multiplier: 2,
      },
      {
        name: "poison",
        multiplier: 0.5,
      },
      {
        name: "ground",
        multiplier: 2,
      },
      {
        name: "flying",
        multiplier: 0.5,
      },
      {
        name: "steel",
        multiplier: 2,
      },
    ],
  },
  {
    name: "ground",
    weaks: [
      {
        name: "water",
        multiplier: 2,
      },
      {
        name: "electric",
        multiplier: 0,
      },
      {
        name: "grass",
        multiplier: 2,
      },
      {
        name: "ice",
        multiplier: 2,
      },
      {
        name: "poison",
        multiplier: 0.5,
      },
      {
        name: "rock",
        multiplier: 0.5,
      },
    ],
  },
  {
    name: "flying",
    weaks: [
      {
        name: "electric",
        multiplier: 2,
      },
      {
        name: "grass",
        multiplier: 0.5,
      },
      {
        name: "ice",
        multiplier: 2,
      },
      {
        name: "fighting",
        multiplier: 0.5,
      },
      {
        name: "ground",
        multiplier: 0,
      },
      {
        name: "bug",
        multiplier: 0.5,
      },
      {
        name: "rock",
        multiplier: 2,
      },
    ],
  },
  {
    name: "poison",
    weaks: [
      {
        name: "grass",
        multiplier: 0.5,
      },
      {
        name: "fighting",
        multiplier: 0.5,
      },
      {
        name: "poison",
        multiplier: 0.5,
      },
      {
        name: "ground",
        multiplier: 2,
      },
      {
        name: "psychic",
        multiplier: 2,
      },
      {
        name: "bug",
        multiplier: 0.5,
      },
      {
        name: "fairy",
        multiplier: 2,
      },
    ],
  },
  {
    name: "bug",
    weaks: [
      {
        name: "fire",
        multiplier: 2,
      },
      {
        name: "grass",
        multiplier: 0.5,
      },
      {
        name: "fighting",
        multiplier: 0.5,
      },
      {
        name: "ground",
        multiplier: 0.5,
      },
      {
        name: "flying",
        multiplier: 2,
      },
      {
        name: "rock",
        multiplier: 2,
      },
    ],
  },
  {
    name: "ice",
    weaks: [
      {
        name: "fire",
        multiplier: 2,
      },
      {
        name: "ice",
        multiplier: 0.5,
      },
      {
        name: "fighting",
        multiplier: 2,
      },
      {
        name: "rock",
        multiplier: 2,
      },
      {
        name: "steel",
        multiplier: 2,
      },
    ],
  },
  {
    name: "fighting",
    weaks: [
      {
        name: "flying",
        multiplier: 2,
      },
      {
        name: "psychic",
        multiplier: 2,
      },
      {
        name: "bug",
        multiplier: 0.5,
      },
      {
        name: "rock",
        multiplier: 0.5,
      },
      {
        name: "dark",
        multiplier: 0.5,
      },
      {
        name: "fairy",
        multiplier: 2,
      },
    ],
  },
  {
    name: "psychic",
    weaks: [
      {
        name: "fighting",
        multiplier: 0.5,
      },
      {
        name: "psychic",
        multiplier: 0.5,
      },
      {
        name: "bug",
        multiplier: 2,
      },
      {
        name: "ghost",
        multiplier: 2,
      },
      {
        name: "dark",
        multiplier: 2,
      },
    ],
  },
  {
    name: "ghost",
    weaks: [
      {
        name: "normal",
        multiplier: 0,
      },
      {
        name: "fighting",
        multiplier: 0,
      },
      {
        name: "poison",
        multiplier: 0.5,
      },
      {
        name: "bug",
        multiplier: 0.5,
      },
      {
        name: "ghost",
        multiplier: 2,
      },
      {
        name: "dark",
        multiplier: 2,
      },
    ],
  },
  {
    name: "dragon",
    weaks: [
      {
        name: "fire",
        multiplier: 0.5,
      },
      {
        name: "water",
        multiplier: 0.5,
      },
      {
        name: "electric",
        multiplier: 0.5,
      },
      {
        name: "grass",
        multiplier: 0.5,
      },
      {
        name: "ice",
        multiplier: 2,
      },
      {
        name: "dragon",
        multiplier: 2,
      },
      {
        name: "fairy",
        multiplier: 2,
      },
    ],
  },
  {
    name: "dark",
    weaks: [
      {
        name: "fighting",
        multiplier: 2,
      },
      {
        name: "psychic",
        multiplier: 0,
      },
      {
        name: "bug",
        multiplier: 2,
      },
      {
        name: "ghost",
        multiplier: 0.5,
      },
      {
        name: "dark",
        multiplier: 0.5,
      },
      {
        name: "fairy",
        multiplier: 2,
      },
    ],
  },
  {
    name: "steel",
    weaks: [
      {
        name: "normal",
        multiplier: 0.5,
      },
      {
        name: "fire",
        multiplier: 2,
      },
      {
        name: "grass",
        multiplier: 0.5,
      },
      {
        name: "ice",
        multiplier: 0.5,
      },
      {
        name: "fighting",
        multiplier: 2,
      },
      {
        name: "poison",
        multiplier: 0,
      },
      {
        name: "ground",
        multiplier: 2,
      },
      {
        name: "flying",
        multiplier: 0.5,
      },
      {
        name: "psychic",
        multiplier: 0.5,
      },
      {
        name: "bug",
        multiplier: 0.5,
      },
      {
        name: "rock",
        multiplier: 0.5,
      },
      {
        name: "dragon",
        multiplier: 0.5,
      },
      {
        name: "steel",
        multiplier: 0.5,
      },
      {
        name: "fairy",
        multiplier: 0.5,
      },
    ],
  },
  {
    name: "fairy",
    weaks: [
      {
        name: "fighting",
        multiplier: 0.5,
      },
      {
        name: "poison",
        multiplier: 2,
      },
      {
        name: "bug",
        multiplier: 0.5,
      },
      {
        name: "dragon",
        multiplier: 0,
      },
      {
        name: "dark",
        multiplier: 0.5,
      },
      {
        name: "steel",
        multiplier: 2,
      },
    ],
  },
];
