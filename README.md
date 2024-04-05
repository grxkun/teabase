
---

# Token Aggregator

The **Token Aggregator** is a JavaScript program that allows you to retrieve the allocation of multiple smart contract holders at once on the Ethereum Virtual Machine (EVM). It aggregates balance information for RBTC (Rootstock Bitcoin) and two ERC20 tokens.

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/grxkun/teabase.git
   cd teabase
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configuration:**
   - Set your Ethereum provider URL (e.g., Infura, Alchemy, or your own node) in `token-aggregator.js`.
   - Define the addresses and ABIs of the ERC20 tokens you want to track.

4. **Run the Program:**
   ```bash
   node token-aggregator.js
   ```

## Usage

1. Replace the placeholders (`YOUR_ETHEREUM_PROVIDER_URL`, `0xToken1Address`, `0xToken2Address`, and `0xUserAddress`) with actual values relevant to your use case.
2. Execute the program to see aggregated balances for the specified user address.

## Example Output

```
RBTC balance for 0xUserAddress: 0.123 RBTC
Token1 balance for 0xUserAddress: 456.789 Token1
Token2 balance for 0xUserAddress: 987.654 Token2
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
