import { ReactElement, useRef, useState } from "react";
import { Card } from "@components/Card";
import { CardDetails } from "../types/interface";
import { useOnClickOutside } from "usehooks-ts";

export function CardRow(props: CardDetails): ReactElement {
  const [selected, setSelected] = useState(-1);
  const cardRef = useRef(null);

  useOnClickOutside(cardRef, () => {
    setSelected(-1);
  });
  function onCardSelect(index: number) {
    setSelected(selected === index ? -1 : index);
  }

  return (
    <div ref={cardRef} className="my-10 sm:my-20">
      <div className="text-center px-4">
        <h2>{props.name}</h2>
        <p className="sm:text-2xl mb-4">{props.description}</p>
      </div>

      <div className="flex flex-wrap justify-center">
        {props.project.map((project, i) => {
          return (
            <Card
              key={i}
              project={project}
              selected={selected === i}
              onClick={() => onCardSelect(i)}
            />
          );
        })}
      </div>
    </div>
  );
}
