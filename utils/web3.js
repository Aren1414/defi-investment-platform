import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  console.warn("MetaMask or Web3 provider is not available.");
  web3 = null;
}

export default web3;
