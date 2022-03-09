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
      content: "Trade on OpenSea",
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
  name: "More Loot",
  description:
    "1.5 million bags of More Loot (or \"mLoot\"), with ~250,000 more available per year. They are free to claim.",
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
    "Loot bags for everyone, free and tied to your Ethereum address. There are 2^256 Synthloot bags.",
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

const dungeons: Project = {
  name: "Dungeons",
  heading: "Explore Dungeons",
  description: "12000 Procedurally generated Dungeons waiting for your Adventurer to explore.  Generated entirely on-chain.",
  whatToDo: [
    {
      content: "Generate",
      url: "https://dungeonsnft.io"
    },
    {
      content: "Trade",
      url: "https://opensea.io/collection/dungeonsnft"
    }
  ],
  website: {
    url: "https://dungeonsnft.io"
  },
  contract: {
    content: "0x665d9259F18B29a4ca38e9A4768cEDee1429d116"
  },
  twitter: {
    url: "https://twitter.com/dungeons_nft"
  },
  discord: {
    url: "http://discord.gg/8CDEveXu4B"
  },
  image: "https://dungeonsnft.io/Sample1.jpg",
  neededProject: loot,
  mintPrice: {
    mint: 0.0
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
    }
  ],
  twitter: {
    url: "https://twitter.com/lootgraph"
  },
  discord: {
    url: "https://discord.gg/MNJ4T8w5JY"
  },
  opensea: {
    url: "https://opensea.io/collection/lootproject"
  }
};

