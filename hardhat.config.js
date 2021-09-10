require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const {privateKey, alchemyApiKeyStage, alchemyApiKeyProd, gas, gasPrice} = require('./secrets.json')

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  // solidity: "0.8.4",
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
    },
  },
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKeyStage}`,
      // accounts: { mnemonic: mnemonic }
      accounts: [privateKey]
    },
    live: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKeyProd}`,
      accounts: [privateKey],
      gas: gas,
      gasPrice: gasPrice, 
    }
  }
};

// 9b3d81afc092e9fbfe6049c5fb491cc12242296049d2e332fcee4629e8a91953
