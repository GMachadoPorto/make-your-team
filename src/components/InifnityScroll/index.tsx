import { useContext, useEffect, useRef } from "react";
import { PokeContext } from "../../context/PokeContext";

export const InfinityScroll = () => {
  const { attTotalCards } = useContext(PokeContext);

  const divScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0) {
        attTotalCards();
      }
    });

    if (divScrollRef.current) {
      intersectionObserver.observe(divScrollRef.current);
    }
  }, [divScrollRef]);

  return <div ref={divScrollRef} />;
};
