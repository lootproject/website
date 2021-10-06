interface CardDetails {
    name: String;
    description: String;
    project: Array<Project>;
}

interface Project {
    name: String;
    description: String;
    whatToDo: Array<Content>;
    roadMap?: Content;
    website?: Content;
    contract?: Content;
    twitter?: Content;
    discord?: Content;
    opensea?: Content;
    github?: Content;
    mintPrice?: Price;
    image?: String;
    neededProject?: Project;
}

interface Content {
    content?: String,
    url?: String
}

interface Price {
    mint?: Number
}

export type {
    CardDetails,
    Project
}