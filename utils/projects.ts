import { Project } from "../types/interface";
const loot: Project = {
  name: "Loot (for Adventurers)",
  description: "For all things Loot and derivatives (note: high traffic)",
  whatToDo: [
    {
      content: "Trade on Open Sea",
      url: "https://opensea.io/collection/lootproject"
    },
    {
      content: "Trade on Loot.exchange",
      url: "https://www.loot.exchange/"
    }
  ],
  contract: {
    content: "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/lootproject"
  },
  discord: {
    url: "https://discord.com/invite/23gbrJ6pje"
  },
  opensea: {
    url: "https://opensea.io/collection/lootproject"
  },
  image: "https://storage.opensea.io/files/2399c9be55fa88c38397fe746b75b938.svg"
};
const adventureGold: Project = {
  name: "Adventure Gold $AGLD",
  description: "The reserve Gold of the Lootverse.",
  whatToDo: [
    {
      content: "Trade on Uniswap",
      url: "https://uniswap.org/"
    }
  ],
  contract: {
    content: "0x32353a6c91143bfd6c7d363b546e62a9a2489a20",
    url: "https://etherscan.io/"
  }
};

const bibliotheca: Project = {
  name: "Bibliotheca",
  description:
    "Graphs Loot projects so you can see your progress in the LootVerse.",
  whatToDo: [
    {
      content: "See Your Entire Adventurer",
      url: "https://bibliothecaforloot.com/"
    },
    {
      content: "Search for Genesis Mana",
      url: "https://bibliothecaforloot.com/loot"
    },
    {
      content: "Mint a Realm",
      url: "https://bibliothecaforloot.com/realms/mint"
    }
  ],
  contract: {
    content: "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7", // TODO: this is loot"s contract
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/lootgraph"
  },
  discord: {
    url: "https://discord.com/invite/23gbrJ6pje" // TODO: loot discord
  },
  opensea: {
    url: "https://opensea.io/collection/lootproject"
  }
};

const genesisMana: Project = {
  name: "Distil Mana from a Lootbag",
  description: "Use your Lootbag and distil the Orders items.",
  whatToDo: [
    {
      content: "Distil",
      url: "https://genesisproject.notion.site/Genesis-Adventurer-cc41f0c184ab481aafb0e1056a48727e"
    },
    {
      content: "Trade",
      url: "https://genesisproject.notion.site/Genesis-Adventurer-cc41f0c184ab481aafb0e1056a48727e"
    }
  ],
  contract: {
    content: "0x8db687aceb92c66f013e1d614137238cc698fedb"
  },
  twitter: {
    url: "https://twitter.com/GenesisLoot"
  },
  discord: {
    url: "https://discord.gg/cjA4g66Ett" // TODO: change personal links to general links
  },
  image:
    "https://storage.opensea.io/files/83c07d8f6b1647e1a4111d1adff10fce.svg",
  neededProject: loot,
  mintPrice: {
    mint: 0
  }
};
const lootCharacter: Project = {
  name: "Loot Character",
  description: "Generate your Loot Character.",
  whatToDo: [
    {
      content: "Generate",
      url: "https://www.lootcharacter.com/"
    }
  ],
  website: {
    url: "https://www.lootcharacter.com/"
  },
  contract: {
    content: "0x5bf553e149d2e0d4725cebee5ec18ba49b6ffc33",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/LootCharacter"
  },
  neededProject: loot,
  image:
    "https://lh3.googleusercontent.com/uZ4mQ4LlAYyREh7KRr4uefjs_hbjYEPmnqUhNqTRhLDwgk9pnnz2ojgHXglLeLtnkOMNlIwoU7TDqAOr7cE4IXiCWwnD40RUDoXWMg=w600"
};
const lootExchange: Project = {
  name: "Loot Exchange",
  description: "Trade Loot items. All commission goes to the Loot DAO.",
  whatToDo: [
    {
      content: "Trade Loot",
      url: "https://www.loot.exchange/"
    }
  ],
  contract: {
    content: "0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7", // TODO: this is loot"s contract
    url: "https://etherscan.io/"
  },
  website: {
    url: "https://www.loot.exchange/"
  },
  twitter: {
    url: "https://twitter.com/LootExchange"
  },
  discord: {
    url: "https://discord.com/invite/hspfM6AE" // TODO: discord from twitter not working
  },
  opensea: {
    url: "https://opensea.io/collection/lootproject"
  }
};
const lootMart: Project = {
  name: "Upgrade your Warrior with LootMart",
  description: "Distil items from your Lootbags and upgrade your Adventurer.",
  whatToDo: [
    {
      content: "Distil",
      url: "https://www.lootmart.xyz/"
    },
    {
      content: "Trade",
      url: "https://opensea.io/collection/lootmart"
    }
  ],
  website: {
    url: "https://www.lootmart.xyz/"
  },
  contract: {
    content: "0x9b51a88cffe9b50e043661ddd7f492cc3888fcbf",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/lootmart_xyz"
  },
  discord: {
    url: "https://discord.gg/w8txv8bvWd" // TODO: not yet public
  },
  neededProject: loot
};
const lootRarity: Project = {
  name: "Loot Rarity",
  description: "For all things Loot and derivatives (note: high traffic)",
  whatToDo: [
    {
      content: "Check loot item rarities",
      url: "https://loot-rarity.bpier.re/"
    }
  ],
  twitter: {
    url: "https://twitter.com/lootproject"
  },
  discord: {
    url: "https://discord.com/invite/23gbrJ6pje"
  }
};
const lootWatcher: Project = {
  name: "Loot Watcher",
  description: "The easiest place to track the Loot ecosystem.",
  whatToDo: [
    {
      content: "View Loot Ecosystem",
      url: "https://www.lootwatcher.com/"
    }
  ],
  twitter: {
    url: "https://twitter.com/lootwatcher_"
  },
  discord: {
    url: "https://discord.gg/MedPJqybrX"
  },
  website: {
    url: "https://www.lootwatcher.com/"
  }
};
const mLoot: Project = {
  name: "mloot",
  description:
    "mLoot is more loot. 1.5 million loot bags with 250,000 more per year. They are free to claim.",
  whatToDo: [
    {
      content: "Trade on Open Sea",
      url: "https://opensea.io/collection/more-loot"
    }
  ],
  contract: {
    content: "0x1dfe7Ca09e99d10835Bf73044a23B73Fc20623DF",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/dhof/status/1434180216444923923?lang=en"
  },
  discord: {
    url: "https://discord.com/invite/23gbrJ6pje"
  },
  opensea: {
    url: "https://opensea.io/collection/more-loot"
  },
  mintPrice: {
    mint: 0
  },
  image: "https://storage.opensea.io/files/37a1f024f925e27c29e5f8bcf2c85c7a.svg"
};

