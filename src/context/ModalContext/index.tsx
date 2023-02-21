import { createContext, useState } from "react";
import {
  iWeak,
  findWeak,
} from "../../components/ModalInfoPoke/TypesModal/handleType";
import {
  iPokeData,
  iAtackStats,
  iFormAtack,
  iAbilityEffect,
  iAtackEffect,
} from "../../services/interfaces";
import { pokeApi } from "../../services/pokeApi";

interface iModalProviderProps {
  children: React.ReactNode;
}

interface iModalProvider {
  modalStatus: boolean;
  modalData: iPokeData;
  abilityDescription: string;
  atackDescription: string;
  atackGroup: iAtackStats[];
  pokeWeaks: iWeak[];
  loadingWeaks: boolean;
  openModal: (data: iPokeData) => void;
  closeModal: () => void;
  handleAbility: (data: string) => void;
  handleAtack: (data: string) => void;
  formAtack: (data: iFormAtack) => void;
  removeAtack: (data: iAtackStats) => void;
  handleWeak: () => void;
  formatName: (data:string)=>string
}

export const ModalContext = createContext({} as iModalProvider);

export const ModalProvider = ({ children }: iModalProviderProps) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [modalData, setModalData] = useState({} as iPokeData);
  const [abilityDescription, setAbilityDescription] = useState(
    "Descrição da habilidade"
  );
  const [atackDescription, setAtackDescription] = useState(
    "Descrição do ataque"
  );
  const [atackGroup, setAtackGroup] = useState([] as iAtackStats[]);
  const [pokeWeaks, setPokeWeaks] = useState([] as iWeak[]);
  const [loadingWeaks, setLoadingWeaks] = useState(true);

  const openModal = (data: iPokeData) => {
    setModalData(data);
    setModalStatus(true);
  };

  const closeModal = () => {
    setAbilityDescription("Descrição da habilidade");
    setAtackDescription("Descrição do ataque");
    setAtackGroup([]);
    setPokeWeaks([]);
    setLoadingWeaks(true);
    setModalStatus(false);
  };

  const handleAbility = async (evento: string) => {
    if (evento === "") {
      setAbilityDescription("Descrição da habilidade");
    } else {
      const resp = modalData.abilities.find(
        (element) => element.ability.name === evento
      );

      if (resp !== undefined) {
        let link = resp?.ability.url.slice(26);

        let description = await getAbility(link);

        setAbilityDescription(description);
      }
    }
  };

  const getAbility = async (data: string) => {
    let description = "";

    try {
      const resp = await pokeApi.get(data);

      const abilityData = resp.data.effect_entries.find(
        (element: iAbilityEffect) => element.language.name === "en"
      );

      description = abilityData.effect;
    } catch (err) {
      console.log(err);
    } finally {
      return description;
    }
  };

  const handleAtack = async (evento: string) => {
    if (evento === "") {
      setAtackDescription("Descrição do ataque");
    } else {
      let description = await getAtackEffect(evento);

      setAtackDescription(description);
    }
  };

  const getAtackEffect = async (data: string) => {
    let description = "";

    try {
      const resp = await pokeApi.get(data);

      const atackData = resp.data.effect_entries.find(
        (element: iAtackEffect) => element.language.name === "en"
      );

      description = atackData.effect;
    } catch (err) {
      console.log(err);
    } finally {
      return description;
    }
  };

  const formAtack = async (data: iFormAtack) => {
    let atack = await getAtackStats(data.atack);
    addAtack(atack);
  };

  const getAtackStats = async (data: string) => {
    let atack = {
      name: "",
      pp: "",
    };

    try {
      const resp = await pokeApi.get(data);

      const atackData = resp.data;

      atack.name = atackData.name;
      atack.pp = atackData.pp;
    } catch (err) {
      console.log(err);
    } finally {
      return atack;
    }
  };

  const addAtack = (newAtack: iAtackStats) => {
    if (atackGroup.length < 4) {
      setAtackGroup([...atackGroup, newAtack]);
    }
  };

  const removeAtack = (atack: iAtackStats) => {
    let newArray = [...atackGroup];

    newArray = newArray.filter((element) => element.name !== atack.name);

    setAtackGroup(newArray);
  };

  const handleWeak = () => {
    let newArray = [
      {
        name: "normal",
        multiplier: 1,
      },
      {
        name: "fire",
        multiplier: 1,
      },
      {
        name: "water",
        multiplier: 1,
      },
      {
        name: "grass",
        multiplier: 1,
      },
      {
        name: "electric",
        multiplier: 1,
      },
      {
        name: "rock",
        multiplier: 1,
      },
      {
        name: "ground",
        multiplier: 1,
      },
      {
        name: "flying",
        multiplier: 1,
      },
      {
        name: "poison",
        multiplier: 1,
      },
      {
        name: "bug",
        multiplier: 1,
      },
      {
        name: "ice",
        multiplier: 1,
      },
      {
        name: "fighting",
        multiplier: 1,
      },
      {
        name: "psychic",
        multiplier: 1,
      },
      {
        name: "ghost",
        multiplier: 1,
      },
      {
        name: "dragon",
        multiplier: 1,
      },
      {
        name: "dark",
        multiplier: 1,
      },
      {
        name: "steel",
        multiplier: 1,
      },
      {
        name: "fairy",
        multiplier: 1,
      },
    ];

    modalData.types.map((element) => {
      newArray = [...findWeak(element.type.name, newArray)];
    });

    setPokeWeaks([...newArray]);
    setLoadingWeaks(false);
  };

  const formatName = (name: string) => {
    const newName: string = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return newName;
  };

  return (
    <ModalContext.Provider
      value={{
        modalStatus,
        modalData,
        abilityDescription,
        atackDescription,
        atackGroup,
        pokeWeaks,
        loadingWeaks,
        openModal,
        closeModal,
        handleAbility,
        handleAtack,
        formAtack,
        removeAtack,
        handleWeak,
        formatName
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
