require("@nomiclabs/hardhat-waffle");
//require("@nomiclabs/hardhat-etherscan");


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/gIzGvliKjm47o34JSVUVO_tN9Y3hBX9E`,
    },
  },
};
