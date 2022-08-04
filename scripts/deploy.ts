import { ethers } from "hardhat";
import { Secret, Secret__factory } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
var BigNumber = require("big-number");

let owner: SignerWithAddress;
let secret: Secret;

async function main() {
  [owner] = await ethers.getSigners();

  secret = await new Secret__factory(owner).deploy("shubhamskatel");

  console.log(`Address: ${secret.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
//npx hardhat run --network testnet scripts/deploy.ts
