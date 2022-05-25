import {HardhatRuntimeEnvironment} from 'hardhat/types';
import { ethers }  from "ethers";
import { starknet } from "hardhat";


import { task } from "hardhat/config";

export default async () => { 

  task( 'accounts', 'Prints the list of accounts',
    async (_taskArgs, hre: HardhatRuntimeEnvironment) => {
      const accounts: ethers.Signer[] = await hre.ethers.getSigners();


      for (const account of accounts) {
        console.log(await account.getAddress());
      }
      // const account = await starknet.getAccountFromAddress(accountAddress, process.env.PRIVATE_KEY, "OpenZeppelin");

  })
}