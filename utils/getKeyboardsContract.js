import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0x1251688637b89428a8aACE50f9Ba7775F6Bd550b';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}