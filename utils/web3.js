let web3;

if (typeof window !== "undefined") {
  if (window.ethereum) {
    web3 = new window.Web3(window.ethereum);
  } else if (window.Web3) {
    web3 = new window.Web3(new window.Web3.providers.HttpProvider("https://mainnet.base.org"));
  } else {
    console.error("Web3.js is not loaded. Make sure it is included in index.html.");
  }
}

export default web3;
