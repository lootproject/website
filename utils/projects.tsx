import SyntheticLoot from "@components/SyntheticLoot";
import { Project } from "../types/interface";
const loot: Project = {
  name: "Loot (for Adventurers)",
  description: "The original 8,000 OG Loot bags. ",
  whatToDo: [
    {
      content: "Trade on Loot.exchange",
      url: "https://www.loot.exchange/"
    },
    {
      content: "Trade on Open Sea",
      url: "https://opensea.io/collection/lootproject"
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
  image: "/lootheader.svg"
};

const mLoot: Project = {
  name: "mloot",
  description:
    "1.5 million More Loot bags, with 250,000 more available per year. They are free to claim.",
  whatToDo: [
    {
      content: "Mint an mLoot Bag",
      url: "https://etherscan.io/address/0x1dfe7ca09e99d10835bf73044a23b73fc20623df#writeContract"
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
  image: "/mlootheader.svg"
};

const sLoot: Project = {
  name: "Synthetic Loot",
  description:
    "Loot bags for everyone, tied to your Ethereum address. There are 2^256 sLoot bags.",
  whatToDo: [
    {
      content: "View your sLoot",
      url: 'https://loot.stephancill.co.za/#/'
    },
    // {
    //   content: "View your sLoot",
    //   component: <SyntheticLoot />
    // }
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
  image: "/syntheticheader.svg"
};

const adventureGold: Project = {
  name: "Adventure Gold $AGLD",
  heading: "Get Adventure Gold $AGLD",
  description: "An open-source in-game currency for the Lootverse.",
  whatToDo: [
    {
      content: "Trade on Uniswap",
      url: "https://uniswap.org/"
    }
  ],
  contract: {
    content: "0x32353a6c91143bfd6c7d363b546e62a9a2489a20",
    url: "https://etherscan.io/"
  },
  image: "https://images.pexels.com/photos/47047/gold-ingots-golden-treasure-47047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
};

const realms: Project = {
  name: "Realms",
  heading: "Settle a Realm",
  description: "8000 Procedurally generated Realms for Adventurers to explore. 16 orders rule 500 Realms each. Prepare for the wars to come.",
  whatToDo: [
    {
      content: "Trade",
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
  image: "https://storage.opensea.io/files/2468d5c3fc290400d053a68e149c9d1c.svg"
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
  name: "Genesis Project",
  heading: "Distil mana with your Loot bag.",
  description: "Genesis Mana act like Mint Passes to summon Genesis Adventurers. Collect a perfect set of 8 items, one of each inventory type and all of the same Order, and you (or a team) will be able to travel through time to resurrect a Genesis Adventurer and receive its “Genesis Loot” bag. ",
  whatToDo: [
    {
      content: "Distill Genesis Mana",
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
  heading: "Mint a Loot Character",
  description: "Loot Characters is the first collection designed to visualize the Loot Adventurer Gear. Associative NFT, forever tied to the Loot bag from which it was minted.",
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
  mintPrice: {
    mint: 0.2
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
  },
  image: "/exchangeLogo2.svg"
};
const lootMart: Project = {
  name: "Unbundle Your Bag",
  description: "Unbundle your Loot Bags into individual Lootmart items that you can trade and use to upgrade your Adventurer in the Loot universe.",
  whatToDo: [
    {
      content: "Unbundle",
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
  image: "https://lh3.googleusercontent.com/_D435IWZD8wPdDrR-zUbsbifnUgp-T-XOQrfS9bPs1okOSUTqXpH3zS8I8Yl-Djynx7aEbT9gY7IJ1DUzYAznzKHBDMGCJbOlWPr=w600",
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
  },
  image: "https://www.coywolf.news/wp-content/uploads/2021/05/nft.webp"
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
  },
  image: "/Logomark-White.png"
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
  neededProject: realms,
  image: "https://storage.opensea.io/files/2468d5c3fc290400d053a68e149c9d1c.svg",
  contract: {
    content: "0x7afe30cb3e53dba6801aa0ea647a0ecea7cbe18d"
  },
};



const genesisAdventurer: Project = {
  name: "Genesis Loot",
  description: "The 2,540 bags of Genesis Loot were carried by the original 'Genesis Adventurers.' Through teamwork and collaboration, players resurrect Genesis Adventurers to protect and champion their ancestral Orders.",
  whatToDo: [
    {
      content: "Resurrect a Genesis Adventurer",
      url: "https://genesisproject.notion.site/"
    },
    {
      content: "Trade on OS",
      url: "https://opensea.io/collection/genesisadventurer"
    },
  ],
  website: {
    url: "https://genesisproject.xyz/"
  },
  contract: {
    content: "0x8db687aceb92c66f013e1d614137238cc698fedb"
  },
  twitter: {
    url: "https://twitter.com/genesisloot"
  },
  discord: {
    url: "https://discord.gg/YUYyPSuwfU"
  },
  opensea: {
    url: "https://opensea.io/collection/genesisadventurer"
  },
  github: {
    url: "https://github.com/genesisproject4loot/genesisadventurer"
  },
  image: "/lootheader.svg",
  neededProject: genesisMana,
  mintPrice: {
    mint: 0.25
  }
};
const lootMartAssemble: Project = {
  name: "Equip a Warrior (Coming Soon)",
  description: "Re-bundle your items into bags in order to equip your warrior.",
  whatToDo: [
    {
      content: "Equip Your Warrior",
      url: "https://www.lootmart.xyz/"
    },
  ],
  website: {
    url: "https://www.lootmart.xyz/"
  },
  contract: {
    content: "0x71355f4a94f46ee32eb443ad2bde2dec0470f949",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/lootmart_xyz"
  },
  discord: {
    url: "https://discord.gg/w8txv8bvWd" // TODO: not yet public
  },
  image: "https://lh3.googleusercontent.com/_D435IWZD8wPdDrR-zUbsbifnUgp-T-XOQrfS9bPs1okOSUTqXpH3zS8I8Yl-Djynx7aEbT9gY7IJ1DUzYAznzKHBDMGCJbOlWPr=w600",
  neededProject: loot
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
  genesisAdventurer,
  lootMartAssemble
};
