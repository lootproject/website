import type { ReactElement } from "react";
import { Card } from "@components/Card";
interface CardDetails {
    name: String;
    description: String;
    project: Array<Project>;
}

interface Project {
    name: String;
    description: String;
    whatToDo: String;
    roadMap: String;
    website: String;
    contract: String;
}

export function CardRow(props: CardDetails) {
    return (
        <div className="my-20">
            <div className="text-center">
                <h2>{props.name}</h2>
                <p className="text-2xl mb-4">{props.description}</p>
            </div>

            <div className="flex flex-wrap">
                {props.project.map(({ name, description, whatToDo, roadMap, website, contract }, i) => {
                    return (
                        <Card key={i} name={name} description={description} whatToDo={whatToDo} roadMap={roadMap} website={website} contract={contract} />
                    )
                })}
            </div>
        </div>
    );
}
