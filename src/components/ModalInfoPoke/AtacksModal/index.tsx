import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ModalContext } from "../../../context/ModalContext";
import { atackSchema } from "./atackSchema";
import { StyledSection } from "./style";
import { iFormAtack } from "../../../services/interfaces";

export const AtackModal = () => {
  const {
    modalData,
    atackDescription,
    atackGroup,
    handleAtack,
    formAtack,
    removeAtack,
  } = useContext(ModalContext);

  const { register, handleSubmit } = useForm<iFormAtack>({
    resolver: yupResolver(atackSchema),
  });

  return (
    <StyledSection className="secondSec">
      <form className="atackSelect" onSubmit={handleSubmit(formAtack)}>
        <select
          {...register("atack")}
          onChange={(event) => handleAtack(event.target.value)}
        >
          <option value="">Ataques</option>
          {modalData.moves.map((element, index) => (
            <option key={index} value={element.move.url.slice(26)}>
              {element.move.name}
            </option>
          ))}
        </select>
        <button type="submit">+</button>
      </form>
      <div className="description">{atackDescription}</div>
      <ul>
        {atackGroup.length === 0 ? (
          <p>Adicione ataques</p>
        ) : (
          atackGroup.map((element) => (
            <li>
              <div>
                <p>{element.name}</p>
                <span>
                  {element.pp}/{element.pp}
                </span>
              </div>
              <button onClick={() => removeAtack(element)}>X</button>
            </li>
          ))
        )}
      </ul>
    </StyledSection>
  );
};
