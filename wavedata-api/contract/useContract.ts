
import erc721 from "./deployments/evmos/WaveData.json";
import {ethers} from "ethers";
import {Buffer} from "buffer";


export default async function useContract() {
	
	let contractInstance = {
		contract: null,
		signerAddress: null,		
	};
	// const Web3 = require('web3');
	let private_key = "fcd5e870c919104aa494cf850c4132baa99286a1f863b99888a1853908eaa92c";
	let provider_url = "https://eth.bd.evmos.dev:8545";
	const provider = new ethers.providers.JsonRpcProvider(provider_url);
	const signer = new ethers.Wallet(private_key,provider)
	const contract = new ethers.Contract(erc721.address, erc721.abi, signer)

	// const provider = new Web3.providers.HttpProvider(provider_url);
	// const web3 = new Web3(provider);

	// const signer = web3.eth.accounts.wallet.add(private_key); //Adding private key
	// const contract = new web3.eth.Contract(erc721.abi as any, erc721.address).methods;

	contractInstance.signerAddress = signer.address as any;
	contractInstance.contract = contract as any;
	return contractInstance;

}


export function base64DecodeUnicode(base64String) {
	return Buffer.from(base64String, "base64").toString('utf8');
}
