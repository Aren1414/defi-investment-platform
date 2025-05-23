import Web3 from "https://cdnjs.cloudflare.com/ajax/libs/web3/1.10.0/web3.min.js";

let web3;

if (typeof window !== "undefined" && window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider("https://mainnet.base.org");
  web3 = new Web3(provider);
}

export default web3;
