
import 'dotenv/config';

import hardhat from "hardhat";
import { starknet } from "hardhat";
import { StarknetContract, StarknetContractFactory, Account } from "hardhat/types/runtime";


async function main() {


    const PKEY = process.env.PKEY;


    // let account: Account | any = await starknet.deployAccount("OpenZeppelin");
    const account : Account | any = await starknet.deployAccount("OpenZeppelin", {
        privateKey: PKEY
      });

    
    let accountAddress = account.address;
    let privateKey: string = account.privateKey;
    let publicKey: string = account.publicKey;

    console.log("Deployed account at address:", accountAddress);
    console.log("PKEY:", PKEY);
    console.log("Private and public key:", privateKey, publicKey);

    
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });