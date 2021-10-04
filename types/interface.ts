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
}

interface Content {
    content?: String,
    url?: String
}

export type {
    CardDetails,
    Project
}