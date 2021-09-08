require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const {mnemonic, alchemyApiKeyStage, alchemyApiKeyProd, gas, gasPrice} = require('./secrets.json')

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337
    },
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKeyStage}`,
      accounts: { mnemonic: mnemonic }
    },
    live: {
      url: `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKeyProd}`,
      accounts: { mnemonic: mnemonic },
      gas: gas, // Gas limit used for deploys (Without my additional code: 3,827,859)
      gasPrice: gasPrice, // Can probably afford at 60000000000
    }// 250000000000000000 = 4134452 * x
  }
};
