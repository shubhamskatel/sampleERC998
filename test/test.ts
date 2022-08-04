import { Test, Test__factory } from "../typechain";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";
import {
  mineBlocks,
  convertWithDecimal,
  customError,
} from "./utilities/utilities";
import { expect } from "chai";
import { sign, Signer } from "crypto";
import { userInfo } from "os";
import { LOADIPHLPAPI } from "dns";
import { hasUncaughtExceptionCaptureCallback } from "process";
import { CustomError } from "hardhat/internal/hardhat-network/stack-traces/model";
var BigNumber = require("big-number");

describe("Test", async () => {
  let owner: SignerWithAddress;
  let test: Test;

  beforeEach(async () => {
    [owner] = await ethers.getSigners();

    test = await new Test__factory(owner).deploy();
  });

  it("Double event testing", async () => {
    await expect(test.viewData(2, 5))
      .to.emit(test, "One")
      .withArgs(2)
      .to.emit(test, "Two")
      .withArgs(5);
  });
});
