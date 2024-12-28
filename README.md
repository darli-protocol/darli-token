# DARLI Token

![License](https://img.shields.io/badge/license-MIT-blue.svg)  
![Solidity](https://img.shields.io/badge/solidity-%5E0.8.22-lightgrey.svg)

The **DARLI Token** is the governance token of Darli protocol built with OpenZeppelin's secure contract library. It includes features like token minting, governance support with ERC20Votes, and timestamp-based CLOCK_MODE for compatibility with advanced blockchain applications.

---

## Features

- **ERC20 Standard**: Fully compatible with the ERC20 standard.
- **Governance Support**: Includes `ERC20Votes` for voting and governance.
- **Permit Functionality**: Gasless approvals via `ERC20Permit`.
- **Custom Clock Implementation**: Implements a timestamp-based `CLOCK_MODE`.
- **Minting by Owner**: Allows token minting by the contract owner.

---

## Requirements

- **Node.js**: v16 or higher
- **Hardhat**: v2.12.0 or higher
- **Solidity**: ^0.8.22
- **Dependencies**:  
  - [OpenZeppelin Contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)

---

## Getting Started

### Clone the Repository
```bash
git clone https://github.com/expandboard/darli-token.git

cd darli-token
```
### Install Dependencies
```bash
npm install
```
### Compile Contracts
```bash
npx hardhat compile
```
### Run Tests
```bash
npx hardhat test
```
### Deploy Contracts
```bash
npx hardhat run scripts/deploy.js --network <network-name>
```
### Verify Contracts
```bash
npx hardhat verify --network <network-name> <contract-address>

npx hardhat verify --network <network-name> <contract-address>
```

## Project structure

```
.
├── contracts
│   └── DARLI.sol
├── scripts
│   └── deploy.js
├── test
│   └── DARLI.test.js
├── hardhat.config.js
├── package.json
├── package-lock.json
├── README.md
└── LICENSE
```

## Contract Details

The `DARLI` token contract is implemented using Solidity and leverages OpenZeppelin's libraries for security and best practices.  The contract address will be outputted after running the deploy script.  Refer to the `contracts/` directory for the contract code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  npx hardhat verify --network <network-name> <contract-address>

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Contact

For any questions or inquiries, please contact support[at]darli.xyz