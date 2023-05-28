import { useState, useEffect } from 'react';
import {ethers} from "ethers";
import ERC721Singleton from "./ERC721Singleton";

export default function useContract() {
	const fetchData = async () => {
		await sleep(200);
		try {
			const provider = new ethers.providers.Web3Provider(window.ethereum);
				const signer = provider.getSigner();
				const contract = {contract: null, signerAddress: null, sendTransaction: sendTransaction, fD: fetchData};

				contract.contract = await ERC721Singleton(signer);

				contract.signerAddress = await signer.getAddress();
				window.contract = contract.contract;
				window.sendTransaction = sendTransaction;
				setContractInstance(contract);
		} catch (error) {
			console.error(error);
		}
	};

	const [contractInstance, setContractInstance] = useState({
		contract: null,
		signerAddress: null,
		fD: fetchData,
		sendTransaction: sendTransaction
	});
	
	
	useEffect(() => {
		fetchData();
	}, []);

	return contractInstance;
}
async function sendTransaction(methodWithSignature) {
	await methodWithSignature.send({
		from: window.ethereum.selectedAddress,
		gasPrice: 10_000_000_000
	});
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
 }