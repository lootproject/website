import { Project } from "../types/interface";
const inventory: Project = {
    name: "0xInventory",
    description: " Loot bag and item rarity explorer by @scotato",
    whatToDo: [
        {
            content: "Check your loot",
            url: "https://0xinventory.app/"
        },
    ],
    github: {
        url: "https://github.com/scotato/inventory"
    },
};

const lootSubgraph: Project = {
    name: "Loot Subgraph",
    description: "Loot bag, owner, and transfer subgraph by @shahruz",
    whatToDo: [
        {
            content: "subgraph",
            url: "https://thegraph.com/hosted-service/subgraph/shahruz/loot"
        },
    ],
    github: {
        url: "https://github.com/scotato/inventory"
    },
};
const lootRarity: Project = {
    name: "Loot Rarity",
    description: " Loot attributes and rarities sheet by @AustinGreen",
    whatToDo: [
        {
            content: "Google sheet",
            url: "https://docs.google.com/spreadsheets/d/1Al0Yi-tM7K_05pCKjkQtSJjwbV2jMfac1i_oC4j2EYI/edit#gid=1666761696"
        },
    ],
    github: {
        url: "https://github.com/scotato/inventory"
    },
};
const lootSdk: Project = {
    name: "Loot SDK",
    description: "TypeScript wrapper to loot subgraph by @shahruz",
    whatToDo: [
        {
            content: "Repo",
            url: "https://github.com/divinerobes/loot-sdk"
        },
    ],
    github: {
        url: "https://github.com/divinerobes/loot-sdk"
    },
};
const lootJs: Project = {
    name: "Loot.js",
    description: "A javascript library that allows you to interact with loot and more loot contracts by @0x84A",
    whatToDo: [
        {
            content: "Repo",
            url: "https://github.com/0x84A/loot.js"
        },
    ],
    github: {
        url: "https://github.com/0x84A/loot.js"
    },
};

const lootComponents: Project = {
    name: "Loot Components",
    description: "Utility contract to easily interact with Loot properties solidity.",
    whatToDo: [
        {
            content: "Repo",
            url: "https://github.com/0x84A/loot.js"
        },
    ],
    github: {
        url: "https://etherscan.io/address/0x3eb43b1545a360d1D065CB7539339363dFD445F3#code"
    },
};
const pixelGenerator: Project = {
    name: "Pixel Character Generator",
    description: "Generates pixel characters from loot bags",
    whatToDo: [
        {
            content: "Generate",
            url: "https://www.lootcharacter.com/"
        },
    ],
};
const lootSound: Project = {
    name: "Loot sounds",
    description: "Sounds for loot attributes by @geeogi",
    whatToDo: [
        {
            content: "Listen",
            url: "https://lootsound.com/"
        },
    ],
    github: {
        url: "https://github.com/geeogi/lootsound"
    },
};
const lootBooklet: Project = {
    name: "Loot Rarity Bookmarklet",
    description: "Bookmarklet to add rarity colors to OpenSea by @bpierre",
    whatToDo: [
        {
            content: "Add to Browser",
            url: "https://loot-rarity-for-opensea.bpier.re/"
        },
    ],
    github: {
        url: "https://github.com/bpierre/loot-rarity"
    },
};
export {
    inventory,
    lootSubgraph,
    lootRarity,
    lootSdk,
    lootComponents,
    lootJs,
    pixelGenerator,
    lootSound,
    lootBooklet
}