import type { ReactElement } from "react";
import { Card } from "@components/Card";
import { CardDetails, Project } from "../types/interface"

export function CardRow(props: CardDetails) {
    return (
        <div className="my-10 sm:my-20">
            <div className="text-center px-4">
                <h2>{props.name}</h2>
                <p className="sm:text-2xl mb-4">{props.description}</p>
            </div>

            <div className="flex flex-wrap">
                {props.project.map(({ name, description, whatToDo, roadMap, website, contract, twitter, discord, opensea }, i) => {
                    return (
                        <Card key={i} name={name} description={description} whatToDo={whatToDo} roadMap={roadMap} website={website} contract={contract} twitter={twitter} discord={discord} opensea={opensea} />
                    )
                })}
            </div>
        </div>
    );
}
