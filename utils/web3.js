import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && window.ethereum) {
  // We are in the browser and MetaMask is running
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server OR the user is not running MetaMask
  const provider = new Web3.providers.HttpProvider("https://mainnet.base.org");
  web3 = new Web3(provider);
}

export default web3;
