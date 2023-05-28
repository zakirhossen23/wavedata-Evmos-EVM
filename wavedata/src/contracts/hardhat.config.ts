import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

module.exports = {
	//Specifing Evmos Testnet network for smart contract deploying
	networks: {
		evmos: {
			url: "https://eth.bd.evmos.dev:8545",
			accounts: [`fcd5e870c919104aa494cf850c4132baa99286a1f863b99888a1853908eaa92c`],
			chainId: 9000,
			gasPrice: 500000000
		},
	},
	//Specifing Solidity compiler version
	solidity: {
		compilers: [
			{
				version: "0.7.6"
			},
			{
				version: "0.8.6"
			}
		]
	},
	//Specifing Account to choose for deploying
	namedAccounts: {
		deployer: 0
	}
};
