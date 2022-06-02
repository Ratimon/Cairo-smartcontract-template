import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';

import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-web3";
import 'hardhat-deploy-ethers';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import "hardhat-contract-sizer";
import 'hardhat-deploy';
import "solidity-coverage"
import 'hardhat-tracer';
import "hardhat-log-remover";
import "hardhat-storage-layout";
import "@tenderly/hardhat-tenderly";
import "@shardlabs/starknet-hardhat-plugin";


import tasks from './tasks'
for (const tsk of tasks) { tsk() }


const ETHERSCAN_KEY = process.env.ETHERSCANKEY;

const config: HardhatUserConfig = {


  solidity: {

    compilers: [
      {
        version: "0.5.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        }
      },
    ],


  },

  starknet: {
    dockerizedVersion: "0.8.1", // alternatively choose one of the two venv options below
    // uses (my-venv) defined by `python -m venv path/to/my-venv`
    // venv: "path/to/my-venv",

    // uses the currently active Python environment (hopefully with available Starknet commands!)
    // venv: "active",
    network: "alpha",
    wallets: {
      OpenZeppelin: {
        accountName: "OpenZeppelin",
        modulePath: "starkware.starknet.wallets.open_zeppelin.OpenZeppelinAccount",
        accountPath: "~/.starknet_accounts"
      },
      AnotherWallet: {
        accountName: "AnotherOpenZeppelin",
        modulePath: "starkware.starknet.wallets.open_zeppelin.OpenZeppelinAccount",
        accountPath: "~/.starknet_accounts"
      }
    }
  },
  namedAccounts: {
    deployer: 0,
    dev: 1,
    buyer: 2,
    user: 3,


    zero: "0x0000000000000000000000000000000000000000",


  },

  networks: {
    devnet: {
      url: "http://127.0.0.1:5050"
    },
    integratedDevnet: {
      url: "http://127.0.0.1:5050",
      // venv: "active",
      // dockerizedVersion: "0.2.0"
    }

  },

  // cairo: {
  //   // Version of the plugin which is execute on the docker
  //   version: "0.7.0"
  // },


  external: process.env.HARDHAT_FORK
  ? {
      deployments: {
        // process.env.HARDHAT_FORK will specify the network that the fork is made from.
        // these lines allow it to fetch the deployments from the network being forked from both for node and deploy task
        hardhat: ['deployments/' + process.env.HARDHAT_FORK],
        localhost: ['deployments/' + process.env.HARDHAT_FORK],
      },
    }
  : undefined,

  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_KEY 
  },


  paths: {
    sources: './contracts',
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
    deploy: './deploy',
    deployments: './deployments',
    imports: './imports',
    // // Where are our contracts: ./contracts
    // starknetSources: __dirname + "/contracts",
    // // Where are our artifacts (build contract): ./stark-artifacts, not use repository "artifacts" which is reserved by hardhat to solidity
    // starknetArtifacts: __dirname + "/stark-artifacts",
  },

  typechain: {
    outDir: 'typechain',
    target: 'ethers-v5',
  },

  mocha: {
    timeout: 300000,
    // starknetNetwork: "starknetdevelop"
  },
  
  
  
};

export default config;