const NFTx: Project = {
  name: "NFTx",
  description:
    "Shop and earn yield on the most liquid decentralized NFT marketplace.",
  whatToDo: [
    {
      content: "Trade NFTs",
      url: "https://nftx.io/"
    }
  ],
  website: {
    url: "https://nftx.io/"
  },
  twitter: {
    url: "https://twitter.com/NFTX_"
  },
  discord: {
    url: "https://discord.com/invite/hytQVM5ZxR"
  },
  github: {
    url: "https://github.com/NFTX-project"
  }
};

const openSea: Project = {
  name: "Open Sea",
  description: "The world's first & largest NFT marketplace",
  whatToDo: [
    {
      content: "Trade ",
      url: "https://opensea.io/collection/lootproject"
    }
  ],
  twitter: {
    url: "https://twitter.com/opensea"
  },
  discord: {
    url: "https://discord.gg/opensea"
  },
  website: {
    url: "https://opensea.io/collection/lootproject"
  }
};

const realms: Project = {
  name: "Explore a Realm",
  description: "Procedurally generated Realms for Adventurers to explore.",
  whatToDo: [
    {
      content: "Mint Realms",
      url: "https://bibliothecaforloot.com/realms/mint"
    },
    {
      content: "Buy or Trade",
      url: "https://opensea.io/collection/lootrealms"
    }
  ],
  website: {
    url: "https://bibliothecaforloot.com/realms"
  },
  contract: {
    content: "0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d"
  },
  twitter: {
    url: "https://twitter.com/LootRealms"
  },
  discord: {
    url: "https://discord.gg/hTYmwpvCDq"
  },
  mintPrice: {
    mint: 0.1
  },
  image: "https://storage.opensea.io/files/2468d5c3fc290400d053a68e149c9d1c.svg"
};
const stakeARealm: Project = {
  name: "Stake a Realm",
  description:
    "Stake your Realm & Generate resources to trade and battle with.",
  whatToDo: [
    {
      content: "Stake (Coming Soon)",
      url: "https://bibliothecaforloot.com/roadmap"
    }
  ],
  twitter: {
    url: "https://twitter.com/LootRealms"
  },
  discord: {
    url: "https://discord.gg/hTYmwpvCDq"
  },
  neededProject: realms
};

const sLoot: Project = {
  name: "Synthetic Loot",
  description:
    "There are 2^160 potential different sLoot bags. View them in the browser.",
  whatToDo: [
    {
      content: "View your sLoot",
      url: "https://loot.stephancill.co.za/#/"
    }
  ],
  contract: {
    content: "0x869ad3dfb0f9acb9094ba85228008981be6dbdde",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/lootproject"
  },
  discord: {
    url: "https://discord.com/invite/23gbrJ6pje"
  },
  opensea: {
    url: "https://opensea.io/collection/lootproject"
  },
  image: "https://storage.opensea.io/files/77a1d1f1287da1cc78c041361ab899e0.svg"
};

const genesisWarrior: Project = {
  name: "The Genesis Project",
  description: "Distill your Loot bags into Genesis mana.",
  whatToDo: [
    {
      content: "Distill Mana",
      url: "https://twitter.com/genesisloot/status/1436084847827570689?s=21"
    },
    {
      content: "Trade on OS",
      url: "https://opensea.io/collection/genesis-mana"
    },
    {
      content: "Trade on NFTx",
      url: "https://nftx.io/vault/0x2d77f5b3efa51821ad6483adaf38ea4cb1824cc5/buy/"
    }
  ],
  website: {
    url: "https://genesisproject.xyz/"
  },
  contract: {
    content: "0x2d77f5b3efa51821ad6483adaf38ea4cb1824cc5"
    // TODO: actual genesisMana: 0xf4B6040A4b1B30f1d1691699a8F3BF957b03e463
  },
  twitter: {
    url: "https://twitter.com/GenesisLoot"
  },
  discord: {
    url: "https://discord.gg/w8txv8bvWd"
  },
  neededProject: genesisMana,
  mintPrice: {
    mint: 0.25
  }
};

export {
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
};
