import Web3 from 'web3'

import erc721 from '../contracts/deployments/evmos/WaveData.json';
const sleep = milliseconds => {
	return new Promise(resolve => setTimeout(resolve, milliseconds))
}

export default async function ERC721Singleton(signer) {
	let web3;
	await sleep(500)
	web3 = new Web3(window.ethereum);
  
	// create an instance of the KeyManager
	const myKM = new web3.eth.Contract(erc721.abi, erc721.address).methods
  
	return myKM
  }
  