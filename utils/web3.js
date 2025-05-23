let web3;

if (typeof window !== "undefined" && window.ethereum) {
  web3 = new window.Web3(window.ethereum);
} else {
  const provider = new window.Web3.providers.HttpProvider("https://mainnet.base.org");
  web3 = new window.Web3(provider);
}

export default web3;