const genesisMana: Project = {
  name: "Genesis Project",
  heading: "Distill Genesis Mana with your Loot bag.",
  description: "All bags with items 'of' Orders have free Genesis Mana inside them. Collect a perfect set of 8 Genesis Mana in order to summon the spirit of a Genesis Adventurer and receive its “Genesis Loot” bag. ",
  whatToDo: [
    {
      content: "Distill Genesis Mana",
      url: "http://genesisproject.xyz/"
    },
    {
      content: "Trade",
      url: "https://opensea.io/collection/genesis-mana"
    }
  ],
  contract: {
    content: "0xf4b6040a4b1b30f1d1691699a8f3bf957b03e463"
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

const lootRings: Project = {
  name: "Rings (for Loot)",
  description: "Rings (for Loot) is the first and largest 3D interpretation of an entire category in Loot. Adventurers, builders, and artists are encouraged to reference Rings (for Loot) to further expand on the imagination of Loot.",
  whatToDo: [
    {
      content: "Mint",
      url: "https://rings.market/"
    }
  ],
  website: {
    url: "https://rings.market/"
  },
  contract: {
    content: "0x73c5013Fa9701425be4a436cA0CeC1C0898e6F14",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/RingsforLoot"
  },
  image: "https://rings.market/images/rings-stacked.jpg",
  neededProject: loot
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
  name: "OpenSea",
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
      content: "Stake (coming soon)",
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
  description: "A collaborative, community project to summon the spirits of the original 2,540 Genesis Adventurers.",
  whatToDo: [
    {
      content: "Build a Genesis Loot Bag",
      url: "http://genesisproject.xyz/"
    },
    {
      content: "Enter the Genesis Portal",
      url: "https://portal.genesisproject.xyz/"
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
  image: "/genesis.svg",
  neededProject: genesisMana,
  mintPrice: {
    mint: 0.25
  }
};
const lootMartAssemble: Project = {
  name: "Equip a Warrior (coming soon)",
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
const lootpunk: Project = {
  name: "Lootpunk",
  description: "Lootpunk is the young and trendy profile picture for you to show off your status as a Loot investor. There are 8000 Lootpunks, and each one is uniquely designed based on the rarity of your own Loot bag.",
  whatToDo: [
    {
      content: "Claim now",
      url: "https://lootpunk.org/"
    },
  ],
  website: {
    url: "https://lootpunk.org/"
  },
  contract: {
    content: "0xC62934146bfcb6F3dDE478cbAb1E64a25fcC32eC",
    url: "https://etherscan.io/"
  },
  twitter: {
    url: "https://twitter.com/LootpunkProject"
  },
  discord: {
    url: "https://discord.gg/VNJztprP"
  },
  mintPrice: {
    mint: 0.01
  },
  neededProject: loot,
  image: 'https://api.lootpunk.org/randomimage'
};
const lootSwag: Project = {
  name: "Get a Loot Swag Avatar",
  description: "Customize loot avatars through skins.",
  whatToDo: [
    {
      content: "Customize Your Avatar",
      url: "https://lootswag.io/"
    },
  ],
  website: {
    url: "https://lootswag.io/"
  },
  twitter: {
    url: "https://twitter.com/LootSwag"
  },
  discord: {
    url: "https://discord.gg/QEs6BArR" // TODO: not yet public
  },
  image: "/lootswag.png",
  neededProject: loot
};

const hyperLoot: Project = {
  name: "Visualize Your Adventurer",
  description: "HyperLoot is a collection of unique characters generated based on the items from your Loot and mLoot bags. Each HyperLoot grants an access to the Hyperverse.",
  whatToDo: [
    {
      content: "Coming soon",
      url: "https://twitter.com/hyperloot_"
    },
  ],
  twitter: {
    url: "https://twitter.com/hyperloot_"
  },
  discord: {
    url: "https://discord.gg/MAqUNNVVcT" // TODO: not yet public
  },
  image: "/hyper.jpg",
  neededProject: loot,
  website: {
    url: "https://hyperlootproject.com/"
  }
};
const LootExplorers: Project = {
  name: "Mint a Loot Explorer",
  description: "Explorer characters with their own distinct classes, equipped with loot which are generated based off the first 8000 genesis bags of loot.",
  whatToDo: [
    {
      content: "Minting Now",
      url: "https://lootexplorers.quest"
    },
  ],
  twitter: {
    url: "https://twitter.com/LootExplorers"
  },
  discord: {
    url: "https://discord.gg/tkKrY8kYJ4" // TODO: not yet public
  },
  website: {
    url: "https://lootexplorers.quest"
  },
  mintPrice: {
    mint: 0.04
  },
  image: "/lootExplorers.jpeg",
  neededProject: loot
};
const lootAlliance: Project = {
  name: "Loot Alliance",
  description: "A collective of builders, designers, and geeks working together as representatives of the wider Lootverse community to shepherd the ongoing Loot website, in order to create a strong foundation for players and builders.",
  discord: {
    url: "https://discord.gg/sF2pGMpps6" // TODO: not yet public
  },
};
const divineDao: Project = {
  name: "Divine DAO",
  description: "A lore-driven DAO dedicated to communal world-building around Loot.",
  whatToDo: [
    {
      content: "Learn more",
      url: "https://divinedao.medium.com/introducing-the-divine-city-460596889bfc"
    },
  ],
  twitter: {
    url: "https://twitter.com/divine_dao"
  },
  discord: {
    url: "https://discord.gg/ucG9gD5hcq" // TODO: not yet public
  },

};
const fLoot: Project = {
  name: "fLoot",
  description: "Loot derivative project including $FLOOT tokens and Familiars NFTs.",
  whatToDo: [
    {
      content: "Trade",
      url: "https://opensea.io/collection/loot-familiars"
    },
  ],
  twitter: {
    url: "https://twitter.com/FlootFamiliars"
  },
  discord: {
    url: "https://discord.gg/AzHm6AYFRv" // TODO: not yet public
  },
};

const banners: Project = {
  name: "Banners (for Adventures)",
  description: "Banners is the society and politics layer for Loot.  In a world full of Adventurers, Banners represents everyone else in the Realms. Each of the 25,000 Banners has thousands of strengths, connections and family members.",
  whatToDo: [
      {
          content: "Mint",
          url: "https://bannersnft.com/"
      }
  ],
  image: "/banners.png",
  website: {
      url: "https://bannersnft.com/"
  },
  twitter: {
      url: "https://twitter.com/BannersNft"
  },
  discord: {
      url: "https://discord.gg/MYxGU7rjY4"
  },
  github: {
      url: "https://github.com/farque65/BannersNFT"
  }
};

const cryptsandcaverns: Project = {
  name: "Crypts and Caverns",
  description: "On-chain dungeon maps that provide a sense of place for the lootverse. Each dungeon map contains floors, walls, doors, and points of interest. Dungeon maps can be used by text, 2D, or 3D games in the Lootverse.",
  whatToDo: [
      {
          content: "Trade on OS",
          url: "https://opensea.io/collection/crypts-and-caverns"
      }
  ],
  image: "/cryptsandcaverns.png",
  website: {
      url: "https://threepwave.com/cryptsandcaverns/"
  },
  twitter: {
      url: "https://twitter.com/cryptsncaverns"
  },
  discord: {
      url: "https://discord.com/invite/vXX84QjR7F"
  },
  github: {
      url: "https://github.com/threepwave/cryptsandcaverns"
  }
};

const theRift: Project = {
  name: "Level Up",
  description: "The Rift is leveling infrastructure for Loot, more Loot, and Genesis Adventurers. Playing across the Lootverse will earn your bag XP, and as you level up you'll be able to perform more powerful actions. Loot builders that integrate with Rift can use bag levels, and reward XP to users.",
  whatToDo: [
      {
          content: "Earn XP",
          url: "https://the-rift.notion.site/Ways-to-Earn-XP-9b304cd87e7a49db99903de9ee682635"
      },
      {
        content: "Build with Rift",
        url: "https://the-rift.notion.site/Rift-for-Builders-a6adaf6815434e638da01bc278306e75"
    },
  ],
  image: "/therift.png",
  website: {
      url: "https://rift.live/"
  },
  twitter: {
      url: "https://twitter.com/LootRift"
  },
  discord: {
      url: "https://discord.gg/mtP8Qaa5py"
  }
};

const theCrypt: Project = {
  name: "The Crypt",
  description: "Releasing chapter by chapter, the Crypt is a series of raiding games centred around the discovery of the lost Relics. It has been said that the unearthing of these Relics may lead to a cataclysm of unimaginable proportions… ",
  whatToDo: [
      {
          content: "Play",
          url: "https://thecrypt.game/"
      }
  ],
  image: "/thecrypt.png",
  website: {
      url: "https://thecrypt.game/"
  },
  twitter: {
      url: "https://twitter.com/TheCryptGame"
  },
  discord: {
      url: "https://discord.com/invite/aMwetFaz6F"
  }
};

const aQuest: Project = {
  name: "a quest",
  description: "This is a decentralized game of grand cooperation, puzzle solving, and difficult decisions. It unfolds in several phases, involving key objectives and a final raid. Along the way, players will earn trophies and make new friends in the form of NFTs.",
  whatToDo: [
      {
          content: "Learn More",
          url: "https://a.quest/"
      }
  ],
  image: "/aquest.png",
  website: {
      url: "https://a.quest/"
  }
};

const atlas: Project = {
  name: "Atlas",
  description: "Explore 50,000 points of interest across the Realms, including OG Loot, Genesis Loot, Crypts & Caverns. Through the Atlas, read and write lore of the past, present and future of the Lootverse.",
  whatToDo: [
      {
          content: "Explore",
          url: "https://atlas.bibliothecadao.xyz/"
      }
  ],
  image: "/atlas.png",
  website: {
      url: "https://atlas.bibliothecadao.xyz/"
  },
  twitter: {
      url: "https://twitter.com/lootrealms"
  },
  discord: {
      url: "https://discord.gg/2rUVck4ZPr"
  }
};

export {
  loot,
  bibliotheca,
  genesisMana,
  lootCharacter,
  lootExchange,
  lootMart,
  lootRings,
  lootWatcher,
  mLoot,
  NFTx,
  openSea,
  realms,
  dungeons,
  stakeARealm,
  sLoot,
  genesisAdventurer,
  lootMartAssemble,
  LootExplorers,
  hyperLoot,
  lootSwag,
  lootpunk,
  lootAlliance,
  divineDao,
  fLoot,
  banners,
  cryptsandcaverns,
  theRift,
  theCrypt,
  aQuest,
  atlas
};
