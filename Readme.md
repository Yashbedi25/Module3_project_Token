# Create and Mint Token

This Solidity program is simple to use for minting, transferring, and burning tokens .write a smart contract to create your own token on a local HardHat network. 
Once you have your contract, you should be able to use Remix to interact with it. 
From remix, the contract owner should be able to mint tokens to a provided address. Any user should be able to burn and transfer tokens.

## Description

This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. 
The contract has multiple functions for minting, transferring, and burning tokens. It this we use local hardhat network to first set up locally and 
then deploy it on remix.

## Getting Started

### Executing program

To run this program, You have to clone "  " this file.

Then Run the following Command on the different Terminal .

The Commands are:
1. npx hardhat node
2. npx hardhat run ./scripts/deploy.js --network localhost

You can use Remix, an online Solidity IDE. Go to the Remix website at https://remix.ethereum.org/.

Once you are on the Remix website, 
1. Change the environment to Dev -Hardhat.
2. Copy the code of .sol file and paste in remix (if not there).



```javascript
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract MyFirstToken {
    string public Token_name;
    string public Token_symbol;
    uint256 public TotalSupply;
    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    address public Token_owner;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);
    event Burn(address indexed from, uint256 value);
    event Mint(address indexed to, uint256 value);

    constructor(string memory _Entername, string memory _Entersymbol) {
        Token_name = _Entername;
        Token_symbol = _Entersymbol;
        TotalSupply = 0;
        Token_owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == Token_owner, "Only the contract owner can call this function");
        _;
    }

    function mint(address to, uint256 value) external onlyOwner {
        require(to != address(0), "Invalid recipient address");
        require(value > 0, "Invalid amount");

        TotalSupply += value;
        balanceOf[to] += value;

        emit Mint(to, value);
        emit Transfer(address(0), to, value);
    }

    function burn(uint256 value) external {
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        TotalSupply -= value;
        balanceOf[msg.sender] -= value;

        emit Burn(msg.sender, value);
        emit Transfer(msg.sender, address(0), value);
    }

    function transfer(address to, uint256 value) external returns (bool) {
        require(to != address(0), "Invalid recipient address");
        require(value > 0, "Invalid amount");
        require(balanceOf[msg.sender] >= value, "Insufficient balance");

        balanceOf[msg.sender] -= value;
        balanceOf[to] += value;

        emit Transfer(msg.sender, to, value);
        return true;
    }
}


```
3. Copy the Deployed to address and paste in At Address.
4. Now mint and transfer the token and burn them 


Once the contract is deployed, you can interact with it by calling the mint, burn, and transfer functions. 
Click on the "Token" contract in the left-hand sidebar, and then click on the 3  functions. 
Finally, click on the "transact" button to execute the function and retrieve the desire result.

## Authors

Yash Bedi 
[@YashBedi_25](https://twitter.com/Yash_Bedi25)


## License

This project is licensed under the MIT License - see the LICENSE.md file for details
