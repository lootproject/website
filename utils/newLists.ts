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
  genesisAdventurer,
  lootMartAssemble
} from "./projects"

export const onlyLoot = [
  {
    name: "",
    description: "",
    project: [
      loot,
    ],
  },
];

export const whatToGet = [
  {
    name: "",
    description: "",
    project: [
      sLoot,
      mLoot,
      genesisAdventurer
    ],
  },
];

export const getAfterLoot = [
  {
    name: "",
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
    name: "",
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
      lootMartAssemble,
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
    name: "",
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