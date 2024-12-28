const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DARLI Contract", function () {
    let Darli, darli, owner, addr1, addr2;

    beforeEach(async function () {
        [owner, addr1, addr2] = await ethers.getSigners();
        const DarliContract = await ethers.getContractFactory("DARLI");
        darli = await DarliContract.deploy(owner.address);
        await darli.waitForDeployment();
    });

    it("Should deploy with correct initial values", async function () {
        expect(await darli.name()).to.equal("DARLI");
        expect(await darli.symbol()).to.equal("DRL");
        expect(await darli.owner()).to.equal(owner.address);
    });

    it("Should allow owner to mint tokens", async function () {
        await darli.mint(addr1.address, ethers.parseEther("1000"));
        expect(await darli.balanceOf(addr1.address)).to.equal(ethers.parseEther("1000"));
    });

    it("Should prevent non-owner from minting tokens", async function () {
        await expect(
            darli.connect(addr1).mint(addr1.address, ethers.parseEther("1000"))
        ).to.be.revertedWithCustomError(
            darli,
            "OwnableUnauthorizedAccount"
        );
    });

    it("Should update balances on transfer", async function () {
        await darli.mint(owner.address, ethers.parseEther("1000"));
        await darli.transfer(addr1.address, ethers.parseEther("500"));
        expect(await darli.balanceOf(owner.address)).to.equal(ethers.parseEther("500"));
        expect(await darli.balanceOf(addr1.address)).to.equal(ethers.parseEther("500"));
    });

    it("Should return correct clock and CLOCK_MODE values", async function () {
        expect(await darli.clock()).to.be.closeTo(Math.floor(Date.now() / 1000), 5); // Allow small time diff
        expect(await darli.CLOCK_MODE()).to.equal("mode=timestamp");
    });
});
