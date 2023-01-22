import { ModalContext } from "../../../context/ModalContext";
import { TypesPoke } from "../../TypesPoke";
import { types } from "../../TypesPoke/dataTypes";
import { findWeak, iWeak, weaksBase } from "./handleType";
import { StyledDiv } from "./style";
import { useContext, useEffect, useState } from "react";

export const TypesModal = () => {
  const { modalData } = useContext(ModalContext);
  const [pokeWeaks, setPokeWeaks] = useState(weaksBase as iWeak[]);
  const [loadingWeaks, setLoadingWeaks] = useState(true);

  useEffect(() => {
    const handleWeak = () => {
      let newArray = [...pokeWeaks];

      modalData.types.map((element) => {
        newArray = [...findWeak(element.type.name, newArray)];
      });

      setPokeWeaks([...newArray]);
      setLoadingWeaks(false);
    };
    handleWeak();
  }, []);

  if (loadingWeaks) {
    return null;
  }

  return (
    <StyledDiv>
      <p>Fraquezas</p>
      <ul>
        {types.map((element, index) => (
          <li key={index}>
            <TypesPoke name={element.name} />
            <span>x{pokeWeaks[index].multiplier}</span>
          </li>
        ))}
      </ul>
    </StyledDiv>
  );
};
