const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const Token_name = "YashToken";
  const Token_symbol = "Circle";

  const MyFirstToken = await hre.ethers.getContractFactory("MyFirstToken");
  const myFirstToken = await MyFirstToken.deploy(Token_name, Token_symbol);

  await myFirstToken.waitForDeployment();

  console.log("Token deployed to:", myFirstToken.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
