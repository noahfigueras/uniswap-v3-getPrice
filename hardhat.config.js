/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
    solidity: "0.8.0",
    networks: {
        hardhat: {
            forking: {
                url: process.env.ALCHEMY_URL,
            },
            gas: "auto"
        },
    }
};
