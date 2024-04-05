// token-aggregator.js

const { ethers } = require('ethers');

// Define your Ethereum provider (e.g., Infura, Alchemy, or your own node)
const providerUrl = 'YOUR_ETHEREUM_PROVIDER_URL';
const ethersProvider = new ethers.providers.JsonRpcProvider(providerUrl);

// Define the addresses and ABIs of the ERC20 tokens you want to track
const token1Address = '0xToken1Address';
const token1ABI = ['function balanceOf(address) view returns (uint256)'];
const token2Address = '0xToken2Address';
const token2ABI = ['function balanceOf(address) view returns (uint256)'];

// Create a Rootstock Testnet configuration (adjust as needed)
const multicallConfig = {
  31: {
    batchSize: 50, // Maximum number of calls to batch into a single JSON-RPC call
    timeWindow: 50, // Time each call is held in buffer waiting for subsequent calls before aggregation (in ms)
    contract: '0xb39d1Dea1bF91Aef02484F677925904b9d6936B4', // MultiCallUtils smart contract address
  },
};

// Wrap your ethers.js current provider with a Multicall provider
const multicallProvider = new ethers.providers.MulticallProvider(ethersProvider, multicallConfig[31]);

// Connect your token smart contracts to the Multicall provider
const token1 = new ethers.Contract(token1Address, token1ABI, multicallProvider);
const token2 = new ethers.Contract(token2Address, token2ABI, multicallProvider);

// Example aggregated call function
async function makeAggregatedCall(address) {
  const aggregatedCall = [
    multicallProvider.getBalance(address),
    token1.balanceOf(address),
    token2.balanceOf(address),
  ];

  const [rbtcBalance, balance1, balance2] = await Promise.all(aggregatedCall);

  console.log(`RBTC balance for ${address}: ${ethers.utils.formatEther(rbtcBalance)}`);
  console.log(`Token1 balance for ${address}: ${ethers.utils.formatUnits(balance1, 18)}`);
  console.log(`Token2 balance for ${address}: ${ethers.utils.formatUnits(balance2, 18)}`);
}

// Example usage
const userAddress = '0xUserAddress'; // Replace with the address you want to query
makeAggregatedCall(userAddress);
