require("@nomiclabs/hardhat-waffle");

const fs = require('fs')
const privateKey = "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
//fs.readFileSync(".secret").toString().trim() || "01234567890123456789"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: "https://rpc-mumbai.matic.today",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}