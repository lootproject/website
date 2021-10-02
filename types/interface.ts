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
