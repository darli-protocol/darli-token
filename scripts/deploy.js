const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());

    const Darli = await ethers.getContractFactory("DARLI");
    const darli = await Darli.deploy(deployer.address);

    await darli.deployed();

    console.log("DARLI deployed to:", darli.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
