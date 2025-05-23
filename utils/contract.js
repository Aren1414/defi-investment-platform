import web3 from "./web3";

const contractAddress = "0xb065306DEB0DC132935FC225B3F2ACD66CA27F9C";
const contractABI = [
  {
    "inputs": [],
    "name": "invest",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{"internalType": "uint256", "name": "_amount", "type": "uint256"}],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getInvestments",
    "outputs": [{"internalType": "struct InvestmentContract.Investment[]", "name": "", "type": "tuple[]"}],
    "stateMutability": "view",
    "type": "function"
  }
];

const investmentContract = new web3.eth.Contract(contractABI, contractAddress);

export default investmentContract;
