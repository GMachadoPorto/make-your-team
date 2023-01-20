import { createContext, useState } from "react";
import { pokeApi } from "../../services/pokeApi";
import { iPokeData } from "../PokeContext/interfaces";
import {
  iAbilityEffect,
  iAtackEffect,
  iAtackStats,
  iFormAtack,
} from "./interfaces";

interface iModalProviderProps {
  children: React.ReactNode;
}

interface iModalProvider {
  modalStatus: boolean;
  modalData: iPokeData;
  abilityDescription: string;
  atackDescription: string;
  atackGroup: iAtackStats[];
  openModal: (data: iPokeData) => void;
  closeModal: () => void;
  handleAbility: (data: string) => void;
  handleAtack: (data: string) => void;
  formAtack: (data: iFormAtack) => void;
  removeAtack: (data: iAtackStats) => void;
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

  const openModal = (data: iPokeData) => {
    setModalStatus(true);
    setModalData(data);
  };

  const closeModal = () => {
    setAtackDescription("Descrição do ataque");
    setAtackGroup([]);
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

  return (
    <ModalContext.Provider
      value={{
        modalStatus,
        modalData,
        abilityDescription,
        atackDescription,
        atackGroup,
        openModal,
        closeModal,
        handleAbility,
        handleAtack,
        formAtack,
        removeAtack,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
