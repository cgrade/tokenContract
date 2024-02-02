const { ethers } = require('hardhat');

async function main() {

  const tokenAddress = "0xd22d64e4243b3c994e59F4dB5a646a76623205CC";

  const eligbleWallets = ["0xBe9D06FD6923556F8E4959F7675Fb0De350e0f1f", "0x35a3611aF402F7121D68C6448D7fd5332a970d89", ];

//   const [deployer] = await ethers.getSigner();
  console.log("Airdroping tokens.......");

  const Token = await ethers.getContractFactory("Bucr");
  const token = await Token.attach(tokenAddress);

  // Looping through the eligible wallet's lists
  for(let i = 0; i < eligbleWallets.length; i++){
    // Airdrop Amount
    let amount = ethers.parseEther("200");

    // Send tokens to addresses
    const tx = await token.transfer(eligbleWallets[i], amount);
    await tx.wait();

    console.log(`Airdroping ${amount.toString()} tokens to ${eligbleWallets[i]}`);
    console.log(tx);

  }

  console.log('Airdrop complete');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});