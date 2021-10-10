import {
  loot,
  adventureGold,
  bibliotheca,
  genesisMana,
  lootCharacter,
  lootExchange,
  lootMart,
  lootRarity,
  lootWatcher,
  mLoot,
  NFTx,
  openSea,
  realms,
  stakeARealm,
  sLoot,
  genesisWarrior
} from "./projects"

export const whatToGet = [
  {
    name: "",
    description: "",
    project: [
      loot,
      sLoot,
      mLoot,
    ],
  },
];

export const getAfterLoot = [
  {
    name: "Mint, Claim or Trade additional items",
    description: "",
    project: [
      adventureGold,
      realms,
      genesisMana,
      lootMart,
    ],
  },
];

export const getYourCharacter = [
  {
    name: "Get your Character",
    description: "",
    project: [
      lootMart,
      lootCharacter,
    ],
  },
];

export const whatToDo = [
  {
    name: "",
    description: "",
    project: [
      lootMart,
      genesisWarrior,
      stakeARealm,
    ],
  },
];

export const marketPlaces = [
  {
    name: "",
    description: "",
    project: [
      lootExchange,
      lootMart,
      NFTx,
      openSea,
    ],
  },
];

export const resources = [
  {
    name: "Discovery Tools",
    description: "",
    project: [
      lootWatcher,
      bibliotheca,
    ],
  }
];

export const build = [
  {
    name: "Rarity Checkers",
    description: "These are unaudited tools. Proceed at your own risk.",
    project: [
      lootWatcher,
      bibliotheca,
    ],
  },
  {
    name: "Developer Tools",
    description: "",
    project: [
      lootRarity
    ],
  },
];